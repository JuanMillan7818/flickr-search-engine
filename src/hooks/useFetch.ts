import { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import { TypeRequest } from "../interfaces/TypeRequest";
import { TypeResponse } from "../interfaces/TypeResponse";
import { saveToken } from "../util/adminLocalStorage";

export const useFetch = (url: string, { method, body }: TypeRequest) => {
  const isMounted = useRef(true);

  const [data, setData] = useState<TypeResponse>({ items: [], load: null });
  useEffect(() => {
    return () => {
      isMounted.current = false;
    };
  }, []);

  useEffect(() => {
    let json: RequestInit = {
      headers: {
        "Content-Type": "application/json",
        Authorization: JSON.parse(localStorage.getItem("key"))?.value,
      },
      method,
      body: JSON.stringify(body),
    };
    if (method === "POST") setData({ load: false });
    console.log(url, method, body, JSON.parse(localStorage.getItem("key")));
    fetch(url, json)
      .then((resp) => resp.json())
      .then((result) => {
        if (isMounted.current) {
          if (result.token) {
            saveToken("key", result.token, 1000);
          } else {
            setData({ items: result, load: true });
          }
        }
      })
      .catch((err) => {
        setData({ items: [], load: null });
      });
  }, [url, method, body]);
  return data;
};

useFetch.propTypes = {
  url: PropTypes.string.isRequired,
  content: PropTypes.object.isRequired,
};
