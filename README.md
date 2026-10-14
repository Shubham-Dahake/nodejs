# Jenkins Node.js Web Application

## 💡 Introduction

This project is a simple web application developed using **Node.js and Express.js**. It creates a web server that listens on port `3000` and displays a text message when a user accesses the home page.

The application also includes a message mentioning a webhook and the 18 May DevOps batch. It can be used to practice Node.js application deployment and Jenkins-based CI/CD workflows.

### Objectives

- Create a web server using Node.js.
- Use Express.js to handle HTTP requests.
- Display a response on the home page.
- Configure application dependencies using `package.json`.
- Practice Jenkins integration and webhook-triggered automation.

## 🏗️ Architectural Diagram

The following diagram illustrates how the application works.

<img width="1672" height="941" alt="PHP Signup Form Architecture Diagram" src="https://github.com/user-attachments/assets/91cf3b91-9546-4304-a118-fd5626335a86" />

User/Browser → HTTP Request → AWS EC2 (Linux) → Nginx → PHP-FPM (submit.php) → MariaDB (FCT database, users table) → Success Page with submitted data

### Architecture Components

- **Frontend – Web Browser:** Sends requests and displays the response.
- **Backend – Node.js:** Runs the JavaScript application.
- **Web Framework – Express.js:** Handles HTTP requests and responses.
- **Configuration – `package.json`:** Defines project information, dependencies, and the start command.
- **CI/CD – Jenkins and Webhook:** Can trigger an automated pipeline when configured.

**Note:** Jenkins and webhook automation are optional deployment components. They are not configured by the two code files shown here alone.

## 📥 Input

The application receives an HTTP GET request from the user's browser.

| Input | Description |
|---|---|
| URL | `http://localhost:3000/` |
| HTTP Method | GET |
| Port | 3000 |
| Route | `/` |
| Request Body | Not required |

### Input Process

1. The user opens a web browser.
2. The user accesses `http://localhost:3000/`.
3. The browser sends an HTTP GET request.
4. Express.js receives the request at the `/` route.
5. The application processes the request and prepares a text response.

## 📤 Output

When the user accesses the home page, the application displays the following message:
![Output](output.png)



## Output Process

1. Express.js matches the incoming request to the `/` route.
2. The `res.send()` method sends the configured text response.
3. The browser displays the message.
4. The terminal displays the server startup message:

```text
App listening at http://localhost:3000
```

## 🚀 Background – PM2

**PM2 (Process Manager 2)** is a process manager commonly used to run Node.js applications in the background.

### Key Features of PM2

- Runs Node.js applications as background processes.
- Automatically restarts applications when they crash.
- Provides application logs.
- Supports process monitoring.
- Can configure applications to start automatically after a server reboot.

## 🚀 Deployment Guide

### 1. Launch an EC2 instance on AWS

### 2. Push the code to GitHub

### 3. Install the required packages

```bash
sudo yum install node git -y
```
### 4. Clone the repository from GitHub

```bash
sudo git clone <url>
```

### 5. Install the required packages:

```bash
sudo yum install npm
sudo npm install
```
To start website:

```
node app.js
```

To start in background:

```bash
sudo npm install -g pm2
sudo pm2 start app.js
```

Run the following SQL commands:

**Note:** PM2 is not included in the provided `package.json`. These commands are for use if PM2 is installed and you choose to run the application with it.

## 6. Conclusion

This project demonstrates the basic working of a web application using Node.js and Express.js. It provides practical experience with HTTP requests, routing, server responses, dependency management, and application startup.

The project can also serve as a starting point for learning Jenkins CI/CD pipelines, webhook integration, and automated application deployment.

### Technologies Used

- **Runtime:** Node.js
- **Framework:** Express.js
- **Language:** JavaScript
- **Package Management:** npm
- **Application Port:** 3000
- **Optional Process Manager:** PM2
- **Optional CI/CD Tool:** Jenkins

### 👤 Author
Shubham Dahake
