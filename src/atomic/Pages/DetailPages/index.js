import React from 'react';
import {Text, View, Button, StyleSheet, Image, ScrollView} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {GlobalConsumer} from '../../../context/store/store';
import {Rating, Divider} from 'react-native-elements';

function DetailPages({route, navigation, state, dispatch}) {
  const {id} = route.params;
  let detailProduct = state.dataProduct.find((value) => value.id === id);
  return (
    <ScrollView>
      <View style={style.container}>
        <Image source={{uri: detailProduct.imageUrl}} style={style.image} />
        <View style={style.titleView}>
          <View style={style.viewProduct}>
            <Text style={style.title}>{detailProduct.nameProduct}</Text>
          </View>
          <View style={style.viewPrice}>
            <Text>Price</Text>
            <Text style={style.price}>
              Rp{detailProduct.priceProduct.toLocaleString()}
            </Text>
          </View>
        </View>
        <Text>
          <Rating
            imageSize={20}
            readonly
            startingValue={detailProduct.rating}
            style={style.rating}
          />
        </Text>
        <View style={style.description}>
          <Text>Product Specification</Text>
          <Divider style={style.divider} />
          <Text style={style.titleDescription}>Network</Text>
          <View style={style.contentDescription}>
            <View style={style.itemContent}>
              <Text>Technology</Text>
            </View>
            <View style={style.itemItem}>
              <Text>{detailProduct.descProduct.network}</Text>
            </View>
          </View>
          <Text style={style.titleDescription}>Launch</Text>
          <View style={style.contentDescription}>
            <View style={style.itemContent}>
              <Text>Announced</Text>
            </View>
            <View style={style.itemItem}>
              <Text>{detailProduct.descProduct.launch.announced}</Text>
            </View>
          </View>
          <View style={style.contentDescription}>
            <View style={style.itemContent}>
              <Text>Status</Text>
            </View>
            <View style={style.itemItem}>
              <Text>{detailProduct.descProduct.launch.status}</Text>
            </View>
          </View>
          <Text style={style.titleDescription}>Body</Text>
          <View style={style.contentDescription}>
            <View style={style.itemContent}>
              <Text>Dimension</Text>
            </View>
            <View style={style.itemItem}>
              <Text>{detailProduct.descProduct.body.dimension}</Text>
            </View>
          </View>
          <View style={style.contentDescription}>
            <View style={style.itemContent}>
              <Text>Weight</Text>
            </View>
            <View style={style.itemItem}>
              <Text>{detailProduct.descProduct.body.weight}</Text>
            </View>
          </View>
          <View style={style.contentDescription}>
            <View style={style.itemContent}>
              <Text>SIM</Text>
            </View>
            <View style={style.itemItem}>
              <Text>{detailProduct.descProduct.body.sim}</Text>
            </View>
          </View>
          <Text style={style.titleDescription}>Display</Text>
          <View style={style.contentDescription}>
            <View style={style.itemContent}>
              <Text>Type</Text>
            </View>
            <View style={style.itemItem}>
              <Text>{detailProduct.descProduct.display.type}</Text>
            </View>
          </View>
          <View style={style.contentDescription}>
            <View style={style.itemContent}>
              <Text>Size</Text>
            </View>
            <View style={style.itemItem}>
              <Text>{detailProduct.descProduct.display.size}</Text>
            </View>
          </View>
          <View style={style.contentDescription}>
            <View style={style.itemContent}>
              <Text>Resolution</Text>
            </View>
            <View style={style.itemItem}>
              <Text>{detailProduct.descProduct.display.resolution}</Text>
            </View>
          </View>
          <Text style={style.titleDescription}>Platform</Text>
          <View style={style.contentDescription}>
            <View style={style.itemContent}>
              <Text>OS</Text>
            </View>
            <View style={style.itemItem}>
              <Text>{detailProduct.descProduct.platform.os}</Text>
            </View>
          </View>
          <View style={style.contentDescription}>
            <View style={style.itemContent}>
              <Text>Chipset</Text>
            </View>
            <View style={style.itemItem}>
              <Text>{detailProduct.descProduct.platform.chipset}</Text>
            </View>
          </View>
          <View style={style.contentDescription}>
            <View style={style.itemContent}>
              <Text>CPU</Text>
            </View>
            <View style={style.itemItem}>
              <Text>{detailProduct.descProduct.platform.cpu}</Text>
            </View>
          </View>
          <View style={style.contentDescription}>
            <View style={style.itemContent}>
              <Text>GPU</Text>
            </View>
            <View style={style.itemItem}>
              <Text>{detailProduct.descProduct.platform.gpu}</Text>
            </View>
          </View>
          <Text style={style.titleDescription}>Memory</Text>
          <View style={style.contentDescription}>
            <View style={style.itemContent}>
              <Text>Card Slot</Text>
            </View>
            <View style={style.itemItem}>
              <Text>{detailProduct.descProduct.memory.cardSlot}</Text>
            </View>
          </View>
          <View style={style.contentDescription}>
            <View style={style.itemContent}>
              <Text>Internal</Text>
            </View>
            <View style={style.itemItem}>
              <Text>{detailProduct.descProduct.memory.internal}</Text>
            </View>
          </View>
          <Text style={style.titleDescription}>Main Camera</Text>
          <View style={style.contentDescription}>
            <View style={style.itemContent}>
              <Text>Quad Camera</Text>
            </View>
            <View style={style.itemItem}>
              <Text>{detailProduct.descProduct.mainCamera.camera1}</Text>
              <Text>{detailProduct.descProduct.mainCamera.camera2}</Text>
              <Text>{detailProduct.descProduct.mainCamera.camera3}</Text>
              <Text>{detailProduct.descProduct.mainCamera.camera4}</Text>
            </View>
          </View>
          <View style={style.contentDescription}>
            <View style={style.itemContent}>
              <Text>Feature</Text>
            </View>
            <View style={style.itemItem}>
              <Text>{detailProduct.descProduct.mainCamera.feature}</Text>
            </View>
          </View>
          <View style={style.contentDescription}>
            <View style={style.itemContent}>
              <Text>Video</Text>
            </View>
            <View style={style.itemItem}>
              <Text>{detailProduct.descProduct.mainCamera.video}</Text>
            </View>
          </View>
          <Text style={style.titleDescription}>Selfie Camera</Text>
          <View style={style.contentDescription}>
            <View style={style.itemContent}>
              <Text>Single</Text>
            </View>
            <View style={style.itemItem}>
              <Text>{detailProduct.descProduct.selfieCamera.single}</Text>
            </View>
          </View>
          <View style={style.contentDescription}>
            <View style={style.itemContent}>
              <Text>Video</Text>
            </View>
            <View style={style.itemItem}>
              <Text>{detailProduct.descProduct.selfieCamera.video}</Text>
            </View>
          </View>
          <Text style={style.titleDescription}>Sound</Text>
          <View style={style.contentDescription}>
            <View style={style.itemContent}>
              <Text>Loadspeaker</Text>
            </View>
            <View style={style.itemItem}>
              <Text>{detailProduct.descProduct.sound.loudspeaker}</Text>
            </View>
          </View>
          <View style={style.contentDescription}>
            <View style={style.itemContent}>
              <Text>3.5mm Jack</Text>
            </View>
            <View style={style.itemItem}>
              <Text>{detailProduct.descProduct.sound.audioJack}</Text>
            </View>
          </View>
          <Text style={style.titleDescription}>Comms</Text>
          <View style={style.contentDescription}>
            <View style={style.itemContent}>
              <Text>WLAN</Text>
            </View>
            <View style={style.itemItem}>
              <Text>{detailProduct.descProduct.comms.wlan}</Text>
            </View>
          </View>
          <View style={style.contentDescription}>
            <View style={style.itemContent}>
              <Text>Bluetooth</Text>
            </View>
            <View style={style.itemItem}>
              <Text>{detailProduct.descProduct.comms.bluetooth}</Text>
            </View>
          </View>
          <View style={style.contentDescription}>
            <View style={style.itemContent}>
              <Text>GPS</Text>
            </View>
            <View style={style.itemItem}>
              <Text>{detailProduct.descProduct.comms.gps}</Text>
            </View>
          </View>
          <View style={style.contentDescription}>
            <View style={style.itemContent}>
              <Text>NFC</Text>
            </View>
            <View style={style.itemItem}>
              <Text>{detailProduct.descProduct.comms.nfc}</Text>
            </View>
          </View>
          <View style={style.contentDescription}>
            <View style={style.itemContent}>
              <Text>Radio</Text>
            </View>
            <View style={style.itemItem}>
              <Text>{detailProduct.descProduct.comms.radio}</Text>
            </View>
          </View>
          <View style={style.contentDescription}>
            <View style={style.itemContent}>
              <Text>USB</Text>
            </View>
            <View style={style.itemItem}>
              <Text>{detailProduct.descProduct.comms.usb}</Text>
            </View>
          </View>
          <Text style={style.titleDescription}>Battery</Text>
          <View style={style.contentDescription}>
            <View style={style.itemContent}>
              <Text>Type</Text>
            </View>
            <View style={style.itemItem}>
              <Text>{detailProduct.descProduct.battery.type}</Text>
            </View>
          </View>
          <View style={style.contentDescription}>
            <View style={style.itemContent}>
              <Text>charging</Text>
            </View>
            <View style={style.itemItem}>
              <Text>{detailProduct.descProduct.battery.charging}</Text>
            </View>
          </View>
        </View>
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
    backgroundColor: '#ffff',
    padding: 10,
  },
  image: {
    width: '100%',
    height: 300,
  },
  titleView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  viewProduct: {
    width: 200,
  },
  viewPrice: {
    width: 125,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  price: {
    fontSize: 20,
    color: '#f7442e',
    fontWeight: 'bold',
    justifyContent: 'center',
    alignItems: 'center',
  },
  rating: {
    backgroundColor: '#ffff',
  },
  description: {
    lineHeight: 30,
    marginVertical: 20,
  },
  divider: {
    backgroundColor: 'blue',
    height: 2,
    marginVertical: 5,
  },
  contentDescription: {
    flexDirection: 'row',
  },
  itemContent: {
    width: 100,
  },
  itemItem: {
    width: 250,
  },
  titleDescription: {
    color: '#e64b44',
    fontSize: 15,
    fontWeight: 'bold',
  },
});

export default GlobalConsumer(DetailPages);
