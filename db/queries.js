const pool = require("./pool");

async function getAllUsernames() {
  const { rows } = await pool.query("SELECT * FROM usernames");
  return rows;
}

async function insertUsername(username) {
  await pool.query("INSERT INTO usernames (username) VALUES ($1)", [username]);
}

async function getUsername(user){
    console.log(`The user is : ${user}`);
    const username = await pool.query("SELECT * FROM usernames WHERE username = " + user)
    console.log(username);
}

module.exports = {
  getAllUsernames,
  insertUsername,
  getUsername
};
