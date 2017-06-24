import React, { Component } from 'react';
import { Container, Content, Item, Input} from 'native-base';
import { Form, Label, View, Text } from 'react-native'
export default class RoundedBox extends Component {
  render() {
    return (
      <View style = {{ width: 275, height: 35 }}   >
         <Item rounded
            
         >
            <Input placeholder={this.props.placeholder}/>
          </Item>
      </View>
       
    )
  }
}