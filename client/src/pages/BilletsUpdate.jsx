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

class BilletsUpdate extends Component {
    constructor(props) {
        super(props)

        this.state = {
            NumeroBillet: this.props.match.params.id,
            prix: '',
            titre: '',
            description: '',
            categorie:'',
        }
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

    handleUpdateBillet = async () => {
        const { NumeroBillet, titre, prix, description, categorie } = this.state
        const payload = { NumeroBillet,titre, prix, description, categorie }

        await api.updateBilletByNumeroBillet(NumeroBillet, payload).then(res => {
            window.alert(`Billet updated successfully`)
            this.setState({
                NumeroBillet:'',
                prix: '',
                titre: '',
                description: '',
                categorie:'',
            })
        })
    }

    componentDidMount = async () => {
        const { NumeroBillet } = this.state
        const billet = await api.getBilletByNumeroBillet(NumeroBillet)

        this.setState({
            titre: billet.data.data.titre,
            prix: billet.data.data.prix,
            description: billet.data.data.description,
            categorie: billet.data.data.categorie,

        })
    }

    render() {
        const { titre, prix, description, categorie } = this.state
        return (
             <Wrapper>
             <Title>Create Billet</Title>

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

             <Button onClick={this.handleUpdateBillet}>Update Billet</Button>
             <CancelButton href={'/'}>Cancel</CancelButton>
         </Wrapper>
        )
    }
}

export default BilletsUpdate