import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Image,
  ScrollView,
} from 'react-native';
import Constants from 'expo-constants';
import { Feather, Ionicons, Entypo, AntDesign } from '@expo/vector-icons';
import { recipe } from '../src/data';
class App extends React.Component {
  render() {
    const { navigation } = this.props;
    return (
      <ScrollView style={styles.RecipesContainer}>
        <Text dark heavy large>
          Recipes List
        </Text>
        <View style={styles.Recipes}>
          {recipe.map((recipe, index) => {
            return (
              <TouchableOpacity
                style={styles.Recipe}
                onPress={() => {
                  navigation.navigate('Post', {
                    recipe: recipe,
                  });
                }}>
                <Image
                  source={{ uri: recipe.image }}
                  style={styles.RecipeImage}
                />
                <View style={styles.RecipeInfo}>
                  <Text style={{ fontWeight: 'bold' }}>{recipe.title}</Text>
                  <Text>{recipe.time}</Text>
                  <Text>{recipe.calories}</Text>
                </View>
                <AntDesign name="hearto" size={18} color="#000" />
              </TouchableOpacity>
            );
          })}
        </View>
        <View style={{ marginBottom: 20 }}></View>
      </ScrollView>
    );
  }
}
export default App;

const styles = StyleSheet.create({
  RecipesContainer: {
    marginTop: -24,
    padding: 32,
    backgroundColor: '#fff',
    borderTopLeftRadius: 24,
    borderRopRightRadius: 24,
  },
  Recipes: {
    marginTop: 16,
  },
  Recipe: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  RecipeImage: {
    width: 60,
    height: 60,
    borderRadius: 8,
  },
  RecipeInfo: {
    flex: 1,
    marginLeft: 12,
  },
});
