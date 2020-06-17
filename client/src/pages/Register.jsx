import React, { Component } from 'react';
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
const Home = styled.button.attrs({
    className: `btn btn-primary`,
})`
    margin: 15px 15px 15px 5px;
`

class Register extends Component {
    constructor(props) {
        super(props)

        this.state = {
            login: '',
            id: 0,
            email: '',
            password: '',
            passwordConfirm: '',
        }
    }
    
    handleChangeInputLogin = async event => {
        const login = event.target.value
        this.setState({ login })
    }

    handleChangeId = async event => {
        const id = event.target.value
        this.setState({ id })
    }
    handleChangeInputEmail = async event => {
        const email = event.target.value
        this.setState({ email })
    }
    handleChangeInputPassword = async event => {
        const password = event.target.value
        this.setState({ password })
    }
    handleChangeInputPasswordConfirm = async event => {
        const passwordConfirm = event.target.value
        this.setState({ passwordConfirm })
    }
    



    handleIncludeUser = async () => {
        const { id, login, email, password, passwordConfirm } = this.state
        const payload = { id, login, email, password, passwordConfirm }

        await api.insertUser(payload).then(res => {
            window.alert(`User inserted successfully`)
            this.setState({
                login: '',
                id: 0,
                email: '',
                password: '',
                passwordConfirm: '',
            })
        })
    }

    render() {
        const { id, login, email, password, passwordConfirm } = this.state
        return (
            <div>
            <Wrapper>
             <Title>Create User</Title>
            
                 <Label>Id: </Label>
                 <InputText
                     type="number"
                     value={id}
                     onChange={this.handleChangeId}
                 />

                <Label>Login: </Label>
                 <InputText
                     type="text"
                     value={login}
                     onChange={this.handleChangeInputLogin}
                 />

                 <Label>Email: </Label>
                 <InputText
                     type="text"
                     value={email}
                     onChange={this.handleChangeInputEmail}
                 />

                 <Label>Password: </Label>
                 <InputText
                     type="password"
                     value={password}
                     onChange={this.handleChangeInputPassword}
                 />

                 <Label>PasswordConfirm: </Label>
                 <InputText
                     type="password"
                     value={passwordConfirm}
                     onChange={this.handleChangeInputPasswordConfirm}
                 />

                <Link to="/" className="nav-link">
                <Button onClick={this.handleIncludeUser}>Add User</Button>
                    <Home>home</Home>
                </Link>
            
            </Wrapper>
            </div>
        )
    }
}

export default Register