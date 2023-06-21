import pool from "../configs/connectDB";

let getHomepage = async (req, res) => {
    //logic
    const [rows, fields] = await pool.execute('SELECT * FROM `users`');

    return res.render('index.ejs', { dataUser: rows })
}

let getDetailPage = async (req, res) => {
    let userId = req.params.id
    let [user] = await pool.execute('SELECT * FROM `users` WHERE id = ?', [userId]);

    return res.send(JSON.stringify(user))
}

let createNewUser = async (req, res) => {
    let { firstName, lastName, email, address } = req.body

    await pool.execute(
        'INSERT INTO users(firstName, lastName, email, address) VALUES (?, ?, ?, ?)',
        [firstName, lastName, email, address])

    return res.redirect('/')
}

let deleteUser = async (req, res) => {
    let userId = req.body.userId

    await pool.execute('DELETE from users WHERE id = ?', [userId])

    return res.redirect('/')
}

let getEditPage = async (req, res) => {
    let userId = req.params.id
    let [user] = await pool.execute('SELECT * FROM `users` WHERE id = ?', [userId]);

    return res.render('update.ejs', { dataUser: user[0] })
}

let updateUser = async (req, res) => {
    let { id, firstName, lastName, email, address } = req.body

    await pool.execute('UPDATE users ' +
        'SET firstName = ?, lastName = ?, email = ?, address = ? ' +
        'WHERE id = ?', [ firstName, lastName, email, address, id])

    return res.redirect('/')
}

module.exports = {
    getHomepage,
    getDetailPage,
    createNewUser,
    deleteUser,
    getEditPage,
    updateUser
}