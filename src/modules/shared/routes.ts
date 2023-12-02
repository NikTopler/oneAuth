import express from "express";

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'src/modules/shared/views');

app.get('/dashboard', (req, res) => {

    res.render('pages/dashboard', {
        title: 'Dashboard',
        description: 'Dashboard',
        user: req.session?.user
    });

});

export default app;