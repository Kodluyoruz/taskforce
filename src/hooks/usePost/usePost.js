import {useState} from 'react';
import axios from 'axios';

function usePost() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const post = async (url, apiData) => {
    setData(null);
    setError(null);
    setLoading(true);
    try {
      const {data: responseData} = await axios.post(url, apiData);
      setData(responseData);
      setLoading(false);
    } catch (err) {
      setError(err);
      setLoading(false);
    }
  };

  return {data, loading, error, post};
}

export default usePost;
