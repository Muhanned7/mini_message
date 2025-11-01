const express = require("express")


module.exports = (messages) =>{
const router = express.Router();


router.get('/', (req,res)=>{
    res.render('index', {'title':'mini message', 'messages':messages})

})

router.get('/new', (req,res)=>{
    res.render('form');
})

router.post('/new', (req, res)=>{
    console.log(req.body.name)
    messages.push({text: req.body.message,
        user: req.body.name,
        added: new Date()});
    console.log(messages)
    res.redirect('/')
})

return router;

}