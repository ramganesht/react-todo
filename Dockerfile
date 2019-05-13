FROM mhart/alpine-node:8.11.4

# Create app directory
WORKDIR /usr/src/docker-react-sample

# Install app dependencies
# A wildcard is used to ensure both package.json AND
# package-lock.json are copied where available (npm@5+)
COPY package*.json ./

RUN npm install -g npm@latest
RUN npm cache verify
RUN npm i

# Bundle app source
COPY . .

EXPOSE 3000

CMD ["npm", "start"]