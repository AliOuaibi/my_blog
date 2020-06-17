import React, { Component } from 'react'
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

const CancelButton = styled.a.attrs({
    className: `btn btn-danger`,
})`
    margin: 15px 15px 15px 5px;
`

class BilletsInsert extends Component {
    constructor(props) {
        super(props)

        this.state = {
            NumeroBillet: '',
            titre: '',
            prix: '',
            description:'',
            categorie:'',
        }
    }

    handleChangeInputNumerBillet = async event => {
        const NumeroBillet = event.target.value
        this.setState({ NumeroBillet })
    }

    handleChangeInputTitre = async event => {
        const titre = event.target.value
        this.setState({ titre })
    }

    handleChangeInputPrix = async event => {
        const prix = event.target.value
        this.setState({ prix })
    }

    handleChangeInputDescription = async event => {
        const description = event.target.value
        this.setState({ description })
    }

    handleChangeInputCategorie = async event => {
        const categorie = event.target.value
        this.setState({ categorie })
    }

    handleIncludeBillet = async () => {
        const { NumeroBillet, titre, prix, description, categorie } = this.state
        const payload = { NumeroBillet, titre, prix, description, categorie }
        console.log(payload,'test');
        

        await api.insertBillet(payload).then(res => {
            window.alert(`Billet inserted successfully`)
            this.setState({
                NumeroBillet: '',
                tire: '',
                prix:'',
                description: '',
                categorie:'',
            })
        })
    }

    render() {
        const { NumeroBillet, titre, prix, description, categorie } = this.state
        return (
            <Wrapper>
                <Title>Create Billet</Title>
                <Center>
                    <Label>Numero billet: </Label>
                    <InputText
                        type="number"
                        value={NumeroBillet}
                        onChange={this.handleChangeInputNumerBillet}
                    />

                    <Label>Titre: </Label>
                    <InputText
                        type="text"
                        value={titre}
                        onChange={this.handleChangeInputTitre}
                    />

                    <Label>Prix: </Label>
                    <InputText
                        type="text"
                        value={prix}
                        onChange={this.handleChangeInputPrix}
                    />

                    <Label>Description: </Label>
                    <InputText
                        type="text"
                        value={description}
                        onChange={this.handleChangeInputDescription}
                    />
                    <Label>Categorie: </Label>
                    <InputText
                        type="text"
                        value={categorie}
                        onChange={this.handleChangeInputCategorie}
                    />

                    <Button onClick={this.handleIncludeBillet}>Add Billet</Button>
                    <CancelButton href={'/'}>Cancel</CancelButton>
                </Center>
            </Wrapper>
        )
    }
}

export default BilletsInsert