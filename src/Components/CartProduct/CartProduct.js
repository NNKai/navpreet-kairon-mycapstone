import React from 'react'
import { useStateValue } from '../../StateProvider';

function CartProduct({id,image,title,price}) {
    const [{basket}, dispatch] = useStateValue();

    const removeFromCart = () => {
        dispatch({
            type : 'REMOVE_FROM_BASKET',
            id:id
        })
    }

  return (
    <div className='cartProduct'key={id}>
      <img className='checkoutpage__image' src={image}/>
      <div className='checkoutProduct_info'>
          <p className='checkoutProduct__title'>{title}</p>
          <p className='checkoutProduct__price'>{price}</p>
      </div>
      <button onClick={removeFromCart}>Remove from Basket</button>
    </div>
  )
}

export default CartProduct
