FROM node:8

COPY . /code
WORKDIR /code

RUN npm i

# Install Chrome
RUN wget https://dl.google.com/linux/direct/google-chrome-stable_current_amd64.deb
RUN dpkg -i google-chrome-stable_current_amd64.deb; apt-get -fy install

ENV CHROME_BIN=/usr/bin/google-chrome

CMD ["npm run bootstrap && npm run build"]