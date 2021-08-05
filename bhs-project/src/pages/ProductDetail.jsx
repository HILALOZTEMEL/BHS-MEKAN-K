import React, { useState, useEffect } from "react"
import { useParams } from 'react-router-dom'
import { Button, Card, Image } from 'semantic-ui-react'
import ProductService from "../services/productService"

export default function ProductDetail() {

    let {name} = useParams()


    const [product, setProduct] = useState({});

    useEffect(() => {
      //component yüklendiğinde yapılması istenen içerik
      let productService = new ProductService()
      productService.getByProductName(name).then((result) => setProduct(result.data.data))
    }, []);

    return (
        <div>
            {name}
            <Card.Group>
                <Card fluid>
                    <Card.Content>
                        <Image
                            floated='right'
                            size='large'
                            src='/images/avatar/large/steve.jpg'
                        />
                        <Card.Header>{product.productName}</Card.Header>
                        <Card.Meta>{product.description}</Card.Meta>
                        <Card.Description>
                            <strong>{product.description}</strong>
                        </Card.Description>
                    </Card.Content>
                    <Card.Content extra>
                        <div className='ui two buttons'>
                            <Button basic color='green'>
                                Approve
                            </Button>
                            <Button basic color='red'>
                                Decline
                            </Button>
                        </div>
                    </Card.Content>
                </Card>
                
            </Card.Group>
        </div>
    )
}
