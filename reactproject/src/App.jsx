import React,{useEffect, useState} from 'react'
import Card from './components/card';

export default function App() {

    const [product,setProduct] = useState([])
  //   async function fetchApi(){
  //   const response = await fetch('https://dummyjson.com/products');
  //   const result = await response.json();
  //   if(result.products){
  //     setProduct(prevProd=> prevProd = result.products)
  //   }
  // fetchApi();

  useEffect(()=>{
    fetch('https://dummyjson.com/products')
      .then(res=>res.json())
      .then(data=>setProduct(data.products))
  },[])


  console.log(product);
  return (
    <div>
      <h1 className="producttext">Products</h1>
    <div className='productPage'>
      {
        product.map(item => <Card data={item} key={item.id}/>)
      }
      
    </div>
    </div>
  )
}