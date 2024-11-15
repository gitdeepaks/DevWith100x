import { useEffect, useState } from "react";

export const useFetch = (url, options = { methode: "GET" }) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);

      try {
        const resposnse = await fetch(url, { ...options });

        if (!resposnse.ok) {
          throw new Error("network error is not ok");
        }
        const result = await resposnse.json();
        setData(result);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    if (url) {
      fetchData();
    }
  }, [url, options]);

  return { data, loading, error };
};
