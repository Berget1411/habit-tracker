FROM node:18-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

# For development, we don't need to build
# RUN npm run build

EXPOSE 3000

# Use development mode for local testing
ENV NODE_ENV=development

# Use development server instead of production server
CMD ["npm", "run", "dev"]
