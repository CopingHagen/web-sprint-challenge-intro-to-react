import React from 'react'
import urlPeople from './App'

function Character() { // ❗ Add the props
  // ❗ Create a state to hold whether the homeworld is rendering or not
  // ❗ Create a "toggle" click handler to show or remove the homeworld
  return (
    <div>
      {<p>{urlPeople.homeworld}</p>/* Use the same markup with the same attributes as in the mock */}
    </div>
  )
}

export default Character
