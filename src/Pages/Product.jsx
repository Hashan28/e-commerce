import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext';
import { useParams } from 'react-router-dom';
import Breadcrum from '../Components/Breadcrum/Breadcrum';
import ProductDisplay from '../Components/Product-display/ProductDisplay';
import DescriptionBox from '../Components/DescriptionBox/DescriptionBox';
import RelatedProducts from '../Components/RelatedProducts/RelatedProducts';

const Product = () => {
  const {all_product} =useContext(ShopContext);
  const {prpoductId}= useParams();
  const product = all_product.find((e)=> e.id === Number(prpoductId))
  return (
    <div>
        <Breadcrum product={product}/>
        <ProductDisplay product={product}/>
        <DescriptionBox/>
        <RelatedProducts/>
    </div>
  )
}

export default Product