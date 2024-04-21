import { useSelector } from 'react-redux';
import CartButton from '../Cart/CartButton';
import Cart from '../Cart/Cart';
import classes from './MainHeader.module.css';

const MainHeader = (props) => {
  const showCart = useSelector((state) => state.ui.cartIsVisible);
  return (
    <header className={classes.header}>
      <h1>ReduxCart</h1>
      <nav>
        <ul>
          <li>
            <CartButton />
          </li>
          <li> {showCart && <Cart />}</li>
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;
