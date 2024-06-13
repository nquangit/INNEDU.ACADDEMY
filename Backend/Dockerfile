FROM python:3.12-alpine

WORKDIR /app/backend

RUN apk add --no-cache libpq-dev python3-dev gcc musl-dev libreoffice

COPY . .

RUN pip install -r requirements.txt

# CMD ["python", "manager.py"]
RUN chmod +x entrypoint.sh

ENTRYPOINT ["./entrypoint.sh"]