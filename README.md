# MERN_Second
MERN_Second

1. Make Backend and Frontend Folder
2. In the backend folder, create a new file, name it server.js and create connection to port defined
3. In the main folder, open terminal, execute "npx create-react-app frontend", it will create a new folder named frontend and inside that folder is the react app folders
4. After that, go to frontend > src, delete this files {app.css, app.test.js, logo.svg, reportwebvitals.js, setuptests.js} cuz we dont even need it anyway yet
5. After you've deleted all of that files, the missing files that you've deleted is gonna make some error, therefore we need to make some changes, first, go to the index.js delete line that used for importing report webvitals, and also the line that calling function webvitals, second step, go to the app.js and delete all the lines except function app, return, and div classname app, and also the export line, anddd thats it
6. Next step for set up is to install react router dom, go to the terminal integerated with frontend folder, and execute npm install react-router-dom
7. Go to the app.js, import BrowserRouter, Routes, Route from react router dom, and then set up the router, add Home page router, import pages and components
8. Create a new folder named it pages inside src folder, and create a new file named Home.js, go to Home.js and declare stateless function components, and some div and h1 to make the title and thats it
9. After that, create a new folder named components inside src folder, create a new file named Nabvar.js, go to Navbar.js, declare stateless function components, add headers, div and import Link from react router dom to make it SPA, dont forget to make changes on app.js so that the navbar.js file can be showed up in the browser
10. Last step is add ur css in the index.css file, and thats pretty much it, set up is done and ready to code :D

