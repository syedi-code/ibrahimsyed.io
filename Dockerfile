### STAGE 1: Build ###
# Use an official Node.js runtime as a parent image
# Choose a version compatible with your project, LTS versions are good
FROM node:lts-alpine AS build

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json (or yarn.lock / pnpm-lock.yaml)
COPY package.json ./

# Install project dependencies
# Use 'npm ci' for cleaner installs in CI/CD environments if you have a package-lock.json
RUN rm -rf package-lock.json node_modules && npm install

# Copy the rest of your app's source code
COPY . .

# Build the Vue app for production
RUN npm run build

### STAGE 2: Serve ###
# Use a lightweight Nginx image to serve the static content
FROM nginx:stable-alpine

# Copy the build output from the 'build' stage to Nginx's web server directory
COPY --from=build /app/dist /usr/share/nginx/html

# (Optional but Recommended for SPAs) Copy a custom Nginx configuration
# Create an nginx.conf file (see step 3) and uncomment the next line
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose port 80 to the outside world
EXPOSE 80

# Nginx will start automatically when the container runs
CMD ["nginx", "-g", "daemon off;"]