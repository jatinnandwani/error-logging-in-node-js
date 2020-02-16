const express = require('express');
const app = express();
const acc = require('./lib/account');
const logger = require('./lib/logger');

app.get('/findAccount', (req, res) => {
    logger.info("/query" , {query : req.query });
    logger.info("finding account",{ q: req.query.q});
    const foundAccount = acc.findAccount(req.query.q);
    logger.info("Account Found " ,{foundAccount});
    const msg = {
        account : foundAccount && foundAccount.account,
        foundAccount : !!foundAccount
    };
    logger.info("/ response ", msg);
    res.send({msg : msg});
});

app.listen(3000);
console.log('I am listening you at 3000');