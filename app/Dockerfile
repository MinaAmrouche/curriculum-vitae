FROM node:12

WORKDIR /app

COPY package.json /app/
COPY yarn.lock /app/

RUN yarn install

CMD [ "yarn", "start" ]