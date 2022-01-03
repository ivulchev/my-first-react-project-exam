import * as requester from "./requester.js"
import { v4 as uuidv4 } from 'uuid';

const baseUrl = 'https://f1-fanhome-default-rtdb.europe-west1.firebasedatabase.app/';
const registerUrl = `${baseUrl}users/register`;
const loginUrl = `${baseUrl}users/login`;
const logoutUrl = `${baseUrl}users/logout`;
const allPilotsUrl = `${baseUrl}jsonstore/drivers`;
const allTeamsUrl = `${baseUrl}jsonstore/teams`;
const allLegendsUrl = `${baseUrl}jsonstore/legends`;


function createMEME(ownerId, title, imageUrl) {
    return requester.post(`${baseUrl}memes.json`, {
        _ownerId: ownerId,
        title: title,
        image: imageUrl,
        rating: 0,
        createdOn: Date(),
        voters: ["somevoters"]
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


