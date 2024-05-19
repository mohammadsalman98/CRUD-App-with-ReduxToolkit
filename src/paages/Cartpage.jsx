//bootstrap imports
import { useEffect } from 'react';
import { Button } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
//redux imports
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { deleteProduct, deleteAllproducts, Resetcart, sumTotalTax } from '../slices/productSlice';

export default function Cartpage() {
    const cartProducts = useSelector((state) => state.products.cart);
    const totaltax = useSelector((state) => state.products.tax);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(sumTotalTax());
    }, [totaltax, cartProducts])
    return (
        <div className="cart-Page" >
            <Button variant="primary" className='m-2' onClick={() => dispatch(Resetcart())}>Reset cart</Button>
            <Table striped bordered hover variant="white" className='my-2' style={{ textAlign: 'center' }}>
                <thead>
                    <tr>
                        <th>Product Name</th>
                        <th> id </th>
                        <th>price</th>
                        <th>image</th>
                        <th>Quantity</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        cartProducts.map((product) => (
                            <tr key={product.id}>
                                <td>{product.title}</td>
                                <td>{product.id}</td>
                                <td>{product.price}$</td>
                                <td><img style={{ width: '5%' }} src={product.image} alt={product.title} /></td>
                                <td>{product.quantity}</td>
                                <td style={{ display: 'flex', justifyContent: 'center' }}>
                                    <Button className='m-1' style={{ width: '5.5rem', fontSize: '0.9rem' }} variant="danger" onClick={() => dispatch(deleteAllproducts(product.id))}>Delete All products</Button>
                                    <Button className='m-1' style={{ width: '5.5rem', fontSize: '0.9rem' }} variant="success" onClick={() => dispatch(deleteProduct(product.id))}>Delete product</Button>

                                </td>
                            </tr>
                        ))
                    }
                    <tr >

                        <td style={{ backgroundColor: "azure" }} >Total Tax :</td>
                        <td ></td>
                        <td style={{ backgroundColor: "azure" }}  >{Number(totaltax).toFixed(1)} $</td>
                        <td ></td>
                        <td ></td>
                        <td ></td>

                    </tr>
                </tbody>
            </Table>
        </div>
    )
}
