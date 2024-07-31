const pool = require("../db/pool");
const db = require("../db/queries");

const asyncHandler = require("express-async-handler");
//const usersStorage = require("../models/modelNameHere");

exports.getUsernames = asyncHandler(async (req, res) => {
    console.log(req.query.search);
    if (req.query.search==undefined){
        const usernames = await db.getAllUsernames();
        console.log("Usernames: ", usernames);
        res.render('index', {usernames});
    }
    else{
        const username = await db.getUsername(req.query.search);
        console.log(username);
        res.render('index', {username})
    } 
});

exports.createUsernameGet = asyncHandler(async (req,res) => {
    res.render('username',{ title: "Username" })
})

exports.createUsernamePost = asyncHandler(async (req, res) => {
    const { username } = req.body;
    await db.insertUsername(username);
    res.redirect("/");
})

exports.redirectSearch = asyncHandler(async(req,res) => {
    res.redirect("/?search=" + req.body.search);
})

