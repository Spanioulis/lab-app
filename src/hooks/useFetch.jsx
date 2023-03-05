import { useEffect, useState } from 'react';

const useFetch = (url) => {
   const [data, setData] = useState(JSON.parse(localStorage.getItem('data')) || []);
   const [isLoading, setIsLoading] = useState(true);
   const [error, setError] = useState(null);

   useEffect(() => {
      const getData = async () => {
         try {
            const resp = await fetch(url);
            const data = await resp.json();
            localStorage.setItem('data', JSON.stringify(data));
            setData(data);
            setIsLoading(false);
         } catch (error) {
            console.log(error);
            setError(error);
         } finally {
            setIsLoading(false);
         }
      };

      getData();
   }, []);

   return { data, isLoading, error, setData };
};

export default useFetch;
