import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {useDispatch} from "react-redux";
import { addInteraction } from '../redux/interactions';
// import { Configuration, OpenAIApi } from "openai";

export default function useEngineRequest(data, url, dependency) {
  const [response, setResponse] = useState([]);
  const dispatch = useDispatch();
  useEffect(() => {
    
    // const getData = async () => {
    //   const configuration = new Configuration({
    //     organization: "org-ycu24WCpMDdQWjw2z21rpxVt",
    //     apiKey: `${process.env.REACT_APP_OPENAI_API_KEY}`,
    //   });
    //   const openai = new OpenAIApi(configuration);
    //   try {
    //     const res = await openai.listEngines();
    //     setResponse(res.data.data);
    //   } catch {
    //     console.log("err");
    //   }
    // };

    const sendAxReq = (data) => {
      axios
        .post(url, data, {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${process.env.REACT_APP_OPENAI_API_KEY}`,
          },
        })
        .then((res) => { 
          const responseStr = res.data.choices
          setResponse(responseStr);
          dispatch(addInteraction({prompt: data.prompt, response: responseStr[0].text }))
        });
        
    };
    console.log(data.prompt)
    if(data.prompt.length > 1) {
      sendAxReq(data);
    }
  }, [dependency]);
  return response;
}
