FROM node:8-alpine

COPY . /code
WORKDIR /code

RUN npm i

# Install Chrome
# Add chromium and all necessary tools to run chrome headless browser (used for front-end testing)
RUN apk -U --no-cache \
	--allow-untrusted add \
    zlib-dev \
    chromium \
    xvfb \
    wait4ports \
    xorg-server \
    dbus \
    ttf-freefont \
    mesa-dri-swrast \
    grep \
    udev

ENV CHROME_BIN=/usr/bin/chromium-browser
ENV CHROME_PATH=/usr/lib/chromium/

CMD ["npm run bootstrap && npm run build"]