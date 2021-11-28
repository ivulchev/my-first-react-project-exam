import * as requester from "./requester.js"

const baseUrl = 'http://localhost:3030';
const registerUrl = `${baseUrl}/users/register`;
const loginUrl = `${baseUrl}/users/login`;
const logoutUrl = `${baseUrl}/users/logout`;
const allPilotsUrl = `${baseUrl}/jsonstore/pilots`;
const allTeamsUrl = `${baseUrl}/jsonstore/teams`;
const allLegendsUrl = `${baseUrl}/jsonstore/legends`;


function createMEME(ownerId, title, imageUrl) {
    return requester.post(`${baseUrl}/jsonstore/memes`, {
        _ownerId: ownerId,
        title: title,
        image: imageUrl,
        rating: 0
    })
}
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
    createMEME
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


