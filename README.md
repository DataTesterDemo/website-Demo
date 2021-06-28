# Data Tester Demonstration Website 
This repository contains the demonstration website code and deployment actions. The demonstraction website serves to simulate various experimentation scenarios that showcases the features of DataTester. This website can be used for demonstrations or used as a demonstration sandbox for clients to experiment with.

## Website Application (React)
Website is developed with ReactJS framework. `src` and `public` are the ReactJS folders for the web app, and to be edited for any website changes. 

Currently, changes to the React app will automatically be updated, built and deployed to Firebase once a change is detected in the `main` branch.

### Experimenting own instance of website (For clients' experimentation)
Please fork this repository and make any changes on your forked repository. **DO NOT** make changes directly on the main repository. Once the repository is forked, complete the set-up by following the guide here: https://bytedance.feishu.cn/docs/doccn5ZL2UhedJHTRR1sbv8Kumh 

### Running Website on local machine
To run website on local machine, enter `npm run` in the terminal. a `localhost` website instance will be started. Note that Node and NPM must be installed on your local machine first before running website on your local machine.

## Website Hosting (Firebase)
Website is hosted on Firebase Hosting, a microservice hosting platform. Find out more: https://firebase.google.com/docs/hosting. Further, automatic deployment is set-up with Github Actions.

### Continuous Deployment (Github Actions)
Deployment of website (React) to hosting platform (Firebase) is done automatically with Github Actions. Whenever a push is made to the `main` branch, Github Actions will automatically build and deploy the React App to the allocated Firebase Hosting project.

`.github/workflows` contains the `yml` file for the continuous deployment.

### Link to Firebase project
Deployment will be linked to a Firebase project via the `FIREBASE_TOKEN` and `FIREBASE_PROJECT_ID` tokens. These tokens should be retrieved from the Firebase project you want the website to be deployed in and added into the repository via `settings` -> `secrets` tab on Github. 

For Clients: Request for these 2 tokens from ByteDance so that you can set-up automatic deployment for your own forked website for your own experimentation (note the website URL as well).

## DataTester Integration
DataTester integration is done via `script` tags in HTML. Further explanation/instructions can be found here: https://bytedance.feishu.cn/docs/doccn5ZL2UhedJHTRR1sbv8Kumh


