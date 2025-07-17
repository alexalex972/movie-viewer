# NgMovieViewer19

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 19.2.15.

## Prerequisites 

### 1. run ```npm install```

### 2. Before starting the application create a src/enviroments folder and environment.ts file to add your TMDB API Token in the environment.ts file

```
export const environment = {
    production: false,
    tmdbApiToken: 'Your API Token',
    tmdbApiUrl: 'https://api.themoviedb.org/3'
};
```

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```