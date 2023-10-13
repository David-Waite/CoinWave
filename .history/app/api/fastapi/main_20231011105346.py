from passlib.context import CryptContext
from datetime import datetime, timedelta
from jose import jwt
from fastapi import FastAPI, HTTPException, Depends, Query, status
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware
from typing import List, Union, Optional
from fastapi.security import OAuth2PasswordBearer
from typing_extensions import Annotated
import mysql.connector
from jose import jwt, JWTError
from web3 import Web3
from solcx import compile_standard, install_solc
import os
import json

app = FastAPI()

origins = ["*"]

# MySQL database connection configuration
db_config = {
    "host": "localhost",
    "user": "root",
    "password": "password",
    "database": "Coinwave"
}


app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/slideshow/")
def get_slideshow():
    try:

        # Establish a database connection
        connection = mysql.connector.connect(**db_config)

        # Create a cursor to execute SQL queries
        cursor = connection.cursor()

        # Define the SQL query to retrieve data
        query = "SELECT * FROM slideshow"

        # Execute the SQL query
        cursor.execute(query)

        # Fetch all the rows
        result = cursor.fetchall()

        # Convert the result to a list of dictionaries
        allProducts = [dict(zip(cursor.column_names, row)) for row in result]

        # Close the cursor and the database connection
        cursor.close()
        connection.close()

        return allProducts

    except mysql.connector.Error as err:
        return {"error": f"Error: {err}"}


@app.get("/products/")
def get_products():
    try:

        # Establish a database connection
        connection = mysql.connector.connect(**db_config)

        # Create a cursor to execute SQL queries
        cursor = connection.cursor()

        # Define the SQL query to retrieve data
        query = "SELECT * FROM products"

        # Execute the SQL query
        cursor.execute(query)

        # Fetch all the rows
        result = cursor.fetchall()

        # Convert the result to a list of dictionaries
        allProducts = [dict(zip(cursor.column_names, row)) for row in result]

        # Close the cursor and the database connection
        cursor.close()
        connection.close()

        return allProducts

    except mysql.connector.Error as err:
        return {"error": f"Error: {err}"}


@app.get("/product/")
async def getProduct(id: Annotated[str, Query()] = None):
    try:

        # Establish a database connection
        connection = mysql.connector.connect(**db_config)

        # Create a cursor to execute SQL queries
        cursor = connection.cursor()

        # Define the SQL query to retrieve data (e.g., all students)
        query = f"SELECT * FROM products WHERE id = {id}"

        # Execute the SQL query
        cursor.execute(query)

        # Fetch all the rows
        result = cursor.fetchall()

        # Convert the result to a list of dictionaries
        product = [dict(zip(cursor.column_names, row)) for row in result]

        # Close the cursor and the database connection
        cursor.close()
        connection.close()

        return product

    except mysql.connector.Error as err:
        return {"error": f"Error: {err}"}


@app.post("/addproduct/")
async def create_item(item: dict):

    # Establish a database connection
    connection = mysql.connector.connect(**db_config)

    # Create a cursor to execute SQL queries
    cursor = connection.cursor()

    sql = "INSERT INTO products (id, productName, description, category, imageURL, altText, author, price) VALUES (%s, %s, %s, %s, %s, %s, %s, %s)"
    val = (item['id'], item['productName'], item["description"],
           item["category"], item["imageURL"], item["altText"], item["author"], item["price"])
    # Prepare SQL query

    # Execute the SQL command
    cursor.execute(sql, val)

    # Commit your changes in the database
    connection.commit()

    return {"item": item, "id": cursor.lastrowid}


@app.post("/addproduct/")
async def create_item(item: dict):

    # Establish a database connection
    connection = mysql.connector.connect(**db_config)

    # Create a cursor to execute SQL queries
    cursor = connection.cursor()

    sql = "INSERT INTO products (id, productName, description, category, imageURL, altText, author, price) VALUES (%s, %s, %s, %s, %s, %s, %s, %s)"
    val = (item['id'], item['productName'], item["description"],
           item["category"], item["imageURL"], item["altText"], item["author"], item["price"])
    # Prepare SQL query

    # Execute the SQL command
    cursor.execute(sql, val)

    # Commit your changes in the database
    connection.commit()

    return {"item": item, "id": cursor.lastrowid}

pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")

SECRET_KEY = "coinWaveDummyKey"
ALGORITHM = "HS256"
ACCESS_TOKEN_EXPIRE_MINUTES = 30


