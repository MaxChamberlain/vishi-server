const express = require('express')
const router = express.Router()

let userData

setInterval(async () => {
    try{
        userData = (await getData('find','users'))
    }catch(e){
        console.log(e)
    }
}, 1000)

router.get('/', async function(req, res, next){
    try{
        res.send(userData.data.documents ?? {'':''})
    }catch(e){
        console.log(e)
    }
})

const axios = require("axios");

const getData = async (method, table) => {

  let query = {
    "collection": table,
    "database": "AvailabilityTracker",
    "dataSource": "Cluster0"
  }
  
  let config = {
    method: 'post',
    url: `https://data.mongodb-api.com/app/data-ovjxm/endpoint/data/v1/action/${method}`,
    headers: { 
      'Content-Type': 'application/json', 
      'Access-Control-Request-Headers': '*', 
      'api-key': 'pnh4Fngj0xwhA8juema3qNcvUdxH2j2a3X5xP82fCzatugUtQgB35UkqCedIhnWy'
    },
    data : query
  }

  const res = await axios(config)
  return await res
}

module.exports = router