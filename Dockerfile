ARG NODE_VERSION='20.10.0'
ARG CHROME_VERSION='120.0.6099.71-1'
ARG CYPRESS_VERSION='13.6.0'

FROM cypress/factory:3.3.0

WORKDIR /e2e

COPY ./package.json .
COPY ./package-lock.json .
COPY ./tsconfig.json .

COPY ./cypress.config.ts .
COPY ./cypress ./cypress
