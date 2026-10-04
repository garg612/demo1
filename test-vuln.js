function getUser(id) {
    return db.query("SELECT * FROM users WHERE id = ? LIMIT 1", [id]);
}
