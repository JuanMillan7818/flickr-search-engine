import { IonButton, IonIcon, IonSearchbar, IonText, IonToolbar } from "@ionic/react";
import { FormEvent, useContext, useState } from "react";
import { ContextAPI } from "../context/ContextAPI";
import { DOMAIN, PATH_POST, PORT_SERVE } from "../environments/enviroments.dev";
import { TypeRequest } from "../interfaces/TypeRequest";
import { searchCircle } from 'ionicons/icons';


const InputSearch: React.FC = () => {  
  const [search, setSearch] = useState("");
  const { setUrl, setOptionsAPI } = useContext(ContextAPI);  

  const handleChangeSearch = (e: CustomEvent) => {
    setSearch(e.detail.value);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if(search.trim() === '') {
      return;
    }
    let data: TypeRequest = {
      method: "POST",
      body: {
        tag: search,
      },
      JWT: JSON.parse(localStorage.getItem("key")),
    };
    if (process.env.NODE_ENV === "production") {
      setOptionsAPI(data);
      setUrl(`${process.env.PUBLIC_URL}${process.env.REACT_APP_PATH_POST}`)
    } else {
      setOptionsAPI(data);
      setUrl(`${DOMAIN}:${PORT_SERVE}${PATH_POST}`);      
    }
    setSearch("");        
  };

  return (
    <div className="container-input">
      <form onSubmit={handleSubmit} className="form-search">
        <IonToolbar>
          <IonSearchbar
            className="input-search search"
            autocomplete="off"            
            placeholder="Find your favorite image!"
            enterkeyhint="enter"
            value={search}
            onIonChange={(e) => handleChangeSearch(e)}
            animated
          />
          <IonButton fill="outline" color="dark" shape="round" id="icon" onClick={handleSubmit}>
            <IonIcon slot="start" icon={searchCircle} size="large"/>
          </IonButton>
        </IonToolbar>
      </form>
      <IonText className="trending">
        <p>
          Popular Searches: cats, space, dogs, fantastic, wallpaper, sky&nbsp;
        </p>
      </IonText>
    </div>
  );
};

export default InputSearch;
