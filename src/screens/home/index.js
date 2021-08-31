import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import { List } from 'react-native-paper';
import { gs } from '../../styles/globalStyles';

const Home = ({ navigation }) => {
  return (
    <View style={[gs.mainContainer, gs.bgGray, gs.padding]}>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate('Details', {
            name: 'First Task',
            description: 'This is the first task',
          })
        }>
        <List.Item
          title="First Item"
          description="Item description"
          right={(props) => <List.Icon {...props} icon="chevron-right" />}
          style={[gs.bgWhite, gs.marginB]}
        />
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Search')}>
        <List.Item
          title="First Item"
          description="Item description"
          right={(props) => <List.Icon {...props} icon="chevron-right" />}
          style={[gs.bgWhite, gs.marginB]}
        />
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Details')}>
        <List.Item
          title="First Item"
          description="Item description"
          right={(props) => <List.Icon {...props} icon="chevron-right" />}
          style={[gs.bgWhite, gs.marginB]}
        />
      </TouchableOpacity>
    </View>
  );
};

export default Home;
