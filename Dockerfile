FROM node:16.17.0-alpine3.16

RUN apk add --no-cache bash

RUN touch /root/.bashrc | echo "PS1='\w\$ '" >> /root/.bashrc

RUN mkdir -p /home/node/app && chown -R node:node /home/node/app

RUN npm config set cache /home/node/app/.npm-cache --global

RUN npm install -g nodemon

USER node

WORKDIR /home/node/app