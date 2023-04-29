import React, { useState, useEffect } from 'react';

function NumberManagementService() {
  const [numbers, setNumbers] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch('http://104.211.219.98/numbers/odd');
      const data = await response.json();
      setNumbers(data.numbers);
    }
    fetchData();
  }, []);

  return (
    <div>
      
      <p>
        {numbers.map(number => (
          <p key={number}>{number}</p>
        ))}
      </p>
    </div>
  );
}

export default NumberManagementService;