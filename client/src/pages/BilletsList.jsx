import React, { Component } from 'react'
import api from '../api'

import styled from 'styled-components'


const Wrapper = styled.div`
    padding: 0 40px 40px 40px;
`
const Update = styled.button.attrs({
    className: `btn btn-primary`,
})`
    color: #ff0000;
    cursor: pointer;
    margin: 15px 15px 15px 5px;
`
const Delete = styled.button.attrs({
    className: `btn btn-danger`,
})`
    color: #ef9b0f;
    cursor: pointer;
    margin: 15px 15px 15px 5px;
`
const Table = styled.div`
    background-color: #8CA2B7;
    border: 2px solid black;
    border-radius: 10px;
    text-align : center;
    width : 60%;
    margin: 0 auto;
    margin-top: 30px;
    padding: 15px;
    font-family: cursive;
`
const P = styled.p.attrs({
    className: `text`,
})`
    font-weight: bold;
    font-size: 25px;
    color: #343a40;
    margin-bottom: -7px;
    margin-top:5px;
`

const InputText = styled.input.attrs({
    className: 'form-control',
})`
    margin: 5px;
    width:10%;
`
const Title = styled.h1.attrs({
    className: 'h1',
})`
    color: #343a40;
    font-family: cursive;
`

class UpdateBillet extends Component {
    updateUser = event => {
        event.preventDefault()

        window.location.href = `/billet/update/${this.props.id}`
    }

    render() {
        return <Update onClick={this.updateUser}>Update</Update>
    }
}

class DeleteBillet extends Component {
    deleteUser = event => {
        event.preventDefault()

        if (
            window.confirm(
                `Do tou want to delete the billet number ${this.props.id} permanently?`,
            )
        ) {
            api.deleteBilletByNumeroBillet(this.props.id)
            window.location.reload()
        }
    }

    render() {
        return <Delete onClick={this.deleteUser}>Delete</Delete>
    }
}

class Search extends Component {

    constructor(props) {
        super(props)
        this.state = {
            search: "",
            filtred: [],
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        let test = e.target.value;
        let finalData = [];
        this.props.filterdata();
        if (e.target.value !== "") {
            this.props.billets.find(item => {
                if (item.titre.includes(test) || item.description.includes(test) || item.categorie.includes(test)) {
                    finalData.push(item)
                    this.props.filterdata(finalData);
                }
            })
        }
    }

    render() {
        return (
            <div>
            <Title>Search a billet</Title>
            <InputText type="text" onChange={this.handleChange} placeholder="Search..." />
            </div>
        )
    }

}



class BilletsList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            billets: [],
            filtre: [],
            columns: [],
            isLoading: false,
        }
        this.filterdata = this.filterdata.bind(this);
    }
    
    componentDidMount = async () => {
        this.setState({ isLoading: true })
        
        await api.getAllBillets().then(billets => {
             console.log(billets.data.data,'apiiiii');

             this.setState({
                 billets: billets.data.data,
                 isLoading: false,                
             })
            })
    }

    filterdata (data) {
        console.log(data, 'datatest');
        this.setState({
            filtre: data
        })
    }

    render() {
        const { billets, filtre } = this.state
        Object.size = function(obj) {
            var size = 0, key;
            for (key in obj) {
                if (obj.hasOwnProperty(key)) size++;
            }
            return size;
        };
        
        console.log(filtre,'filtre');
        console.log(billets,'billets');
        if (Object.size(filtre) === 0) {
            return (
                <Wrapper>
                  <Search billets={billets} filterdata={this.filterdata} />
                    {
                        billets.map(billet => {
                        return (
                    <Table>
                        <div>
                            <div><P>Number :</P> {billet.NumeroBillet}</div>
                            <div><P>Titre :</P> {billet.titre}</div>
                            <div><P>Prix :</P> {billet.prix}</div>
                            <div><P>Description :</P> {billet.description}</div>
                            <div><P>Categorie :</P> {billet.categorie}</div>
                            <div><UpdateBillet id={billet.NumeroBillet} /></div>
                            <div><DeleteBillet id={billet.NumeroBillet} /></div>
                        </div>
                    </Table>
                            )
                    })}
                </Wrapper>
            )
        }
        if(Object.size(filtre) !== 0) {
            return (
                <Wrapper>
    
                  <Search billets={billets} filterdata={this.filterdata} />
                    {
                        filtre.map(billet => {
                        return (
                    <Table>
                        <div>
                            <div><P>Number :</P> {billet.NumeroBillet}</div>
                            <div><P>Titre :</P> {billet.titre}</div>
                            <div><P>Prix :</P> {billet.prix}</div>
                            <div><P>Description :</P> {billet.description}</div>
                            <div><P>Categorie :</P> {billet.categorie}</div>
                            <div><UpdateBillet id={billet.NumeroBillet} /></div>
                            <div><DeleteBillet id={billet.NumeroBillet} /></div>
                        </div>
                    </Table>
                            )
                    })}
                </Wrapper>
            )

        }
        
    }
}

export default BilletsList