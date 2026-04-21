Wintel Ltd - A Modern React Web Application
Overview
Wintel Ltd is a modern, responsive web application built for Wintel Limited, showcasing their services, portfolio, and client relationships. The project is a refactored version of the "Sailor" Bootstrap-based HTML template, transformed into a component-based React application. It features a modular architecture with sections including Header, Hero, About, Clients, Services, Portfolio, and Footer, enhanced with animations using the AOS (Animate on Scroll) library.
Technology Stack

React: A JavaScript library for building dynamic, component-based user interfaces.
TypeScript: A typed superset of JavaScript for enhanced code reliability and maintainability.
Tailwind CSS: A utility-first CSS framework for creating responsive and customizable UI designs, replacing Bootstrap styles from the original template.
AOS (Animate on Scroll): A library for adding scroll-based animations to improve user engagement.
Create React App: A bootstrapping tool for setting up a React project with a pre-configured build environment.
Node.js & npm: The runtime and package manager for managing dependencies and running the development server.

Project Structure
wintel-ltd/
├── public/
│   ├── assets/
│   │   ├── img/
│   │   │   ├── clients/          # Client logo images
│   │   │   └── ...               # Other static assets
│   ├── index.html                # Main HTML file
│   └── favicon.ico
├── src/
│   ├── components/
│   │   ├── Header.tsx            # Navigation bar component
│   │   ├── Hero.tsx              # Hero section with welcome message
│   │   ├── About.tsx             # About Wintel Ltd section
│   │   ├── Clients.tsx           # Client logos section
│   │   ├── Services.tsx          # Services offered by Wintel Ltd
│   │   ├── Portfolio.tsx         # Portfolio gallery with filtering
│   │   ├── Footer.tsx            # Footer with contact and newsletter
│   ├── App.tsx                   # Main app component
│   ├── App.css                   # App-specific styles
│   ├── index.tsx                 # Entry point with AOS initialization
│   └── index.css                 # Global styles with Tailwind directives
├── tailwind.config.js            # Tailwind CSS configuration
├── tsconfig.json                 # TypeScript configuration
├── package.json                  # Project dependencies and scripts
└── README.md                     # This file

Features

Responsive Design: Mobile-first layout with Tailwind CSS, ensuring compatibility across all device sizes.
Interactive Components: Includes a dynamic navigation bar with dropdowns, a filterable portfolio, and a newsletter subscription feature.
Animations: Smooth scroll-based animations powered by AOS for an engaging user experience.
Type Safety: TypeScript ensures robust and error-free code.
Modular Architecture: Reusable React components for easy maintenance and scalability.

Prerequisites

Node.js: Version 14.x or higher (LTS recommended).
npm: Version 6.x or higher (included with Node.js).
Git: For cloning the repository.

Installation

Clone the Repository:
git clone https://github.com/your-username/wintel-ltd.git
cd wintel-ltd


Install Dependencies:
npm install


Set Up Assets:

Place client logo images in public/assets/img/clients/ (e.g., client-1.png to client-6.png).
Add other static assets to public/assets/ as required.


Run the Development Server:
npm start

The app will be available at http://localhost:3000.


Usage

Development: Run npm start for a local development server with hot reloading.
Production Build: Run npm run build to generate an optimized build in the build/ folder.
Testing Images: Verify client images are accessible at http://localhost:3000/assets/img/clients/client-1.png.
Animations: AOS is initialized in src/index.tsx with a default duration of 1000ms and once: true for single-run animations.

Configuration

Tailwind CSS: Customize styles in tailwind.config.js or src/index.css.
AOS: Modify animation settings (e.g., duration, easing) in src/index.tsx within AOS.init().
TypeScript: Adjust tsconfig.json for custom TypeScript configurations.

Troubleshooting

Images Not Loading:
Ensure images are in public/assets/img/clients/ with correct names and extensions.
Check DevTools (Network tab) for 404 errors on image requests.
Test direct access to images (e.g., http://localhost:3000/assets/img/clients/client-1.png).


AOS Animations Not Working:
Verify aos is installed (npm install aos) and initialized in src/index.tsx.
Temporarily remove data-aos attributes to test without animations.


CSS Issues:
Ensure Tailwind directives are correctly set in src/index.css (@tailwind base; @tailwind components; @tailwind utilities;).
Check for conflicting styles in custom CSS files.



Deployment

Build:npm run build


Deploy: Upload the build/ folder to a hosting platform like Netlify, Vercel, or GitHub Pages.
Public URL: For subdirectory deployments, set PUBLIC_URL in a .env file (e.g., PUBLIC_URL=/wintel-ltd).

Contributing

Fork the repository.
Create a feature branch (git checkout -b feature/your-feature).
Commit changes (git commit -m 'Add your feature').
Push to the branch (git push origin feature/your-feature).
Open a pull request.

License
This project is licensed under the MIT License. See the LICENSE file




### Docker
#### Docker: Resources
- https://www.howtoforge.com/dockerizing-laravel-with-nginx-mysql-and-docker-compose/



```

sudo docker-compose up -d

=====see all images ========
sudo docker images

=========see all containers ========
sudo docker ps -a
```

```
sudo docker-compose up --build

sudo docker-compose up -d

sudo docker-compose up -d --build

sudo docker-compose down
sudo docker-compose build && docker-compose up -d

 sudo chmod 777 -R ./*
 sudo chmod 777 -R ./docker

sudo docker-compose down
```

```
docker images
docker ps -a
docker container prune
docker stop all containers
cd eppa/api
exit
```
