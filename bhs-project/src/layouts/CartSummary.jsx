import React from 'react'
import { NavLink } from 'react-router-dom'
import {Dropdown, DropdownItem, DropdownMenu,  MenuItem,Icon, DropdownDivider } from 'semantic-ui-react'
export default function CartSummary() {
    return (
        <div>
           
                <MenuItem size="mini" inverted color='blue'>
                <Icon inverted color='blue' name='shopping cart' />
                <Dropdown pointing="top left" >
                    <DropdownMenu >
                        <DropdownItem text="" icon=""/>
                        <DropdownItem text="" icon="" />   
                        <DropdownDivider/>  
                        <DropdownItem as={NavLink} to="/cart" text="Sepete Git" />                    
                    </DropdownMenu>

                </Dropdown>

            </MenuItem>
            
        </div>
    )
}
