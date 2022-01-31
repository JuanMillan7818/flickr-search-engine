import { IonTitle } from "@ionic/react";
import InputSearch from "./InputSearch";
import ListImageFlickr from "./ListImageFlickr";

const Background: React.FC = () => {
  return (
    <>
      <div className="main">
        <IonTitle className="title-main">
          Find the best images on Flickr
        </IonTitle>
        <InputSearch />
      </div>
      <ListImageFlickr />
    </>
  );
};

export default Background;
