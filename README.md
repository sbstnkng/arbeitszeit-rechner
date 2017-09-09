# Arbeitszeit Rechner
[![Build Status](https://travis-ci.org/s3koenig/arbeitszeit-rechner.svg?branch=master)](https://travis-ci.org/s3koenig/arbeitszeit-rechner)
[![license](https://img.shields.io/github/license/s3koenig/arbeitszeit-rechner.svg)]()

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

## Table of Contents

- [Folder Structure](#folder-structure)
- [Available Scripts](#available-scripts)
  - [npm run deploy](#npm-run-deploy)
  - [npm start](#npm-start)
  - [npm run start:docker](#npm-run-startdocker)
  - [npm test](#npm-test)
  - [npm run build](#npm-run-build)
- [Github Pages](#github-pages)
- [Docker](#docker)
  - [Building your image](#building-your-image)
  - [Run the image](#run-the-image)
- [About Create React App](#about-create-react-app)

## Folder Structure

After creation, your project should look like this:

```
my-app/
  README.md
  node_modules/
  package.json
  public/
    index.html
    favicon.ico
  src/
    App.css
    App.js
    App.test.js
    index.css
    index.js
    logo.svg
```

For the project to build, **these files must exist with exact filenames**:

* `public/index.html` is the page template;
* `src/index.js` is the JavaScript entry point.

You can delete or rename the other files.

You may create subdirectories inside `src`. For faster rebuilds, only files inside `src` are processed by Webpack.<br>
You need to **put any JS and CSS files inside `src`**, otherwise Webpack won’t see them.

Only files inside `public` can be used from `public/index.html`.<br>
Read instructions below for using assets from JavaScript and HTML.

You can, however, create more top-level directories.<br>
They will not be included in the production build so you can use them for things like documentation.

## Available Scripts

In the project directory, you can run:

### `npm run deploy`

Deploys the app to Github Pages.<br>
Open [https://s3koenig.github.io/arbeitszeit-rechner/](https://s3koenig.github.io/arbeitszeit-rechner/) to view it in the browser.

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm run start:docker`

Runs the app with express.js for Docker support.<br>
Open [http://localhost:9000](http://localhost:9000) to view it in the browser.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](#running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](#deployment) for more information.

## Github Pages

Every push to the `master` branch deploys the app automatically to its own (Github Page)[https://s3koenig.github.io/arbeitszeit-rechner/].

The deploy is configured in the `.travis.yml` file.

## Docker

Use the including Dockerfile for running these app inside of a Docker container.

### Building your image

Go to the directory that has your `Dockerfile` and run the following command to build the Docker image. The `-t` flag lets you tag your image so it's easier to find later using the `docker images` command:
```bash
$ docker build -t <your username>/arbeitszeit-rechner .
```
Your image will now be listed by Docker:
```bash
$ docker images

REPOSITORY                             TAG        ID              CREATED
node                                   boron      539c0211cd76    3 weeks ago
<your username>/arbeitszeit-rechner    latest     d64d3505b0d2    1 minute ago
```

### Run the image

Running your image with `-d` runs the container in detached mode, leaving the container running in the background. The `-p` flag redirects a public port to a private port inside the container. Run the image you previously built:
```bash
$ docker run -p 9000:9000 -d <your username>/arbeitszeit-rechner
```
Print the output of your app:
```bash
# Get container ID
$ docker ps

# Print app output
$ docker logs <container id>

# Example
Running on http://localhost:9000
```
If you need to go inside the container you can use the `exec` command:
```bash
# Enter the container
$ docker exec -it <container id> /bin/bash
```

## About Create React App

For further informations read [Create React App - Basics](docs/CreateReactApp_Basics.md) in the `docs` folder