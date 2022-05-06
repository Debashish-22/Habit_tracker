# Habit_tracker

It's a habit tracker app where we can define habits and track them.

## Demonstartion video

> [video link]()

## Images

[Home page](https://drive.google.com/file/d/1N99AiCb0S3ukp642sT1XlbTk-31zMqsU/view?usp=sharing)

[History page](https://drive.google.com/file/d/19Lj3tNTlDxo-9JodqZPYLadE4wO26BFc/view?usp=sharing)

## Tech Stack

* [NodeJS](https://nodejs.org/en/) and [ExpressJS](https://expressjs.com/) (for backend server).
* [MongoDB](https://www.mongodb.com/) ( as database to store data).
* [Momentjs](https://momentjs.com/) (To format and compare date and day).

## Features

* Create multiple habits to track like reading a book, Drink water, etc and include total no. of reps.
* A view to show all current habits
* Track each habit everyday.  we can:
  * Increment and decrement current Reps.
  * Mark as complete.
  * Delete the habit.
* History page to check weekly perfomance based on Status ( "Done", "Not Done", "None").
  * A user can toggle between the three (above mentioned) and update statuses of a habit.

* All the data are persistent on Database.

## Installation Guide

Install [NodeJS](https://nodejs.org/en/) and [MongoDB](https://www.mongodb.com/) on your system.

on terminal write:

```
npm install 
npm start
```

## Folder Structure
* `app.js` - Entry point of our application. This file defines our express server.
* `assets` - This folder contains all the css files in styles folder and js file in scripts folder.
* `config` - This folder contains configuration of [Mongoose](https://mongoosejs.com/)(schema and model).
* `controllers` - This folder contains various functions to be executed when called through routes.
* `models` - This folder contains schema definition of our mongoose models.
* `routes` - This folder contains all the routes for our API.
* `views` - This folder contains all the html files to be displayed.
