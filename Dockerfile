ARG NODE_VERSION='20.10.0'
ARG CHROME_VERSION='120.0.6099.71-1'


FROM cypress/factory

WORKDIR /e2e

COPY ./package.json .
COPY ./package-lock.json .
COPY ./cypress.config.ts .
COPY ./tsconfig.json .
COPY ./cypress ./cypress

RUN npm ci

#ENTRYPOINT ["npm", "run", "test"]