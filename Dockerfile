FROM node:lts-alpine
LABEL MAINTAINER=dwoodward@salte.io
EXPOSE 8080

RUN mkdir -p /opt/nodejs/src
ADD package.json /opt/nodejs/.
ADD src/main /opt/nodejs/src/main
WORKDIR /opt/nodejs
RUN npm install --production

ENTRYPOINT ["npm", "start"]
