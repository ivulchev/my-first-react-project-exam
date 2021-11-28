// import { getToken } from "./authService.js";

async function request(method, url, data) {
    let options = {}
    // let token = getToken();
    
    if (method !== 'GET') {
        options = {
            method,
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        }
    }

    // if (token) {
    //     options.headers = {
    //         ...(options.headers),
    //         'X-Authorization': token
    //     };
    //     console.log(options.headers)
    // }

    const res = await fetch(url, options);
    if (res.url.endsWith('logout')) {
        return res;
    }
    return res.json();
}

export const get = request.bind(null, 'GET');
export const post = request.bind(null, 'POST');
export const put = request.bind(null, 'PUT');
export const del = request.bind(null, 'DELETE');
export const patch = request.bind(null, 'PATCH')