const insertPick = require('../controllers/picksController').insertPick
const axios = require('axios');
const proxy = 'https://stark-oasis-84035.herokuapp.com/'
const endpoint = {
    request: 'https://public-api.shiphero.com/graphql', 
    refresh: 'https://public-api.shiphero.com/auth/refresh'
    }

async function get (gQuery){
    try{
        const token = await refreshToken()
        const res = await axios({
            url: proxy + endpoint.request,
            method: 'post',
            headers: {
            authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
            'x-requested-with': 'XmlHttpRequest'
            },
            data: {query: gQuery}
        });
        const data = await res;
        // console.log('Complexity:: ' + data.data.data.product.complexity)
        data.data.data.picks_per_day.data.edges.forEach(e => {
            try{
                insertPick(e.node)
            }catch(e){
                console.error(e)
            }
        })
    }catch(e){
        console.error(e)
    }
}

async function refreshToken(){
    const token = await axios({
        url: proxy + endpoint.refresh,
        method: 'post',
        headers: {
            "Content-Type": "application/json",
            'x-requested-with': 'XmlHttpRequest'
        },
        data: {
            "refresh_token": '_C_wuccpTtxvngJyhkQMm8yKk3I5Ys8FTJYb1uH_BmAh7'
        }
    })
    return token.data.access_token
}

module.exports = { get }