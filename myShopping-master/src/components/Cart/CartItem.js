import { useDispatch } from 'react-redux';
import classes from './CartItem.module.css';
import { cartActions } from '../../store/cart-slice';
const CartItem = (props) => {
  const dispatch = useDispatch();
  const { title, quantity, total, price, image, id } = props.item;

  //
  const removeItemHandler = () => {
    dispatch(cartActions.removeItemCart(id));
  };
  //
  const addItemHandler = () => {
    dispatch(
      cartActions.addItemToCart({
        id,
        title,
        price,
      })
    );
  };
  //
  const deleteItemCart = () => {
    dispatch(cartActions.deleteItemCart(id));
  };
  return (
    <li className={classes.item}>
      <header>
        <div>
          <img className={classes.image} src={image} alt='test' />
        </div>
        <div>
          <h6>{title}</h6>
        </div>

        <div className={classes.price}>
          ${total.toFixed(2)}{' '}
          <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={removeItemHandler}>-</button>
          <button onClick={addItemHandler}>+</button>
          <button onClick={deleteItemCart}>delete</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
