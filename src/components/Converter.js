import React, { Component } from 'react'
import './Converter.css'

export default class Converter extends Component {
    constructor(props){
        super(props);

        this.state = {
            coinOneValue: "",
            coinTwoValue: 0,
        }
        this.converter = this.converter.bind(this);
    }

    converter(){
        let fromFor = `${this.props.coinOne}_${this.props.coinTwo}`;
        let url = `https://free.currconv.com/api/v7/convert?q=${fromFor}&compact=ultra&apiKey=886459d760d367adc32b`;

        fetch(url)
        .then(res=>{
            return res.json()
        })
        .then(json=>{
            let cotacao = json[fromFor];
            let coinTwoValue = (parseFloat(this.state.coinOneValue * cotacao).toFixed(2))
            this.setState({coinTwoValue})
        })
    }
    render() {
        return (
            <div className="converter">
                <h2>{this.props.coinOne} for {this.props.coinTwo}</h2>
                <input type="text" onChange={(event)=>{this.setState({coinOneValue:event.target.value})}}></input>
                <input type="button" value="Convert" onClick = {this.converter}></input>
                <h2>Converted= {this.state.coinTwoValue}</h2>
            </div>
        )
    }
}
