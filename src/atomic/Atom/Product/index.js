import React, {useState} from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {GlobalConsumer} from '../../../../src/context/store/store';
import {Badge, Rating} from 'react-native-elements';
import {
  ADD_TO_CART_PRODUCT,
  UPDATE_TO_CART_PRODUCT,
} from '../../../context/const';

function Product({
  navigation,
  id,
  nameProduct,
  priceProduct,
  imageUrl,
  rating,
  stock,
  state,
  dispatch,
}) {
  const [data, setdata] = useState({
    id: new Date(),
    date: new Date(),
    productId: id,
    quantity: 1,
  });

  let badge;
  let cart = state.cartProduct.find((value) => value.productId === id);
  if (cart) {
    if (cart.quantity > 0) {
      badge = (
        <Badge
          value={cart.quantity}
          status="error"
          containerStyle={{position: 'absolute', top: 0, right: 0}}
        />
      );
    }
  }

  const addtoCart = () => {
    let cart = state.cartProduct.find((value) => value.productId === id);
    if (cart) {
      if (cart.quantity < stock) {
        let updateData = state.cartProduct;
        for (let i = 0; i < updateData.length; i++) {
          if (updateData[i].productId === cart.productId) {
            updateData[i].quantity += 1;
            dispatch({type: UPDATE_TO_CART_PRODUCT, payload: updateData});
          }
        }
      } else {
        alert('Stock tidak cukup');
      }
    } else {
      dispatch({type: ADD_TO_CART_PRODUCT, payload: data});
    }
  };

  const subToCart = () => {
    let cart = state.cartProduct.find((value) => value.productId === id);
    if (cart) {
      if (cart.quantity === 1) {
        let updateData = state.cartProduct.filter(
          (value) => value.productId !== cart.productId,
        );
        dispatch({type: UPDATE_TO_CART_PRODUCT, payload: updateData});
      } else if (cart.quantity > 0) {
        let updateData = state.cartProduct;
        for (let i = 0; i < updateData.length; i++) {
          if (updateData[i].productId === cart.productId) {
            updateData[i].quantity -= 1;
            dispatch({type: UPDATE_TO_CART_PRODUCT, payload: updateData});
          }
        }
      }
    }
  };
  return (
    <View style={style.container}>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Details', {
            id: id,
          });
        }}>
        <Image source={{uri: imageUrl}} style={style.imageProduct} />
        {badge}
        <Text style={style.titleProduct}>{nameProduct}</Text>
      </TouchableOpacity>
      <Text style={style.price}>Rp{priceProduct.toLocaleString()}</Text>
      <Text>
        <Rating
          imageSize={10}
          readonly
          startingValue={rating}
          style={style.rating}
        />
      </Text>
      <View style={style.fixToText}>
        <TouchableOpacity style={style.buttonContainer} onPress={addtoCart}>
          <Text style={style.buttonText}>Add to Cart</Text>
        </TouchableOpacity>
        <TouchableOpacity style={style.buttonContainer} onPress={subToCart}>
          <Text style={style.buttonText}>Sub to Cart</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  imageProduct: {
    resizeMode: 'cover',
    width: '100%',
    height: 100,
  },

  container: {
    marginHorizontal: 5,
    marginVertical: 10,
    shadowColor: 'black',
    textAlign: 'center',
    width: 150,
    backgroundColor: '#ffff',
    padding: 8,
  },
  badge: {
    top: 0,
    right: 0,
    position: 'absolute',
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
  rating: {
    backgroundColor: '#ffff',
  },
  fixToText: {
    flexDirection: 'column',
    justifyContent: 'space-around',
    marginVertical: 10,
  },
  buttonContainer: {
    height: 20,
    width: '100%',
    marginVertical: 5,
    fontSize: 12,
    backgroundColor: '#1de9b6',
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 12,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    color: '#ffff',
    fontWeight: 'bold',
  },
});

export default GlobalConsumer(Product);
