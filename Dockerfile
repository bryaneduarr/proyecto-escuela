FROM ubuntu:22.04

# Update and install necessary packages
RUN apt update && apt upgrade -y && apt install -y \
    build-essential \
    python3 \
    python3-pip \
    nano \ 
    git \
    sudo \
    curl 

# Create a non-root user with sudo privileges
RUN useradd -ms /bin/bash user && \
    echo "user:password" | chpasswd && \
    adduser user sudo

# Set the working directory 
WORKDIR /school-management

# Set permissions for the user
RUN chown -R user:user /school-management

# Switch to non-root user
USER user