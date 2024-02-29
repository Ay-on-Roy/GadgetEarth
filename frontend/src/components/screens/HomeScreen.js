import React, {useState, useEffect} from 'react';
// import products from '../../products';
import {Row,Col} from 'react-bootstrap';
import Product from '../Product';
import { Link } from 'react-router-dom';
import axios from 'axios';


function HomeScreen() {
  const [products, setProducts]= useState([])
  useEffect(()=>{
    async function fetchProducts(){
      const {data} = await axios.get('http://127.0.0.1:8000/api/products/')
      setProducts(data)
    }
    fetchProducts()
  }, [])

  return (
    <div>
      <h1 className='text-center'></h1>
      <h1 className='text-center'>Latest Products</h1>
      <Row>
        {products.map((product) => (
            <Col key={product._id} sm={12} md={6} lg={4} xl={3}> 
                <Link to={`/product/${product._id}`}>
                <Product product={product} />
                </Link>
            </Col>
        ))}
      </Row>
    </div>
  );
}

export default HomeScreen;