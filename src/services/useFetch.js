import react , {useState,useEffect} from 'react'; 

const useFetch = (val) => {
    let endpoint = `https://api.github.com/users/${val}`;
    const [{data,loading},setData] = useState({data: null, loading: true});
    useEffect(async ()=>{
        let response;
        response = await fetch(endpoint)
            setData({data: await response.json(),loading:false})
    },[val])
    return [data,loading];
}

export default useFetch;