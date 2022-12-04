const API_URL = 'http://127.0.0.1:5000';

const baseRequest = async ({urlPath = '', method = 'GET', body = null}) => {
    try {
        const reqParams = {
            method,
            headers: {
                'Content-Type': 'application/json'
            }
        };
        if (body) {
            reqParams.body = JSON.stringify(body);
        }
        await fetch(`${API_URL}${urlPath}`, reqParams);
    }
    catch (error) {
        console.log(error);
    }
}

export const getAllMovies = async () => {
    const rawResponse = await fetch('http://127.0.0.1:5000');
    return rawResponse;
}

export const postMovie = (body) => {
    baseRequest({urlPath: `/${body.id}/${body.name}/${body.duration}/${body.reviews}`, method: 'POST', body})
}

export const deleteMovie = (body) => baseRequest({urlPath: `/${body.id}`, method: 'DELETE', body})

export const editMovie = (body) => baseRequest({urlPath: `/${body.id}/${body.name}/${body.duration}/${body.reviews}`, 
method: 'PUT', body})