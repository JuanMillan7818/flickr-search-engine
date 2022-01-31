import { IonSearchbar, IonText, IonToolbar } from "@ionic/react";
import { FormEvent, useContext, useState } from "react";
import { ContextAPI } from "../context/ContextAPI";
import { DOMAIN, PATH_POST, PORT_SERVE } from "../environments/enviroments.dev";
import { TypeRequest } from "../interfaces/TypeRequest";

const InputSearch: React.FC = () => {
  const [search, setSearch] = useState("");
  const { setUrl, setOptionsAPI } = useContext(ContextAPI);

  const handleChangeSearch = (e: CustomEvent) => {
    setSearch(e.detail.value);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    let data: TypeRequest = {
      method: "POST",
      body: {
        tag: search,
      },
      JWT: JSON.parse(localStorage.getItem("key")),
    };
    if (process.env.NODE_ENV === "production") {
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
            className="input-search"
            autocomplete="off"
            showCancelButton="focus"
            placeholder="Find your favorite image!"
            enterkeyhint="enter"
            value={search}
            onIonChange={(e) => handleChangeSearch(e)}
            animated
          />
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
