const axios = require('axios')

const _createOrder = async (type, amount) => {
    const url = 'https://bitono.io/api/wallet/binaryoption/bet'

    const headers = {
        'authority': 'bitono.io',
        'accept': 'application/json, text/plain, */*',
        'authorization': 'Bearer eyJhbGciOiJIUzI1NiIsImtpZCI6ImJpdG9uby5pbyIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiIxNjA1NTQ0ODAxMzYwIiwiZW1haWwiOiJ0bGU1NjQxM0BnbWFpbC5jb20iLCJzaWQiOiJmYmJiMzA1Zi1lZDljLTQ3NWYtYWI1MC0zMWIyZjM2NzVlYmEiLCJkX2lkIjoiQnJvd3NlciBvbiBNYWMgT1MgWCAxMC4xNS43LzI0NWFkMjI5LWExY2YtNDM3ZS1hYzBhLTM2N2EzMzYxMWE0OCIsIm5pY2tfbmFtZSI6ImJpdG9ubzEyMyIsInNfZ3JvdXAiOiIyIiwic3lzdGVtIjoiYml0b25vLXdlYiIsImV4cCI6MTYwNTU0NDc0MiwiaXNzIjoiYml0b25vLmlvIiwiYXVkIjoiYml0b25vLXdlYiJ9.Mj0oLrrcZEGs7latt1gjDMtODk0786Dm1LQoATjtzIk',
        'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.198 Safari/537.36',
        'content-type': 'application/json;charset=UTF-8',
        'origin': 'https://bitono.io',
        'sec-fetch-site': 'same-origin',
        'sec-fetch-mode': 'cors',
        'sec-fetch-dest': 'empty',
        'referer': 'https://bitono.io/index',
        'accept-language': 'vi-VN,vi;q=0.9,en-US;q=0.8,en;q=0.7',
        'cookie': '__cfduid=d2a5177a42f89df2eb0f9424ac0acf9a31605543596; WFCOUNTRY=vi'
    }

    //UP
    const payload = {"betType":type,"betAmount":amount,"betAccountType":"DEMO"}

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

    const type = 'UP'

    const amount = 900
    await Promise.all([
        _createOrder(type, amount),
        _createOrder(type, amount),
        _createOrder(type, amount),
        _createOrder(type, amount),
        _createOrder(type, amount),
        _createOrder(type, amount),
        _createOrder(type, amount),
        _createOrder(type, amount),
        _createOrder(type, amount),
        _createOrder(type, amount)
    ])
    // const results = await Promise.map(tmpArray, {concurrency: 10})
})