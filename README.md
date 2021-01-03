# Workout Tracker
---------------

[Links](#Links)
<br>
[UserStory](#UserStory)
<br>
[Description](#Description)
<br>
[Installation](#Installation)
<br>
[Usage](#Usage)
<br>
[Future Development](#Future Development)
<br>
---------------

## Links

[GitHub Repository:](https://github.com/RAMulc/WorkoutTracker)

[Heroku:](https://ram-workout-tracker.herokuapp.com/?id=5ff10e285989280017fed7b8)

## **UserStory**

- As a user, I want to be able to view create and track daily workouts. 
- I want to be able to log multiple exercises in a workout on a given day. 
- I should also be able to track the name, type, weight, sets, reps, and duration of exercise. 
- If the exercise is a cardio exercise, I should be able to track my distance travelled.

## Description

A simple application to track/store workouts and exercises using MongoDB, Node and Express. The app is deployed to Heroku and makes use of MongoDB Atlas for the backend database.

***Landing Page***

First use, the user is presented with an option to create a new workout. Thereafter the user will be presented with the last workout stats, and options to add an exercise to the current workout, or create a new workout.

![Landing Page](https://github.com/RAMulc/WorkoutTracker/assets/images/landingPage.png)

***Add Exercise/New Workout***

Adding a new exercise, or creating a new workout utilises the same page. Buttons to complete or add exercise are disabled until all required fields are populated. 

![Add an exercise](https://github.com/RAMulc/WorkoutTracker/assets/images/ExerciseAdd.png)

*Known issue: Clicking "Fitness Tracker" on the top left without adding the workout results in an empty exercise array being added to the database.*

***Dashboard***

Data for workout is presented to the user in the form a line graph, bar chart, and pie charts.

![Dashboard](https://github.com/RAMulc/WorkoutTracker/assets/images/Dashboard.png)

## Installation

Run npm install to install the required packages.

## Usage

Run 'node server.js' at the command line to start the program or [run from Heroku.](https://ram-workout-tracker.herokuapp.com/?id=5ff10e285989280017fed7b8).


## Future Development

Prevent a workout from being created with an empty exercises array.

---------------

[About Me:](https://ramulc.github.io/Portfolio/)