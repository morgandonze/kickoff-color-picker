# Instructions

## Exercise

### Phase 1 -- Picker

Build a simple web based color picker. The picker should:

1. Take input for RGB values
2. Display the current color

### Phase 2 -- Swatches

Build a form to select a swatch of 5 colors.

### Phase 3 -- Persistence

Persist swatches to the database.

1. Add ability to save multiple swatches
2. Don't worry about mutiple users. Saved swatches are global.
3. Display all the persisted swatches in the UI.
4. Enable deleting of swatches.
5. Enable editing of swatches.

## Details

Feel free to look up syntax while working. Just don't copy any code verbatim. Try to come up with your own UI.

This codebase contains an Express server and a React app. The scaffold is in place to eliminate any setup. However, if you're more comfortable with your own tools, feel free to replace any or all of it.

Please take 2 hours to complete the exercise. If you choose to setup the app yourself instead of using the scaffold, take an extra 30min to get everything in place.

## Setup

### In /client, you'll find:

- A [Next.js](https://nextjs.org/) React App
- An example component that makes an AJAX call to the server

### In /server, you'll find:

- An [Express server](https://expressjs.com/) with a sample endpoint hit by the client
- A [Knex](https://knexjs.org/) instance connecting to a SQLite DB

### To start server

- cd server
- npm install
- npm run-migrations
- npm start

### To add a database migration

- npm create-migration -- {{migration_name}}
- npm run-migrations

### To start client

- cd server
- npm install
- npm start
- open [http://localhost:3000](http://localhost:3000)
