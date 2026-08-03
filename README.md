# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/cre

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Start Client and Backend

Follow these concise steps to run the React client and the BookStore Spring Boot backend.

- **Install dependencies (client)**: run:

```
npm install
```

- **Start the React client (development)**: runs the CRA dev server with hot reload:

```
npm run dev
```

Open http://localhost:3000 in your browser.

- **Run the React client as a production build locally** (creates `build/` then serves it):

```
npm run build
npm start
```

Note: `npm start` serves the `build/` folder (uses `serve -s build`), so you must run `npm run build` first.

- **Start the BookStore Spring Boot backend** (from the backend project root):

Use the Maven wrapper (preferred if present):

```
./mvnw spring-boot:run
```

Or with a local Maven/Gradle install:

```
mvn spring-boot:run
```

- **Order & notes**:
  - Start the Spring Boot backend first so the client can reach the API (default backend port: `8080`).
  - If your backend runs on a non-default port, update the client configuration or environment variables so API requests point to the correct host/port.
  - If you deploy the client to a static host, enable an index fallback (history API fallback) on the server or use `HashRouter` in the client to avoid 404 on refresh.
