// getTotalGoals('Barcelona', 2011)
// getTotalGoals('Chelsea', 2014) // ans 92
getTotalGoals('Chelsea', 2011) // ans 93
async function getTotalGoals(team, year) {
    try {
        let team1Goal = 0, team2Goal = 0
        let response = await Promise.all(['team1', 'team2'].map(async (teamNumber) => {
            if (teamNumber == 'team1') {
                let response = await callApi(team, year, teamNumber, 1)
                team1Goal += countTotalGoal(response.data, 'team1')
                return response.total_pages // return total no of pages we have to search 
            } else {
                let response = await callApi(team, year, teamNumber, 1)
                team2Goal += countTotalGoal(response.data, 'team2')
                return response.total_pages // return total no of pages we have to search 
            } 
        }))
        console.log(`response  , `, response)

        if (response[0] > 1 ) {
            let homeGroungPages = Array(response[0] - 1).fill(1).map((value, index) => index += 2)

            await Promise.all(homeGroungPages.map(async (pageNo) => {
                let response = await callApi(team, year, 'team1', pageNo)
                return (team1Goal += countTotalGoal(response.data, 'team1'))
            }))
        }
        if (response[1] > 1) {
            let visitingTeam = Array(response[1] - 1).fill(1).map((value, index) => index += 2)

            await Promise.all(visitingTeam.map(async (pageNo) => {
                let response = await callApi(team, year, 'team2', pageNo)
                return (team2Goal += countTotalGoal(response.data, 'team2'))
            }))
        }
        // console.log(`team1Goal  ${team1Goal}`)
        // console.log(`team2Goal  ${team2Goal}`)
        let totalGoal = team1Goal + team2Goal
        console.log(` Total Goal of Team = ${totalGoal}`)
        return totalGoal
    } catch (error) {
        console.log(`error  ${error}`)
        return error
    }

}

async function callApi(teamName, year, teamNo, pageNo = 1) {
    return new Promise((resolve, reject) => {
        try {
            var request = require('request');
            console.log(`year  ${year}  teamName  ${teamName}   teamNo  ${teamNo} `)
            var options = {
                'method': 'GET',
                'url': `https://jsonmock.hackerrank.com/api/football_matches?year=${year}&${teamNo}=${teamName}&page=${pageNo}`,

            };
            request(options, async function (error, response) {
                if (error) throw new Error(error);
                else {
                    resolve(JSON.parse(response.body))
                }

            });
        } catch (error) {
            reject(error)
        }
    })
}
function countTotalGoal(data, teamNo) {
    let totalGoal = 0
    if (data) {
        totalGoal = data.reduce((sum, value) => {
            if (teamNo == 'team1') {
                return (sum + parseInt(value.team1goals))
            } else {
                return (sum + parseInt(value.team2goals))
            }
        }, 0)
    }
    console.log(` ${teamNo} totalGoal ${totalGoal}`)
    return totalGoal
}


