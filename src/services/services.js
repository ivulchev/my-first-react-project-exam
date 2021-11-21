import * as requester from "./requester.js"

const baseUrl = 'http://localhost:3030';
const registerUrl = `${baseUrl}/users/register`;
const loginUrl = `${baseUrl}/users/login`;
const logoutUrl = `${baseUrl}/users/logout`;
const allPilotsUrl = `${baseUrl}/data/pilots`;
const allTeamsUrl = `${baseUrl}/data/teams`;
const allLegendsUrl = `${baseUrl}/data/legends`;

function getAllPilots() {
    return requester.get(allPilotsUrl);
}
function getOnePilot(id) {
    return requester.get(`${baseUrl}/data/pilot/${id}`)
}
function getAllTeams() {
    return requester.get(allTeamsUrl);
}
function getOneTeam(id) {
    return requester.get(`${baseUrl}/data/team/${id}`)
}

function getAllLegends() {
    return requester.get(allLegendsUrl);
}
function getOneLegend(id) {
    return requester.get(`${baseUrl}/data/legend/${id}`)
}

// function createMEME(title, imageUrl) {
//     return requester.post(`${baseUrl}/data/memes`, { title, imageUrl,})
// }
// function editBook(bookId, title, description, imageUrl, type) {
//     return requester.put(`${baseUrl}/data/books/${bookId}`, { title, description, imageUrl, type })
// }
// function deleteBook(memeId) {
//         let result = confirm("Do you really want to delete this article?")
//         if (result) {
//             let request = requester.del(`${baseUrl}/data/books/${memeId}`);
//             renderDashboard()
//             return request;
//         }
// }
// function getMyBooks(userId) {
//     return requester.get(`${baseUrl}/data/books?where=_ownerId%3D%22${userId}%22&sortBy=_createdOn%20desc`);
// }

export const services = {
    getAllPilots,
    getOnePilot,
    getAllTeams,
    getOneTeam,
    getAllLegends,
    getOneLegend
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
