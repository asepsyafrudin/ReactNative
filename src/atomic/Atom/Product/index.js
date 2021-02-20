import React, {useState} from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {GlobalConsumer} from '../../../../src/context/store/store';
import {Badge, Rating} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import {ADD_TO_CART_PRODUCT, DELETE_CART_PRODUCT} from '../../../context/const';

function Product({
  navigation,
  id,
  nameProduct,
  priceProduct,
  imageUrl,
  rating,
  state,
  dispatch,
}) {
  const [data, setdata] = useState([]);

  let cart = state.cartProduct.find((value) => value.id === id);
  console.log(cart);
  let badge;
  //   if (cart.counter > 0) {
  //     badge = (
  //       <Badge
  //         value={cart.counter}
  //         status="error"
  //         containerStyle={{position: 'absolute', top: 0, right: 0}}
  //       />
  //     );
  //   }

  const addtoCart = () => {
    let cart = state.cartProduct.find((value) => value.id == id);
    if (cart === null) {
      dispatch({type: ADD_TO_CART_PRODUCT});
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
        <TouchableOpacity style={style.buttonContainer}>
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
    width: 120,
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
