import React from 'react'
import { Dropdown, DropdownItem, DropdownMenu, Image, MenuItem } from 'semantic-ui-react'


export default function SignedIn(props) {
    return (
        <div>
            <MenuItem size="mini">
                <Image size="mini" avatar spaced="right"  src="https://st3.depositphotos.com/3581215/18899/v/600/depositphotos_188994514-stock-illustration-vector-illustration-male-silhouette-profile.jpg" />
                <Dropdown pointing="top left" text="Hilal">
                    <DropdownMenu >
                        <DropdownItem text="Bilgilerim" icon="info"/>
                        <DropdownItem onClick={props.signOut} text="Çıkış" icon="sign-out" />                        
                    </DropdownMenu>

                </Dropdown>

            </MenuItem>
        </div>
    )
}
