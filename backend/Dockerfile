FROM node:18-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

EXPOSE 8080

# Use development mode for local testing
ENV NODE_ENV=development

# For development, use nodemon or ts-node-dev to watch for changes
# Choose one based on your project setup:
CMD ["npm", "run", "dev"]
