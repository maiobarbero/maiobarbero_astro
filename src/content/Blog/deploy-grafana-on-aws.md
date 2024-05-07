---
title: Deploy a Grafana dashboard with Docker on AWS EC2
subtitle: How to deploy a Grafana dashboard with Docker, Prometheus and Loki
date: 2024-05-07
tags:
  - Docker
  - DevOps
  - AWS
description: Monitoring system performance and logs with Grafana is indeed straightforward, especially when working with Docker environments.
imagePath: ../../../public/grafana.jpg
keywords: docker, devops, aws, grafana, prometheus, loki
---

Monitoring system performance and logs with Grafana is indeed straightforward, especially when working with Docker environments. Grafana seamlessly integrates with Docker, providing prebuilt dashboards that instantly visualize key metrics and logs from your containers and hosts.

## Launch EC2 instance
To embark on your AWS journey, you’ll need a server instance, and AWS offers the perfect playground with its free tier. Launch a Linux instance effortlessly, and let the experimentation begin!

With AWS, spinning up a Linux instance is a breeze. Simply log into the AWS Management Console, navigate to the EC2 service, and click “Launch Instance.” From there, choose the Amazon Linux 2 AMI (Amazon Machine Image) — a robust and reliable option for your learning adventures.

Next, select the instance type that suits your needs. For those just starting, the **t2.micro** instance type is a fantastic choice, courtesy of the free tier. Breeze through the subsequent configuration steps with the default settings, and when prompted for a key pair, either select an existing one or create a new one. This key pair will be your secure gateway to the instance.

Before launching your instance don’t forget to create a key pair and to allow traffic from both SSH and Internet.

For this project, you will also need to open some ports:
- **3000** for Grafana
- **9090** for Prometheus
- **3100** for Loki
- **9100** for node-exporter
  
Navigate to the EC2 Dashboard and locate your EC2 instance. Click on the security group associated with the instance, then click “Edit”. To open ports for inbound traffic, configure an inbound rule by selecting “Custom TCP Rule” as the type. Enter the desired port number and set the source to “Anywhere”. Repeat this step for each port you need to open, creating a separate inbound rule for each port.

## Install Docker
With your Linux instance up and running, it’s time to unlock the power of containerization by installing Docker. 
This game-changing platform will enable you to effortlessly deploy and manage your applications, including the highly coveted Grafana dashboard.

Connect via ssh with

`ssh -i "<path_to_your_key.pem>" ec2-user@<Public IPv4 DNS>`

and run these commands to install Docker and Docker Compose

```
sudo yum update
sudo yum install -y docker

sudo curl -L https://github.com/docker/compose/releases/latest/download/docker-compose-$(uname -s)-$(uname -m) -o /usr/local/bin/docker-compose

sudo chmod +x /usr/local/bin/docker-compose
```

## Copy the project files
To obtain the source code on your EC2 instance, you have two options:

Download the source code repository locally, then use the scp command to securely copy the files to your EC2 instance.
Directly clone the repository onto your EC2 instance using git. Before proceeding with this option, verify if git is installed on the instance by running `git --version`.
If git is not installed, you can install it using your Linux distribution's package manager. 
For example, on Amazon Linux 2, you can run: `sudo yum install git`

Once git is available, you can clone the repository with the following command:

`git clone https://github.com/maiobarbero/grafana-prometheus-loki.git`

### Edit the configuration’s files
Now with vim edit the configuration file, in particular, if you are using [this repository](https://github.com/maiobarbero/grafana-prometheus-loki) edit config/prometheus/prometheus-config.yml and replace localhost with your private IP4.

## Run the application
Here we are, the last step. Inside your project folder run `docker-compose up -d`
With the necessary steps completed, you can now access your Grafana instance by navigating to your-public-ip:3000 in a web browser.
Ensure that you have properly configured the following:

- Opened port 3000 on your EC2 instance’s security group to allow incoming traffic.
- If running Grafana on a private network, set up port forwarding on your router to forward external requests on port 3000 to your EC2 instance’s private IP address.
- Configured your firewall rules to allow incoming traffic on port 3000 from the desired IP addresses or ranges.

Once you have verified these configurations, simply enter your-public-ip:3000 in your web browser’s address bar, replacing “your-public-ip” with the actual public IP address of your EC2 instance.You should now see the Grafana login page, indicating that your Grafana instance is up and running, and accessible from the internet or your local network, depending on your configuration.From here, you can proceed to log in, create dashboards, and start visualizing and monitoring your data using Grafana’s powerful features.
