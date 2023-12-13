ARG NODE_VERSION='20.10.0'
ARG CHROME_VERSION='120.0.6099.71-1'
ARG CYPRESS_VERSION='13.6.0'


FROM cypress/factory:3.3.0
RUN node --version
RUN npm --version

WORKDIR /e2e

COPY ./package.json .
COPY ./package-lock.json .
COPY ./tsconfig.json .

COPY ./cypress.config.ts .
COPY ./cypress ./cypress

ENV CI=1

RUN npm ci
RUN npx cypress verify