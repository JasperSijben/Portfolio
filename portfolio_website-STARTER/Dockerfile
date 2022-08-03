# pull official base image
FROM node:latest

# set working directory
WORKDIR /app

# install app dependencies
COPY package.json ./
COPY package-lock.json ./
RUN npm install
RUN npm install react-scripts@3.4.1 -g
RUN npm install -g serve

# add app
COPY . ./

# start app
CMD ["serve", "-s", "build"]
