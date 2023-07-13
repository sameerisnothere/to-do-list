FROM node:alpine
COPY . /app
WORKDIR /app
CMD [nodemon app.js]