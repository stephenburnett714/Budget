# Budget

A car rental app that where you can create a user and make car rental reservations.
Project Overview

## Project Description

This is a replica Budget Car Rental app. By replica I mean new and improved. The is a mobile-first design provided by Ux team.  All dev team members(Alex, Anthony, and Stephen) will be responsible for backend and front end features as a form of checks and balance support system. UX/UI Team (Bryn, Greg, Victoria) provided wireframes for us to follow to see to completion. 

## Wireframes

![Erd Diagram](https://res.cloudinary.com/anthony-dev/image/upload/v1581717215/rxP9TmR_-_Imgur_a01lrb.png) 

## MVP

- Duplicate the Orbitz
- Create front-end as specified in wireframe
- Create back-end 
- Full CRUD Functionality

## Post-MVP

- External API to add features/functionality 
- Autocomplete
- Favorite pickup/drop-off locations
- Change prices in calendar based on holidays/weekends

## ERD Diagram

![Erd Diagram](https://res.cloudinary.com/anthony-dev/image/upload/v1581717078/Edited_ERD_wdraso.png) 

## Endpoints

List the backend routes you expect to utilize with a description of their functionality, and include at least one example of sample JSON to be returned

```
ENDPOINTS EXAMPLE:

GET / homepage
Main page. Where you choose whether you want to make a booking or if you already have a booking 

GET /user/signup
Show route for sign up/sign-in

POST /user/login
Create route for a user to log in

GET /user/user_id/reservation
Show reservation info from a booked user.

```

## Sample JSON from GET /api/users

```
[
  {
    "name": "Erinn",
    "email": "erinn@erinn.erinn",
    "likes": [
      {
        "name": "Frank"
      }
    ]
  },
  {
    "name": "Frank",
    "email": "frank@erinn.erinn",
    "likes": [
      {
        "name": "Erinn"
      }
    ]
  }
]
```

## React Component Hierarchy

![React Component Hierarchy](https://res.cloudinary.com/anthony-dev/image/upload/v1581717005/Screen_Shot_2020-02-14_at_4.47.55_PM_l20qau.png) 

## React Components

| Component | Description |
| --- | :---: |
| App | This component will render the Header, Footer and Main Routes. It will be a class component that uses state to store user info. |
| Profile | This class component will serve as a route for a logged in user's profile, and will track state for user "likes." |
| Header | Nav bar, Sign in, Drop Down Menu |
| Footer | None on the mobile version |
| Body | Sign in page, Calendar, Mobile landing page, Driver Help Page, Select a car, Promotions, Add Ons, Payment page |



## Priority Matrix

![Priority Matrix](https://res.cloudinary.com/anthony-dev/image/upload/v1581714615/Screen_Shot_2020-02-14_at_3.49.21_PM_pg5nhk.png)


## Timeframes

| Component | Priority | Estimated Time | Time Invested | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Styling/CSS | H | 16 hrs| 0 hrs | 0 hrs |
| React Components | H | 10 hrs| 0 hrs | 0 hrs |
| Setup database | H | 10 hrs| 0 hrs | 0 hrs |
| Logic Functionality | H | 12 hrs| 0 hrs | 0 hrs |
| Full CRUD Functionality | H | 18 hrs| 0 hrs | 0 hrs |
| Merging Front-End/Back-End | H | 10 hrs| 0 hrs | 0 hrs |
| Total | H | 76 hrs| 0 hrs | 0 hrs |

## Additional Libraries

Axios, bcrypt, body-parser, cors, dotenv, express, morgan, pg, react, react-doe, react-router-dom

## Expected Issues

- Merging front end to back end
- GitHub merging amongst team

## Issues and Resolutions

Use this section to list of all major issues encountered and their resolutions

ISSUES AND RESOLUTIONS EXAMPLE:
ERROR: app.js:34 Uncaught SyntaxError: Unexpected identifier RESOLUTION: Missing comma after first object in sources {} object

## Code Snippet

```
Use this section to include a brief code snippet of functionality that you are proud of an a brief description
function reverse(string) {
	// here is the code to reverse a string of text
}
```

## Change Log

Update as necessary with any changes or directional adjustments made throughout the project week
