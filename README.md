# Frontend Application

This is a frontend application built with React for displaying news articles. It allows users to search for articles by keyword and filter the results by date, category, and source.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Containerization with Docker](#containerization-with-docker)
- [Contributing](#contributing)
- [License](#license)

## Installation

To install the dependencies, run the following command:

```bash
npm install
npm start
```

This will start the application in development mode and open it in your default web browser at http://localhost:5173

## Containerization with Docker

To containerize the frontend application using Docker, follow these steps:

Ensure that Docker is installed on your system.

Open a terminal and navigate to the root directory of the project.

Build the Docker image using the following command:

```bash
docker run -p 3000:3000 frontend-app

or

docker build -t <image_name> .
```
