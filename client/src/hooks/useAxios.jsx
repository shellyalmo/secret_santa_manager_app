import { useState, useEffect } from "react";
import { secretSantaApi } from "../api/api.js";

/**
 *
 * @param {string} url
 * @param {import('axios').AxiosRequestConfig} config
 * @returns
 */
function useAxios(url, config) {
  const [data, setData] = useState({ data: null, error: null });
  useEffect(() => {
    let ignore = false;
    secretSantaApi(url, config).then((res) => {
      if (!ignore) {
        setData(res);
      }
    });
    return () => {
      ignore = true;
    };
  }, [url]);
  return data;
}

export default useAxios;
