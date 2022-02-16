import React, { Component } from 'react'
import logo from './image/edit.svg'
import logoEnter from './image/enter.svg'

export default class MyEditText extends Component {

    styleDiv = {
        background: '#fff',
        margin: '35px'
    };
    styleImg = {
        width: '1em',
        height: '1em',
        margin: '1px 0px -6px 10px',
        padding:'5px'
    };
    styleSpan = {
        color: '#999999',
        marginLeft: '10px'
    };
    styleInput = {
        width: '90%',
        marginLeft: '10px'
    };
    constructor() {
        super()
        this.state = {
            myText: 'Enter your text',
            onClickImg: false
        }
    }
    clickImg = () => {
        this.setState({ onClickImg: !this.state.onClickImg })
        this.setState({ myText: document.getElementById('inputEdit').value })
    }

    inputEnterDown = (e) => {
        if (e.key === 'Enter') {
            this.setState({ myText: document.getElementById('inputEdit').value })
            this.setState({ onClickImg: !this.state.onClickImg })
        }
    }
    render() {
        return (
            <div style={this.styleDiv}>

                {this.state.onClickImg ?
                    <div>
                        <input id='inputEdit' style={this.styleInput}
                            type="text" onKeyDown={this.inputEnterDown}
                            defaultValue={this.state.myText} />
                        <img
                            onClick={() => this.clickImg()}
                            src={logoEnter} style={this.styleImg} />
                    </div>
                    :
                    <div>
                        <span style={this.styleSpan}>{this.state.myText}</span>
                        <img
                            onClick={() => this.clickImg()}
                            src={logo} style={this.styleImg} /> </div>}
            </div>
        )
    }
}
