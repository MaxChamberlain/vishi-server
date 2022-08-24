const credits = {
    'Primary Host Server': {
        credit_use: {
            amount: 0,
            datetime: new Date().toISOString()
        }
    }
}

const addToCredit = (amount, server) => {
    credits[server].credit_use.amount += amount
    credits[server].credit_use.datetime = new Date().toISOString()
    setTimeout(() => credits[server].credit_use.amount -= amount, 60000)
}

const giveCreditReport = (req, res, next) => {
    res.status(200).send(credits)
}

module.exports = { addToCredit, giveCreditReport }