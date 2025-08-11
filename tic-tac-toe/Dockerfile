# Step 1: Base image
FROM nginx:alpine

# Step 2: Copy HTML, CSS, JS files into nginx web directory
COPY . /usr/share/nginx/html

# Step 3: Expose port
EXPOSE 80

# Step 4: Start nginx
CMD ["nginx", "-g", "daemon off;"]
