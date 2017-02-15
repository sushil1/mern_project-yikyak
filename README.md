# mern_project-yikyak

Its a MERN practice project that is just copying the idea of the website yikyak
MERN app project
the project is similar to yikyak
we will get comments updates as per the location

PART 1:: Rest API

Generate a project using express
npm install all the dependencies

Define our routes, created ‘/api’ route

Create a models directory, which is basically our resource directory
Create files Comment.js and Zone.js and define our schemas.

Lets define our CRUD operation for each individual resources

Test all the crud operations on the database

Once our models and routing are working, we try to make our codes more 
modular 

PART 2:: Installing React

install react, react-dom
install web pack  dev dependencies and globally as well
install transpilers such as babel-core, babel-loader, babel-preset-react,
and babel-preset-es2015 as dev dependencies


web pack is a bundler, which runs babel tasks, babel transpile all our 
es2015 codes to es5
react code  transpiled by babel and bundled by
web pack before its run

we write web pack setup
create webpack.config.js

we write our component in react and run web pack in the cli to build 
the bundle file

we create component files and test them if they work fit in the browser

React, Components, Props, State, Style

React User Interaction and Updating state

We use super agent to call the API and update the results when our componentDidMount()


Part 3:: API Manager

pushing in github, 
create a .gitignore file
create a manifest .env (environment) file

put /node_modules/ and .env in .gitignore file
Lets make a repository out of our project
git init —initialise a repository
git add . —add all the files except the one in the .gitignore
git commit -m “message”
now we entered version control 
from now on whenever we make changes we need to commit
