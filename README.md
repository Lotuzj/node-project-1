# 📡 IoT Sensor Data Backend

A modular Node.js & MongoDB backend designed to simulate and manage data logging from hardware sensor nodes. Built with a focus on clean architecture, scalability, and security.

## 🛠 Features
- **CRUD Operations:** Create, Read, Update, and Delete sensor data packets.
- **RESTful API:** Structured endpoints for seamless integration with frontend or hardware modules.
- **Modular Architecture:** Organized using the MVC (Model-View-Controller) pattern.
- **Security:** Password hashing using Bcrypt and environment variable protection.
- **Database Analysis:** Integrated with MongoDB Compass for real-time data visualization.

## 📂 Project Structure
- `/config`: Database connection logic and environment configuration.
- `/models`: Mongoose schemas (Blueprints) for Sensors and Users.
- `/routes`: Express router modules for API endpoints.
- `server.js`: Main entry point and middleware configuration.

## 🚀 Getting Started

### Prerequisites
- Node.js (LTS version)
- MongoDB (Running locally on port 27017)
- MongoDB Compass (Optional, for visualization)

### Installation
1. **Clone the repo:**
   ```bash
   git clone [https://github.com/Lotuzj/node-project-1.git](https://github.com/Lotuzj/node-project-1.git)
   cd node-project-1
