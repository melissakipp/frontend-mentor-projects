# Upskill Projects
Commenting to 10 project by the end of 2024.

## Current Versions:
- NodeJS 21.7.3
- NPM 10.8.0
- NextJS 14.2.3
- TypeScript 5.0.2

## Getting Started: Web Application Developement Environment
### Run application without Docker
Clone repo:
```bash
git clone git@github.com:melissakipp/<>.git
```
Install Dependencies
```bash
npm install
```

First, run the development server:

```bash
npm run dev
```

Next run the NPM command:
```bash
npm install
```
DO NOT RUN THE DEV SERVER - Run for the first time
```bash
docker compose up --build
```

After this you will use the following commands to manage the development environment:

**To start the container**
```bash
docker compose up
```

OR using -d flag will run the container in the background (no output)
```bash
docker compose up -d
```

### Docker Container (Troubleshooting)
```bash
rm -rf .next node_modules
rm package-lock.json
```

### Go to your browser
```http://localhost:3000/```


### Goals
- [ ]  [Base Apparel coming soon page](https://www.frontendmentor.io/challenges/base-apparel-coming-soon-page-5d46b47f8db8a7063f9331a0)
- [ ]  [Pod request access landing page](https://www.frontendmentor.io/challenges/pod-request-access-landing-page-eyTmdkLSG)