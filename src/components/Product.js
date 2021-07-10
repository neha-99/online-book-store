import React from 'react';
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle,Button} from 'reactstrap';

export default function Product(props) {
  const { product, onAdd } = props;
  return (
    <Card style={{ display: 'flex' }} >
                
                    <CardImg className="img" variant="top"  src={product.image} alt={product.name} />
                    <CardBody>
                        <CardTitle>{product.name}</CardTitle>
                        <CardText>Rs. {product.price}</CardText>
                    </CardBody>
                    <Button variant="primary" onClick={() => onAdd(product)} >Add to Cart</Button>
            </Card>
     
  );
}