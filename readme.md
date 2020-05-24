# Asset Management React WebApp

Display datagrid with Assets Services with options to filter, sorting and export info to CSV. Project built with React 16.13, [Material UI](https://material-ui.com/), [Material Table](https://material-table.com/) using Node JS Express Server with [typicode-json-server](https://github.com/typicode/json-server) that provide a fake API based of JSON file.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

What things you need to install the software and how to install them

```
Node JS v13.6.0
yarn 1.22.0
npm 6.13.4
[heroku-cli](https://devcenter.heroku.com/articles/heroku-cli) for build to production
```

### Installing

A step by step series of examples that tell you how to get a development env running

Clone the repository

```
git clone git@github.com:nasarcacd/my-asset-management.git
```

Go to the root directory and run the following command

```
cd my-asset-management
npm install
```

Go to the `client` directory and run the following command

```
cd client
yarn
```

### Running the proyect

At the root folder run the following command:

```
yarn dev
```

### Take a look of our fake JSON DB

At the root folder take a look of db.json 

## Deploy to Production

Using heroku follow the next instructions:

```
heroku login
heroku create my-asset-management-webapp
git push heroku master
```

After that when you want to deploy new changes just run the following command:

```
git push heroku master
```

## Online DEMO

https://my-asset-management-webapp.herokuapp.com/