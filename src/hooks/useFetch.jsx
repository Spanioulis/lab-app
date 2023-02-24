import { useEffect, useState } from 'react';

const useFetch = (url) => {
   const [data, setData] = useState([]);
   const [loading, setLoading] = useState(false);
   const [error, setError] = useState(null);

   useEffect(() => {
      const getData = async () => {
         setLoading(true);
         try {
            const resp = await fetch(url);
            const data = await resp.json();
            setData(data);
         } catch (error) {
            console.log(error);
            setError(error);
         } finally {
            setLoading(false);
         }
      };

      getData();
   }, []);

   return { data, loading, error };
};

export default useFetch;
