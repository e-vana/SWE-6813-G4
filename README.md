# SWE-6813-G4

## Overview

### Group Members
- John Crabtree
- Jordan Davidson
- Fredy Quaicoe
- Evan Vana

## Project Technology Overview
### Front End
- [React](https://reactjs.org/) - front end framework
- [React Material](https://mui.com/) - UI and component library

### Back End
- [Node JS](https://nodejs.org/en/) - Javascript runtime
- [Express](https://expressjs.com/) - a lightweight web framework on top of node
- [Jest](https://jestjs.io/) - a unit and integration test runner
- [Typescript](https://www.typescriptlang.org/) - a strongly typed language on top of regular Javascript

### Database 
- MySQL8 remotely managed using [Digital Ocean Databases](https://try.digitalocean.com/managed-databases/?utm_campaign=amer_brand_kw_en_cpc&utm_adgroup=digitalocean_dbaas_exact&_keyword=digital%20ocean%20database&_device=c&_adposition=&utm_content=conversion&utm_medium=cpc&utm_source=google&gclid=Cj0KCQjwtsCgBhDEARIsAE7RYh298LyLeQx1mzW7Wloy9gsiUOo-CRiEh7RpMhNBL193_WJR8NE79kwaAj82EALw_wcB)

## Project Setup
### Frontend
#### Installation

1. Install [Node Js](https://nodejs.org/en/)
2. Clone the repository
3. Using your terminal, navigate to /application/frontend
4. In the terminal, run

```
npm install
```

5. To start development build, run

```
npm start
```

### Backend
#### Installation

1. Install [Node Js](https://nodejs.org/en/)
2. Clone the repository
3. Using your terminal, navigate to /application/server
4. In the terminal, run

```
npm install
```

5. You'll need a .env file containing all of the application secrets, contact a project member to receive a copy of that file.

```
/application/server/.env

PORT="3005"
JWT_SECRET="xxxxxxxxxxx"
DB_CONNECTION_STRING="mysql://xxxxxxxxxxxxxxxx.db.ondigitalocean.com:25060/defaultdb"
```

6. to start the web server, run

```
npm run dev
```


# Project Planning
## Sprint 1
### Criteria and Rubric
#### 1. You have a forecast of how many story points your team can complete during this sprint. The forecast along with its rationale are documented in your git’s repo. (10.0 pts)

We forecast that we can complete 3 main user stories related to the general systems required for the project
1. A user can register an account to use the multiplayer matchmaking service.
2. A user can login to their account to use have access to the multiplayer matchmaking.
3. A user can select a game and play session settings to enter the matchmaking queue.

We also predict that we can complete many of the generic tasks that are required to get the project initialized that don't necessarily fall under specific user stories.  You can [view them on Trello](https://trello.com/w/workspace57274945) under the miscellaneous card category.

#### 2. You decomposed stories into tasks. The tasks are clearly listed in your sprint backlog. (10.0 pts)
Our trello board has each story decomposed into tasks. Each card represents a task that is mapped to a particular story. The completion of all of a stories cards means that all tasks are completed and the story is completed. Completed stories and their respective tasks are backlogged on our board under the "done" category.  
 
The stories and their associated tasks can be [viewed on Trello](https://trello.com/w/workspace57274945).

#### 3. Your sprint backlog, including both stories and tasks, is represented in a kanbanboard. The kanban board, or a URL of the kanban board (from your online management tool), is documented in your git’s repo. I should be able to view the board. [Update your sprint backlog task board. Make sure the URL or images are available in your GitHub repo] (15.0 pts)

![image](https://user-images.githubusercontent.com/24251508/225419581-5e5c48db-ca2c-4430-94bb-964235e8d003.png)
![image](https://user-images.githubusercontent.com/24251508/225419641-14ed46a8-02be-4e2d-86b2-b29e9e2b8ced.png)


The stories and their associated tasks can be [viewed on Trello](https://trello.com/w/workspace57274945).

#### 4. You have a sprint burndown chart. On the x-axis, you display time markers in units of 1 day. On the y-axis, you display story points remaining to get done. There is a linear curve descending from left to right; the leftmost point of the curve is number of story points in your sprint at sprint day 1; the rightmost point is 0 story points remaining on the last day of the sprint. The burndown chart, or the URL of the burndown chart (from your online management tool), is documented in your git’s repo. I should be able to view the burndown chart. [Update your burndown chart. Make sure the URL or images are available in your GitHub repo.] (15.0 pts)

![image](https://user-images.githubusercontent.com/24251508/225422442-b556f1f5-9ce6-4248-86a2-0d55792621b9.png)

The tasks on the burndown chart directly correlate with a task inside of trello.  The planned tasks blue line is the estimated task completion rate (there's an assumption that there's a linear rate of completion) and the actual tasks red line is the actual rate of task completion throughout the sprints duration.

The Sprint #1 burndown chart can be [viewed here](https://docs.google.com/spreadsheets/d/1q3j7cHHDMNimTq_LC8vwiPS-vyIxROYsbnZN1WLxpEc/edit?usp=sharing).

#### 5. You have conducted multiple Daily Scrums. You have evidence of at least one daily scrum documented in your git’s repo, should cover the following three items: 1. What will you do in the next 24 hours to help the Development Team meet the Sprint Goal? Annotate your team's response so it's clear which team members plan to do which activities. 2. Do you see any impediment that prevents you or the Development Team from meeting the Sprint Goal? 3. What are the impediments? What is your impediment removal plan?

Here's a few screenshots of a few meetings, you can view the full meeting records on the google doc below.

![image](https://user-images.githubusercontent.com/24251508/225423459-3be8808b-6083-4243-922e-633e400fb7e8.png)
- During this meeting we discussed the intial scope and goals of this application. We established preliminary roles for each group member. Evan will be working primarily on backend, while Jordan will work on frontend. Fredy will work on both front and back end. John is team leader and will also work on backend. Overall everyone will work on everypart of the project and help with any part as needed. During the next meeting we will discuss how to intialize the database and server and discuss what stories we beleive we can achieve in the first sprint. During the next 24 hours each team member will research server and database hosting services. 

![image](https://user-images.githubusercontent.com/103462168/225520184-40e9b827-8cea-4cf0-8a69-897835f5b0df.png)
- Met to get updates on progress and assign new tasks for the week. Jordan is continuing to build out the UI. John is working on API calls and endpoints. Evan is building out the server side. Fredy is helping with client side login and authentication. 

- The full record of meetings [Can be viewed here](https://docs.google.com/document/d/13vrNviHJNU_RgElHAn5KOSyl32PUu4H0EczT8A0vTHc/edit?usp=sharing)


#### 6. There is evidence that you paired or mobbed on your code. The evidence could be a photo or video of your team working together, or it could be some other kind of evidence. The evidence is included in your GitHub repo. (15.0 pts)

![image](https://user-images.githubusercontent.com/24251508/225419893-f5bfe9c4-fbfb-4967-ad04-1119faa4921a.png)

Evan and Jordan working out an HTTP call bug.

#### 7. There is evidence that you are building your product test-first. There is at least 1 BDD / A-TDD test in your test suite, and it passes. There are at least 10 unit tests in your test suite, and they all pass. (10.0 pts)

We're still getting our feet wet with testing in general on the project.  There's some unit test suites written for basic validation and sanitzation on the backend:

![image](https://user-images.githubusercontent.com/24251508/225171382-aa04b9c6-f047-427a-be9b-6ebcbaf314e3.png)

A major goal of Sprint 2 is to setup basic integration tests and a test database to run the integration tests against for the primary web application endpoints as well as develop testing coverage for the front end.

#### 8. Your team conducts a Sprint Review. There should be an evidence to that. (5.0 pts)

![image](https://user-images.githubusercontent.com/24251508/225425335-62dc06e4-7782-4d8b-b74b-1c50d7c06c57.png)
We met to review that the following tasks have been completed:
- Sprint 1 build works and satisfies the 3 user stories we created.
- Sprint 1 build passes the testing suite. 
- Identified issues and tasks that need to be implemented in susbsequent sprints. Each task is documented on the trello board.
- Properly documented scrum meetings including each team members activities, obstacles, and contributions. 
- Properly documented tasks and their associated stories in the Trello board.
- Properly documented sprint progress with a burndown chart. 
- Pushed all reviewed code to github repository.
- Finalized readme for sprint 1 submission.   

#### 9. Your product increment is working software—the completed stories in this sprint must be reflected in the application/product (in form of features) and ready to show to your customer. A link to your working prototype should be documented in your git repo. (10.0 pts)

You can view the demo video submitted for the presentation portion of the project with the application running.  We're still working out a few kinks with the complicated build process (a separate front and back end that both need to be built), a goal we're trying to accomplish for Sprint 2.


## Sprint 2
#### 1. You have a forecast of how many story points your team can complete during this sprint. Your forecast is based on the Yesterday's Weather forecasting pattern. The forecast along with its rationale are documented in your git’s repo. 10.0 pts

#### 2. You decomposed stories into tasks. The tasks are clearly listed in your sprint backlog. 10.0 pts

#### 3. Your sprint backlog, including both stories and tasks, is represented in a kanban board. The kanban board, or a URL of the kanban board (from your online management tool), is documented in your git’s repo. I should be able to view the board.
[Update your sprint backlog task board. Make sure the URL or images are available in your GitHub repo]. 10.0 pts

#### 4. You have a sprint burndown chart. On the x-axis, you display time markers in units of 1 day. On the y-axis, you display story points remaining to get done. There is a linear curve descending from left to right; the leftmost point of the curve is number of story points in your sprint at sprint day 1; the rightmost point is 0 story points remaining on the last day of the sprint. The burndown chart, or the URL of the burndown chart (from your online management tool), is documented in your git’s repo. I should be able to view the burndown chart.
[Update your burndown chart. Make sure the URL or images are available in your GitHub repo.] 10.0 pts

#### 5. You have conducted multiple Daily Scrums. You have evidence of at least one daily scrum documented in your git’s repo, should cover the following three items:
-What did you do in the last 24 hours that helped the Development Team meet the Sprint Goal? Annotate your team's response so it's clear which team members did which activities.
-What will you do in the next 24 hours to help the Development Team meet the Sprint Goal? Annotate your team's response so it's clear which team members plan to do which activities.
- Do you see any impediment that prevents you or the Development Team from meeting the Sprint Goal? What are the impediments? What is your impediment removal plan? 10.0 pts

#### 6. There is evidence that you paired or mobbed on your code. The evidence could be a photo or video of your team working together, or it could be some other kind of evidence. The evidence is included in your GitHub repo. 10.0 pts

#### 7. There is evidence that you are building your product test-first. There are at least 2 BDD / A-TDD test in your test suite (at least 1 new one this sprint), and it passes. There are at least 20 unit tests in your test suite (at least 10 new unit tests this sprint), and they all pass. 15.0 pts

#### 8. Your team conducts a Sprint Review. There should be an evidence to that. 5.0 pts

#### 9.You have a Continuous Integration system running. The CI system automatically builds your code every time you merge to master. The CI system executes your tests every time it builds the code. The evidence/link is included in your GitHub repo. 10.0 pts

#### 10. You have a Continuous Deployment system running. The CD system deploys your software to a production-like environment. The CD system executes additional tests of your software in the production-like environment. The CD system deploys your software to a live production environment. Your live production environment works properly. The evidence/link is included in your GitHub repo. 10.0 pts

### Trello
Public Link : https://trello.com/w/workspace57274945



