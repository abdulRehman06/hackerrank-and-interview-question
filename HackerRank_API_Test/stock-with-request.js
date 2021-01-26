

getStockInformation('7-January-2000')

async function getStockInformation(inDate) {
    let response = await callAPI(inDate)
    if (response.data.length) {
        delete response.data[0].date
        console.log(`response[0]  ${JSON.stringify(response.data[0], '', 2)}`)
        return response.data[0]
    } else {
        console.log(` Ans === Empety object`)
        return {}
    }

}

async function callAPI(inDate) {
    return new Promise((resolve, reject) => {
        try {
            let date = (inDate[0] == 0) ? inDate.slice(1) : inDate
            console.log(`inDate   ${inDate}`)
            const request = require('request')
            let option = {
                method: 'GET',
                url: `https://jsonmock.hackerrank.com/api/stocks?date=${date}`,
                header: {
                    'Content-Type': 'application/json'
                }
            }
            request(option, (error, response, body) => {
                if (!error && response.statusCode == 200) {
                    const jsonBody = JSON.parse(body);
                    // console.log(`jsonBody  ${JSON.stringify(jsonBody)}`)
                    resolve(jsonBody)
                }
                else {
                    console.log(`error  ${error}`)
                    reject(error)
                }
            })

        }
        catch (error) {
            console.log('error :', error)
            reject(error)
        }
    })
}