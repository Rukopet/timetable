FROM python:3.7.8-alpine

COPY requirements.txt ./
COPY timetable_core ./

RUN apk update
RUN apk add busybox-extras vim bash expect npm
RUN pip install -r requirements.txt
RUN cd timetable_core

# CMD ["python", "./manage.py", "runserver", "0.0.0.0:5000"]