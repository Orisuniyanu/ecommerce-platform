FROM node:18 as build
WORKDIR /app
COPY . .
RUN npm install && npm run build

# Image to pull and runs
FROM nginx:alpine
COPY --from=build /app/build /usr/share/nginx/html
