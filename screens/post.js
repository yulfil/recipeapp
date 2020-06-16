import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  TouchableHighlight,
  FlatList,
  ImageBackground,
  Image,
} from 'react-native';
import { Feather, Ionicons, AntDesign } from '@expo/vector-icons';
import Constants from 'expo-constants';
class Post extends React.Component {
  addTodo(item) {
    this.setState({ item: [] });
    this.props.addTodo(item);
    return item;
  }
  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
        <ScrollView>
          <Image
            source={{ uri: this.props.route.params.recipe.image }}
            style={styles.image}
          />
          <View style={{ padding: 10 }}>
            <View
              style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              <Text style={{ fontSize: 19, fontWeight: 'bold' }}>
                {this.props.route.params.recipe.title}
              </Text>
              <Text style={{ fontSize: 17, textAlign: 'center', width: 100 }}>
                {this.props.route.params.recipe.time}
              </Text>
            </View>
            <Text style={{ fontSize: 16 }}>
              {this.props.route.params.recipe.calories}
            </Text>
            <Text style={{ fontSize: 16, paddingTop: 10 }}>
              {this.props.route.params.recipe.content}
            </Text>
            <Text style={{ fontSize: 19, fontWeight: 'bold', paddingTop: 10 }}>
              Ingredient:
            </Text>
            <Text style={{ fontSize: 15, paddingTop: 10 }}>
              {this.props.route.params.recipe.ingredient}
            </Text>
            <Text style={{ fontSize: 19, fontWeight: 'bold', paddingTop: 10 }}>
              Recipe:
            </Text>
            <View>
              {this.props.route.params.recipe.first == null ? null : (
                <Text style={{ paddingTop: 5 }}>
                  {this.props.route.params.recipe.first}
                </Text>
              )}
              {this.props.route.params.recipe.second == null ? null : (
                <Text style={{ paddingTop: 5 }}>
                  {this.props.route.params.recipe.second}
                </Text>
              )}
              {this.props.route.params.recipe.third == null ? null : (
                <Text style={{ paddingTop: 5 }}>
                  {this.props.route.params.recipe.third}
                </Text>
              )}
              {this.props.route.params.recipe.fourth == null ? null : (
                <Text style={{ paddingTop: 5 }}>
                  {this.props.route.params.recipe.fourth}
                </Text>
              )}
              {this.props.route.params.recipe.fifth == null ? null : (
                <Text style={{ paddingTop: 5 }}>
                  {this.props.route.params.recipe.fifth}
                </Text>
              )}
              {this.props.route.params.recipe.sixth == null ? null : (
                <Text style={{ paddingTop: 5 }}>
                  {this.props.route.params.recipe.sixth}
                </Text>
              )}
              {this.props.route.params.recipe.seventh == null ? null : (
                <Text style={{ paddingTop: 5 }}>
                  {this.props.route.params.recipe.seventh}
                </Text>
              )}
              {this.props.route.params.recipe.sixth == null ? null : (
                <Text style={{ paddingTop: 5 }}>
                  {this.props.route.params.recipe.sixth}
                </Text>
              )}
              {this.props.route.params.recipe.eighth == null ? null : (
                <Text style={{ paddingTop: 5 }}>
                  {this.props.route.params.recipe.eighth}
                </Text>
              )}
              {this.props.route.params.recipe.ninth == null ? null : (
                <Text>{this.props.route.params.recipe.ninth}</Text>
              )}
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}

export default Post;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  image: {
    width: '100%',
    height: 350,
    resizeMode: 'cover',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
});
