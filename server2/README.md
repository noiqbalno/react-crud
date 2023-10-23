## sequelize

1. npx sequelize init

2. setting config.json

3. migration
   npx sequelize model:generate --name User --attributes username:string, email:string, password:string, image:string,role:string

npx sequelize model:generate --name Item --attributes name:string, category:string, price:integer, stock:integer, image:string, UserId:integer

5.migrate dan membuat table
-npx sequelize db:migrate
