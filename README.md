# Overview

This project is a Command Line Interface (CLI) application designed to fetch, display, and manipulate game leaderboard statistics. As a software engineer, I built this tool to explore the practical applications of TypeScript in a backend-style environment. The application connects to a remote Supabase database to retrieve real-time player data and provides an interactive terminal interface where users can view rankings and sort the data using custom algorithms.

I wrote this software to demonstrate my proficiency with the TypeScript language. It showcases how to structure a modular application using classes and strict typing to ensure data integrity. Key features include asynchronous data fetching, object-oriented data modeling (separating services, models, and utilities), and a manual implementation of the Merge Sort algorithm to organize data by username or score.

The purpose of this software is to serve as a learning exercise in strictly typed JavaScript development. It focuses on handling external dependencies, managing asynchronous state, and implementing classic computer science algorithms within the TypeScript type system.

[Software Demo Video](http://youtube.link.goes.here)

# Development Environment

To develop this software, I used the following tools and environment:

* **Code Editor:** Visual Studio Code
* **Runtime:** Node.js
* **Package Manager:** npm

Programming Language & Libraries:

* **TypeScript:** The primary language used for development, utilizing features like interfaces, enums, and generics for strong type safety.
* **@supabase/supabase-js:** A library used to connect to the Supabase backend database to fetch leaderboard entries.
* **Node.js Built-ins:** utilized the `readline` module for CLI interaction and `fs`/pathing for module resolution.

# Useful Websites

{Make a list of websites that you found helpful in this project}

- [TypeScript Documentation](https://www.typescriptlang.org/docs/)
- [Supabase JavaScript Client Docs](https://supabase.com/docs/reference/javascript/introduction) 
- [MDN Web Docs - Merge Sort](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/)

# Future Work

- **Environment Variables:** Currently, API keys are hardcoded in the source files. I need to move these to a `.env` file to improve security.
- **Write Capabilities:** Add functionality to allow users to input new player scores directly from the CLI and save them to the database.
- **Search and Filter:** Implement features to search for specific players or filter the leaderboard (e.g., "Top 10").
- **Unit Testing:** Add a testing framework like Jest to write unit tests for the sorting algorithms and data models.