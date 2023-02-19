# BotBackend
## Como iniciar el proyecto?
Proyecto en desarrollo.


# Prerequisites 
## In order to set up Prisma Client, you need a Prisma schema file with your database connection, the Prisma Client generator, and at least one model
https://www.prisma.io/docs/concepts/components/prisma-client

## Also make sure to install the Prisma CLI:
npm install prisma --save-dev
npx prisma

## Install Prisma Client in your project with the following command:
npm install @prisma/client

## Generate models:
npx prisma generate --schema=./src/data/models/schema.prisma

