# Express Typescript API

## Getting Started

1. Copy the `.env.example` file to a new file called `.env` in the root directory

2. In the terminal run `docker-compose up --build` to start the Node and Postgres containers

3. After the containers have started open a new terminal and run `yarn migration:run` to run pending migrations

4. Open up the browser and navigate to http://localhost:5000/api and you should see a text response that says 'Welcome to the API!'.
