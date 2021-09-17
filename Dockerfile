FROM python:3.7.8-alpine

COPY requirements.txt ./
COPY . web_app/

RUN apk update
RUN apk add busybox-extras vim bash expect
RUN \
 apk add --no-cache postgresql-libs && \
 apk add --no-cache --virtual .build-deps gcc musl-dev postgresql-dev && \
 python3 -m pip install -r requirements.txt --no-cache-dir

RUN cd web_app

# CMD ["python", "./manage.py", "runserver", "0.0.0.0:8000"]