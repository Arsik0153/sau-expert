FROM node:lts-alpine
RUN apk --no-cache add  gettext && \
    npm install -g http-server
WORKDIR /app
COPY package.json package.json
RUN npm install
COPY . /app
RUN npm run build

FROM nginx:stable-alpine
COPY --from=build /app/build /usr/share/nginx/html
# new
COPY nginx/nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 8080
CMD ["nginx", "-g", "daemon off;"]
