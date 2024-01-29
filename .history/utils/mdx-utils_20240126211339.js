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

export const deleteUndefined = (obj: Record<string, any> | undefined): void => {
    if (obj) {
      Object.keys(obj).forEach((key: string) => {
        if (obj[key] && typeof obj[key] === 'object') {
          deleteUndefined(obj[key]);
        } else if (typeof obj[key] === 'undefined') {
          delete obj[key]; // eslint-disable-line no-param-reassign
        }
      });
    }
  };