import React, { useEffect } from "react";

import Pet from "./Pet";

function PetBrowser(props) {
  const { pets, handleAdopt } = props;

  return (
    <div className="ui cards">
      {pets.map((p, index) =>
        p.isAdopted === false ? (
          <Pet key={index} pet={p} handleAdopt={handleAdopt} />
        ) : undefined
      )}
    </div>
  );
}

export default PetBrowser;
