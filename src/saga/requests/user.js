import axios from 'axios'

export function requestGetUser() {
    return axios.request({
       method: 'get',
       url: 'http://my-json-server.typicode.com/werth-code/demo/db' 
    })
}