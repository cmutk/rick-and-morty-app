import axios from 'axios';
import {useEffect,useState} from 'react'

export default function useListThisFromApi(endpoint) {

  const [loading, setLoading]=useState(true);
  const [error, setError]=useState(false);
  const [items, setItems]=useState([]);
    useEffect(() => {
        let cancel;
        setLoading(true);
        setError(false);
        axios({
          method:'GET',
          url:`https://rickandmortyapi.com/api/${endpoint}`,
          cancelToken: new axios.CancelToken(c => cancel = c)
    
        }).then(res=>{
          setItems(res.data)
          setLoading(false);
        }).catch(err=>{
          if(axios.isCancel(err)) return
          setError(true)
        })
       return()=>cancel()
       
     }, [endpoint])

     return {loading,error,items};

}

 
