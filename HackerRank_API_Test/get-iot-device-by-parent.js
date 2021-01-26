
async function avgRotorSpeed(statusQuery, parentId) {
    try {
        let getRoterSpeedValue = []
        let response = await callAPI(statusQuery, 1)
        console.log(`response.total_pages  ${response.total_pages}`)
        getRoterSpeedValue = [...getRoterSpeedValue, ...getRoterSpeed(response.data, parentId)]
        if (response.total_pages > 1) {
            let noOfPages = new Array(response.total_pages - 1).fill(1).map((value, index) => { return (index + 2) })
            let otherPageResult = await Promise.all(noOfPages.map(async (pageNo) => {
                let response = await callAPI(statusQuery, pageNo)
                getRoterSpeedValue = [...getRoterSpeedValue, ...getRoterSpeed(response.data, parentId)]
                return getRoterSpeedValue
            }))
        }
        console.log(`getRoterSpeedValue  ${JSON.stringify(getRoterSpeedValue)}`)
        
        if(getRoterSpeedValue.length == 0)
            return 0
        
        let sum = getRoterSpeedValue.reduce((sum, value) => (sum + value.operatingParams.rotorSpeed), 0)
        let avg = Math.floor(sum / getRoterSpeedValue.length)
        console.log(`avg speed of moter   ${avg}`)
        return avg
    } catch (error) {
        console.log(`error   ${error}`)
        return error
    }
}
async function callAPI(statusQuery, pageNo = 1) {
    return new Promise((resolve, reject) => {
        try {
            console.log(`statusQuery= ${statusQuery}  pageNo= ${pageNo} `)
            const request = require('request')
            let option = {
                method: 'GET',
                url: `https://jsonmock.hackerrank.com/api/iot_devices/search?status=${statusQuery}&page=${pageNo}`,
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

function getRoterSpeed(data, parentId) {
    try {
        if (data) {
            let newArray = data.filter(element => {
                if (element.parent && element.parent.id && element.parent.id == parentId) {
                    return true
                }
                else {
                    return false
                }
            });
            console.log(` speed =${newArray.length}`)
            console.log(` speed =${JSON.stringify(newArray)}`)
            return newArray
        } else {
            return []
        }
    } catch (error) {
        console.log(` getRoterSpeed error  ${error}`)
        return (error)
    }
}  
