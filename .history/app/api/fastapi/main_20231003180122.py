from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware
from typing import List, Union

from fastapi import FastAPI, Query
from typing_extensions import Annotated

# DB
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


@app.get("/jsonData")
async def funcTest():
    jsonResult = {
        "name": "Your name",
        "Uni-year": 2,
        "isStudent": True,
        "hobbies": ["reading", "swimming"]
    }

    return jsonResult


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


@app.get("/items/")
async def read_items(id: Annotated[Union[List[str], None], Query()] = None):
    query_items = {"id": id}
    return query_items.data
    try:

        query_items = {"id": id}

        # Establish a database connection
        connection = mysql.connector.connect(**db_config)

        # Create a cursor to execute SQL queries
        cursor = connection.cursor()

        # Define the SQL query to retrieve data (e.g., all students)
        query = f"SELECT * FROM products WHERE id = {query_items}"

        # Execute the SQL query
        cursor.execute(query)

        # Fetch all the rows
        result = cursor.fetchall()

        # Convert the result to a list of dictionaries
        product = [dict(zip(cursor.column_names, row)) for row in result]

        # Close the cursor and the database connection
        cursor.close()
        connection.close()

        return query_items
        return product

    except mysql.connector.Error as err:
        return {"error": f"Error: {err}"}


# @app.get("/items/")
# def async def read_items(q: Annotated[Union[List[str], None], Query()] = None):
#     query_items = {"q": q}
#     return query_items
#     try:

#         # Establish a database connection
#         connection = mysql.connector.connect(**db_config)

#         # Create a cursor to execute SQL queries
#         cursor = connection.cursor()

#         # Define the SQL query to retrieve data (e.g., all students)
#         query = "SELECT * FROM products WHERE id = {1} "

#         # Execute the SQL query
#         cursor.execute(query)

#         # Fetch all the rows
#         result = cursor.fetchall()

#         # Convert the result to a list of dictionaries
#         product = [dict(zip(cursor.column_names, row)) for row in result]

#         # Close the cursor and the database connection
#         cursor.close()
#         connection.close()

#         return product

#     except mysql.connector.Error as err:
#         return {"error": f"Error: {err}"}
