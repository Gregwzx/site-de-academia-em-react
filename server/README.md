UNDERGYM - Backend (Express + MongoDB)

Steps to run:
1) Install dependencies:
   cd server
   npm install

2) Create .env file (you can copy .env.example) and set MONGO_URI, e.g.:
   MONGO_URI=mongodb://localhost:27017/undergym
   PORT=4000

3) Start server:
   npm run dev   # requires nodemon installed as dev dependency
   or
   npm start

API endpoints:
- GET /api/planos
- POST /api/planos
- GET /api/modalidades
- POST /api/modalidades
- POST /api/contato
- GET /api/contato
