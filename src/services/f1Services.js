const baseUrl = "http://localhost:3030"

async function getAllPilots(){
    let result = await fetch(`${baseUrl}/data/teams`)
    return result

}

export default getAllPilots