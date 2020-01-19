FROM node:10

RUN mkdir -p /usr/src/christmas_project
WORKDIR /usr/src/christmas_project

COPY package.json .
RUN npm install --production
COPY . /usr/src/christmas_project

ENV NODE_ENV production
ENV PORT 3000
EXPOSE 3000

CMD [ "npm", "start" ]