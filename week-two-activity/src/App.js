import './App.css';
import Pokemon from './components/Pokemon';
const pikachu_img = require("./img/pikachu.png");
const img_404 = require("./img/404.png");

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Pokemon name='Pikachu' path={pikachu_img} alt={img_404} />
      </header>
    </div>
  );
}

export default App;
