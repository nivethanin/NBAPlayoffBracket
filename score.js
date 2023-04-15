let correctTeams = []
let correctScores = [4,6,5]

let playerTeams = []
let playerScores = [4,6,6]
let playerTally = 0

function compare_scores(){
    for (let i = 0; i < correctScores.length; i++){
        var delta = Math.abs(correctScores[i] - playerScores[i])

        switch (delta) {
            case 0:
                playerTally +=5
                break;
            case 1:
                playerTally +=3
                break;
            case 2:
                playerTally +=2
                break;
            case 3:
                playerTally +=1
                break;
        
            default:
                break;
        }

    }
    return playerTally
}

function generateScore(){
    var table = document.getElementById("scoreTable");

    for(var i = 0; i< table.rows.length(); i++){
        console.log(i)
    }
}

// console.log(DATA)



