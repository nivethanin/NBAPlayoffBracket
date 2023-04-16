function parseData(rawData){
    let playerSeries = []
    let playerTeams = []

    for(var r in rawData){
        
       var  arr = r.split(',')

       for(var j in arr){

        var pPicks = j.split(':')

        playerTeams.push(pPicks[0])
        playerSeries.push(pPicks[1])

       }
        
    }
    return [playerTeams, playerSeries]
}
rawData

console.log(parseData(rawData)[0])