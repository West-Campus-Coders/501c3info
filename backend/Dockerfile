FROM mysql

RUN ["python", "-m", "pip", "install", "mysql-connector-python"]
RUN ["python", "-m", "pip", "install", "Flask"]

WORKDIR /root/

COPY app.py /root/

EXPOSE 5000
ENTRYPOINT flask run --host 0.0.0.0
