import React from 'react'
import NewTamagotchi from './NewTamagotchi'
import PropTypes from 'prop-types'

function Tamagotchi(props) {
  return (
    <div>
    <h1>{props.name}</h1>
    </div>
  );
}
Tamagotchi.propTypes = {
  name: PropTypes.string
}

export default Tamagotchi;
