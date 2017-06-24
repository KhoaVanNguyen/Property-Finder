import React, { Component  } from 'react'
import { View, Text } from 'react-native'

class ListHome extends Component {

    render(){
        return (
            <View>
                <Text>
                    Search for houses to buy!
                </Text>
                <Text>
                    Search by place-name, postcode or by location
                </Text>
            </View>
            
        )
    }

}

export default ListHome
