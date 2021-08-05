import React from 'react'
import Categories from './Categories'
import CartDetail from './CartDetail'
import { Grid } from 'semantic-ui-react'
import { Route } from 'react-router-dom'
import ProductList from '../pages/ProductList'
import ProductDetail from '../pages/ProductDetail'


export default function Dashboard() {

    return (
        <div>
            <Grid  >
                <Grid.Row>
                    <Grid.Column width={4}>
                        <Categories />
                    </Grid.Column>          

               
                    <Grid.Column width={12}>
                        <Route exact path="/" component={ProductList}/>
                        <Route exact path="/products" component={ProductList}/>
                        <Route path="/products/:name" component={ProductDetail}/>
                        <Route exact path="/cart" component={CartDetail} />
                    </Grid.Column>
                </Grid.Row>
                
            </Grid>


        </div>
    )
}