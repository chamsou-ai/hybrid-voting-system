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
            { id: 1, text: "The Shawshank Redemption", selected: false },
            { id: 2, text: "The Godfather", selected: false },
            { id: 3, text: "Pulp Fiction", selected: false },
          ],
        },
        {
          id: 2,
          title: "Best Books",
          suggestions: [
            { id: 4, text: "To Kill a Mockingbird", selected: false },
            { id: 5, text: "1984", selected: false },
            { id: 6, text: "The Great Gatsby", selected: false },
          ],
        },
      ],
    },
    {
      id: 2,
      name: "Jane Smith",
      pools: [
        {
          id: 3,
          title: "Favorite Destinations",
          suggestions: [
            { id: 7, text: "Paris, France", selected: false },
            { id: 8, text: "Bali, Indonesia", selected: false },
            { id: 9, text: "New York City, USA", selected: false },
          ],
        },
      ],
    },
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
      <h1 className="mt-4">All Candidates</h1>
      {candidates.map((candidate) => (
        <div className="card mb-4" key={candidate.id}>
          <div className="card-body">
            <h5 className="card-title">{candidate.name}</h5>
            {candidate.pools.map((pool) => (
              <div className="card mb-3" key={pool.id}>
                <div className="card-body">
                  <h6 className="card-title" style={{ fontSize: "18px", fontWeight: "bold" }}>{pool.title}</h6>
                  <ul className="list-group">
                    {pool.suggestions.map((suggestion) => (
                      <li
                        className={`list-group-item d-flex justify-content-between align-items-center ${
                          suggestion.selected ? "selected" : ""
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
                        <span style={{ fontSize: "16px", fontWeight: "normal" }}>{suggestion.text}</span>
                        <i
                          className={`bi ${
                            suggestion.selected ? "bi-check-circle-fill text-success" : "bi-circle"
                          }`}
                        ></i>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default PoolPage;
