import './App.css';
import Header from './components/Header';
import Board from './components/Board';

export default function App() {
  return (
    <>
      <div className="uk-container">
        <Header />
        <Board />
      </div>
    </>
  );
}

