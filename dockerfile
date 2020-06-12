FROM node:12
WORKDIR /home/node/app
COPY nodeApp /home/node/app
RUN npm install
CMD npm run start