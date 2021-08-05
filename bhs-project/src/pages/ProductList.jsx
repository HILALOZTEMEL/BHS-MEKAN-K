import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom";
import { Card, Icon, Image } from 'semantic-ui-react'
import ProductService from "../services/productService"

export default function ProductList() {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    //component yüklendiğinde yapılması istenen içerik
    let productService = new ProductService()
    productService.getProducts().then((result) => setProducts(result.data.data))
  }, []);

  return (
    <div>

<Card.Group itemsPerRow={3}>
      {products.map((product) => (
        <Card  key={product.id}>
          <Image src='/images/avatar/large/matthew.png' wrapped ui={false} />
          <Card.Content>
            <Card.Header>{product.description}</Card.Header>
            <Card.Meta>
              <span >{product.price}</span>
            </Card.Meta>
            <Card.Description>
              <Link to={`/products/${product.productName}`}>{product.productName}</Link>            
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <a>
              <Icon name='user' />
              {product.brandName}
            </a>
          </Card.Content>
        </Card>
      ))}

</Card.Group>

    </div>
  )
}

