import ProductItem from './ProductItem';
import classes from './Products.module.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Layout from '../Layout/Layout';

const Products = (props) => {
  // const DUMMY_PRODUCTS = [
  //   {
  //     id: 1,
  //     price: 6,
  //     title: 'My First Book',
  //     description: 'The first Book I ever wrote',
  //   },
  //   {
  //     id: 2,
  //     price: 7,
  //     title: 'My second Book',
  //     description: 'The second Book I ever wrote',
  //   },
  //   {
  //     id: 3,
  //     price: 8,
  //     title: 'My third Book',
  //     description: 'The third Book I ever wrote',
  //   },
  //   {
  //     id: 4,
  //     price: 9,
  //     title: 'My four Book',
  //     description: 'The four Book I ever wrote',
  //   },
  // ];
  //
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data: response } = await axios.get(
          'https://fakestoreapi.com/products'
        );
        setData(response);
        console.log(response);
      } catch (error) {
        console.error(error.message);
      }
    };

    fetchData();
  }, []);

  return (
    <section className={classes.products}>
      <Layout />
      <h2>Buy your favorite products</h2>

      <ul>
        {data.map((product) => (
          <ProductItem
            key={product.id}
            id={product.id}
            image={product.image}
            title={product.title}
            price={product.price}
            description={product.description}
          />
        ))}
      </ul>
    </section>
  );
};

export default Products;
