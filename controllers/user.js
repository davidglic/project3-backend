const newUser = (req, res) => {
    res.send("newUser")
}

const loginUser = (req, res) => {
    res.send("loginUser")
}

const updateUser = (req, res) => {
    res.send("updateUser")
}

const deleteUser = (req, res) => {
    res.send("deleteUser")
}

module.exports = {
    newUser,
    loginUser,
    updateUser,
    deleteUser
}