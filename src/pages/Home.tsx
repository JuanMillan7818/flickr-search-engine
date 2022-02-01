import { IonContent, IonPage } from "@ionic/react";
import { useState } from "react";
import Background from "../components/Background";
import { ContextAPI } from "../context/ContextAPI";
import {
  DOMAIN,
  PATH_TOKEN,
  PORT_SERVE,
} from "../environments/enviroments.dev";
import { useFetch } from "../hooks/useFetch";
import { TypeRequest } from "../interfaces/TypeRequest";
import "../theme/style.css";

const Home: React.FC = () => {
  let basic_url: string;
  if (process.env.NODE_ENV === "production") {    
    basic_url = `${process.env.PUBLIC_URL}${process.env.REACT_APP_PATH_TOKEN}`;
  } else {
    basic_url = `${DOMAIN}:${PORT_SERVE}${PATH_TOKEN}`;
  }  
  const [url, setUrl] = useState<string>(basic_url);
  const [optionsAPI, setOptionsAPI] = useState<TypeRequest>({ method: "GET" });
  const { items, load } = useFetch(url, optionsAPI);

  return (
    <ContextAPI.Provider
      value={{
        url,
        setUrl,
        setOptionsAPI,
        items,
        load
      }}
    >
      <IonPage>
        <IonContent fullscreen>
          <Background />
        </IonContent>
      </IonPage>
    </ContextAPI.Provider>
  );
};

export default Home;
