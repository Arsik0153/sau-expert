FROM node:lts-alpine
RUN apk --no-cache add  gettext && \
    npm install -g http-server
WORKDIR /app
COPY package.json package.json
RUN npm install
COPY . /app
RUN npm run build

FROM nginx:alpine
COPY --from=build /app/build /usr/share/nginx/html
RUN rm /etc/nginx/conf.d/default.conf
# replace with custom one
COPY nginx/nginx.conf /etc/nginx/conf.d

# CMD ["npm", "run", "start"]
# CMD [ "http-server", "build" , "--proxy", "http://127.0.0.1:8080"]
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]




