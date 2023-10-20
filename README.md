# Planner
Welcome to our Vue.js project that demonstrates how to create a versatile blog application with the ability to perform HTTP requests (GET, POST, PATCH) and a multipage structure. This README provides an overview of the project and instructions on how to set it up.

You can acces a published verion of the project with this [link]().

## Table of Contents
+ Features
+ Getting Started
  + Prerequisites
  + Installation
+ Usage
+ Project Structure
+ Contributing
+ License
+ Features

## Project Overview
* This Vue.js blog app project showcases the following key features:
* Multipage Structure: Create and manage multiple pages for your blog.
* HTTP Requests: Perform GET requests to retrieve blog posts, POST requests to create new posts, and PATCH requests to edit existing content.
* Dynamic Content: Content is dynamically loaded for a seamless user experience.
* Vue Router: Utilizes Vue Router for effortless page navigation.
* Vue Components: Reusable Vue components for consistent design and functionality.

## Getting Started
Follow these steps to get your Vue.js blog app up and running.

### Prerequisites
Before you begin, ensure you have the following installed:

* Node.js and npm
* Vite

## Installation
1. Clone this repository:

`git clone https://github.com/yourusername/vue-blog-app.git`

2. Navigate to the project directory:

`cd vue-blog-app`

3. Install the project dependencies:

`npm install`

4. Create a .env file in the project root with your API endpoint:

`VUE_APP_API_URL=https://your-api-endpoint.com`

5. Start the development server:

`npm run serve`


## Usage
* Access the blog app in your web browser by navigating to http://localhost:8080 (or the specified port).
* Explore the different pages, create new blog posts, edit existing posts, and enjoy the dynamic content loading.

## Project Structure
* `src/` contains the main source code for your Vue.js project.
  * `components/` holds the Vue components.
  * `views/` includes the different views or pages of your blog app.
  * `router/` defines the Vue Router configuration.
  * `services/` contains the HTTP request services.
  * `App.vue` is the main Vue component.
* `public/` stores static assets.

## Contributing
Contributions are welcome! If you'd like to enhance this Vue.js blog app, feel free to submit a pull request. For major changes, please open an issue first to discuss what you would like to change.

## License
This project is licensed under the MIT License - see the LICENSE file for details.

Now you're all set to start building your multipage Vue.js blog app with HTTP requests! Have fun coding and creating an awesome blog platform.