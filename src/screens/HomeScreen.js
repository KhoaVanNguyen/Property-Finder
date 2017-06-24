import React, { Component } from "react";
import { View, Text, TextInput } from "react-native";
import { Button, Container, Content, Item, Input, Icon } from "native-base";
import RoundedBox from "../components/RoundedBox";
class HomeScreen extends Component {
  static navigationOptions = {
    title: "Home"
  };
  render() {
    const {
      firstText,
      secondText,
      input,
      searchButton,
      container,
      locationButton
    } = styles;
    return (
      <View>
        <Text style={firstText}>
          Search for houses to buy!
        </Text>

        <Text style={secondText}>
          Search by place-name, postcode or by location!
        </Text>

        <View style={container}>
          <Item rounded style={input}>
            <Input placeholder="city or postcode" />
          </Item>

          <Button primary rounded medium style={searchButton}>
            <Text
              style={{
                fontSize: 14,
                textAlign: "center",
                color: "white"
              }}
            >
              Go
            </Text>
          </Button>
    </View>    
          <Button primary rounded style={locationButton}>
            <Icon name='search' />
            <Text
              style={{
                fontSize: 14,
                textAlign: "center",
                color: "white"
              }}
            >
              Find By Location
            </Text>
          </Button>
       

      </View>
    );
  }
}

const styles = {
  firstText: {
    marginTop: 15,
    fontSize: 18,
    alignSelf: "center"
  },
  secondText: {
    marginTop: 15,
    fontSize: 13,
    alignSelf: "center"
  },
  container: {
    flexDirection: "row",
    marginTop: 30
  },
  input: {
    left: 15,
    width: 220,
    borderColor: "black",
    borderWidth: 0.2
  },
  searchButton: {
    position: "relative",
    marginLeft: 35,
    width: 80,
    backgroundColor: "#199",
    justifyContent: "center"
  },
  locationButton: {
      marginTop: 15,
      alignSelf: 'center',
      width: 300,
      justifyContent: 'center'
  }
};

export default HomeScreen;
