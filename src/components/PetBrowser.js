import React from 'react';

import Pet from './Pet';

class PetBrowser extends React.Component {
  render() {
    return (
      <div className="ui cards">
        {this.props.pets.map(pet => {
          return <Pet
          name={pet.name}
          type={pet.type}
          age={pet.age}
          weight={pet.weight}
          gender={pet.gender}
          onAdoptPet={this.props.onAdoptPet}
          isAdopted={this.props.adoptedPets.includes(pet.id)}
        />
        })}
      </div>
    );
  }
}

export default PetBrowser;
