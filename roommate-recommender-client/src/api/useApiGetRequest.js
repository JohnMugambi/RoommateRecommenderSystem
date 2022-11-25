import { useState, useEffect } from "react";
import axios from "axios";

export const useApiGetRequest = (url) => {
  const [data, setData] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      await axios
        .get(url, {
          headers: {
            accessToken: sessionStorage.getItem("accessToken"),
          },
        })
        .then((response) => {
          setIsLoaded(true);
          setData(response.data);
        })
        .catch((error) => {
          setError(error);
        });
    };
    fetchData();
  }, [url, data]);

  return { error, isLoaded, data };
};
