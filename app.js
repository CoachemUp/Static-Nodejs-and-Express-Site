/* =========================================================================
    VARIABLES TO REQUIRE THE NECESSARY DEPENDENCIES NEEDED TO RUN APP
========================================================================= */
const express = require('express');
//INSTANTIATE EXPRESS APP
const app = express();

const data = require('./data.json');
const { projects } = data;


//TELLS EXPRESS TO USE PROVIDED STYLESHEETS
app.use('/static', express.static('public'));

//TELLS EXPRESS TO USE PUG AS VIEW ENGINE
app.set('view engine', 'pug');


/* ===========================
            ROUTES 
=========================== */
//INDEX(HOME) PAGE
app.get('/', (req, res) => {
    res.render('index', { projects });
});
//ABOUT PAGE 
app.get('/about', (req, res) => {
    res.render('about');
});
//PROJECT PAGE
app.get('/project/:id', (req, res) => {
    const { id } = req.params;
    res.render('project', { projects: projects[id] });
});


/* ===========================
            ERROR HANDLERS
=========================== */
//PAGE NOT FOUND ERROR 404 TO CATCH UNDEFINED OR NON-EXISTENT ROUTE REQUESTS
app.use((req, res, next) => {
    res.status(404).render('page-not-found');
});

//GLOBAL ERROR HANDLER(https://teamtreehouse.com/library/practice-error-handling-in-express)
app.use((err, req, res, next) => {
    if (err) {
        console.log('Global error handler called', err);
    }
    if (err.status === 404) {
        res.status(404).render('error', { err });
    } else {
        err.message = err.message || `Oops! It looks like somethin went wrong on the server.`;
        res.status(err.status || 500).render('error', { err });
    }
});



//VERIFYING THE APP IS RUNNING
app.listen(3000, () => {
    console.log('The application is running on localhost:3000!');
});


