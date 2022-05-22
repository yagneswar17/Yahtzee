import React, { Component } from 'react';
import './RuleRow.css'

class RuleRow extends Component {
  render() {
    return (
      (this.props.score==undefined) ?
      <tr className="RuleRow RuleRow-active" onClick={this.props.doScore}> 
        <td className="RuleRow-name">{this.props.name}</td>
        <td className="RuleRow-score">{this.props.description}</td>
      </tr>:
        <tr className="RuleRow RuleRow-disabled" onClick={null}>
        <td className="RuleRow-name">{this.props.name}</td>
        <td className="RuleRow-score">{this.props.score}</td>
        </tr>
    );
  }
}

export default RuleRow;