import React from 'react';
import PropTypes from 'prop-types';


function NewTamagotchiForm(props) {
  let _name = null;

  function handleNewName(event){
    event.preventDefault();
    console.log(_name.value);
    props.elizaIsVeryCool(_name.value);
    _name.value = ''

  }

  return (
    <div className='tamagotchiContainer'>
    <form onSubmit={handleNewName}>
    <input type="text" placeholder="Name" ref={(input) => {_name = input}} />
    <button type='submit'>name this baby</button>
    </form>
    </div>
  );
}

NewTamagotchiForm.propTypes = {
    onNewPostSubmission: PropTypes.func,

};

export default NewTamagotchiForm;
