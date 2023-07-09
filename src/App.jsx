import './App.css';
import Header from './components/Header';
import Controls from './components/Controls';
import Board from './components/Board';

export default function App() {
  return (
    <>
      <div className="uk-container">
        <Header />
        <Controls />
        <Board />
      </div>
    </>
  );
}

