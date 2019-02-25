FROM python:alpine

ADD . .
EXPOSE 1
CMD ["python3", "-m", "http.server", "1"]