class Data(BaseModel):
    email: str
    password: str
    firstName: str
    lastName: str


class User(BaseModel):
    email: str
    hashed_password: str
    firstName: str
    lastName: str


def fake_save_user(email: str, password: str, firstName: str, lastName: str):

    hashed_password = pwd_context.hash(password)
    user = User(email=email, hashed_password=hashed_password,
                firstName=firstName, lastName=lastName)

    # Save the user to the database here
    connection = mysql.connector.connect(**db_config)

    # Create a cursor to execute SQL queries
    cursor = connection.cursor()

    sql = "INSERT INTO users (email, password, firstName, lastName) VALUES (%s, %s, %s, %s)"
    val = (email, hashed_password, firstName, lastName)
    # Prepare SQL query

    # Execute the SQL command
    cursor.execute(sql, val)

    # Commit your changes in the database
    connection.commit()
    return user


@app.post("/signup/")
async def signup(user: Data):
    user_saved = fake_save_user(
        user.email, user.password, user.firstName, user.lastName)
    # Return the registered user

    return user_saved


def create_access_token(data: dict):
    to_encode = data.copy()
    expire = datetime.utcnow() + timedelta(minutes=ACCESS_TOKEN_EXPIRE_MINUTES)
    to_encode.update({"exp": expire})
    encoded_jwt = jwt.encode(to_encode, SECRET_KEY, algorithm=ALGORITHM)
    return encoded_jwt


class UserIn(BaseModel):
    email: str
    password: str


def get_user(email: str):

    connection = mysql.connector.connect(**db_config)

    # Create a cursor to execute SQL queries
    cursor = connection.cursor()

    # Define the SQL query to retrieve data (e.g., all students)

    query = f"SELECT * FROM users WHERE email = '{email}'"

    # Execute the SQL query
    cursor.execute(query)

    # Fetch all the rows
    result = cursor.fetchall()

    # Convert the result to a list of dictionaries
    userDetails = [dict(zip(cursor.column_names, row)) for row in result]

    # Close the cursor and the database connection
    cursor.close()
    connection.close()

    return userDetails


@app.post("/login")
async def login(user: UserIn):

    # Establish a database connection
    userDetails = get_user(user.email)

    # Fetch the user from the database here
    # This is a placeholder and should be replaced with actual code
    user_from_db = User(email=userDetails[0]["email"],
                        hashed_password=userDetails[0]["password"], firstName=userDetails[0]["firstName"], lastName=userDetails[0]["lastName"])

    if not pwd_context.verify(user.password, user_from_db.hashed_password):
        return {"error": "Incorrect login details"}

    access_token = create_access_token(data={"sub": userDetails[0]["email"]})

    return {"access_token": access_token}


oauth2_scheme = OAuth2PasswordBearer(tokenUrl="token")


class TokenData(BaseModel):
    email: Optional[str] = None


async def get_current_user(token: str = Depends(oauth2_scheme)):
    credentials_exception = HTTPException(
        status_code=status.HTTP_401_UNAUTHORIZED,
        detail="Could not validate credentials",
        headers={"WWW-Authenticate": "Bearer"},
    )
    try:
        payload = jwt.decode(token, SECRET_KEY, algorithms=[ALGORITHM])
        email: str = payload.get("sub")
        if email is None:
            raise credentials_exception
        token_data = TokenData(email=email)
    except jwt.JWTError:
        raise credentials_exception
    # Your function to get a user from the database
    user = get_user(email=token_data.email)
    if user is None:
        raise credentials_exception
    return user


@app.get("/users/me/")
async def read_users_me(current_user: User = Depends(get_current_user)):
    return current_user


w3 = Web3(Web3.HTTPProvider("HTTP://127.0.0.1:7545"))
app = FastAPI()
chain_id = 1337

my_address = "0xbaf8B04308c71f4062dfE41ae58695b6B96CDd15"
private_key = "0x1274b58d401e80f5e2e21a48cba2579e74641c4ab223440765bbf5f160858c68"

# PURCHASE CONTRACT
with open(os.path.join("Purchase.sol"), "r") as file:
    contract_source = file.read()
install_solc("0.8.0")
compiled_sol = compile_standard(
    {
        "language": "Solidity",
        "sources": {"Purchase.sol": {"content": contract_source}},
        "settings": {
            "outputSelection": {
                "*": {"*": ["abi", "metadata", "evm.bytecode", "evm.sourceMap"]}
            }},
    },
    solc_version="0.8.0",
)
with open("compiled_code.json", "w") as file:
    json.dump(compiled_sol, file)

