# React application

### Screenshots

![Alt text](/app_images/CountryMenu.png "Country Menu")

+ npm i -> install dependencies.
+ npm start -> start application.

## Features

This project makes use of an API ( https://restcountries.eu/rest/v2/ )

* It allows you to filter countries based on Region (Continent) and Name.
* Once a country is selected, you can access a more detailed description of its society:
 -> language, currencies, etc.
* This project makes use of react-hooks.
* There's also a button that allows you to change 
the theme of the application between 'dark' and 'light'.
* It's and SPA and therefore navigation is handled with the React-Router-Dom package.
* Styling has been setup with SCSS (CSS preprocessor). I decided to use css-modules to isolate the different classes that each functional component uses.
* The application has been developed to be fully responsive.
+ Also contains spinner (loading) and error handling.