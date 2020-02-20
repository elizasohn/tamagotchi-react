import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Tamagotchi from './components/Tamagotchi';
import Footer from './components/Footer';
import PropTypes from 'prop-types';
import NewTamagotchi from './components/NewTamagotchi';

class App extends React.Component {
  // constructor(props){
  //   super(props);
    state = {
      name : '',
    }
  // }

  handleNewName = name => {
    this.setState({
      name: name });
};

  render() {
    return (
      <div className="App">
      <Header />
      <NewTamagotchi onNewPostSubmission={this.handleNewName}/>
      <Tamagotchi name={this.state.name}/>
      <Footer />
      </div>
    );
  }
}
Tamagotchi.propTypes = PropTypes.shape({
  name: PropTypes.string,
});
export default App;
