import React, { useState } from 'react';
import './style.css';

export default function App() {
  const [name, setName] = useState('');
  const [coordinates, setCoordinates] = useState({
    x: 0,
    y: 0,
  });
  const [tags, setTags] = useState([
    {
      name: '',
      coordinates: {
        x: 0,
        y: 0,
      },
    },
  ]);
  const handleClick = (e) => {
    setCoordinates((prev) => {
      return {
        ...prev,
        x: e.clientX,
        y: e.clientY,
      };
    });
  };
  const handleTag = () => {
    setTags((prev) => {
      return [
        ...prev,
        {
          name: name,
          coordinates: {
            ...prev.coordinates,
            x: coordinates.x,
            y: coordinates.y,
          },
        },
      ];
    });
    setName('');
  };
  console.log(name);
  return (
    <div className="App">
      <img
        className="imageclass"
        onClick={handleClick}
        style={{ width: '150px', position: 'relative' }}
        src="https://media.glamour.com/photos/5ebd7bfdff61267e6b09e86c/6:7/w_1037,h_1210,c_limit/friends.jpg"
        alt="friends"
      />
      {tags.map((tag) => (
        <div
          className="tag"
          style={{
            position: 'absolute',
            top: tag.coordinates.y,
            left: tag.coordinates.x,
          }}
        >
          {tag.name}
        </div>
      ))}
      <input
        placeholder="Tag Name"
        type="text"
        // style={{
        //   position: "absolute",
        //   top: coordinates.y,
        //   left: coordinates.x
        // }}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={handleTag}>Add Tag!</button>
    </div>
  );
}
