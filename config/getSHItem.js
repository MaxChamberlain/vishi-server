const insertPick = require('../controllers/picksController').insertPick
const axios = require('axios');
const { addToCredit } = require('../hostData/credits')
const proxy = 'https://stark-oasis-84035.herokuapp.com/'
const endpoint = {
    request: 'https://public-api.shiphero.com/graphql', 
    refresh: 'https://public-api.shiphero.com/auth/refresh'
    }

async function get (sku){
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
            data: {query: `
            query {
                product(sku: "${sku}") {
                    request_id
                    complexity
                    data {
                        name
                        sku
                        barcode
                        warehouse_products{
                            price
                            on_hand
                            available
                            allocated
                            locations{
                                edges{
                                    node{
                                        location{
                                            name
                                            pickable
                                            sellable
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
            `}
        });
        const data = await res;
        return data.data.data.product.data
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