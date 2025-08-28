FROM node:20-alpine AS builder

RUN apk update && apk upgrade

WORKDIR /build-fe
COPY ./client/package.json ./client/package-lock.json ./
RUN npm cache clean --force && npm install --production
COPY ./client ./
RUN npm run build

FROM nginx:alpine

# Copy React build artifacts từ stage frontend-build
COPY ./client/dist /usr/share/nginx/html

# Copy Nginx config
COPY ./docker/nginx/default.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
