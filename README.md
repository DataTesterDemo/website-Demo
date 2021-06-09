# Data Tester Demonstration Website 
This repository contains the demonstration website code

## Website Application (React)
Website is developed with ReactJS framework. `src` and `public` are the ReactJS folders for the web app, and to be edited for any website changes. 

Currently, changes to the React app will automatically be updated, built and deployed to Firebase once changes pushed to `main` branch. 

### Running Website on local machine
To run website on local machine, enter `npm run` in the terminal. a `localhost` website instance will be started.

## Website Hosting (Firebase)
Website is hosted on Firebase Hosting, a microservice hosting platform. Find out more: https://firebase.google.com/docs/hosting

### Deploying website
Download Firebase CLI via npm do link your Firebase project and deploy website.

**Note:** For the demo app, automatic deployment is done using Github Actions (see below), thus it is not necessary to manually deploy the website. 

## Continuous Deployment (Github Actions)
Deployment of website (React) to hosting platform (Firebase) is done automatically with Github Actions. Whenever a push is made to the `main` branch, Github Actions will automatically build and deploy the React App to the allocated Firebase Hosting project.

`.github/workflows` contains the `yml` file for the continuous deployment.

### Link to Firebase project
Deployment will be linked to a Firebase project via the `FIREBASE_TOKEN`. If there is a need to change the token (e.g. change of Google account; change in Firebase project), a new `FIREBASE_TOKEN` needs to be assigned

**Reassign `FIREBASE_TOKEN`:** go to `Settings` on tabs above -> go to `secrets` -> `update` the  `FIREBASE_TOKEN`

**Find out Firebase Token:** Using Firebase CLI on terminal, enter `firebase login:ci` to get your Firebase Token

**Check CD status:** go to `Actions` on the tabs above to see CD workflow status


## Data Tester Integration


