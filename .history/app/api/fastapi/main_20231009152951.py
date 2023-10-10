from passlib.context import CryptContext
from fastapi import FastAPI
from datetime import datetime, timedelta
from jose import jwt
from fastapi import FastAPI, HTTPException, Depends, Query
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware
from typing import List, Union
from fastapi.security import OAuth2PasswordBearer
from typing_extensions import Annotated
import mysql.connector

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

pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")

SECRET_KEY = "coinWaveDummyKey"
ALGORITHM = "HS256"
ACCESS_TOKEN_EXPIRE_MINUTES = 30


class UserIn(BaseModel):
    username: str
    password: str


class User():
    email: str
    hashed_password: str
    firstName: str
    lastName: str


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


class Data(BaseModel):
    email: str
    password: str
    firstName: str
    lastName: str


def fake_save_user(email: str, password: str, firstName: str, lastName: str):
    hashed_password = pwd_context.hash(password)
    user = User(email=email, hashed_password=password,
                firstName=firstName, lastName=lastName)
    return user
    # Save the user to the database here
    connection = mysql.connector.connect(**db_config)

    # Create a cursor to execute SQL queries
    cursor = connection.cursor()

    sql = "INSERT INTO users (email, password, firstName, lastName) VALUES (%s, %s, %s, %s)"
    val = (user['email'], user['hashed_password'], user["firstName"],
           user["lastName"])
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


@app.post("/login")
def login(User: UserIn):
    # Fetch the user from the database here
    # This is a placeholder and should be replaced with actual code
    user_from_db = User(username=User.username,
                        hashed_password="$2b$12$EixZaYVK1fsbw1ZfbX3OXePaWxn96p36WQoeG6Lruj3vjPGga31lW")

    if not pwd_context.verify(usUserer.password, user_from_db.hashed_password):
        return {"error": "Incorrect login details"}

    return {"success": "Logged in successfully"}


@app.post("/token")
def login_for_access_token(user: UserIn):
    # Fetch the user from the database here
    # This is a placeholder and should be replaced with actual code
    user_from_db = User(username=user.username,
                        hashed_password="$2b$12$EixZaYVK1fsbw1ZfbX3OXePaWxn96p36WQoeG6Lruj3vjPGga31lW")

    if not pwd_context.verify(user.password, user_from_db.hashed_password):
        return {"error": "Incorrect login details"}

    access_token = create_access_token(data={"sub": user.username})
    return {"access_token": access_token}
