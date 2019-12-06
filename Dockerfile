FROM node:8

COPY . /code
WORKDIR /code

RUN npm i

CMD ["npm run bootstrap && npm run build"]