bytecode = compiled_sol["contracts"]["Purchase.sol"]["Purchase"]["evm"]["bytecode"]["object"]
abi = compiled_sol["contracts"]["Purchase.sol"]["Purchase"]["abi"]

Purchase = w3.eth.contract(abi=abi, bytecode=bytecode)

nonce = w3.eth.get_transaction_count(my_address)

transaction = Purchase.constructor().build_transaction(
    {
        "chainId": chain_id,
        "gasPrice": w3.eth.gas_price,
        "from": my_address,
        "nonce": nonce,
    }
)
transaction.pop('to')

signed_txn = w3.eth.account.sign_transaction(
    transaction, private_key=private_key)
tx_hash = w3.eth.send_raw_transaction(signed_txn.rawTransaction)
tx_receipt = w3.eth.wait_for_transaction_receipt(tx_hash)

purch_contract = w3.eth.contract(address=tx_receipt.contractAddress, abi=abi)

# USERS CONTRACT
with open(os.path.join("Users.sol"), "r") as file:
    contract_source = file.read()
install_solc("0.8.0")
compiled_sol = compile_standard(
    {
        "language": "Solidity",
        "sources": {"Users.sol": {"content": contract_source}},
        "settings": {
            "outputSelection": {
                "*": {"*": ["abi", "metadata", "evm.bytecode", "evm.sourceMap"]}
            }},
    },
    solc_version="0.8.0",
)
with open("compiled_code.json", "w") as file:
    json.dump(compiled_sol, file)

bytecode = compiled_sol["contracts"]["Users.sol"]["Users"]["evm"]["bytecode"]["object"]
abi = compiled_sol["contracts"]["Users.sol"]["Users"]["abi"]

User = w3.eth.contract(abi=abi, bytecode=bytecode)

nonce = w3.eth.get_transaction_count(my_address)

transaction = User.constructor().build_transaction(
    {
        "chainId": chain_id,
        "gasPrice": w3.eth.gas_price,
        "from": my_address,
        "nonce": nonce,
    }
)
transaction.pop('to')

signed_txn = w3.eth.account.sign_transaction(
    transaction, private_key=private_key)
tx_hash = w3.eth.send_raw_transaction(signed_txn.rawTransaction)
tx_receipt = w3.eth.wait_for_transaction_receipt(tx_hash)

user_contract = w3.eth.contract(address=tx_receipt.contractAddress, abi=abi)


@app.post("/purchase")
async def make_purchase(itemName: str, itemPrice: int):
    try:
        tx_hash = purch_contract.functions.makePurchase(
            itemName, itemPrice).transact({'from': w3.eth.accounts[1]})
        receipt = w3.eth.wait_for_transaction_receipt(tx_hash)

        # Get the purchase ID from the event logs
        purchase_id_hex = receipt['logs'][0]['topics'][1].hex()
        purchase_id_int = int(purchase_id_hex, 16)

        return {"purchase_id": purchase_id_int}
    except Exception as e:
        return {"error": str(e)}


@app.get("/purchase/{purchase_id}")
async def get_purchase(purchase_id: int):
    # Retrieve purchase information by purchase ID
    purchase = purch_contract.functions.getPurchase(
        purchase_id).call({'from': w3.eth.accounts[1]})
    return {
        "itemName": purchase[0],
        "itemPrice": purchase[1],
        "purchaseTime": purchase[2],
        "user": purchase[3],
    }


@app.post("/createuser")
async def create_user(userName: str, userEmail: str):
    try:
        tx_hash = user_contract.functions.createUser(
            userName, userEmail).transact({'from': w3.eth.accounts[0]})
        receipt = w3.eth.wait_for_transaction_receipt(tx_hash)

        user_id_hex = receipt['logs'][0]['topics'][1].hex()
        user_id_int = int(user_id_hex, 16)

        return {"user_id": user_id_int}
    except Exception as e:
        return {"error": str(e)}


@app.get("/user/{user_id}")
async def get_user(user_id: int):
    userinfo = user_contract.functions.getUser(
        user_id).call({'from': w3.eth.accounts[0]})
    return {
        "name": userinfo[0],
        "email": userinfo[1],
        "userAdress": userinfo[2],
    }
