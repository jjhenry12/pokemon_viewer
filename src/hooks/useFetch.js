import { useCallback, useEffect, useState } from "react";

const useFetch = (url) => {
    const [isLoading, setIsLoading] = useState(false);
    const [apiData, setApiData] = useState(null);
    const [serverError, setServerError] = useState(null);
  
    const handleFetch = useCallback(async () => {
      setIsLoading(true);
        try {
          const resp = await fetch(url);
          const data = await resp?.json();
  
          setApiData(data);
          setIsLoading(false);
        } catch (error) {
          setServerError(error);
          setIsLoading(false);
        }

    }, [url]);

    useEffect(() => {
      handleFetch()
    }, [handleFetch])


    return {isLoading, apiData, serverError}
  };

  export default useFetch