import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { gs } from '../../styles/globalStyles';

const Details = ({ route, navigation }) => {
  const { name, description } = route.params;
  return (
    <View style={[gs.mainContainer, gs.padding]}>
      <Text style={gs.largeBoldText}>{name}</Text>
      <Text style={gs.defaultText}>{description}</Text>

      <View style={gs.centered}>
        <TouchableOpacity onPress={() => navigation.push('Details')}>
          <Text style={gs.defaultText}>go to 2nd details</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Details;
