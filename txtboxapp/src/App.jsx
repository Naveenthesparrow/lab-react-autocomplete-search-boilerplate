import { useState } from "react";
import "./App.css";
import Countries from "./resources/countryData.json";

export default function App() {
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  const handleKeyDown = (event) => {
    if (event.keyCode === 27) {
      setQuery("");
      setSuggestions([]);
    }
  };

  const handleInputChange = (event) => {
    const inputValue = event.target.value;
    setQuery(inputValue);

    if (inputValue === "") {
      setSuggestions([]);
      return;
    }

    const filteredSuggestions = Countries.filter((country) =>
      country.name.toLowerCase().startsWith(inputValue.toLowerCase())
    );
    setSuggestions(filteredSuggestions);
  };

  return (
    <>
      <div className="search">
        <input
          placeholder="Search"
          value={query}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
        />
        {suggestions.map((country) => (
          <div key={country.code} className="suggestion">
            <p>{country.name}</p>
          </div>
        ))}
      </div>
    </>
  );
}
