# Product Management App - Backend

This is the backend part of the Product Management App, built using Node.js and Express. The application provides a REST API for managing products, including creating, updating, and deleting products. It also provides endpoints for filtering products based on colours and types.

## Table of Contents

- [Installation](#installation)
- [Scripts](#scripts)
- [API Endpoints](#api-endpoints)
- [Docker Setup](#docker-setup)
- [Project Structure](#project-structure)

## Installation

To get started with the backend, follow these steps:

1. Clone the repository:

   ```sh
   git clone https://github.com/HugoAshjaei/product-management-app.git
   ```

2. Navigate to the backend directory:

   ```sh
   cd backend
   ```

3. Install the dependencies:

   ```sh
   npm install
   ```

## Scripts

The following scripts are available in the `package.json` file:

- `start`: Starts the server.

  ```sh
  npm start
  ```

- `test`: Runs the tests.

  ```sh
  npm test
  ```

- `seedData`: Seeds the database with initial data.

  ```sh
  npm run seedData
  ```

- `build`: Installs dependencies, seeds data, and starts the server.

  ```sh
  npm run build
  ```

- `lint`: Lints the code using ESLint.
  ```sh
  npm run lint
  ```

## API Endpoints

The following endpoints are available:

#### Colours

`GET /api/colours/list`: List all colours.

#### Product Types

`GET /api/productTypes/list`: List all product types.

#### Products

`GET /api/products/list`: List all products.

`GET /api/products/get/:id`: Get product details by ID.

`POST /api/products/add`: Add a new product.

`PUT /api/products/update/:id`: Update a product by ID.

`DELETE /api/products/delete/:id`: Delete a product by ID.

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
backend/
├── _migrations/
│   ├── data/
│   │   ├── colours.txt
│   │   └── product-types.txt
│   └── seedProductTypesAndColours.js
├── config/
│   ├── db.js
│   └── env.js
├── constants/
│   └── errors.js
├── controllers/
│   ├── colours/
│   │   └── coloursControllers.js
│   ├── productTypes/
│   │   └── productTypesControllers.js
│   └── products/
│       ├── addProduct.js
│       ├── deleteProduct.js
│       ├── getProductById.js
│       ├── listProducts.js
│       ├── productsControllers.js
│       └── updateProduct.js
├── middlewares/
│   ├── errorHandler.js
│   ├── rateLimiter.js
│   ├── requestsLogger.js
│   └── validator.js
├── models/
│   ├── Colour.js
│   ├── Product.js
│   └── ProductType.js
├── repositories/
│   ├── colours/
│   │   ├── coloursRepository.js
│   │   ├── getColours.js
│   │   └── insertColours.js
│   ├── productTypes/
│   │   ├── getProductTypes.js
│   │   ├── insertProductTypes.js
│   │   └── productTypesRepository.js
│   └── products/
│       ├── deleteProduct.js
│       ├── getProductById.js
│       ├── insertProduct.js
│       ├── listProducts.js
│       ├── productsRepository.js
│       └── updateProduct.js
├── routes/
│   ├── colours/
│   │   └── coloursRoutes.js
│   ├── index.js
│   ├── productTypes/
│   │   └── productTypesRoutes.js
│   └── products/
│       └── productsRoutes.js
├── tests/
│   ├── repositories/
│   │   ├── colours/
│   │   │   └── coloursRepository_tests.js
│   │   ├── productTypes/
│   │   │   └── productTypesRepository_tests.js
│   │   └── products/
│   │       ├── productRepositoryListProductsGenerateQuery_tests.js
│   │       └── productRepository_tests.js
│   └── setup.js
├── utils/
│   └── logger.js
├── validators/
│   ├── products/
│   │   ├── addProductValidator.js
│   │   ├── deleteProductValidator.js
│   │   ├── fields/
│   │   │   ├── details.js
│   │   │   └── id.js
│   │   ├── getProductValidator.js
│   │   ├── index.js
│   │   ├── productListingsValidator.js
│   │   └── updateProductValidator.js
├── .gitignore
├── endpoints.http
├── eslint.config.mjs
├── index.js
├── package.json
|── Dockerfile
└── README.md
```
