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

export const removeUndefinedsToPleaseNext = async (obj) => {
    // cleaning an array
    if (Array.isArray(obj)) {
        const arr = obj;
        const newArr = [];
        arr.forEach((val, key) => {
            if (typeof val === 'undefined') {
                return;
            }
            if (val === Object(val)) {
                // this is an object, not a regula value
                newArr[key] = removeUndefinedsToPleaseNext(val);
            } else {
                newArr[key] = val;
            }
        });
        return newArr;
    }

    // cleaning an object
    const newObj = {};
    Object.keys(obj).forEach((key) => {
        const val = obj[key];
        if (typeof val === 'undefined') {
            return;
        }
        if (val === Object(val)) {
            // this is an object, not a regula value
            newObj[key] = removeUndefinedsToPleaseNext(val);
        } else {
            newObj[key] = val;
        }
    });
    return newObj;
}