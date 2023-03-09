import { NavLink } from 'react-router-dom';

type Props = {};

function Header({}: Props) {
  return (
    <header>
      <nav>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/about'>About</NavLink>
      </nav>
    </header>
  );
}

export default Header;
