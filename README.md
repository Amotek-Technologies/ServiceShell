# ServiceShell

ServiceShell is a boilerplate for building RESTful APIs with Fastify and PostgreSQL.

## Technologies Used

- **Fastify**: A high-performance web framework for Node.js, used with TypeScript for type safety.
- **TypeScript**: A typed superset of JavaScript that compiles to plain JavaScript.
- **Nodemon**: A utility that monitors for changes in your source and automatically restarts your server.
- **Jest**: A delightful JavaScript Testing Framework with a focus on simplicity.
- **Drizzle ORM**: A lightweight and performant TypeScript ORM with a SQL-like query builder.

## Prerequisites

- Node.js (v14 or later)
- PostgreSQL

## Installation

1. Clone the repository
2. Install dependencies: ```npm install```
3. Set up your environment variables: Copy the `.env.example` file to `.env` and fill in your specific details.

## Handy Commands

### Development

Start the development server with hot-reloading

```npm run dev```

### Build

Compile TypeScript to JavaScript:

```npm run build```

### Start (Production)

Start the server in production mode:

```npm start```

### Test

Run tests:

```npm test```

### Database Migrations

Generate database migrations:

```npm run db:generate```

Migrate the database:

```npm run db:migrate```

Drop all tables in the database:

```npm run db:migrate:reset```
