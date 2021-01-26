

getNumDraws(2010)

async function getNumDraws(year) {
    try {
        let withdrawmath = 0
        let response = await callAPI(year, 1)
        console.log(`response.total_pages  ${response.total_pages}`)
        withdrawmath += countDrawMatch(response.data)
        if (response.total_pages > 1) {
            let noOfPages = new Array(response.total_pages - 1).fill(1).map((value, index) => { return (index + 2) })
            let otherPageResult = await Promise.all(noOfPages.map(async (pageNo) => {
                let response = await callAPI(year, pageNo)
                return withdrawmath += countDrawMatch(response.data)
            }))
        } 
        console.log(`withdrawmath  ${withdrawmath}`)
        return withdrawmath
    } catch (error) {
        console.log(`error   ${error}`)
        return error
    }
}
async function callAPI(inYear, pageNo = 1) {
    return new Promise((resolve, reject) => {
        try {
            console.log(`inYear= ${inYear}  pageNo= ${pageNo} `)
            const request = require('request')
            let option = {
                method: 'GET',
                url: `https://jsonmock.hackerrank.com/api/football_matches?year=${inYear}&page=${pageNo}`,
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

function countDrawMatch(data) {
    let totaldraw = 0;
    if (data) {
        data.forEach(element => {
            if (element.team1goals == element.team2goals) {
                totaldraw++
            }
        });
        console.log(` totaldraw =${totaldraw}`)
        return totaldraw
    } else {
        return 0
    }
}