

const getDrinks = (req, res) => {
    res.send("getDrinks")
}

const addDrink = (req, res) => {
    res.send("addDrink")
}

const deleteDrink = (req, res) => {
    res.send("deleteDrink")
}

module.exports = {
  
    getDrinks,
    addDrink,
    deleteDrink
}