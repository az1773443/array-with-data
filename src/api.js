const api = {
    getList: () => {
        return fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
    }

}

export default api