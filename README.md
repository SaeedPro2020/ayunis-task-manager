<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg" alt="Donate us"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow" alt="Follow us on Twitter"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Project setup

```bash
$ npm install
```

## Compile and run the project

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Run tests

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```


# Task Manager Backend – Clean Architecture (NestJS)

This project implements a small Task Manager backend as part of a technical interview assignment.  
The focus is **architecture, structure, and reasoning**, not feature quantity.

---

## 🚀 Tech Stack
- **NestJS** (as framework/infrastructure)
- **TypeScript**
- **Clean Architecture / Hexagonal Architecture**
- **In-memory repository** (for speed, simplicity)
- **Jest** for testing

---

## 🧱 Architecture Overview

The codebase follows a **Clean Architecture** approach, separating the system into distinct layers:

- src/
- domain/ ← Enterprise business rules
- application/ ← Use cases (application business rules)
- infrastructure/ ← NestJS controllers, modules, repository adapters


### **Domain Layer**
- Contains **entities** and **repository interfaces (ports)**.
- Pure TypeScript.
- No NestJS imports.

### **Application Layer**
- Contains **use cases** and **DTOs**.
- Implements business logic by depending only on domain interfaces.
- No framework code.

### **Infrastructure Layer**
- Uses NestJS to expose HTTP routes.
- Contains controllers, modules, and repository adapters.
- Wires use cases through dependency injection.

This structure makes the system:
- Testable  
- Maintainable  
- Scalable  
- Framework-independent  

---

## 🗂 Folder Structure (Simplified)

    src/
    domain/
    entities/
    repositories/
    application/
    dto/
    use-cases/
    infrastructure/
    nest/
    controllers/
    modules/
    repositories/



---

## 🧪 Testing Strategy

For demonstration, one example test is included:
- `CreateTaskUseCase` unit test  
- Tests only business logic (no NestJS)

Additional test categories I would add with more time:
- Controller integration tests
- Repository tests with a real DB
- More domain validation tests

---

## 📌 Assumptions
- In-memory repository is acceptable for the assignment.
- No authentication required.
- Minimal validation for tasks.
- No persistence required (can be added in infrastructure layer).

---

## 💡 What I Would Add With More Time

- PostgreSQL repository implementation
- Domain validation rules
- Error handling middleware / exception filters
- Swagger/OpenAPI documentation
- Additional task filters (status, date)
- Person management module
- E2E tests for full API behavior

---

## 🏁 Summary

This project demonstrates:
- Clean Architecture
- NestJS idiomatic structure
- Clear layering and dependency flow
- Practical, maintainable code
- A modular design that scales

The structure reflects what I would build for a production backend where long-term maintainability matters.

