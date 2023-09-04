import React from "react";
import Content from "../component/Content";
import Left from "../component/Left";

function HOME() {
  return (
    <div className="Home-Container">
      <div className="Left-Container">
        <Left />
      </div>
      <div className="Content-Container">
        <Content />
      </div>

      <style jsx>
        {`
          .Home-Container {
            display: flex;
            flex-direction: column; /* Ekran boyutu düşükse alt alta sırala */
            border: 1px solid white;
            justify-content: space-around;
          }

          @media (min-width: 768px) {
            /* Ekran boyutu 768 pikselden büyükse yan yana sırala */
            .Home-Container {
              flex-direction: row;
            }
          }

          .Left-Container {
            flex: 1;
          }

          .Content-Container {
            flex: 2;
            border: 1px solid white;
          }
        `}
      </style>
    </div>
  );
}

export default HOME;
