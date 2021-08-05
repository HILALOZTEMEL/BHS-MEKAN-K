import React from 'react'
import { Button } from 'semantic-ui-react'

export default function SignedOut(props) {
    return (
        <div>
           <Button onClick={props.signIn} size="mini" primary>Giriş yap</Button> 
           <Button size="mini" primary style={{marginLeft:"0.5em"}}>Kayıt ol</Button> 
        </div>
    )
}
