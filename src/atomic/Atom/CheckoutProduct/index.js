import React from 'react';
import {Image, StyleSheet, Text, TextInput, View} from 'react-native';
import {GlobalConsumer} from '../../../context/store/store';
import {Button} from 'react-native-elements';
import {Rating} from 'react-native-elements';
import {UPDATE_TO_CART_PRODUCT} from '../../../context/const';

function CheckoutProduct({
  productId,
  imageUrl,
  nameProduct,
  priceProduct,
  quantity,
  rating,
  stock,
  state,
  dispatch,
}) {
  const addFunction = () => {
    if (quantity < stock) {
      let updateProduct = state.cartProduct;
      for (let i = 0; i < updateProduct.length; i++) {
        if (updateProduct[i].productId === productId) {
          updateProduct[i].quantity += 1;
          dispatch({type: UPDATE_TO_CART_PRODUCT, payload: updateProduct});
        }
      }
    } else {
      alert('stock tidak cukup');
    }
  };

  const subFunction = () => {
    if (quantity === 1) {
      let updateProduct = state.cartProduct.filter(
        (value) => value.productId !== productId,
      );
      dispatch({type: UPDATE_TO_CART_PRODUCT, payload: updateProduct});
    } else if (quantity > 0) {
      let updateProduct = state.cartProduct;
      for (let i = 0; i < updateProduct.length; i++) {
        if (updateProduct[i].productId === productId) {
          updateProduct[i].quantity -= 1;
          dispatch({type: UPDATE_TO_CART_PRODUCT, payload: updateProduct});
        }
      }
    }
  };
  return (
    <View style={style.container}>
      <View>
        <Image source={{uri: imageUrl}} style={style.image} />
        <View>
          <Text>
            <Rating
              imageSize={10}
              readonly
              startingValue={rating}
              style={style.rating}
            />
          </Text>
        </View>
      </View>

      <View style={style.content}>
        <Text style={style.titleProduct}>{nameProduct}</Text>
        <Text style={style.price}>Rp{priceProduct.toLocaleString()}</Text>
        <View style={style.buttonGroup}>
          <Button
            title="+"
            buttonStyle={style.buttonStyle}
            onPress={addFunction}
          />
          <TextInput
            style={style.textInput}
            value={quantity.toLocaleString()}
            textAlign="center"
          />
          <Button
            title="-"
            buttonStyle={style.buttonStyle}
            onPress={subFunction}
          />
        </View>
        <Text style={style.price}>
          Total Order : Rp{(quantity * priceProduct).toLocaleString()}
        </Text>
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    padding: 10,
    flexDirection: 'row',
    marginHorizontal: 10,
    marginVertical: 10,
    borderWidth: 1,
    borderRadius: 2,
    borderColor: '#ddd',
    borderBottomWidth: 0,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 1,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10,
    justifyContent: 'space-around',
  },
  image: {
    width: 50,
    height: 100,
  },
  content: {
    height: 100,
  },
  buttonGroup: {
    flexDirection: 'row',
  },
  buttonStyle: {
    width: 35,
    height: 35,
  },
  textInput: {
    height: 35,
    width: 50,
    borderColor: 'gray',
    borderWidth: 1,
    color: 'black',
    fontSize: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleProduct: {
    fontSize: 12,
    fontWeight: 'bold',
    fontStyle: 'normal',
    marginVertical: 5,
    textAlign: 'center',
  },
  price: {
    fontSize: 12,
    color: '#f7442e',
    fontWeight: 'bold',
    marginVertical: 5,
  },
});
export default GlobalConsumer(CheckoutProduct);
