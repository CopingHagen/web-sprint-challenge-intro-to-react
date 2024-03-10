import React, { useState } from 'react'

function Character(props) { // ❗ Add the props
  const { data } = props;
  const [homeworld, setHomeWorld] = useState(false);// ❗ Create a state to hold whether the homeworld is rendering or not
  const toggleHomeworld = () => {
    setHomeWorld(!homeworld);
  }// ❗ Create a "toggle" click handler to show or remove the homeworld
  return (
    <div className='character-card'>
      <h3 className='character-name' onClick={toggleHomeworld}>{data.name}</h3>
      {homeworld && (
        <p>
          Planet: <span className='character-planet'>{data.homeworld}</span>
        </p>
        /* Use the same markup with the same attributes as in the mock */)}
    </div>
  )
}

export default Character
