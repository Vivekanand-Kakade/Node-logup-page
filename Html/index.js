const express= require ('express');
const app= express();
const port= 5000;
app.get('/Home', function(request,response) {return (response.render("../sign_up_page.html"))});
app.listen (port, function (){console.log("Check now on "+ port);});
