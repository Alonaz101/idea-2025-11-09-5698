# Project Overview

This repository implements a Mood Based Recipe Recommendation System as described in the Jira issues SCRUM-157 through SCRUM-162.

## Features by Jira Issue

### SCRUM-157: MVP Feature Set
- React UI for mood input and recipe browsing
- Node.js backend with REST API (GET /recipes?mood=, POST /users, GET/POST /favorites)
- MongoDB models for User, Recipe and Mood
- Basic authentication and authorization
- HTTPS server with caching strategies
- Unit testing framework setup

### SCRUM-158: Post-MVP Enhancements
- User account management and authentication
- Automated mood detection via sentiment analysis
- Nutrition information display in recipes
- Integration with third-party recipe and nutrition APIs

### SCRUM-159: Future Expansion
- Social features with recipe commenting and sharing
- Multilingual support
- Advanced AI personalized cooking experiences

### SCRUM-160: Security, Privacy & Compliance
- HTTPS enforcement
- Secure user data storage and transmission
- GDPR compliant user consent and privacy
- Authentication and authorization enhancements
- Security audits

### SCRUM-161: Performance, Scalability & Reliability
- Stateless REST API with horizontal scaling
- Caching with Redis and CDN
- Error handling strategies with circuit breakers
- Monitoring and health uptime checks

### SCRUM-162: Testing, Logging and Monitoring
- CI/CD pipelines and automated testing
- Centralized logging with ELK stack
- Uptime and SLA metrics monitoring
- API performance and error rate monitoring
- User analytics and telemetry

## Repository Structure
- `/client`: React UI code
- `/server`: Node.js backend API
- `/models`: Mongoose data models
- `/tests`: Unit and integration tests
- `/docs`: Documentation files

This overview and the code commits reference the Jira issues for traceability.
