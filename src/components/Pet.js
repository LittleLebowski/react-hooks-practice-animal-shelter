import React from "react";

function Pet(props) {
  let { pet, handleAdopt } = props;

  return (
    <div className="card" data-testid="pet">
      <div className="content">
        <span className="header">
          {pet.gender} Name: {pet.name}
        </span>
        <div className="meta">
          <span className="date">PET TYPE: {pet.type}</span>
        </div>
        <div className="description">
          <p>Age: {pet.age}</p>
          <p>Weight:{pet.weight}</p>
        </div>
      </div>
      <div className="extra content">
        <button className="ui disabled button">Already adopted</button>
        <button
          className="ui primary button"
          onClick={(_e) => {
            handleAdopt(pet.id);
          }}
        >
          Adopt pet
        </button>
      </div>
    </div>
  );
}

export default Pet;
