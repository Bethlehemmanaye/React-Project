import React from 'react'
import './Product.css';
import { useStateValue } from './StateProvider';
import ReactCardFlip from 'react-card-flip';

function Product({id, title, image, price, rating}) 
{
    const [{basket}, dispacth] = useStateValue();

    // console.log("this is the basket >>>", basket);

    const addToBasket = () => {
    // dispatch the item into the data layer
    dispacth({
        type: "ADD_TO_BASKET",
        item: {
            id:id,
            title: title,
            image: image,
            price: price,
            rating: rating,
        },
    });
};

// const [isFlipped, setIsFlipped] = useState(false);

// const handleClick = ()=>{
//   setIsFlipped(!isFlipped);
// }

    return (
        <div
        className="product">
            <div className="product__info">
                <p>{title}</p>
                <p className="product__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="product__rating">
                    {Array(rating)
                    .fill()
                    .map((_, i)=>(
                        <p>🌟</p>
                    ))}
                </div>
            </div>
            <img
            src={image}
            alt=""
            />
             <button onClick={addToBasket} >Add to Basket</button>
            {/* <ReactCardFlip isFlipped= {isFlipped} flipDirection='vertical'>
            <button onClick={addToBasket this.handleClick} >Add to Basket</button>
            </ReactCardFlip> */}
        </div>
    )
}

export default Product

