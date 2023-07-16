import logo from '../../assets/images/logo.png';
import './Header.css';

export default function Header() {
  return (
    <>
      <div className="header">
        <img src={logo} alt="Logo" height={100} />
        <div className='uk-text-center'>
            <h1>Memory Game</h1>
            <h2>Click on two cards to see if they match.</h2>
        </div>
      </div>
    </>
  );
}