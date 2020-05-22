FROM node:lts-alpine
RUN apk --no-cache add  gettext && \
    npm install -g http-server
WORKDIR /app
COPY package.json package.json
RUN npm install
COPY . /app
RUN npm run build
