
//bootstrap imports 
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import PropTypes from 'prop-types';
// redux import 
import { useDispatch } from 'react-redux';
import { increment } from '../slices/productSlice';

export default function Product(props) {
    const product = props.product;
    const dispatch = useDispatch();
    return (
        <Card style={{ width: '18rem', display: 'flex' }} >
            <Card.Img variant="top" src={product.image} style={{ width: '70%', alignSelf: 'center' }} />
            <Card.Body>
                <Card.Title>{product.title}-{product.id}</Card.Title>
                <Card.Text>
                    {product.description}
                </Card.Text>
                <Button variant="primary" onClick={() => { dispatch(increment(product)) }}>Add to cart</Button>
            </Card.Body>
        </Card>
    );
}
Product.propTypes = {
    product: PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
    }).isRequired,
};
