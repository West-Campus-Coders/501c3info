#!/bin/bash

docker build --tag backend_image:1.0 ./backend/

#make sql container, can use sql if you want it to
docker run --name backend_container -e MYSQL_ROOT_PASSWORD=my-secret-pw -p 5000:5000 -it -d backend_image:1.0

#display ip address
echo "POSSIBLE IP ADDRESSES"
ip addr | grep eth | grep -E '[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}'

