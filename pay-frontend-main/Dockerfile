# Use an official Node runtime as the parent image
FROM node:14-slim

# Set the working directory in the container to /app
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install any needed packages specified in package.json
RUN npm install

# Bundle app source
COPY . .

# Build the app
RUN npm run build

# Use an official lightweight Node.js 14 image for the runtime.
FROM nginx:1.17-alpine

# Copy NGINX configuration file to the container
COPY react.conf /etc/nginx/conf.d/default.conf

# Copy build files from builder stage to nginx html directory
COPY --from=0 /app/build /usr/share/nginx/html

# Expose port 80
EXPOSE 8000

# Start nginx
CMD ["nginx", "-g", "daemon off;"]
