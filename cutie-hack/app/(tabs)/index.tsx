import { StyleSheet } from 'react-native';

import EditScreenInfo from '../../components/EditScreenInfo';
import { Text, View } from '../../components/Themed';

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Current Inventory</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
        <View style={styles.container}>
          <View style={styles.card}>
          <Text>Eggs (Quantity: 12)</Text>
          <Text>Expires in 30 days</Text>
          </View>

          <View style={styles.card}>
          <Text>Milk (Quantity: 64 fl oz)</Text>
          <Text>Expires in 10 days</Text>
          </View>

          <View style={styles.card}>
          <Text>Avocado (Quantity: 3)</Text>
          <Text>Expires in 7 days</Text>
          </View>

          <View style={styles.card}>
          <Text>Chicken Breast (Quantity: 1.2 lbs)</Text>
          <Text>Expires in 2 days</Text>
          </View>

          <View style={styles.card}>
          <Text>Broccoli (Quantity: 2)</Text>
          <Text>Expires in 9 days</Text>
          </View>

          <View style={styles.card}>
          <Text>Banana (Quantity: 5)</Text>
          <Text>Expires in 6 days</Text>
          </View>

        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card:{
    backgroundColor: 'grey',
    height: 100,
    padding: 2
  },
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
