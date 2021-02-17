import React, {Component} from 'react';
import {
  ActivityIndicator,
  FlatList,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  Image,
  StyleSheet,
} from 'react-native';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      isLoading: true,
    };
  }

  componentDidMount() {
    fetch('https://swapi.dev/api/people')
      .then((response) => response.json())
      .then((json) => {
        this.setState({data: json.results});
      })
      .catch((error) => console.error(error))
      .finally(() => {
        this.setState({isLoading: false});
      });
  }

  render() {
    const {data, isLoading} = this.state;
    const style = StyleSheet.create({
      backgroundStyle: {
        backgroundColor: '#fff',
      },
      image: {
        height: 300,
      },
      textBio: {
        fontSize: 20,
        color: 'blue',
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 10,
        marginBottom: 10,
      },
      containerData: {
        flexDirection: 'row',
        justifyContent: 'center',
      },
      row1: {
        width: 350,
        fontSize: 20,
        textAlign: 'center',
        padding: 5,
        borderStyle: 'dashed',
        backgroundColor: '#8e1d1f',
        borderRadius: 10,
        color: '#fff',
        shadowColor: 'blue',
        marginTop: 10,
        marginBottom: 10,
      },
    });
    console.log(data);

    return (
      <SafeAreaView>
        <ScrollView>
          <Image
            source={{
              uri:
                'https://s2.thcdn.com/widgets/96-en/22/750x563-jb-z-starwars-page-header-022622.jpg',
            }}
            style={style.image}
          />
          <Text style={style.textBio}>Name Person</Text>
          <View style={style.backgroundStyle}>
            {isLoading ? (
              <ActivityIndicator />
            ) : (
              <FlatList
                data={data}
                keyExtractor={({item, index}) => index}
                renderItem={({item}) => (
                  <View style={style.containerData}>
                    <Text style={style.row1}>{item.name}</Text>
                  </View>
                )}
              />
            )}
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

export default App;
