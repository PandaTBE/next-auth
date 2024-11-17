FROM node:22.11.0

WORKDIR /src

COPY package.json .
COPY package-lock.json .

RUN npm ci

COPY . .

RUN npm run build
