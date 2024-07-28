# COURSES-MANAGER-CLI

## Description
`courses-manager` is a CLI tool to manage courses. It allows you to add and list courses easily.

## Features
- Add a course with title and price
- List all courses

## File Structure
- courses.json - JSON file to store the courses
- index.js - Main CLI script
- package.json - Project metadata and dependencies
- package-lock.json - Lockfile for dependencies

## Installation
1. Clone the repository
    ```sh
    git clone https://github.com/KhalidHamdi/COURSES-MANAGER-CLI
    ```
2. Navigate to the project directory
    ```sh
    cd khalid-courses-manager
    ```
3. Install dependencies
    ```sh
    npm install
    ```

## Usage
### Add a course
To add a course, run:
```sh
node index.js add
```

or 
```sh
node index.js a
```

### List all courses
To list all courses, run:

```sh
node index.js list
```

or 
```sh
node index.js l
```
