let cfpsId="2125390000000030"
function parseCFPSId (_id) {
    if (_id.length===16){
        let parts = _id.match(/(?<primary>\d{4})(?<secondary>\d{4})(?<penultimate>\d{4})(?<quaternary>\d{4})/).groups
        return parts        
    }
} 


console.log(parseCFPSId(cfpsId))