FROM node:boron

# Create app directory
RUN mkdir -p /usr/src/app/tmp
WORKDIR /usr/src/app/tmp

# Install app dependencies
COPY . /usr/src/app/tmp
RUN npm install && \ 
    npm run build && \
# Bundle app source and remove tmp folder (using same run command for dockerfile optimization)
    mv package.json server.js build/ node_modules/ ../ && \
    cd .. && \
    rm -r tmp

# Expose port and run app
WORKDIR /usr/src/app
EXPOSE 9000
CMD [ "npm", "run", "start:docker" ]