# 🎬 Theater app

The **Theater App** is a full-stack application developed using Spring Boot for the backend and React for the frontend. The backend uses Spring Boot's web, data, and security modules, while the frontend is built using React with Webpack, and styled using Tailwind CSS.

## ⚒️ Tech Stack

### 💾 Backend
- Java 17
- Spring Boot 3.3.1
- PostgreSQL (for production)
- H2 Database (for development)
- Liquibase (for database migrations)
- MapStruct (for object mapping)
- Swagger (for API documentation)

### 🖼️ Frontend
- Node.js 20.12.2
- React 18.2
- Webpack for module bundling
- TailwindCSS for styling
- TypeScript for static type checking

## 🧰 Setup and Installation

### Prerequisites
- Java 17 installed on your machine.
- Node.js and npm (Node.js version 20.12.2, npm version 10.5.0)
- PostgreSQL

### Steps

1. Clone the repository
2. Install backend dependencies using Gradle:
```
./gradlew build
```

## 🚀 Running the Application
### Backend
To start the Spring Boot backend, run:
```
./gradlew bootRun
```
By default, the backend will run at http://localhost:8080.

### Frontend
Navigate to the frontend directory and install the frontend dependencies:
```
cd frontend
```
In development mode, you can start the frontend server separately:
```
npm start
```
By default, the frontend will run at http://localhost:3000.

### Frontend Build Process
To build the frontend for production:
```
npm run build
```

This will generate a build inside the `dist/` folder and copy the static files to the Spring Boot `src/main/resources/static` folder.

## 🗒️ Scripts

### Backend Scripts
- Build the backend: `./gradlew build`
- Run the backend: `./gradlew bootRun`
- Run tests: `./gradlew test`
### Frontend Scripts
- Install dependencies: `npm install`
- Run development server: `npm start`
- Build production frontend: `npm run build`
- Lint the code: `npm run lint`
- Format code using Prettier: `npm run format`


## Demo user
**username:** super
**password:** Password123
