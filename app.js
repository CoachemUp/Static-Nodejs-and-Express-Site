/* =========================================================================
    VARIABLES TO REQUIRE THE NECESSARY DEPENDENCIES NEEDED TO RUN APP
========================================================================= */
const express = require('express');

const app = express();

//TELLS EXPRESS TO USE PUG AS TEMPLATE ENGINE
app.set('view engine', 'pug')

/* ===========================
            ROUTES 
=========================== */
//INDEX(HOME) PAGE
app.get('/', (req, res) => {
    res.render('index');
});
//ABOUT PAGE 
app.get('/about', (req, res) => {
    res.render('about');
});
//PROJECT PAGE
app.get('/project/:id', (req, res) => {
    res.render('data.projects');
});

//VERIFYING THE APP IS RUNNING
app.listen(3000, () => {
    console.log('The application is running on localhost:3000!')
})


