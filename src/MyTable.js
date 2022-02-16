import React, { Component } from 'react'

export default class MyTable extends Component {

  styleTableTd = {
    padding: '0px 30px 0px 30px',
    margin: '0px 10px 0px 10px',
    borderBottom: '2px solid #ddd'
  };
  styleTableTr = {
    padding: '0px 30px 0px 30px',
    margin: '0px 10px 0px 10px',
    border: '3px #228888 solid'
  };
  styleTableTh = {
    backgroundColor: '#04AA6D',
    color: 'white'
  }
  renderTableData(data) {
    return data.map((row) => {
      const { id, name, age, address } = row  
      return (
        <tr key={id} style={this.styleTableTr}>
          <td style={this.styleTableTd}>{id}</td>
          <td style={this.styleTableTd}>{name}</td>
          <td style={this.styleTableTd}>{age}</td>
          <td style={this.styleTableTd}>{address}</td>
        </tr>
      )
    })
  }
  renderTableHeader(data) {
    return data.map((row) => {
      const { id, name, age, address } = row  
      return (
        <tr key={id} style={this.styleTableTr}>
          <th style={this.styleTableTh}>ID</th>
          <th style={this.styleTableTh}>{name}</th>
          <th style={this.styleTableTh}>{age}</th>
          <th style={this.styleTableTh}>{address}</th>
        </tr>
      )
    })
  }
  render() {
    return (

      <div>
        <table>
        <caption>{this.props.caption}</caption>
          <tbody>
            {this.renderTableHeader(this.props.columns)}
            {this.renderTableData(this.props.data)}
          </tbody>
        </table>
      </div>
    )
  }
}