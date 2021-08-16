import Image from "next/image";
import { useState } from "react";
import { StarIcon } from "@heroicons/react/solid";
import Currency from "react-currency-formatter";
import { useDispatch } from 'react-redux';
import { addToBasket } from "../slices/basketSlice";

const MAX_RATING = 5;
const MIN_RATING = 1;

function Product({id, title, price, description, category, image}) {
    
    const dispatch = useDispatch();
    

    const addItemToBasket = () => {

        const product = {id, title, price, description, category, image};
        
        // sending the product as action to REDUX store i.e basket slice
        dispatch(addToBasket(product));

    };
    
    return (
        <div className="relative flex flex-col m-5 bg-white z-30 p-10">
            {/* disp: category */}
            <p className="absolute top-2 right-2 text-xs italic text-gray-400">{category}</p>

            {/* disp: image */}
            <Image src={image} height={200} width={200} objectFit="contain" />

            {/* disp: title */}
            <h4 className="my-3">{title}</h4>
            

            {/* disp: description */}
            <p className="text-xs my-2 line-clamp-2">{description}</p>

            {/* disp: price */}
            <div className="mb-5">
                <Currency quantity={price} currency="INR" />
            </div>

            

            <button onClick={addItemToBasket} className="mt-auto button">Add to Basket</button>
            
        </div>
    );
}

export default Product;
