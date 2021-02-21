import React from 'react';
import {Text, View, Button, ScrollView, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {Divider} from 'react-native-elements';

function CheckoutPages({navigation}) {
  return (
    <ScrollView>
      <View style={style.container}>
        <Text style={style.checkkoutTitle}>Checkout</Text>
        <View style={style.itemCheckoutWrapper}>
          <View style={style.flex1}>
            <Text>NO</Text>
          </View>
          <View style={style.flex3}>
            <Text>Item</Text>
          </View>
          <View style={style.flex1}>
            <Text>Qty</Text>
          </View>
          <View style={style.flex2}>
            <Text>Unit Price</Text>
          </View>
          <View>
            <Text>Total Price</Text>
          </View>
        </View>
        <Divider />
        <Button
          title="Back to Home"
          onPress={() => navigation.navigate('Home')}
          color="blue"
          accessibilityLabel="Learn more about this purple button"
        />
      </View>
    </ScrollView>
  );
}

const style = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: '#ffff',
  },
  checkkoutTitle: {
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 10,
  },
  itemCheckoutWrapper: {
    flex: 1,
    flexDirection: 'row',
  },
  flex1: {
    flex: 1,
    fontSize: 12,
  },
  flex2: {
    flex: 2,
    fontSize: 12,
  },
  flex3: {
    flex: 3,
    fontSize: 12,
  },
});
export default CheckoutPages;
