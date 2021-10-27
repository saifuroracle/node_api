
## Installation process

```
npm init -y 
npm install express mysql  --save
npm i -D nodemon

in package.json
 "scripts": {
    "dev": "npx nodemon server/server.js -w server"
  },

npm run dev
```


## mysql code (not used)
```
CREATE DATABASE node_app;
 
CREATE TABLE users (
  id int(11) NOT NULL AUTO_INCREMENT,
  name varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  email varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  password varchar(200) COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (id),
  UNIQUE KEY email (email)
 ) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

 INSERT INTO `node_app`.`users` (`name`, `email`, `password`) VALUES ('saifur', 'admin@gmail.com', '12345678');

```


## to run
```
npm install
```


## resources
* https://www.tutsmake.com/node-js-express-mysql-user-authentication-rest-api-example/ 
  * not working
* 