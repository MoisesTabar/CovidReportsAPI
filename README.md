# CovidReportsAPI
Simple report generation API created in NodeJS, Express and MongoDB with third party API integrations.

## Table of contents
* [General info](#general-info)
* [Technologies](#technologies)
* [How to use](#how-to-use)
* [Available Scripts](#available-scripts)
* [API Design](#api-design)
* [API Documentation](#api-documentation)

## General info
This project is being created with the purpose of reporting the violations taken to prevent the SarsCoV-2 virus. This API works as a fast report generator and visualizer of the dairy cases in the world, specific countries and your in your current location. <b>Report generation only available for Dominican Republic</b>.

## Technologies
This project is created with:
* NodeJS
* Typescript
* Express
* MongoDB
* Jest
* Redis

## How to use
To clone and run locally this API, you'll need Git and Node.js (which comes with npm) installed on your computer. From your command line:

```
# Clone this repository
$ git clone https://github.com/MoisesTabar/CovidReportsAPI

# Go into this repository
$ cd Covid-Reports-API

# Install dependencies
$ npm install

# Run it
$ npm run start

```

## Available Scripts
```
npm run test 
```
<b>Starts the test cases once</b>

```
npm run dev
```
<b>Starts the app in development mode using nodemon and ts-node to do hot reloading</b>

```
npm run build
```
<b>Builds the app at build, cleaning the build folder first</b>

```
npm run start
```
<b>Starts the app in production building the proyect with ```npm run build``` and executing the compiled JavaScript at build/app.js</b>


## API Design
![API DESIGN](/assets/Covid19API_Design.jpg)

## API Documentation
This API will include routes that will implemented different http methods<b>(GET, POST, PUT, DELETE)</b>expecting them to return 200 or 201 depending on the case. The following table will describe the different routes and what they are supose to respond when requesting them. 
| Routes        | Functionalities| Code  |
|:-------------:|:--------------:|:-----:|
| `/`           | Gets all cases | 200   |
| `/:country`   | Gets all cases by country<b>(Login required)</b>| 200 |
| `/location`   | Gets cases by current location | 200 |
| `/auth/login` | Logs in a signed in user | 200 |
| `/auth/signup`| Signs in an not existant user  | 201 |
| `/auth/signout` | Logs out a login user        | 204 |
| `/reports/create`   | Creates a report<b>(Login required)</b>  | 201 |
| `/reports/update/:id`   | Updates a report<b>(Login required)</b>| 202 |
| `/reports/delete/:id`   | Deletes a report<b>(Login required)</b>| 202 |

Other technologies used to increase this API use is hashing and endpoint protection using the <b>crypto module, Json Web Tokens. Also the implementation of rate limiters, caching and proxies to hide third party API calls</b>. 

<hr>

## To-do
* [x] Design the API
* [x] Document the API
* [x] Scaffold the data
* [x] Create routes and models
* [ ] Create controllers 