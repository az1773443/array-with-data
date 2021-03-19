const api = {
    getList: () => {
        return fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(json => console.log(json))
    }

}

export default api