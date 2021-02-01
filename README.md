![Helpr logo](https://i.imgur.com/vvAng8X.png)
# Description
Helpr is an open-source project which works as a "Slack Bot" - the sole purpose of this project is to help Slack workspace creators add some variation to their channels by using a feature-rich bot. It is also of great help to myself - this is not a project which shows off enterprise-level code; but merely a project on which I had the occasion to play with things which weren't covered by my area of expertise. As a result, the code inside this repository might not be as efficient or professional as it should be - so any help to improve these is greatly appreciated. 

# Installation
This repository contains the "Helpr" and "Helpr API" projects - an Angular dashboard serving various options to the Slack workspace owner, and an API which serves as a backend for the Angular project respectively.

First and foremost, you need to create a separate Slack App. You can follow [this link](https://api.slack.com/apps) to create a Slack App. In order to run this project locally, you don't need to reach the distribution step.

## Helpr API (Node.JS Express)
Make sure you have Node.JS installed. If you don't, you can grab it from [this link](https://nodejs.org/en/).

Inside Helpr_API, you will notice a file named '.env.sample'. This is the file holding environment variables for the project. You will need to rename this file to simple '.env' and modify the contents of the file accordingly. The sample file includes logically named environment variables and a few tips in order to make everything more understandable.

After modifying the environment variables file, you only need to install the npm modules and run the project. For that, simply open up a terminal at the project's location (root of Helpr_API folder) and run npm install. After the npm module installation finishes, run "npm run dev". You should now be good to go. In order to test if the API is running, open up the browser and go to 'http://localhost:8080' (if you changed the port, replace it accordingly). The web page should show up a "Server is up and running" message.

## Helpr (Angular)
You will need to have a running API in order to be able to work on the Angular project. After you make sure the API is running, you're almost good to go.

Open up the environment.ts file inside Helpr/src/environments and edit the configuration accordingly. At the moment of writing, nothing should need to be changed. (only the port, if you've changed it inside the .env file of the API project)

Open up a terminal at the location of the project and run 'npm install'. After the npm module installation process finished, simply run 'npm start'. The entire project should now work.

If you have any issue, don't hesitate to create an issue in this repository.
