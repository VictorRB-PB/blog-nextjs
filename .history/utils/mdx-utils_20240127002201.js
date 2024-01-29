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
        const {data} = await api.get(`/posts?id=eq.${id}`);            
        
        if(data){
            console.log(data);
            return data;
        }

    } catch (e) {
        console.log("Houve algum erro: " +e+ " " +e.data );
    }


}
