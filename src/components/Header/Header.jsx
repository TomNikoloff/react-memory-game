import logo from '../../assets/images/logo.png';
import './Header.css';

export default function Header() {
  return (
    <>
      <div className="header uk-animation-slide-top uk-margin-bottom">
      <a href='https://tomnikoloff.github.io/' className='box-shadow-hover'>
        <img className='rotate' src={logo} alt="Logo" height={100} />
      </a>
        <div className='uk-text-center'>
            <h1>Memory Game</h1>
            <h2>Click on two cards to see if they match.</h2>
        </div>
      </div>
    </>
  );
}