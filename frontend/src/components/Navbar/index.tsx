import { ReactComponent as GithubIcon } from 'assets/img/Github.svg';
import "./styles.css";

function Navbar(){
   return (
      <header>
        <nav className='container'>
          <div className='dsmovie-nav-content'>
            <h1>Cinemista</h1>
            <a href='https://github.com/dan-kov'>
                <div className='dsmovie-contact-container'>
                  <GithubIcon/>
                  <p className='dsmovie-contact-link'>/dan-kov</p>
                </div>
            </a>
          </div>
        </nav>
      </header>   
   );
}

export default Navbar;