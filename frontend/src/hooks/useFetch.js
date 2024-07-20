import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState([]);  // State to hold fetched data, initialized as an empty array
  const [error, setError] = useState(null);  // State to hold any fetch errors, initially set to null
  const [loading, setLoading] = useState(false);  // State to track loading state, initially set to false

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);  // Set loading state to true when starting fetch
      try {
        const res = await fetch(url);  // Perform the fetch request

        if (!res.ok) {
          setError("Failed to fetch");  // If response is not ok, set error message
        }
        const result = await res.json();  // Parse response body as JSON
        setData(result.data);  // Update state with fetched data
        setLoading(false);  // Set loading state to false after fetch completes
      } catch (err) {
        setError(err.message);  // If an error occurs during fetch, set error message
        setLoading(false);  // Set loading state to false after fetch completes
      }
    };

    fetchData();  // Invoke the fetchData function when the component mounts or 'url' changes
  }, [url]);  // useEffect dependency array ensures the effect runs when 'url' changes

  return {
    data,  // Return fetched data
    error,  // Return fetch error message
    loading,  // Return loading state
  };
};

export default useFetch;  // Export the custom hook 'useFetch' for use in other components
