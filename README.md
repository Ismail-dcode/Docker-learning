# Docker-learning


##  Docker Basic Commands


##  Basic Container Commands

```bash
# Check Docker version
docker --version

# Check system info
docker info

# List running containers
docker ps

# List all containers (including stopped)
docker ps -a

# List all images
docker images

# Pull an image from Docker Hub
docker pull ubuntu

# Run a container interactively
docker run -it ubuntu bash

# Run a container in detached mode
docker run -d ubuntu sleep 1000

# Stop a running container
docker stop <container_id>

# Remove a container
docker rm <container_id>

# Remove an image
docker rmi <image_id>

# View container logs
docker logs <container_id>

# Execute a command inside a running container
docker exec -it <container_id> bash
