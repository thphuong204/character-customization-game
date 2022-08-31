import React, { useState } from 'react';
import './App.css';
import PartList from './components/PartList';
import Avatar from './components/Avatar';
import Stage from './components/Stage';
import ActionButtons from './components/ActionButtons';

// class App extends React.Component {
//   state = {
//     color: 'gray',
//   };
//   // What your data look like
//   // What values are your data

//   onColorChange = (targetColor) => {
//     alert('Changing color to ' + targetColor)
//     console.log('Changing color to ' + targetColor)
//     this.setState({ color: targetColor });
//   }

//   render() {
//     return (
//       <>
//         <Stage color={this.state.color} />
//         <ActionButtons onColorChange={this.onColorChange} />
//       </>
//     );
//   } // How do you want it looks

// }

const App = () => {

  const [color, setColor] = useState('gray');

  const onColorChange = (targetColor) => {
    alert('Changing color to ' + targetColor)
    console.log('Changing color to ' + targetColor)
    setColor(targetColor)
  }

  return (
    <>
      <Stage color={color} />
      <ActionButtons onColorChange={onColorChange} />
    </>
  );
}

export default App;
