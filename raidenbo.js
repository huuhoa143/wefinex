const axios = require('axios')

const _createOrder = async (type, amount) => {
    const url = 'https://raidenbo.com/api/wallet/binaryoption/bet'

    const headers = {
        'authority': 'raidenbo.com',
        'accept': 'application/json, text/plain, */*',
        'authorization': 'Bearer eyJhbGciOiJIUzI1NiIsImtpZCI6InJhaWRlbmJvLmNvbSIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiIxNjA2MDU2ODM0MTcxIiwiZW1haWwiOiJ0bGU1NjQxM0BnbWFpbC5jb20iLCJzaWQiOiI5ZmJmZjUzNy02NTNmLTQyZWMtYTg5MC1jNDUxYTYxYWI3MjEiLCJkX2lkIjoiQnJvd3NlciBvbiBNYWMgT1MgWCAxMC4xNS43LzM5MmIyMmI2LWQwMzUtNDZiZC04OGI5LTdhMjA0YmM2Yjc2NiIsIm5pY2tfbmFtZSI6Im9rZWxhMTIzNDUiLCJzX2dyb3VwIjoiMiIsInN5c3RlbSI6InJhaWRlbmJvLXdlYiIsImV4cCI6MTYwNjA1OTYwNiwiaXNzIjoicmFpZGVuYm8uY29tIiwiYXVkIjoicmFpZGVuYm8td2ViIn0.2uTun0ThL5AisRVWrZNS8hU8tPOAq-0nnt7nDD7rdXQ',
        'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.198 Safari/537.36',
        'content-type': 'application/json;charset=UTF-8',
        'origin': 'https://raidenbo.com',
        'sec-fetch-site': 'same-origin',
        'sec-fetch-mode': 'cors',
        'sec-fetch-dest': 'empty',
        'referer': 'https://raidenbo.com/index',
        'accept-language': 'vi-VN,vi;q=0.9,en-US;q=0.8,en;q=0.7',
        'cookie': '__cfduid=d40bff95c3b6ea3dcf227742e02355be11606055906; WFCOUNTRY=vi'
    }

    //UP
    const payload = {"betType":type,"betAmount":amount,"betAccountType":"LIVE"}

    const response = await axios.post(url, payload, {
        headers: headers
    })

    const {data} = Object.assign({}, response)

    console.log(data)
}

setImmediate(async () => {

    // let tmpArray = []
    //
    // for (let i = 0; i < 20; i++) {
    //     tmpArray.push(_createOrder(9))
    // }

    const type1 = 'UP'
    const type2 = 'DOWN'

    const amount = 7
    await Promise.all([
        _createOrder(type1, amount),
    ])
    // const results = await Promise.map(tmpArray, {concurrency: 10})
})