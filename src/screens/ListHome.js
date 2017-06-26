import React, { Component } from "react";
import { View, Text, ScrollView, Image } from "react-native";
import { connect } from "react-redux";
import { fetchHome } from "../actions/home_actions";
import { Button } from "native-base";
class ListHome extends Component {
  static navigationOptions = {
    title: "Result"
  };
  renderListHome = () => {
    console.log(this);
    const { image, row, textContainer  } = styles
    return this.props.homes.map(home => {
      return (
        <View key = { home.longitude }
          style = { row }
           >
          <Image
            style={ image }
            source={{ uri: home.img_url }}
          />
          <View style = { textContainer } >
            <Text> {home.price_formatted}  </Text>
            <Text> {home.title}  </Text>
          </View>
          
        </View>
      );
    });
  };
  render() {
    console.log("second");
    return (
      <View>
        <ScrollView scrollEnabled>
          {this.renderListHome()}
        </ScrollView>
      </View>
    );
  }
}

const styles = { 
    row: {
      flexDirection: 'center',
      flex: 3
    },
    image:{ 
     width: 80,
     height: 80,
     flex: 1
    },
    textContainer:{
      flex: 2, 
      justifyContent: 'flex-start'
    }
}

const mapStateToProps = ({ listHome }) => {
  return { homes: listHome };
};

export default connect(mapStateToProps, { fetchHome })(ListHome);
