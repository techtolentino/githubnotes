var React = require('react-native');

var {
  Text,
  View,
  StyleSheet
} = React;

class Dashboard extends React.Component{
 render(){
  return(
    <View style={styles.container}>
      <Text>This is the Dashboard</Text>
    </View>
  )
 }
};

var styles = StyleSheet.create({
  container: {
    marginTop: 65,
    flex: 1
  },
  image: {
    height: 350
  },
  buttonText: {
    fontSize: 24,
    color: '#FFFFFF',
    alignSelf: 'center'
  }
});

module.exports = Dashboard;