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
        //const {data} = await api.get(`/post?id=eq.${id}`);       
        let { data: posts, error } = await api
        .from('posts')
        .select(id)

        if(posts){
            return data;
        }
        return data;

    } catch (error) {
        
    }


}