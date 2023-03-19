// import { Switch, Route } from 'react-router-dom';
// import AppBar from './components/AppBar/AppBar';
import SignupForm from './SignupForm/SignupForm';
import ColorPicker from './ColorPicker/ColorPicker';
import Counter from '../components/Counter/Counter';
import Clock from './Clock/Clock';
import PokemonView from '../views/PokemonView';
import Friends  from './Friends/Friends';

const colorPickerOptions = [
  { label: 'red', color: '#F44336' },
  { label: 'green', color: '#4CAF50' },
  { label: 'blue', color: '#2196F3' },
  { label: 'grey', color: '#607D8B' },
  { label: 'pink', color: '#E91E63' },
  { label: 'indigo', color: '#3F51B5' },
];

const containerStyles = {
  maxWidth: 1170,
  marginLeft: 'auto',
  marginRight: 'auto',
  paddingLeft: 15,
  paddingRight: 15,
};

 function App() {
  return (
    <div style={containerStyles}>

      {/* <Friends/> */}

      <PokemonView />
      {/* <SignupForm /> */}
      
      {/* <ColorPicker options={colorPickerOptions} /> */}
      {/* <Counter /> */}
      
      {/* <Clock /> */}
      
      
      
      {/* <AppBar /> */}
{/* 
      <Switch> */}
        {/* <Route path="/signup">
          <SignupForm />
        </Route> */}

        {/* <Route path="/colorpicker">
          <ColorPicker options={colorPickerOptions} />
        </Route> */}

        {/* <Route path="/counter">
          <Counter />
        </Route> */}

        {/* <Route path="/clock">
          <Clock />
        </Route> */}
{/* 
        <Route path="/pokemon">
          <PokemonView />
        </Route> */}
      {/* </Switch> */}
    </div>
  );
}


export default App;

