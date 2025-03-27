# Build stage
FROM node:18-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
# Create a minimal next.config.js if it doesn't exist
RUN if [ ! -f next.config.js ]; then \
    echo "/** @type {import('next').NextConfig} */\nmodule.exports = { output: 'standalone' };" > next.config.js; \
    fi
RUN npm run build

# Production stage
FROM node:18-alpine AS runner
WORKDIR /app

ENV NODE_ENV=production

# Copy necessary files - Make it conditional with a check for existence
# Check if standalone output is used, and adapt the file copying strategy
RUN mkdir -p /app/public
COPY --from=builder /app/package.json ./package.json

# Try to copy next.config.js if it exists
COPY --from=builder --chmod=755 /app/next.config.js* ./next.config.js* || true

# Copy the public folder if it exists
COPY --from=builder /app/public ./public || true

# Try standalone mode first (if output: 'standalone' is in next.config.js)
COPY --from=builder /app/.next/standalone ./ || true
COPY --from=builder /app/.next/static ./.next/static || true

# Fallback to regular mode if standalone files don't exist
RUN if [ ! -d /app/.next ]; then \
    mkdir -p /app/.next && \
    COPY --from=builder /app/.next /app/.next || true; \
    fi

EXPOSE 3000

# Set the command to run the appropriate server based on what was built
CMD if [ -f "server.js" ]; then \
      node server.js; \
    else \
      npm start; \
    fi