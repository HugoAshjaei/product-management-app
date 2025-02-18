FROM node:22.14.0 as build

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

# Use Nginx to serve the built frontend
FROM nginx:alpine

# Copy the static build files from the previous build step to Nginx web root
COPY --from=build /app/dist /usr/share/nginx/html

# Copy our custom Nginx configuration
COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf

# Expose port 80 (default Nginx port)
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]