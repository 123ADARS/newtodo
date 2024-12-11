
import React, { useState } from "react";

// Sample data
const data = [
  { id: 1, name: "John Doe", email: "john.doe@example.com" },
  { id: 2, name: "Jane Smith", email: "jane.smith@example.com" },
  { id: 3, name: "Alice Johnson", email: "alice.johnson@example.com" },
  { id: 4, name: "Robert Brown", email: "robert.brown@example.com" },
];

const SearchComponent = () => {
  // State for search query and filtered results
  const [query, setQuery] = useState("");
  const [filteredData, setFilteredData] = useState(data);

  // Handle search input changes
  const handleSearch = (e) => {
    const value = e.target.value.toLowerCase();
    setQuery(value);

    const filtered = data.filter((item) =>
      item.name.toLowerCase().includes(value) || item.email.toLowerCase().includes(value)
    );

    setFilteredData(filtered);
  };

  return (
    <div style={{ padding: "20px", maxWidth: "600px", margin: "auto" }}>
      <h2>Search Data</h2>
      <input
        type="text"
        placeholder="Search by name or email..."
        value={query}
        onChange={handleSearch}
        style={{
          width: "100%",
          padding: "10px",
          fontSize: "16px",
          marginBottom: "20px",
        }}
      />
      <ul>
        {filteredData.length > 0 ? (
          filteredData.map((item) => (
            <li key={item.id} style={{ marginBottom: "10px", fontSize: "18px" }}>
              <strong>{item.name}</strong> - {item.email}
            </li>
          ))
        ) : (
          <li style={{ fontSize: "18px", color: "red" }}>No results found</li>
        )}
      </ul>
    </div>
  );
};

export default SearchComponent;

