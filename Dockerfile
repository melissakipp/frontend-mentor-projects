FROM node:20-slim

# Environment variables
ENV NODE_ENV=development

# Expose port
EXPOSE 3000

# Set working directory
WORKDIR /home/nextjs/app

# Install required system dependencies
RUN apt update && apt -y install --no-install-recommends \
  ca-certificates \
  git \
  git-lfs \
  openssh-client \
  curl \
  jq \
  cmake \
  sqlite3 \
  openssl \
  psmisc \
  python3 \
  && apt-get clean autoclean && apt-get autoremove --yes && rm -rf /var/lib/{apt,dpkg,cache,log}

# Enable pnpm via Corepack
RUN corepack enable && corepack prepare pnpm@latest --activate

# Copy package files and install dependencies with pnpm
COPY package.json pnpm-lock.yaml ./
RUN pnpm install

# Disable Next.js telemetry
RUN npx next telemetry disable

# Set user to node for security
RUN chown -R node:node .
USER node

# Copy the rest of the project
COPY . .

# Default command (will be overridden by docker-compose)
CMD [ "pnpm", "dev" ]
