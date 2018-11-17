<h1>Friend Finder</h1>

Live version: IP
<hr></hr>

Author: Michael Benefiel

Feel free to use some or all of this code if you're trying to complete a similar project.
<hr></hr>

<h3> App screenshot </h3>

![alt text](https://raw.githubusercontent.com/mjbenefiel/burger/master/public/assets/img/demo.jpg "Burger App")

<h2> Project overview</h2>
Eat Da Burger is a full stack application utilizing MySQL, Node, Express, Handlebars and a homemade ORM. MVC design pattern implemented. Node and MySQL query and route data in the app, and Handlebars to generate the HTML.

<hr></hr>

<h2> How it works </h2>
The user may enter any burger name to add it to the menu. This adds the new burger entry into the MySQL database. The initial burger entry is added as available on the menu and placed on the left side of the screen. The user may then eat any burger by clicking on it, which moves it into the adjacent column and updates its status accordingly in the database. They may delete the burger to clear it from the screen, too.
<hr></hr>

<h2>Technology used</h2>

[Node.js](https://nodejs.org/en/)

[Express](https://expressjs.com/)

[Heroku](https://heroku.com/)

[Handlebars](https://handlebarsjs.com/)

[MySQL](https://www.mysql.com/)

<hr></hr>

<h4>Below is a summary of how the app is structured</h4>

- config
    - connection.js
        - establish database connection
    - orm.js
        - object for all of our SQL statement functions

- controllers
    - burger_controllers.js
        - routing for our burger app

    - db
        - schema.sql
        - seeds.sql
      
- models
    - burger.js
        - importing orm to create functions that will interact with database
    
    - public
        - assets for images, css and simple js file
        - app.get to pull survey page

- views
    - handlebars functionality

- server.js
    - configuration of server and application
