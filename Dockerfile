FROM node:14

WORKDIR /app

COPY . .

EXPOSE 5000

CMD ["npm", "start"]