import * as requester from "./requester.js"

const baseUrl = 'http://localhost:3030/';
const registerUrl = `${baseUrl}users/register`;
const loginUrl = `${baseUrl}users/login`;
const logoutUrl = `${baseUrl}users/logout`;
const allPilotsUrl = `${baseUrl}jsonstore/drivers`;
const allTeamsUrl = `${baseUrl}jsonstore/teams`;
const allLegendsUrl = `${baseUrl}jsonstore/legends`;


function createMEME(ownerId, title, imageUrl) {
    return requester.post(`${baseUrl}/jsonstore/memes`, {
        _ownerId: ownerId,
        title: title,
        image: imageUrl,
        rating: 0,
        voters: []
    })
}
function getPilot(id){
    return requester.get(`${allPilotsUrl}/${id}`)
}
export const services = {
    getPilot,
    createMEME,
}

export const endpoints = {
    baseUrl,
    registerUrl,
    loginUrl,
    logoutUrl,
    allPilotsUrl,
    allTeamsUrl,
    allLegendsUrl
}


