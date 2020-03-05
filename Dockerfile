FROM node:12

COPY . /code
WORKDIR /code

RUN npm ci
CMD npm start
