FROM node:20

WORKDIR /app

RUN apk add --no-cache bash dumb-init

ADD . /app

RUN npm i

RUN npm build

ENTRYPOINT ["/usr/bin/dumb-init"]

EXPOSE 3000