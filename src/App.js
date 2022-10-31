import React, { useEffect, useState } from 'react';

import './App.css';

function App() {

  const [photos, setPhotos] = useState([])

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/photos?_start=0&_limit=100')
      .then((response) => response.json())
      .then((result) => {
        setPhotos(result)
      });
  }, [])

  return (
    <div className="App">
      <div className="photo-block">
        <h1>Post from API</h1>
        <div className="photo-block-items">
          {photos.map((photo) =>
            <div key={photo.id} className="photo-block-item">
              <div className="photo-block-img">
                <img src={photo.url} alt={photo.title} />
              </div>
              <div className="photo-block-title">
                {photo.title}
              </div>
            </div>
          )}
        </div>
      </div>

    </div>
  );
}

export default App;
