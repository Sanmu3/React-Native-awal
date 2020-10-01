import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Image,
  ScrollView,
  Button,
  Alert,
  Picker,
  ActivityIndicator,
  Switch,
} from 'react-native';

class App extends React.Component {
  render() {
    return (
      <ScrollView>
        <Image style={style.cv} source={require('./src/asset/cv.jpg')} />
        <Image style={style.foto} source={require('./src/asset/photo.jpg')} />

        <Text style={style.tulis}>Muhammad Mujahid Muslim</Text>
        <Switch style={style.suit}
        ios_backgroundColor="#3e3e3e"
        onValueChange={()=>alert('Hai saya mujahid')}
        value={true}
      />
        <Text style={style.deskripsi}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged.
        </Text>
        <ActivityIndicator />
        <ActivityIndicator size="large" color="#41aea9" />
        <Text style={style.kritsar}>FeedBack</Text>
        <TextInput style={style.ti} />
        <Picker style={style.piker}>
          <Picker.Item label="Positif" value="Terimakasih telah berkunjung" />
          <Picker.Item
            label="Negatif"
            value="Saya akan memperbaikinya Terimakasih"
          />
        </Picker>
        <View style={style.tombol}>
          <Button
            title="kirim"
            onPress={() => Alert.alert('terimakasih telah berkunjung')}
          />
        </View>
      </ScrollView>
    );
  }
}
export default App;

const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  foto: {
    margin: 90,
    marginTop: 100,
    height: 175,
    width: 175,
    borderWidth: 5,
    borderColor: 'white',
    borderRadius: 200,
    position: 'absolute',
  },
  tulis: {textAlign: 'center', fontSize: 23, fontWeight: 'bold', marginTop: 10},
  ti: {
    height: 20,
    width: 300,
    marginLeft: 20,
    borderColor: 'black',
    borderWidth: 1,
  },
  kritsar: {marginLeft: 20, fontWeight: 'bold'},
  tombol: {width: 150, marginLeft: 90, marginTop: 10},
  cv: {position: 'relative', width: 380, height: 300},
  deskripsi: {textAlign: 'justify', margin: 15},
  piker: {height: 20, width: 325, marginLeft: 13},
  suit:{marginRight: 310}
});
