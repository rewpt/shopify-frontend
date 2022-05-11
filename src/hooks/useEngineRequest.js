import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { Configuration, OpenAIApi } from "openai";

export default function useEngineRequest(data, url) {
  const [response, setResponse] = useState([]);
  useEffect(() => {
    
    const getData = async () => {
      const configuration = new Configuration({
        organization: "org-ycu24WCpMDdQWjw2z21rpxVt",
        apiKey: `${process.env.REACT_APP_OPENAI_API_KEY}`,
      });
      const openai = new OpenAIApi(configuration);
      try {
        const res = await openai.listEngines();
        setResponse(res.data.data);
      } catch {
        console.log("err");
      }
    };

    const sendAxReq = (data) => {
      axios
        .post(url, data, {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${process.env.REACT_APP_OPENAI_API_KEY}`,
          },
        })
        .then((data) => setResponse(data.data.choices));
    };
    sendAxReq(data);
  }, []);
  return response;
}
