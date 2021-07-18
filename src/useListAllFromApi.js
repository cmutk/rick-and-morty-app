import axios from "axios";
import { useEffect, useState } from "react";

export default function useListAllFromApi(endpoint, pageNumber) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [hasMore, setHasMore] = useState(false);
  const [pageCount, setPageCount] = useState(null);
  const [items, setItems] = useState([]);
  useEffect(() => {
    const CancelToken = axios.CancelToken;
    const source = CancelToken.source();
    setLoading(true);
    setError(false);
    axios({
      method: "GET",
      url: `https://rickandmortyapi.com/api/${endpoint}`,
      params: { page: pageNumber },
      cancelToken: source.token,
    })
      .then((res) => {
        setPageCount(res.data.info.pages);
        setHasMore(res.data.info.next);
        setItems((prevItems) => {
          return [...new Set([...prevItems, ...res.data.results])];
        });
        setLoading(false);
      })
      .catch((err) => {
        if (axios.isCancel(err)) return;
        if (err) return console.log(err);
        setError(true);
      });
    return () => source.cancel();
  }, [endpoint, pageNumber]);

  return { loading, error, hasMore, pageCount, items };
}
