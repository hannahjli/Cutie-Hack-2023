import { StyleSheet } from 'react-native';

import EditScreenInfo from '../../components/EditScreenInfo';
import { Text, View } from '../../components/Themed';

export default function TabTwoScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Manage Inventory</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      
      <Text style={styles.title}> Add new groceries</Text>
      <Text>What are you adding? (example: eggs, bread, milk) </Text>
      <Text>Enter quantity (specify # of items, weight, or fluid ounces): </Text>
      <View style={styles.separator}/>

      <Text style={styles.title}> Remove groceries</Text>      
      <Text>What are you getting rid of? Please select from current inventory. </Text>
      <Text>Enter quantity removed (specify # of items, weight, or fluid ounces): </Text>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
