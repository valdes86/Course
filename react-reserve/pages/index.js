import react from 'react';
import Axios from 'axios';

function Home(products) {

  console.log(products)

  /*React.useEffect( () => {
    getProducts()
  }, []);
  
  async function getProducts() {
    const url = 'http://localhost:3000/api/products';
    const response = await Axios.get(url);
    console.log(response);
  }
*/
  return (
    <>home</>
  );
}

//will be called from: _App.js
Home.getInitialProps = async () => {
  //fetch data on server
    const url = 'http://localhost:3000/api/products';
    const response = await Axios.get(url);
  //return response data as an object
  return {products:  response.data };
  //note: this object will be merge with existing props
};
export default Home;
