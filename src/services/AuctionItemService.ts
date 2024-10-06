import axios, { Axios, type AxiosResponse } from 'axios'

const apiClient=axios.create({
    baseURL:import.meta.env.VITE_BACKEND_URL,
    withCredentials:false,
    headers:{
        Accept:'application/json',
        'Content-Type':'application/json'
    }
})

export default{
    // getItems(){
    //     return apiClient.get('/auctions')
    // },

    getItems(params: { description?: string; type?: string } = {}): Promise<AxiosResponse> {
        return apiClient.get('/auctions', { params });
    },

   
}