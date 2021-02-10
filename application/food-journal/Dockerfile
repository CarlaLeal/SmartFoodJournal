FROM node:carbon-slim as build-stage
WORKDIR /app
COPY package*.json ./
RUN npm install
RUN npm install -g @vue/cli
COPY . .
CMD ["npm", "run", "serve"]
# FROM nginx:1.16.1-alpine as production-stage
# COPY --from=build-stage /app/dist /usr/share/nginx/html
# EXPOSE 80
# CMD [ "nginx", "-g", "daemon off;"]
