import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const EXAMPLE_ENDPOINT = "http://192.168.0.7:3000/";

export default class App extends React.Component {
  state = {
    result: null,
  };

  componentDidMount() {
    this._fetchExampleAsync();
  }

  _fetchExampleAsync = async () => {
    try {
      let response = await fetch(EXAMPLE_ENDPOINT);
      let result = await response.json();
      this.setState({result});
    } catch(e) {
      this.setState({result: e});
    }
  };

  render() {
    return (
      <View style={styles.container}>
        { 
          this.state.result ? (
            <Text>{JSON.stringify(this.state.result)}</Text>
          ) : (
            <Text>Trying to get response from {EXAMPLE_ENDPOINT}</Text>
          )
        }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
