import os
import sqlite3
import logging

# Configure logging
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger("database")

DATABASE_URL = os.getenv("DATABASE_URL")
DB_FILE = "bot_zeus.db"

def get_connection():
    """
    Returns a database connection.
    If DATABASE_URL is set, connects to PostgreSQL.
    Otherwise, connects to local SQLite.
    """
    if DATABASE_URL:
        try:
            import psycopg2
            conn = psycopg2.connect(DATABASE_URL)
            return conn
        except ImportError:
            logger.error("psycopg2 not installed, falling back to sqlite")
        except Exception as e:
            logger.error(f"Failed to connect to Postgres: {e}")

    return sqlite3.connect(DB_FILE, timeout=5.0)

def execute_query(conn, query, params=()):
    """
    Executes a query handling parameter placeholders for both SQLite (?) and Postgres (%s).
    Returns the cursor after execution.
    """
    is_postgres = 'psycopg2' in str(type(conn))

    if is_postgres:
        # Replace ? with %s for Postgres
        query = query.replace('?', '%s')
    
    cur = conn.cursor()
    try:
        cur.execute(query, params)
        return cur
    except Exception as e:
        logger.error(f"Query failed: {query} with params {params}")
        conn.close() # Safety close
        raise e
