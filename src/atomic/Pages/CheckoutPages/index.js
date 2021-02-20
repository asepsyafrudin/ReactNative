import React from 'react';
import {Text, View, Button} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

function CheckoutPages({navigation}) {
  return (
    <View>
      <Text>Checkout</Text>
      <Button
        title="Back to Home"
        onPress={() => navigation.navigate('Home')}
        color="blue"
        accessibilityLabel="Learn more about this purple button"
      />
    </View>
  );
}

export default CheckoutPages;
