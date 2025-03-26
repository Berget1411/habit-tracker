# Habit Tracker

A full-stack habit tracking application built with modern web and mobile technologies.

## Project Overview

This project consists of three main components:

- **Backend**: Express.js with TypeScript providing the API services
- **Frontend**: Next.js web application for browser access
- **Mobile**: Expo/React Native mobile app for on-the-go habit tracking

## Getting Started

### Prerequisites

- Node.js 18 or later
- npm or yarn
- Docker and Docker Compose (for containerized development)
- Git

### Clone the Repository

```bash
git clone https://github.com/yourusername/habit-tracker.git
cd habit-tracker
```

### Running with Docker

The easiest way to get started is with Docker Compose:

```bash
# Build and start all services
docker-compose up --build

# Access the applications:
# - Frontend: http://localhost:3000
# - Backend API: http://localhost:8080
```

### Manual Setup

If you prefer to run each component separately:

#### Backend

```bash
cd backend
npm install
npm run dev
```

The API will be available at http://localhost:8080

#### Frontend

```bash
cd frontend
npm install
npm run dev
```

The web app will be available at http://localhost:3000

#### Mobile

```bash
cd mobile/habit-tracker
npm install
npx expo start
```

Follow the on-screen instructions to open the app in:

- An iOS simulator
- An Android emulator
- Expo Go on your physical device (scan the QR code)

## Features

- **User Authentication**: Create accounts and log in securely
- **Habit Tracking**: Create, manage, and track daily habits
- **Statistics**: View progress and streaks for each habit
- **Cross-Platform**: Access your habits from web or mobile
- **Reminders**: Set notifications for habit completion

## Development

## Test Workflow

### Test backend workflow

act -j build -W .github/workflows/backend.yml

### Test frontend workflow

act -j build -W .github/workflows/frontend.yml

### Test mobile workflow

act -j build -W .github/workflows/mobile.yml

### Project Structure
