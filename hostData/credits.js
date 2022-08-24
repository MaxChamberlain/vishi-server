let thisCredits = {
    'Primary Host Server': {
        credit_use: {
            amount: 0,
            datetime: new Date().toISOString()
        }
    }
}

const addToCredit = (amount, server) => {
    thisCredits[server].credit_use.amount += amount
    thisCredits[server].credit_use.datetime = new Date().toISOString()
    setTimeout(() => thisCredits[server].credit_use.amount -= amount, 60000)
}

const giveCreditReport = (req, res, next) => {
    res.status(200).send(thisCredits)
}

const changeCredits = (req, res, next) => {
    const { credits } = req.body
    thisCredits = credits
    res.status(200).send(thisCredits)
}

module.exports = { addToCredit, giveCreditReport, changeCredits }