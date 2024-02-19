import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


const CreatePoolPage = () => {
  const [suggestions, setSuggestions] = useState([
  ]);
  const [newSuggestion, setNewSuggestion] = useState("");
  const Navigate = useNavigate();

  const handleAddSuggestion = () => {
    if (newSuggestion.trim() !== "") {
      setSuggestions([...suggestions, newSuggestion]);
      setNewSuggestion("");
    }
  };

  const handleRemoveSuggestion = (index) => {
    const updatedSuggestions = [...suggestions];
    updatedSuggestions.splice(index, 1);
    setSuggestions(updatedSuggestions);
  };

  const handleCreatePool = () => {
    console.log(suggestions);
    axios.post('http://localhost:2000/get/pools',suggestions).then((res=>{
      console.log(res.data);

    }))
    console.log("Creating pool with suggestions:", suggestions);

    // Redirect the user to another page after creating the pool
    Navigate("/pools");
  };
  
  return (
    <div className="container mt-4 border mb-3">
      <p className="fs-1">Create Poll of Suggestions</p>
      <div className="card mt-4">
        <div className="card-body">
          <div className="input-group mb-5">
            <input
              type="text"
              className="form-control"
              placeholder="Enter a suggestion"
              value={newSuggestion}
              onChange={(e) => setNewSuggestion(e.target.value)}
            />
            <button className="btn btn-primary" onClick={handleAddSuggestion}>
              Add
            </button>
          </div>
          <ul className="list-group">
            {suggestions.map((suggestion, index) => (
              <li
                className="list-group-item d-flex justify-content-between align-items-center"
                key={index}
              >
                {suggestion}
                <button
                  className="btn btn-danger"
                  onClick={() => handleRemoveSuggestion(index)}
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <button className="btn btn-primary btn-lg mt-4 w-100" onClick={handleCreatePool}>
        Create Poll
      </button>
      
    </div>
  );
};

export default CreatePoolPage;
