import React, { useState } from 'react'

function Character(props) { // ❗ Add the props
  const { data, planets } = props;
  const [homeworldVisible, setHomeworldVisible] = useState(false);// ❗ Create a state to hold whether the homeworld is rendering or not
  const toggleHomeworld = () => {
    setHomeworldVisible(!homeworldVisible);
  };// ❗ Create a "toggle" click handler to show or remove the homeworld
  
  let homeworldName = '';
  for (let i = 0; i < planets.length; i++) {
    if (planets[i].id === data.homeworld) {
      homeworldName = planets[i].name;
      break;
    }
  }
  
  return (
    <div className='character-card' onClick={toggleHomeworld}>
      <h3 className='character-name'>{data.name}</h3>
      {homeworldVisible && (
        <p>
          Planet: <span className='character-planet'>{homeworldName}</span>
        </p>
        /* Use the same markup with the same attributes as in the mock */)}
    </div>
  )
}

export default Character
