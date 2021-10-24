FROM node:16-alpine3.11


COPY . .
RUN yarn global add typescript
RUN yarn global add concurrently
RUN yarn global add ts-node
RUN yarn install-all
RUN yarn build-types

EXPOSE 5001/tcp
EXPOSE 3000/tcp

ENTRYPOINT ["yarn", "start"]
