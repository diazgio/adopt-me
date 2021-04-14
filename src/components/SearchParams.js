/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import pet,{ ANIMALS } from '@frontendmasters/pet';
import { connect } from 'react-redux';
import useDropdown from './useDropdown';
import Results from './Results';
import 'regenerator-runtime/runtime';
import changeTheme from './actionCreators/changeTheme';
import changeLocation from './actionCreators/changelocation';


const SearchParams = props => {
  const [breeds, setBreeds] = useState([]);
  const [animal, AnimalDropdown] = useDropdown("Animal", "dog", ANIMALS);
  const [breed, BreedDropdown, setBreed] = useDropdown("Breed", "", breeds);
  const [pets, setPets] = useState([]);

  async function requestPets() {
    const { animals } = await pet.animals({
      location: props.location,
      breed,
      type: animal
    })

    setPets(animals || []);
  }

  useEffect(() => {
    setBreeds([]);
    setBreed("");
    
    pet.breeds(animal).then(({ breeds: apiBreeds }) => {
      const breedStrings = apiBreeds.map(({ name }) => name);
      setBreeds(breedStrings);
    }, console.error);
  }, [animal, setBreed, setBreeds]);

  return (
    <div className="search-params">
      <form onSubmit={e => {
        e.preventDefault();
        requestPets();
      }}>
        <label htmlFor="location">
          Location
          <input
            type="text" 
            id="location" 
            value={props.location} 
            placeholder="Location" 
            onChange={ e => {
            props.setLocation(e.target.value)
            }}
          />
        </label>
        <AnimalDropdown />
        <BreedDropdown />
        <label htmlFor="theme">
          Theme
          <select
            value={props.theme}
            onChange={e => props.setTheme(e.target.value)}
            onBlur={e => props.setTheme(e.target.value)}
          >
            <option value="peru">Peru</option>
            <option value="darkblue">darkblue</option>
            <option value="mediumorchid">Medium Orchid</option>
            <option value="chartreuse">Chartreuse</option>
          </select>
        </label>
        <button style={{backgroundColor: props.theme}}>Submit</button>
      </form>
      <Results pets={pets} />
    </div>
  );
}

const mapStateToProps = ({ theme, location }) => ({
  theme,
  location
});

const mapDispatchToProps = dispatch => ({
  setTheme: theme => dispatch(changeTheme(theme)),
  setLocation: location => dispatch(changeLocation(location)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchParams);