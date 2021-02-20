import React, {useState} from 'react';
import {Text, View, Button, Image, StyleSheet, ScrollView} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {SearchBar} from 'react-native-elements';
import {GlobalConsumer} from '../../../../src/context/store/store';
import Product from '../../Atom/Product';

function HomePages({navigation, state, dispatch}) {
  const [search, setSearch] = useState('');
  return (
    <ScrollView>
      <View style={style.container}>
        <Image
          source={require('../../../asset/Banner/banner.jpg')}
          style={style.bannder}
        />
        <SearchBar
          placeholder="Search product"
          onChangeText={(value) => setSearch(value)}
          value={search}
        />
        <View style={style.product}>
          {state.dataProduct.map((value) => {
            return (
              <Product
                key={value.id}
                id={value.id}
                nameProduct={value.nameProduct}
                priceProduct={value.priceProduct}
                descProduct={value.descProduct}
                stock={value.stock}
                imageUrl={value.imageUrl}
                rating={value.rating}
                navigation={navigation}
              />
            );
          })}
        </View>
        <Button
          title="Go Checkout"
          onPress={() => navigation.navigate('Checkout')}
          color="blue"
          accessibilityLabel="Learn more about this purple button"
        />
      </View>
    </ScrollView>
  );
}

const style = StyleSheet.create({
  bannder: {
    resizeMode: 'cover',
    width: '100%',
    height: 150,
  },
  product: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  container: {
    backgroundColor: '#f5f5f5',
  },
});

export default GlobalConsumer(HomePages);
