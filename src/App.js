import './App.css';
import Converter from './components/Converter';

function App() {
  return (
    <div className="App">
      <Converter coinOne="USD" coinTwo="BRL"></Converter>
      <Converter coinOne="BRL" coinTwo="USD"></Converter>
    </div>
  );
}

export default App;
