const db = require("../db");
class posts {
  async addPost(req, res) {
    const { id, body } = req.body;
    const p = await db.query(
      "insert into posts(id, body, time) values ($1, $2, LOCALTIMESTAMP)",
      [id, body]
    );
    const j = await db.query("select * from posts where id = $1 and body = $2", [
      id,
      body,
    ]);
    res.json(j);
  }
  async deletePost(req, res) {
    const {idDb} = req.body
    const p = await db.query('delete from posts where id_primary = $1', [idDb])
    res.json(p);
  }
  async getAllPost(req, res) {
    const { id } = req.body;

    const p = await db.query(
      "select users.id , posts.body, posts.time, posts.id_primary from users join posts on users.id = posts.id where users.id = $1",
      [id]
    );
    res.json(p);
  }
}
module.exports = new posts();
