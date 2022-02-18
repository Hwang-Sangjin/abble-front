# base image
FROM node:12.22.0 AS build

WORKDIR /app
COPY ./project/abble-client /app/
RUN npm install && npm run build

FROM build as local

ENTRYPOINT ["npm", "run", "start"]

FROM nginx AS server

WORKDIR /usr/share/nginx/html
RUN rm -rf ./*
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/build .
ENTRYPOINT ["nginx", "-g", "daemon off;"]