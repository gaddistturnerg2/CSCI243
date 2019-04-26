const express = require('express');
const router = express.Router();

router.get('/',(req,res)=>{
    res.render('index');
});

router.post('/calculate',(req,res)=>{
    //grab data from ajax
    let num1=parseInt(req.body.num1);
    let num2=parseInt(req.body.num2);
    let operator=req.body.operator;

    //calculate
    var result;
    switch(operator){
        case "add":
            result = num1+num2;
            operator = "+";
            break;
        case "subtract":
            result = num1-num2;
            operator = "-";
            break;
        case "divide":
            result = num1/num2;
            operator = "/";
            break;
        case "multiply":
            result = num1*num2;
            operator = "x";
            break;
    }
    //send data back to page
    res.json({
        num1 : num1,
        num2 : num2,
        operator : operator,
        result: result
    });
});

module.exports = router;
