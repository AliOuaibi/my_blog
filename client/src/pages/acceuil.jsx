import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import api from '../api'


import styled from 'styled-components'

const Title = styled.h1.attrs({
    className: 'h1',
})`
    color: #343a40;
    font-family: cursive;
    text-align: center;
    margin-bottom: 35px;
    margin-top:-30px;
`

const Wrapper = styled.div.attrs({
    className: 'form-group',
})`
    margin: 0 30px;
    color: #343a40;
    font-family: cursive;
`
const Center = styled.div.attrs({
    className: 'formul',
})`
`
const Label = styled.label`
    margin: 5px;
`

const InputText = styled.input.attrs({
    className: 'form-control',
})`
    margin: 5px;
    width:30%;
`
const Button = styled.button.attrs({
    className: `btn btn-primary`,
})`
    margin: 15px 15px 15px 5px;
`

class acceuil extends Component {
    constructor(props) {
        super(props)
        this.state = {
            login: '',
            password: '',
            afficher: false,
        }
    }

    handleChangeLogin = async event => {
        const login = event.target.value
        this.setState({ login })
    }
    handleChangeInputPassword = async event => {
        const password = event.target.value
        this.setState({ password })
    }
    

    handleLogin = async () => {
        const { login, password } = this.state
        const payload = { login, password }
        
        await api.loginConexion(payload).then(res => {
            this.setState({
                login: '',
                password: '',
                afficher: true,
            })
            console.log(res.data,'rr');
            if (res.data != "Not logged in!") {
                
                this.props.history.push(`/${login}`);
            }
            
        })
    }
    render (){
        if (!this.state.afficher) {
            return (
                <div>
                <Wrapper>
                <Center>
                    <Title>LOGIN</Title>
                    <Label>
                        Login :
                        <InputText type="text"  onChange={this.handleChangeLogin} name="login" />
                    </Label>
                    <Label>
                        password :
                        <InputText type="password"  onChange={this.handleChangeInputPassword} name="password" />
                    </Label>
                        <Button onClick={this.handleLogin}>Connexion</Button> 
                    <Link to="register" className="nav-link">
                        <Button>Register</Button>
                    </Link>
                </Center>
                </Wrapper>
                </div>
            )
        }
            return ( 
                <div>
                <Wrapper>
                <Center>
                    <Title>LOGIN</Title>
                    <Label>
                        Login :
                        <InputText type="text"  onChange={this.handleChangeLogin} name="login" />
                    </Label>
                    <Label>
                        password :
                        <InputText type="password"  onChange={this.handleChangeInputPassword} name="password" />
                    </Label>
                        <Button onClick={this.handleLogin}>Connexion</Button> 
                    <Link to="register" className="nav-link">
                        <Button>Register</Button>
                    </Link>
                </Center>
                </Wrapper> 
                </div>
            );    
    }
}

export default acceuil