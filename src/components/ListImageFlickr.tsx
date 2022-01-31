import { useContext } from "react";
import { ContextAPI } from "../context/ContextAPI";
import { Photos } from "../interfaces/Photos";
import 'animate.css';


const ListImageFlickr: React.FC = () => {
  const { items, load } = useContext(ContextAPI);
  let cont = 0;
  return (
    <>      
      {load === false ? (
        <div className="loading">
          <svg><rect></rect></svg>
        </div>
      ) : (        
        <div className="wrapper animate__animated animate__fadeInLeft animate__slow">          
          {items && items?.map((item: Photos, index: number) => {
            cont++;
            if (cont === 6) cont = 1;
            return (
              <div
                key={index}
                className={
                  cont === 2 || cont === 1 || cont === 4
                    ? ""
                    : cont === 3
                    ? "wide"
                    : "tall"
                }
              >
                <img src={item.image} alt={item.tags} />
              </div>
            );
          })}
        </div>
      )}      
    </>
  );
};

export default ListImageFlickr;
