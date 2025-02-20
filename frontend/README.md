# Product Management App - Frontend

This is the frontend part of the Product Management App, built using React and Vite. The application allows users to manage products, including creating, updating, and deleting products. It also provides filtering options based on product colours and types.

## Table of Contents

- [Installation](#installation)
- [Scripts](#scripts)
- [Pages](#pages)
- [API](#api)
- [Docker Setup](#docker-setup)
- [Project Structure](#project-structure)

## Installation

To get started with the frontend, follow these steps:

1. Clone the repository:

   ```sh
   git clone https://github.com/HugoAshjaei/product-management-app.git
   ```

2. Navigate to the frontend directory:

   ```sh
   cd frontend
   ```

3. Install the dependencies:
   ```sh
   npm install
   ```

## Scripts

The following scripts are available in the [package.json](http://_vscodecontentref_/1) file:

- `dev`: Starts the development server.

  ```sh
  npm run dev
  ```

- `build`: Builds the project for production.

  ```sh
  npm run build
  ```

- `lint`: Runs ESLint to check for linting errors.

  ```sh
  npm run lint
  ```

- `preview`: Previews the production build.

  ```sh
  npm run preview
  ```

- `test`: Runs the tests.

  ```sh
  npm run test
  ```

## Pages

- **ProductsList**: A page for displaying the list of products with filtering options.
- **AddProduct**: A page for adding a new product.
- **EditProduct**: A page for editing an existing product.

## API

The API is configured using Axios in the `axiosInstance.js` file. The base URL for the API is `http://localhost:4000/api/`.

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

The project structure is as follows:

```
frontend/
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── Dockerfile
├── public/
├── README.md
├── nginx/
│   └── default.conf
├── tests/
│   └── components/
│       ├── Dropdown.test.js
│       ├── FormInput.test.js
│       ├── LoadMore.test.js
├── src/
│   ├── api/
│   │   └── axiosInstance.js
│   ├── App.jsx
│   ├── components/
│   │   ├── Dropdown.jsx
│   │   ├── Filter.jsx
│   │   ├── FormFields.jsx
│   │   ├── FormInput.jsx
│   │   ├── FormSelect.jsx
│   │   ├── LoadMore.jsx
│   │   ├── ProductCard.jsx
│   │   ├── ProductForm.jsx
│   │   ├── ProductsList.jsx
│   ├── main.jsx
│   ├── pages/
│   │   ├── AddProduct.jsx
│   │   ├── EditProduct.jsx
│   │   └── ProductsList.jsx
│   └── styles/
│       ├── components/
│       │   ├── buttons.css
│       │   ├── dropdown.css
│       │   ├── load-more.css
│       │   ├── product-card.css
│       │   ├── product-form.css
│       └── layouts/
│           └── products-list.css
└── vite.config.js
```
