const API_URL = 'https://jsonplaceholder.typicode.com'

const api = {
    getList: () => {
        return fetch(`${API_URL}/posts`).then((response) => response.json())
    },
    getDetails: ({id}) => {
            return fetch(`${API_URL}/posts/${id}`).then((response) => response.json())
        },

}

export default api
