from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from db import get_db_connection

app = FastAPI()

# Allow Ionic Angular to communicate with FastAPI
app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:8100",
        "http://127.0.0.1:8100"
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/")
def home():
    return {
        "message": "GBC Finance System API is running"
    }


@app.get("/accounts")
def get_accounts():

    db = get_db_connection()
    cursor = db.cursor(dictionary=True)

    cursor.execute("""
        SELECT
            acc_id,
            email,
            mem_status
        FROM account
    """)

    accounts = cursor.fetchall()

    cursor.close()
    db.close()

    return accounts