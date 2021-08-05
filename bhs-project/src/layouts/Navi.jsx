import React,{useState} from 'react'
import { useHistory } from 'react-router-dom'
import { Button, Container,  Menu } from 'semantic-ui-react'
import CartSummary from './CartSummary'
import SignedIn from './SignedIn'
import SignedOut from './SignedOut'



export default function Navi() {

    const [isAuthenticated , setIsAuthenticated] = useState(true)
    const history =useHistory();

    function handleSignOut() {
        setIsAuthenticated(false)
        history.push("/")
    }

    function handleSignIn() {
        setIsAuthenticated(true)
    }

    return (

        <div>       

            <Menu stackable inverted color='black'>
                <Container fixed="top" >
                    <Container position='right'>
                        <Menu.Item>
                            <img src={window.location.origin + '/img/1514@2x.png'} />
                        </Menu.Item>
                    </Container>


                    <Menu.Item >
                        “ KONFORLU YAŞAMIN ALT YAPISI “
                    </Menu.Item>
                    <Menu.Item size="mini">
                        {isAuthenticated ? <SignedIn signOut={handleSignOut} /> :<SignedOut signIn={handleSignIn} />}                        
                        <CartSummary />                        
                    </Menu.Item>
                </Container>


            </Menu>
            <Container inverted size='mini' fixed="top">
                <Button color='blue' size='mini' >ANASAYFA</Button>

                <Button inverted color='blue' size='mini'>
                    KURUMSAL
                </Button>
                <Button inverted color='blue' size='mini'>
                    FAALİYET ALANLARIMIZ
                </Button>
                <Button inverted color='blue' size='mini'>
                    REFERANSLAR
                </Button>
                <Button inverted color='blue' size='mini'>
                    İLETİŞİM
                </Button>

            </Container>



        </div>
    )
}
