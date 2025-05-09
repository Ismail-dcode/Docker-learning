# 🐳 Docker Basic Commands Cheat Sheet

This is my personal reference for essential Docker commands while learning containerization.

---

## 📦 Basic Container Commands

| Action                        | Command                                     |
|-------------------------------|--------------------------------------------|
| Check Docker version          | `docker --version`                          |
| Check system info             | `docker info`                               |
| List running containers       | `docker ps`                                 |
| List all containers (stopped) | `docker ps -a`                              |
| List all images               | `docker images`                             |
| Pull an image from Docker Hub | `docker pull ubuntu`                        |
| Run a container (interactive) | `docker run -it ubuntu bash`                |
| Run container (detached)      | `docker run -d ubuntu sleep 1000`           |
| Stop a running container      | `docker stop <container_id>`                |
| Remove a container           | `docker rm <container_id>`                  |
| Remove an image              | `docker rmi <image_id>`                     |
| View container logs          | `docker logs <container_id>`                |
| Execute command inside container | `docker exec -it <container_id> bash`    |



---

