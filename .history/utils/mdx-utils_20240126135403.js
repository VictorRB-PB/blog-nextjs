import { api } from '../services/api'

export const getPosts = async () => {
    const {data} = await api.get('/posts'); 

    if(data){
        return data;
    }

    return []
}

export const getPostBySlug = async (id) => {

    //TODO: BUSCAR UM POST EM ESPECIFICO.
    try {
       // const {data} = await api.get(`/post?id=eq.${id}`);       
        const {data} = await api.get(`/post?id=7080afb2-2387-43df-8bc4-d2e59ff149ce`);       

        if(data){
            return JSON.parse(JSON.stringify(data));
        }

        return JSON.parse(JSON.stringify(data));


    } catch (e) {
        console.error("Houve algum erro");
    }


}