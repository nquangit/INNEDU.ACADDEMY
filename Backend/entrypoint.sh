#!/bin/sh

# Wait for PostgreSQL to be ready
while ! nc -z db 5432; do
  echo "Waiting for PostgreSQL..."
  sleep 1
done

# Run database migrations or initialization
flask db upgrade

# Start the Flask application
exec python -m flask run --host=0.0.0.0 --port=5000
