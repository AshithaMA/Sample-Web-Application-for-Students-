/ JavaScript Document
const express=require("express");
var request = require("request");

var options = {
    method: 'GET',
    url: 'https://inventory-fac4.restdb.io/appdeploy/motorbikes',
    headers: 
    {   'cache-control': 'no-cache',
        'x-apikey': '560bd47058e7ab1b2648f4e7' 
    } 
};

request(options, function (error, response, body) {
    if (error) throw new Error(error);
    console.log(body);
});
const mysqlConnection =require("../connection");

Router.get("/". (req, res)=>{
	mysqlConnection.query("SELECT * FROM PEOPLE", (err, rows,fields)=>)
						  if(!err)
	{
		
		res.send(rows);
	}
	else
		{
			console.log(err);
		}
		
		  })
		  modules.exports=Router;const Router=express.Router;
																		  