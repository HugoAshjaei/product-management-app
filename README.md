# Product Management App

This project is a Product Management App that includes both a frontend and a backend. The frontend is built using React and Vite, while the backend is built using Node.js and Express. The application allows users to manage products, including creating, updating, and deleting products. It also provides filtering options based on product colours and types.

## Table of Contents

- [Objective](#objective)
- [Installation](#installation)
- [Scripts](#scripts)
- [Docker Setup](#docker-setup)
- [Project Structure](#project-structure)

## Objective

Refer to [task.md](task.md)

## Installation

To get started with the project, follow these steps:

1. Clone the repository:

   ```sh
   git clone https://github.com/HugoAshjaei/product-management-app.git
   ```

2. Navigate to the frontend and backend directories and install the dependencies:

   ```sh
   cd frontend
   npm install
   cd ../backend
   npm install
   ```

3. Create a `.env` file in the `backend` and `frontend` by copying the `.env.example` file:

   ```sh
   cp backend/.env.example backend/.env
   cp frontend/.env.example frontend/.env
   ```

## Scripts

Find more information about the available scripts in the [frontend](frontend/README.md#scripts) and [backend](backend/README.md#scripts) README files.

## Docker Setup

To run the application using Docker, follow these steps:

1. Ensure you have Docker and Docker Compose installed on your machine.

2. Navigate to the root directory of the project where the docker-compose.yml file is located.

3. Build and start the containers:

   ```sh
   docker-compose up --build
   ```

4. The backend server will be available at `http://localhost:4000` and the frontend at `http://localhost:3000`.

## Project Structure

Find more information about the project structure in the [frontend](frontend/README.md#project-structure) and [backend](backend/README.md#project-structure) README files.
