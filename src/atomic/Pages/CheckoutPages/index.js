import React from 'react';
import {Text, View, Button, ScrollView, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {Divider} from 'react-native-elements';
import {GlobalConsumer} from '../../../context/store/store';
import CheckoutProduct from '../../Atom/CheckoutProduct';

function CheckoutPages({navigation, state, dispatch}) {
  let dataCart = state.cartProduct;
  let dataProductMaster = state.dataProduct;
  let subTotalPrice = 0;
  for (let index = 0; index < dataCart.length; index++) {
    let product = dataProductMaster.find(
      (value) => value.id === dataCart[index].productId,
    );
    subTotalPrice += product.priceProduct * dataCart[index].quantity;
  }
  return (
    <ScrollView>
      <View style={style.container}>
        {state.cartProduct.map((value, index) => {
          let product = state.dataProduct.find(
            (findvalue) => findvalue.id === value.productId,
          );
          return (
            <CheckoutProduct
              key={product.id}
              productId={product.id}
              imageUrl={product.imageUrl}
              nameProduct={product.nameProduct}
              priceProduct={product.priceProduct}
              quantity={value.quantity}
              rating={value.rating}
              stock={product.stock}
            />
          );
        })}
        <Divider />

        <View style={style.subTotalContainer}>
          <View>
            <Text style={style.subTotal}>Sub Total</Text>
          </View>
          <View>
            <Text style={style.subTotal}>
              Rp{subTotalPrice.toLocaleString()}
            </Text>
          </View>
        </View>
        <View style={style.subTotalContainer}>
          <View>
            <Text style={style.subTotal}>Tax (10%)</Text>
          </View>
          <View>
            <Text style={style.subTotal}>
              Rp{(subTotalPrice * 0.1).toLocaleString()}
            </Text>
          </View>
        </View>
        <Divider style={style.divider} />
        <View style={style.subTotalContainer}>
          <View>
            <Text style={style.subTotal}>Total Payment</Text>
          </View>
          <View>
            <Text style={style.subTotal}>
              Rp{(subTotalPrice * 1.1).toLocaleString()}
            </Text>
          </View>
        </View>
        <Button
          title="Back to Home"
          onPress={() => navigation.navigate('Home')}
          color="blue"
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
    fontSize: 10,
  },
  flex2: {
    flex: 2,
    fontSize: 10,
  },
  flex3: {
    flex: 3,
    fontSize: 10,
  },
  subTotal: {
    fontWeight: 'bold',
  },
  subTotalContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 10,
    marginVertical: 5,
  },
  divider: {
    backgroundColor: 'blue',
    height: 2,
    marginVertical: 5,
  },
});
export default GlobalConsumer(CheckoutPages);
