import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {useDispatch} from "react-redux";
import { addInteraction } from '../redux/interactions';

export default function useEngineRequest(data, url, dependency, bot) {
  const [response, setResponse] = useState([]);
  const dispatch = useDispatch();
  useEffect(() => {
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
          dispatch(addInteraction({prompt: data.prompt, response: responseStr[0].text, bot: bot.name}))
        })
        .catch((err) => {
          console.log(err)
        });
        
    };
    if(data.prompt.length > 1) {
      sendAxReq(data);
    }
  }, [dependency]);
  return response;
}
