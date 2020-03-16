FROM node:12

COPY . /code
WORKDIR /code

RUN npm i
CMD npm start
