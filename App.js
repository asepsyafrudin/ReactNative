import React from 'react';
import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
} from 'react-native';

const image = {
  background: {
    uri:
      'https://images.unsplash.com/photo-1533035350251-aa8b8e208d95?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1534&q=80',
  },
  imageProfile: require('./asset/image/asep.jpg'),
};

const App = () => (
  <>
    <ScrollView>
      <ImageBackground source={image.background} style={styles.imageBackground}>
        <View style={styles.imageContainer}>
          <Image source={image.imageProfile} style={styles.imageProfile} />
          <Text style={styles.text}>Asep Syafrudin</Text>
          <Text style={styles.title}>Fullstack Developer</Text>
        </View>
      </ImageBackground>
      <View style={styles.content}>
        <View style={styles.container}>
          <Text style={styles.sectionTitle}>ABOUT ME</Text>
        </View>
        <View>
          <Text style={styles.textSection}>
            Hi, my name is Asep, currently I'm studying at G2Academy as a
            fullstack developer. My hope is that after attending the class, I
            can make an application starting from web-based, both from the
            backend and frontend side and also the mobile application. Even
            though I don't have basic IT, I like things that are based on logic,
            ways of thinking, and solving problems. That is also what I
            currently implement in my job even though I'm not currently a
            programmer
          </Text>
        </View>
        <View style={styles.container}>
          <Text style={styles.sectionTitle}>PERSONAL INFO</Text>
        </View>
        <View style={styles.row}>
          <View style={styles.col1}>
            <Text style={[styles.textSection, styles.bold]}>Birth</Text>
          </View>
          <View style={styles.col2}>
            <Text style={styles.textSection}>22 July 1993</Text>
          </View>
        </View>
        <View style={styles.row}>
          <View style={styles.col1}>
            <Text style={[styles.textSection, styles.bold]}>Gender</Text>
          </View>
          <View style={styles.col2}>
            <Text style={styles.textSection}>Man</Text>
          </View>
        </View>
        <View style={styles.row}>
          <View style={styles.col1}>
            <Text style={[styles.textSection, styles.bold]}>Address</Text>
          </View>
          <View style={styles.col2}>
            <Text style={styles.textSection}>
              Jalan Kramat Pulo dalam II gg 18, Senen, Jakarta-Pusat
            </Text>
          </View>
        </View>
        <View style={styles.row}>
          <View style={styles.col1}>
            <Text style={[styles.textSection, styles.bold]}>Nationality</Text>
          </View>
          <View style={styles.col2}>
            <Text style={styles.textSection}>Indonesia</Text>
          </View>
        </View>
        <View style={styles.row}>
          <View style={styles.col1}>
            <Text style={[styles.textSection, styles.bold]}>Blood Type</Text>
          </View>
          <View style={styles.col2}>
            <Text style={styles.textSection}>O</Text>
          </View>
        </View>
        <View style={styles.row}>
          <View style={styles.col1}>
            <Text style={[styles.textSection, styles.bold]}>Whatapp</Text>
          </View>
          <View style={styles.col2}>
            <Text style={styles.textSection}>083877778823</Text>
          </View>
        </View>
        <View style={styles.row}>
          <View style={styles.col1}>
            <Text style={[styles.textSection, styles.bold]}>Instagram</Text>
          </View>
          <View style={styles.col2}>
            <Text style={styles.textSection}>@asseeppsyafrudin</Text>
          </View>
        </View>
        <View style={styles.row}>
          <View style={styles.col1}>
            <Text style={[styles.textSection, styles.bold]}>My Web</Text>
          </View>
          <View style={styles.col2}>
            <Text style={styles.textSection}>www.asepsyafrudin.com</Text>
          </View>
        </View>
        <View style={styles.row}>
          <View style={styles.col1}>
            <Text style={[styles.textSection, styles.bold]}>My Email</Text>
          </View>
          <View style={styles.col2}>
            <Text style={styles.textSection}>asseeppsyafrudin@gmail.com</Text>
          </View>
        </View>
        <View style={styles.container}>
          <Text style={styles.sectionTitle}>EDUCATION</Text>
        </View>
        <View style={styles.row}>
          <View style={styles.col1}>
            <Text style={[styles.textSection, styles.bold]}>2017 - 2018</Text>
          </View>
          <View style={styles.col2}>
            <Text style={styles.textSection}>S1 Teknik Industri</Text>
          </View>
        </View>
        <View style={styles.row}>
          <View style={styles.col1}>
            <Text style={[styles.textSection, styles.bold]}>2011 - 2014</Text>
          </View>
          <View style={styles.col2}>
            <Text style={styles.textSection}>
              D3 Politenik Manufaktur Astra
            </Text>
          </View>
        </View>
        <View style={styles.row}>
          <View style={styles.col1}>
            <Text style={[styles.textSection, styles.bold]}>2008 - 2011</Text>
          </View>
          <View style={styles.col2}>
            <Text style={styles.textSection}>SMAN 77 Jakarta</Text>
          </View>
        </View>
        <View style={styles.container}>
          <Text style={styles.sectionTitle}>EXPERIENCE</Text>
        </View>
        <View style={styles.row}>
          <View style={styles.col1}>
            <Text style={[styles.textSection, styles.bold]}>2014 - Now</Text>
          </View>
          <View style={styles.col2}>
            <Text style={styles.textSection}>
              Production Engineering {'\n'}PT Denso Indonesia
            </Text>
          </View>
        </View>
        <View style={styles.row}>
          <View style={styles.col1}>
            <Text style={[styles.textSection, styles.bold]}>
              2014{' (6 M)'}
            </Text>
          </View>
          <View style={styles.col2}>
            <Text style={styles.textSection}>
              Engineering {'\n'}PT AOP Div Winteq
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.footer}>
        <Text style={styles.textFooter}>
          ©Copyright By Asep Syafrudin www.asepsyafrudin.com
        </Text>
      </View>
    </ScrollView>
  </>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    marginVertical: 40,
    marginHorizontal: 80,
    padding: 10,
    borderBottomColor: 'blue',
    borderTopWidth: 2,
    borderTopColor: 'blue',
    borderStyle: 'dotted',
    borderBottomWidth: 2,
  },
  bold: {
    fontWeight: 'bold',
  },
  field: {
    flex: 1,
    flexDirection: 'row',
    marginVertical: 40,
  },
  imageBackground: {
    resizeMode: 'cover',
    height: 300,
    justifyContent: 'center',
  },
  text: {
    color: 'white',
    fontSize: 42,
    fontWeight: 'bold',
    textAlign: 'center',
    // backgroundColor: '#000000a0',
  },
  imageProfile: {
    height: 200,
    width: 200,
    borderRadius: 100,
  },
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
  row: {
    flex: 1,
    flexDirection: 'row',
    marginHorizontal: 20,
  },
  col1: {
    flex: 2,
  },
  col2: {
    flex: 3,
    alignItems: 'flex-start',
  },
  textSection: {
    fontSize: 15,
    textAlign: 'justify',
    lineHeight: 30,
  },
  sectionTitle: {
    color: 'black',
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  content: {
    marginHorizontal: 20,
  },
  footer: {
    height: 35,
    backgroundColor: '#515053',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  textFooter: {
    color: 'white',
  },
});

export default App;
