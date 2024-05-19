//react imports
import Product from "../components/Product"
import { useEffect } from "react";
//redux imports
import { useSelector } from "react-redux/es/hooks/useSelector"
import { useDispatch } from "react-redux"
import { fetchProducts } from "../slices/productSlice";

export default function Productspage() {
    const dispatch = useDispatch();
    const productsResult = useSelector((state) => state.products.productsArray);
    useEffect(() => {
        dispatch(fetchProducts());
    }, [])
    return (
        <>
            <div className="products-page " style={{ display: "flex", flexWrap: 'wrap', gap: '20px', margin: '10px', justifyContent: 'center' }}>
                {productsResult.length > 0 ? (
                    productsResult.map((product) => (
                        <Product product={product} key={product.id} />
                    ))
                ) : (
                    // add a loading message
                    <p>Loading products...</p>
                )}
            </div>
        </>
    )
}

