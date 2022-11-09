# SuperDraft Fantasy

SuperDraft is an Australian Rules fantasy football application that allows users to create, customise and run auction drafts!

It is the only platform of its kind for Australian Rules Fantasy Football.

SuperDraft is built using the following technology stack:
- Frontend - React
- Backend - Java Spring Boot Maven
- Database - PostgreSQL
- Containerisation - Docker

Please follow the below steps to run the application locally:
1. Navigate to the /docker directory and run ```docker-compose up -d``` to start the PostgreSQL DB Docker Container.
2. Navigate to the /backend directory and run ```mvn clean install``` to install the Backend application.
3. From the /backend directory, run ```mvn spring-boot:run``` to start the Backend application.
4. Navigate to the /frontend directory and run ```npm start``` to start the React application.
5. Once started, the application should open in your browser on localhost:3000.