import React from 'react';
import { Button } from 'react-native';

export default class IncrementingButton extends React.Component {

  constructor(props) {
    super(props)
    this.state = {count: 0}
  }

  increment() { this.setState((prevState) => ({count: prevState.count + 1}))}
  render(){
    return (<Button title={this.state.count + ""} onPress={() => this.increment()}/>);
  }
}
