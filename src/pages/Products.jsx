import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadProducts } from "../features/cart/cartSlice";

const Products = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(loadProducts())
    },[dispatch])

    return (
        <div>
            <h2 className="title">Our Products</h2>
            {/*  {products && products.map(product => {
                const { id, img, price, title, amount } = product;
                return (<div key={id}>
                    <img src={img} width='120' alt={title} />
                    <h4>{title}</h4>
                    <p>
                        <span>${price}</span>
                        <span>{amount}</span>
                    </p>
                </div>)
            })} */}
        </div>
    );
};

export default Products;