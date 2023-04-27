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

We forecast that we can complete 2 user stories required for this project which are matchmaking and deployment. This is based off of how much work we were able to accompblish during sprint 1. We have less time during this sprint so we have decided to prioritize the key functions of this service.  
1. A user is able to be matched with compatible players.
2. A user can access the service through a our provided URL.

#### 2. You decomposed stories into tasks. The tasks are clearly listed in your sprint backlog. 10.0 pts

Our trello board has each story decomposed into tasks. Each card represents a task that is mapped to each story. The completion of all of a stories cards means that all tasks are completed and the story is completed. Completed stories and their respective tasks are backlogged on our board under the "done" category.

#### 3. Your sprint backlog, including both stories and tasks, is represented in a kanban board. The kanban board, or a URL of the kanban board (from your online management tool), is documented in your git’s repo. I should be able to view the board.
[Update your sprint backlog task board. Make sure the URL or images are available in your GitHub repo]. 10.0 pts

The stories and their associated tasks for sprint 2 can be [viewed on Trello](https://trello.com/b/k2f9U58h/sprint-2).

#### 4. You have a sprint burndown chart. On the x-axis, you display time markers in units of 1 day. On the y-axis, you display story points remaining to get done. There is a linear curve descending from left to right; the leftmost point of the curve is number of story points in your sprint at sprint day 1; the rightmost point is 0 story points remaining on the last day of the sprint. The burndown chart, or the URL of the burndown chart (from your online management tool), is documented in your git’s repo. I should be able to view the burndown chart.
[Update your burndown chart. Make sure the URL or images are available in your GitHub repo.] 10.0 pts

The tasks on the burndown chart directly correlate with a task inside of trello.  The planned tasks blue line is the estimated task completion rate (there's an assumption that there's a linear rate of completion) and the actual tasks red line is the actual rate of task completion throughout the sprints duration.

The Sprint #2 burndown chart can be [viewed here](https://docs.google.com/spreadsheets/d/1q3j7cHHDMNimTq_LC8vwiPS-vyIxROYsbnZN1WLxpEc/edit#gid=2080079855).

#### 5. You have conducted multiple Daily Scrums. You have evidence of at least one daily scrum documented in your git’s repo, should cover the following three items:
-What did you do in the last 24 hours that helped the Development Team meet the Sprint Goal? Annotate your team's response so it's clear which team members did which activities.
-What will you do in the next 24 hours to help the Development Team meet the Sprint Goal? Annotate your team's response so it's clear which team members plan to do which activities.
- Do you see any impediment that prevents you or the Development Team from meeting the Sprint Goal? What are the impediments? What is your impediment removal plan? 10.0 pts

<img width="1440" alt="Screenshot 2023-03-22 at 12 28 07 PM" src="https://user-images.githubusercontent.com/103462168/229969076-e0210870-22ee-42fa-95ad-88dc60a18f5b.png">
During this meeting we discussed features for sprint 2. Our primary goal is to figure out the matchmaking algorithm and deployment on Digital Ocean. Evan is working on deployment, John is working on the matchmaking algorithm, Jordan is working on the search bar for friends list on the UI, and Fredy is working on creating the BDD tests for the frontend using Jest.
The full record of meetings [Can be viewed here](https://docs.google.com/document/d/13vrNviHJNU_RgElHAn5KOSyl32PUu4H0EczT8A0vTHc/edit?usp=sharing)

<img width="1440" alt="Screenshot 2023-04-04 at 11 22 07 AM" src="https://user-images.githubusercontent.com/103462168/230126233-32bb3b6e-4576-4e0d-a427-5f611fe54d66.png">
During this meeting we met to go over sprint 2 and discuss the remaining to-do’s. In the last 24 hours every group member has submitted the last of their code for review. The remaining parts of the readme are going to be filled out asynchronously. 



#### 6. There is evidence that you paired or mobbed on your code. The evidence could be a photo or video of your team working together, or it could be some other kind of evidence. The evidence is included in your GitHub repo. 10.0 pts

<img width="1440" alt="Screenshot 2023-04-04 at 11 09 28 AM" src="https://user-images.githubusercontent.com/103462168/229969979-76237c78-0c82-458d-8d4d-f47227702604.png">
During this meeting we worked on finalizing the matchmaking algorithm and how it well be utitlized in conjunction with web sockets for sprint 2.  

#### 7. There is evidence that you are building your product test-first. There are at least 2 BDD / A-TDD test in your test suite (at least 1 new one this sprint), and it passes. There are at least 20 unit tests in your test suite (at least 10 new unit tests this sprint), and they all pass. 15.0 pts

In this sprint, the matchmaking functionality is beginning to be fleshed out.  These functions will end up doing a lot and the scope of the unit testing this sprint was focused on these functions.

![image](https://user-images.githubusercontent.com/24251508/230140295-30daaf58-1913-4ca4-b15e-d2a5d2c3aace.png)

In the above image you can see the test suite running and being passed with some of the matchmaking algorithm functions tested in addition to the previous unit tests from sprint 1.

Two end to end (E2E) tests were written in [Cypress](https://www.cypress.io/) to test the user login and registration flows to cover the BDD component.  These tests are written in plain language and map to easily understandable features on the application (Register to create an account and Login with that account).  You can see those tests below.

![image](https://user-images.githubusercontent.com/24251508/230264225-2ae69cfd-d616-4324-b66b-85d48aedc904.png)

#### 8. Your team conducts a Sprint Review. There should be an evidence to that. 5.0 pts

<img width="1440" alt="Screenshot 2023-04-04 at 11 23 01 AM" src="https://user-images.githubusercontent.com/103462168/229970347-31a49c51-a9b3-45cc-b8fd-ac14a420b1fc.png">

The goals we set for sprint 2 were over ambitious. We have made progress with each of the stories but were not able to fully satisfy every requirement. Our project is deployed and utitlizes CI/CD. Using jest we were only able to write tests for the backend. We have pushed the remaining tasks over to sprint 3. 

#### 9.You have a Continuous Integration system running. The CI system automatically builds your code every time you merge to master. The CI system executes your tests every time it builds the code. The evidence/link is included in your GitHub repo. 10.0 pts

A Continuous Integration system exists on the repository using Github Actions.  Once a pull request is initiated on the main branch and approved by a repository owner, a Github Action named [CICD](https://github.com/e-vana/SWE-6813-G4/actions/workflows/cicd.yml) gets run.  Broadly, this action creates a virtual machine using Githubs resources, installs the proper project dependencies, performs the typescript compilation and then runs the Jest test suite.

![image](https://user-images.githubusercontent.com/24251508/230135411-b62cf406-c8f4-4fc9-8c68-182ae5573460.png)

In the above image you can see the workflow and that the deployment portions are contingent on the "Run Unit Tests" action being successful.

![image](https://user-images.githubusercontent.com/24251508/230135703-71cb8283-ba42-4b5c-b98c-e549d631c85e.png)

In the above image you can see the steps taken in the "Run Unit Tests" action and the test results. Note, this is not reflective of all current tests, this image just shows the CI process.

#### 10. You have a Continuous Deployment system running. The CD system deploys your software to a production-like environment. The CD system executes additional tests of your software in the production-like environment. The CD system deploys your software to a live production environment. Your live production environment works properly. The evidence/link is included in your GitHub repo. 10.0 pts

A Continuous Deployment system exists on the repository using Github Actions.  Once a pull request is initiated on the main branch and approved by a repository owner, a Github Action named [CICD](https://github.com/e-vana/SWE-6813-G4/actions/workflows/cicd.yml) gets run.  Broadly, this action creates a virtual machine using Githubs resources, installs the proper project dependencies, performs the typescript compilation and then runs the Jest test suite.  If all of the test actions pass, the continuous deployment part of the workflow is triggered.  Both the frontend and backend are deployed to separate Digital Ocean application isntances; this Github Action triggers the build process and a specific YAML configuration on Digital Ocean for both components.

![image](https://user-images.githubusercontent.com/24251508/230136576-bef3ce5b-5577-410e-98c8-5b9439b8e606.png)

In the above image you can see the Digital Ocean backend deployment action being dispatched after a successful test run.

The frontend deployment can be accessed [here](https://hammerhead-app-adu3m.ondigitalocean.app/)


## Sprint 3
### Criteria and Rubric
#### 1. You have a forecast of how many story points your team can complete during this sprint. Your forecast is based on the Yesterday's Weather forecasting pattern. The forecast along with its rationale are documented in your git’s repo.
10.0 pts

Based on what we were able to accomplish from sprint 2 we predicted that we could accomplish 3 stories for sprint 3. These all involve the final requirement of the application which is that a user is able to succesfully enter into matchmaking so they can be paired with compatible players. 
1. Finishing the matchmaking algorithm that was unfinished from sprint 2.
2. Integrating web sockets so a user is able to enter into matchmaking.
3. Complete the matchmaking elements in the UI. 

#### 2. You decomposed stories into tasks. The tasks are clearly listed in your sprint backlog.
10.0 pts

Our trello board has each story decomposed into tasks. Each card represents a task that is mapped to each story. The completion of all of a stories cards means that all tasks are completed and the story is completed. Completed stories and their respective tasks are backlogged on our board under the "done" category.

#### 3. Your sprint backlog, including both stories and tasks, is represented in a kanban board. The kanban board, or a URL of the kanban board (from your online management tool), is documented in your git’s repo. I should be able to view the board.
[Update your sprint backlog task board. Make sure the URL or images are available in your GitHub repo].
10.0 pts

The stories and their associated tasks for sprint 3 can be [viewed on Trello](https://trello.com/b/JRYxW8TT/sprint-3).

#### 4. You have a sprint burndown chart. On the x-axis, you display time markers in units of 1 day. On the y-axis, you display story points remaining to get done. There is a linear curve descending from left to right; the leftmost point of the curve is number of story points in your sprint at sprint day 1; the rightmost point is 0 story points remaining on the last day of the sprint. The burndown chart, or the URL of the burndown chart (from your online management tool), is documented in your git’s repo. I should be able to view the burndown chart.
[Update your burndown chart. Make sure the URL or images are available in your GitHub repo.]
10.0 pts

The tasks on the burndown chart directly correlate with a task inside of trello.  The planned tasks blue line is the estimated task completion rate (there's an assumption that there's a linear rate of completion) and the actual tasks red line is the actual rate of task completion throughout the sprints duration.

The Sprint #3 burndown chart can be [viewed here](https://docs.google.com/spreadsheets/d/1q3j7cHHDMNimTq_LC8vwiPS-vyIxROYsbnZN1WLxpEc/edit?usp=sharing).
<img width="602" alt="image" src="https://user-images.githubusercontent.com/103462168/234371925-2969c8b4-2242-4614-95c7-02d235b4f6a4.png">

#### 5. You have conducted multiple Daily Scrums. You have evidence of at least one daily scrum documented in your git’s repo, should cover the following three items:
-What did you do in the last 24 hours that helped the Development Team meet the Sprint Goal? Annotate your team's response so it's clear which team members did which activities.
-What will you do in the next 24 hours to help the Development Team meet the Sprint Goal? Annotate your team's response so it's clear which team members plan to do which activities.
- Do you see any impediment that prevents you or the Development Team from meeting the Sprint Goal? What are the impediments? What is your impediment removal plan?
10.0 pts

<img width="1440" alt="Screenshot 2023-04-10 at 12 24 39 PM" src="https://user-images.githubusercontent.com/103462168/234372429-aa55fa94-2718-40f1-8b9e-bbcb87f26eaa.png">
During this meeting we met to discuss the plan for sprint 3. We decided to focus on finishing the incomplete stories from sprint 2 first, which is finishing the matchmaking algorithm. Our goal is to fully integrate the matchmaking function of the application so that it is usable for the end user.  In the last 24 hours John has been working with Evan on finishing the matchmaking algorithm, Jordan has been working on the UI elements for the matchmaking function, and Fredy has been continuing to work on the BDD tests and writing the error messages for the front end. 


#### 6. There is evidence that you paired or mobbed on your code. The evidence could be a photo or video of your team working together, or it could be some other kind of evidence. The evidence is included in your GitHub repo.
10.0 pts

<img width="1210" alt="Screenshot 2023-04-25 at 4 03 22 PM" src="https://user-images.githubusercontent.com/103462168/234390189-4240c9d0-b9d7-4fa6-97cc-567c3396d2f1.png">
In this meeting John and Evan were working on the matchmaking algorithm for sprint 3. 

#### 7. There is evidence that you are building your product test-first. There are at least 3 BDD / A-TDD tests in your test suite (at least 1 new one this sprint), and it passes. There are at least 30 unit tests in your test suite (at least 10 new unit tests this sprint), and they all pass.
10.0 pts

![MicrosoftTeams-image7a0bfea7bdf7f3b9e4e4d05d35c20f1738551844eb3ecdcf8eb9a3bcddb04dd3](https://user-images.githubusercontent.com/103462168/234744527-33d5eb26-c96e-48d2-b7ad-5a993c003e38.png)

There's a few End to End (E2E) tests written in Cypress that check the core functionality of the web app such as navigating to the home page, registering an account and logging in.

#### 8.You have a Continuous Integration system running. The CI system automatically builds your code every time you merge to master. The CI system executes your tests every time it builds the code. The evidence/link is included in your GitHub repo. 10.0 pts

A Continuous Integration system exists on the repository using Github Actions.  Once a pull request is initiated on the main branch and approved by a repository owner, a Github Action named [CICD](https://github.com/e-vana/SWE-6813-G4/actions/workflows/cicd.yml) gets run.  Broadly, this action creates a virtual machine using Githubs resources, installs the proper project dependencies, performs the typescript compilation and then runs the Jest test suite.

![image](https://user-images.githubusercontent.com/24251508/230135411-b62cf406-c8f4-4fc9-8c68-182ae5573460.png)

In the above image you can see the workflow and that the deployment portions are contingent on the "Run Unit Tests" action being successful.

![image](https://user-images.githubusercontent.com/24251508/230135703-71cb8283-ba42-4b5c-b98c-e549d631c85e.png)

In the above image you can see the steps taken in the "Run Unit Tests" action and the test results. Note, this is not reflective of all current tests, this image just shows the CI process.

#### 9. You have a Continuous Deployment system running. The CD system deploys your software to a production-like environment. The CD system executes additional tests of your software in the production-like environment. The CD system deploys your software to a live production environment. Your live production environment works properly. The evidence/link is included in your GitHub repo. 10.0 pts

A Continuous Deployment system exists on the repository using Github Actions.  Once a pull request is initiated on the main branch and approved by a repository owner, a Github Action named [CICD](https://github.com/e-vana/SWE-6813-G4/actions/workflows/cicd.yml) gets run.  Broadly, this action creates a virtual machine using Githubs resources, installs the proper project dependencies, performs the typescript compilation and then runs the Jest test suite.  If all of the test actions pass, the continuous deployment part of the workflow is triggered.  Both the frontend and backend are deployed to separate Digital Ocean application isntances; this Github Action triggers the build process and a specific YAML configuration on Digital Ocean for both components.

![image](https://user-images.githubusercontent.com/24251508/230136576-bef3ce5b-5577-410e-98c8-5b9439b8e606.png)

In the above image you can see the Digital Ocean backend deployment action being dispatched after a successful test run.

The frontend deployment can be accessed [here](https://hammerhead-app-adu3m.ondigitalocean.app/)

#### 10. Sprint Review

<img width="1440" alt="Screenshot 2023-04-23 at 9 25 02 PM" src="https://user-images.githubusercontent.com/103462168/234378333-b2958dd4-ec7b-4f5c-9b43-4441b9826b73.png">
During our sprint review we went over the requirments that our project meets and reviewed our plan for submitting the reserch presentation. We were able to complete every task for story 3 with the exception of redirect pages for potential matches. However, our application is fully operational and is a functional matchmaking tool for players who want to be matched based on their compatibilty.  

#### 11. Your product is a complete software solution—the completed stories in this sprint and all pervious sprints must be shown in the application/product and ready to show to your customer for approval/acceptance.
10.0 pts

You can watch a [project demo here](https://www.youtube.com/watch?v=kJR2jhpFmZ0)

The frontend deployment can be accessed [here](https://hammerhead-app-adu3m.ondigitalocean.app/)

### Unresolved
The application currently doesn't redirect to a page with the generated matchmaking lobbies.  The backend code and database tables are finished but we ran out of time to complete our last sprint goal.  The table output for a lobby created looks like this:

![image](https://user-images.githubusercontent.com/24251508/234672346-a4e6dd2d-49df-46e4-9362-2ac81f7bbad5.png)


### Trello
Public Link : https://trello.com/w/workspace57274945



