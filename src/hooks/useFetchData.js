import { useState, useEffect } from "react";
const API_KEY = "&api_key=zK58dwMIvUyfpL2yWpzaNpzcDEft4DGxJqedkVep";
export const useFetchData = ({
  page,
  selectedRover,
  camera,
  dateFilter,
  sunFilter,
}) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  let path = `https://api.nasa.gov/mars-photos/api/v1/rovers/${selectedRover}/photos?sol=${sunFilter}&page=${page}`;
  if (camera !== "all") path += `&camera=${camera}`;
  if (dateFilter !== undefined) path += `&earth_date=${dateFilter}`;

  useEffect(() => {
    //const abortController = new window.AbortController();
    setLoading(true);
    fetch(`${path}${API_KEY}`) //, { signal: abortController.signal })
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => setError(error))
      .finally(() => setLoading(false));

    // return () => abortController.abort();
  }, [path]);

  return { data, loading, error };
};
