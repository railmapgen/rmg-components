module.exports = app => {
    app.get('/iframe.html/info.json', (req, res) => {
        res.send({
            component: 'rmg-components',
            version: '9.9.9',
            environment: 'DEV',
            instance: 'localhost',
        });
    });
};
