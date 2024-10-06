USTH ICT 2024 Web Application Development
=====================================================

Students are expected to:

* Fork this repository to your github account
* Update student name and ID to this README file
* Push your commits regularly, with proper commit messages

Student Info
=======================

* Name: Nguyen Vu Gia Huy
* ID: BA12-088
* Group ID: 5
* Project Name: Social Media Dashboard

=============================================================

To run the server, please run those following commands in the terminal contains the main path (even if you may have installed these packages):
`npm init -y`

`npm install --save-dev nodemon`
`npm install express`

In the package.json, overwrite the following properties:
```
    "scripts": {
        "test": "echo \"Error: no test specified\" && exit 1",
        "start": "node server.js",
        "devStart": "nodemon server.js"
    },
```

Before running in the server, make sure to put all css, js, png/jpeg and modify their file directories in html files, for example:

If the directory looks like this:
```
Public
|- style.css
|- script.js
```

Then in html file the style tag should be like this:
`<link rel="stylesheet" href="/style.css">`
`<script defer src="/script.js"></script>`

After it's done, consider running the server with:

`npm run devStart`

P/s: To understand more about express, watch the tutorial here: https://www.youtube.com/watch?v=SccSCuHhOw0&t=1752s