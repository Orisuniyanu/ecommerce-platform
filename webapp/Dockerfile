# Stage 1 - Build React App
FROM node:18 as build

WORKDIR /app
COPY . .

# Inject API base URL into the build process
ARG REACT_APP_API_URL
ENV REACT_APP_API_URL=$REACT_APP_API_URL

RUN npm install && npm run build

## Stage 2 - Serve with Nginx
FROM nginx:alpine

# Copy built React files to Nginx HTML folder
COPY --from=build /app/build /usr/share/nginx/html

# Custom Nginx config for React routing
COPY default.conf /etc/nginx/conf.d/default.conf

# Healthcheck
HEALTHCHECK CMD wget --no-verbose --tries=1 --spider http://localhost || exit 1
