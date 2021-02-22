import react from 'react';
import Axios from 'axios';
import ProductList from '../components/Index/ProductList'

function Home({products}) {

  console.log(products)

  return <ProductList products={products} />

}

//will be called from: _App.js
Home.getInitialProps = async () => {
  //fetch data on server
    const url = 'http://localhost:3000/api/products';
    const response = await Axios.get(url);
  //return response data as an object
  return {products: response.data };
  //note: this object will be merge with existing props
};
export default Home;
