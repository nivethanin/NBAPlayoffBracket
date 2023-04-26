let MAX_NUM_TEAMS = 13

let CORRECTTEAMS = ["", "", "PHI","","DEN","PHO"]
let CORRECTSERIES = [0, 0, 4, 0, 5, 5]





function generateScore(){
    var table = document.getElementById("scoreTable");
    
    for(var i = 1, row; i<MAX_NUM_TEAMS +1; i++){
        // Loop through rows of the table

        let picks = []
        let tScore = 0
        var row = table.rows[i]

        for (var j = 2; j < 17; j++){
            //iterate through columns with picks

            col = row.cells[j]
            picks.push(row.cells[j].innerText)
            console.log(row.cells[j].innerText)
          }

          
          
        var bundleData = parseData(picks)

        tScore = compareTeams( CORRECTTEAMS ,bundleData[0]) + compareSeries( CORRECTSERIES, bundleData[1])

        row.cells[1].innerHTML = tScore


        // console.log(bundleData[1])
    }
}



function parseData(rawData){
    let playerSeries = []
    let playerTeams = []

    for(var i = 0; i<rawData.length; i++){

        var pPicks = rawData[i].split(':')

        playerTeams.push(pPicks[0])
        playerSeries.push(pPicks[1])
        
    }
    return [playerTeams, playerSeries]
}


function compareTeams(correctTeams, playerTeams){
    let teamScores = 0
    for(let i=0; i<correctTeams.length; i++){

        if (correctTeams[i] === playerTeams[i])
            teamScores += 5

    }

    return teamScores
}


function compareSeries(correctScores, playerSeries){
    let playerTally = 0
    for (let i = 0; i < correctScores.length; i++){
        var delta = Math.abs(correctScores[i] - parseInt(playerSeries[i]))

        switch (delta) {
            case 0:
                playerTally +=5
                break;
            case 1:
                playerTally +=3
                break;
            case 2:
                playerTally +=1
                break;
            case 3:
                playerTally +=0
                break;
        
            default:
                break;
        }

    }
    return playerTally
}
