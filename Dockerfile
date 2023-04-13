FROM node:14.21.3-alpine3.12

RUN npm install -g @nestjs/cli@9.0.0

USER node

WORKDIR /home/node/app