import React, { useState } from "react";

const PoolPage = () => {
  const initialCandidates = [
    {
      id: 1,
      name: "John Doe",
      pools: [
        {
          id: 1,
          title: "Favorite Movies",
          suggestions: [
            { id: 1, text: "The Shawshank Redemption", selected: false,prc:"20%" },
            { id: 2, text: "The Godfather", selected: false ,prc:"45%"},
            { id: 3, text: "Pulp Fiction", selected: false, prc:"35%"},
          ],
        },
      ],
    }
    
  ];

  const [candidates, setCandidates] = useState(initialCandidates);

  const handleSuggestionSelection = (candidateId, poolId, suggestionId) => {
    const updatedCandidates = candidates.map((candidate) => {
      if (candidate.id === candidateId) {
        const updatedPools = candidate.pools.map((pool) => {
          if (pool.id === poolId) {
            const updatedSuggestions = pool.suggestions.map((suggestion) => {
              if (suggestion.id === suggestionId) {
                return { ...suggestion, selected: !suggestion.selected };
              }
              return suggestion;
            });
            return { ...pool, suggestions: updatedSuggestions };
          }
          return pool;
        });
        return { ...candidate, pools: updatedPools };
      }
      return candidate;
    });
    setCandidates(updatedCandidates);
  };
  
  return (
    <div className="container">
    
      {candidates.map((candidate) => (
        <>
       
        
        <div className="card border p-3 mb-4 " key={candidate.id} >
        <header class="mb-2 mt-2">
                                    
                                    <h3 class="fw-bolder mb-3 mt-3">I made that Poll </h3>
        </header>
        <div className=" d-flex al-c mb-2">
                 <img src="./fischer1.jpg" alt="" style={{width:"60px",height :"60px"}} className="rounded-circle "/>
                <p class="fs-5 m-2"><u>Joey Ti</u></p>
           </div>
          <div className="card-body">
          
            {candidate.pools.map((pool) => (
              <div
                className="card mb-3"
                key={pool.id}
                style={{ backgroundColor: "#fff", boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)" }}
              >
                <div className="card-body shodow-none">
                  <h6 className="card-title">{pool.title}</h6>
                  <ul className="list-group">
                    {pool.suggestions.map((suggestion) => (
                      <li
                        className={`list-group-item d-flex justify-content-between align-items-center ${
                          suggestion.selected ? "selected bg-light" : ""
                        }`}
                        key={suggestion.id}
                        onClick={() =>
                          handleSuggestionSelection(
                            candidate.id,
                            pool.id,
                            suggestion.id
                          )
                        }
                      >
                        <span>{suggestion.text}</span>
                        <i
                          className={`bi ${
                            suggestion.selected ? "bi-check-circle-fill text-primary" : "bi-circle"
                          } `
                        }
                        >{suggestion.selected?(suggestion.prc):''}</i>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

         
        </div>
      </>
      ))}
    </div>
  );
};

export default PoolPage;
