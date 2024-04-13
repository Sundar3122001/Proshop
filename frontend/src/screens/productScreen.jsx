import { useParams } from "react-router-dom";
import products from "../products";
import { Link } from "react-router-dom";
import Rating from '../components/Rating';
import {Row,Col,Image, ListGroup, Card,Button, ListGroupItem} from 'react-bootstrap' 
import React from 'react'

const ProductScreen = () => {
    const {id :productId}=useParams();
    const product = products.find((p)=>p._id===productId)
    console.log(product)
  return (
    <>
    <Link className="btn btn-light my-3" to="/">Go Back</Link>
    <Row>
        <Col md={5}>
            <Image src={product.image} alt={product.name}fluid />
        </Col>
        <Col md={4}>
            <ListGroup varient='Flush'>
                <ListGroupItem>
                    <h3>{product.name}</h3>
                </ListGroupItem>
                <ListGroupItem>
                    <Rating value={product.rating} text={`${product.numReviews}Reviews`}></Rating>
                </ListGroupItem>
                <ListGroupItem>Price{`${product.price}`}</ListGroupItem>
                <ListGroupItem>Description{`${product.description}`}</ListGroupItem>

            </ListGroup>
        </Col>
        <Col md={3}>
            <Card>
                <ListGroup variant='flush'>
                    <ListGroupItem >
                        <Row>
                            <Col>Price:</Col>
                            <Col>
                            <strong>${product.price}</strong>
                            </Col>
                        </Row> 
                    </ListGroupItem>
                    <ListGroupItem >
                        <Row>
                            <Col>Status</Col>
                            <Col>
                            <strong>{product.countInStock > 0 ? 'In stock' :'Out of Stock'} </strong>
                            </Col>
                        </Row> 
                    </ListGroupItem>
                    <ListGroupItem >
                        <Button className="btn-block" type='button' disabled={product.countInStock===0}>
                            Add To Cart
                        </Button> 
                    </ListGroupItem>
                </ListGroup>    
            </Card>
        </Col>
    </Row>
    </>
  )
}

export default ProductScreen