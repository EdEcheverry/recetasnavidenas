BookStock 

Este proyecto es una página web cuyo fin es ayudar a la hora de crear un inventario de manera rápida e intuitiva.  



Instrucciones de creación: 

Creamos una carpeta nueva en el escritorio.

Abrimos esta carpeta en una terminal. 

Utilizamos el comando npm init -y

Luego utilizamos el comando npm install express mongoose cors dotenv

Seguidamente utilizamos el comando npm install -D nodemon eslint prettier eslint-config-prettier eslint-plugin-node eslint-plugin-import

git init

npx create-gitignore node      (Cuando el código se sube a git queda público y lo que hace esto es evitar que cierta información sea accesible para la gente)

npm install -D typescript ts-node @types/node @types/express @types/mongoose @types/cors nodemon eslint prettier eslint-config-prettier eslint-plugin-node eslint-plugin-import

npx tsc --init

Se modifica el tsconfig.json

Se crea el archivo .env

Se crea la carpeta src

Dentro de src se crean los archivos server.ts y app.ts

Dentro de src se crean las carpetas controllers, models, routes, utils

Dentro de controller se crean los archivos userController.ts y recipeController.ts

Dentro de models se crean los archivos User.ts Recipe.ts

Dentro de routes se crean los archivos recipeRoutes.ts userRoutes.ts

Dentro de utils se crea el archivo db.ts

Compilamos utilizando el comando en una terminal npm run build

Inicamos servicio en Mongo utilizando el comando mongodb

Iniciamos servicio utilizando el comando npm start

Abrimos postman y probamos las rutas utilizando el POST y el GET.



Frontend.

Abrimos la carpeta "RecetasNavidenas" en el terminal.
Utilizamos el comando npm create vite@lastest frontend
Seleccionamos React y Typescript
