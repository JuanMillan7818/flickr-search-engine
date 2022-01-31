import { useContext } from "react";
import { ContextAPI } from "../context/ContextAPI";
import { Photos } from "../interfaces/Photos";

const ListImageFlickr: React.FC = () => {
  const { items, load } = useContext(ContextAPI);
  return (
    <>
      {load === false ? (
        <p>cargando....</p>
      ) : (
        <div className="wrapper">
          {items?.map((item: Photos, index: number) => {
            return (
              <div key={index}>
                <img src={item.image} alt="dsfsdf" />
              </div>
            );
          })}
        </div>
      )}
    </>
  );
};

export default ListImageFlickr;
