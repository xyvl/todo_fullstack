const db = require("../db");
class user {
  async regist(req, res) {
    const { email, password, name, lastname } = req.body;
    const user = await db.query(
      "insert into users(name, lastname, email, password) values($1, $2,$3,$4)",
      [name, lastname, email, password]
    );
    const id = await db.query(
      "select * from users where email = $1 and password = $2",
      [email, password]
    );
		console.log(id)
    res.json(id);
  }
  async deleteUser(req, res) {
    res.json("deleteUser");
  }
  async auth(req, res) {
    const {email, password} = req.body
    const user = await db.query('select * from users where email = $1 and password = $2', [email, password])
    res.json(user);
  }
}

module.exports = new user();
