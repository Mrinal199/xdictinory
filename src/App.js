import React, { useState } from 'react';

const dictionary = [
  { word: "React", meaning: "A JavaScript library for building user interfaces." },
  { word: "Component", meaning: "A reusable building block in React." },
  { word: "State", meaning: "An object that stores data for a component." }
];

const App = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [definition, setDefinition] = useState('');

  const handleSearch = () => {
    const foundWord = dictionary.find(entry => entry.word.toLowerCase() === searchTerm.toLowerCase());
    if (foundWord) {
      setDefinition(foundWord.meaning);
    } else {
      setDefinition("Word not found in the dictionary.");
    }
  };

  return (
    <div>
      <h2>Dictionary App</h2>
      <div>
        <label htmlFor="search"></label>
        <input
          id="search"
          type="text"
          placeholder='Search for a word...'
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button><br></br>
        <p id="definitionTitle"><strong>Definition:</strong></p>
        <p>{definition}</p>
      </div>
    </div>
  );
};

export default App;
