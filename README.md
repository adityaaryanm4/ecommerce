# MERN-eCommerce-Website
The application is built on MERN(MongoDB, Express.js, React.js, Node.js) stack.
Server is deployed on heroku & Front-end on netlify.

### Front-End [ client ]
* Log-in and Register Pages
* Token based system [JWT auth]
* Shopping cart
* Product pagination
* Product sort feature based on color, size, price.
* Stripe payment method
 
#### Developed with:
* React
* Material UI library
* Redux toolkit
* Redux persist
* Antd library
* Axios
* React bootstrap
* React router dom
* Styled components

### Front-End [ admin ]
* Has a homepage which displays the stats related to users, revenue and orders.

* Has a profile page, which displays all information about the user/product.

* Has protected Routes.

* Has products page where we can do all sorts of CRUD operations on the products.

* Has users page which lists all the users and allows CRUD operations on them. 


#### Developed with
* React, redux, data persistence, react-router-dom
* SCSS
* Firebase storage to store profile images.
* Recharts to display data in charts. 
* Material UI
* Axios
* dayjs

kara admin dashboard: https://karaadmin-dashboard.netlify.app/

### Back-End
* Uses Express js based application for the backend process.

* Uses MongoDB atlas for storing the collections.

* Uses JWT for authenticating user and token based system.

* Uses Bcrypt for hashing the password before sending the data to the cloud.

* Uses stripe for payments. 

#### This project also demonstrates:
* a typcial React project layout structure


### Getting Started
These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

#### Prerequisites
The following software is required to be installed on your system:

* Node 14.x or higher
* Npm 7.x

#### Install
Follow the following steps to get development environment running.
* Clone 'ecommerce.git' repository from GitHub

```bash
  git clone https://github.com/adityaaryanm4/ecommerce.git
  ```
  OR USING SSH
  
  ```bash
  git clone git@github.com:adityaaryanm4/ecommerce.git
  ```
* Install node modules

  ```bash
   cd ecommerce
   cd admin
   npm install
   cd..
   cd client
   npm install
   cd..
   cd server
   npm install
    ```
#### Starting both front end and back end servers
* Build application

This command will start the mongodb and the front end part.

```bash
cd admin
npm start
cd..
cd client
npm start
cd..
cd server
node index.js
```

