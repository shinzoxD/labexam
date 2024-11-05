import React from 'react';

function Home() {
  return (
    <div>
      <h2>Welcome to the Home Page</h2>
      <p>This is a protected page accessible after login.</p>
      <div className="carousel">
        {/* Example card elements */}
        <div className="card">Image 1</div>
        <div className="card">Image 2</div>
        <div className="card">Image 3</div>
        <div className="card">Image 4</div>
      </div>
    </div>
  );
}

export default Home;
