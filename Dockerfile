FROM node:8

COPY . /code
WORKDIR /code

RUN npm ci
RUN npm run bootstrap

CMD ["npm run build"]