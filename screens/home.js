import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
  Image,
  ImageBackground,
  ScrollView,
} from 'react-native';
import Carousel from 'react-native-anchor-carousel';
import { Feather, Ionicons, AntDesign } from '@expo/vector-icons';
import Constants from 'expo-constants';
import { recipe } from '../src/data';
const { width, height } = Dimensions.get('window');

export default class ImageCarousel extends Component {
  renderItem = ({ item, index }) => {
    const { navigation } = this.props;
    return (
      <TouchableOpacity
        activeOpacity={1}
        style={styles.item}
        onPress={() => {
          this.numberCarousel.scrollToIndex(index);
        }}>
        <ImageBackground
          source={{ uri: item.image }}
          style={styles.imageBackground}
          imageStyle={{ borderRadius: 20 }}>
          <TouchableOpacity
            activeOpacity={1}
            style={styles.btn}
            underlayColor="#ff6200">
            <Ionicons
              name="md-time"
              size={25}
              color="#fff"
              style={{
                justifyContent: 'center',
                alignSelf: 'center',
                alignItems: 'center',
              }}
            />
            <Text style={{ color: '#fff', marginLeft: 3 }}>{item.time}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.8}
            style={styles.btnLike}
            underlayColor="#ff6200">
            <AntDesign
              name="hearto"
              size={25}
              color="#fff"
              style={{
                justifyContent: 'center',
                alignSelf: 'center',
                alignItems: 'center',
              }}
            />
          </TouchableOpacity>
          <View style={styles.DarkOverlay} />
          <View
            style={{
              position: 'absolute',
              bottom: 35,
              left: 8,
            }}>
            <Text style={styles.titleText}>{item.title}</Text>
            <Text style={styles.caloriesText}>{item.calories}</Text>
          </View>
        </ImageBackground>
        <View style={styles.lowerContainer}>
          <Text style={styles.contentText}>{item.content}</Text>
          <Text
            style={{ fontSize: 18, fontWeight: 'bold', paddingVertical: 10 }}>
            Ingredient:
          </Text>
          <Text style={styles.ingredientText}>{item.ingredient}</Text>
          <View>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Post', {
                  recipe: item,
                });
              }}
              activeOpacity={0.8}
              style={styles.btnMore}
              underlayColor="#ff6200">
              <Text
                style={{
                  color: '#fff',
                }}>
                Learn More
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  render() {
    return (
      <ScrollView style={styles.container}>
        <View style={styles.carouselContainer}>
          <Carousel
            style={styles.carousel}
            data={recipe}
            renderItem={this.renderItem}
            itemWidth={0.8 * width}
            inActiveOpacity={0.8}
            containerWidth={width}
            separatorWidth={-30}
            ref={(c) => {
              this.numberCarousel = c;
            }}
          />
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#272727',
  },
  carouselContainer: {
    width: '100%',
    height: '100%',
    overflow: 'hidden',
  },
  carousel: {
    flex: 1,
  },
  item: {
    flex: 1,
    marginVertical: 5,
    marginHorizontal: 10,
  },
  imageBackground: {
    height: 210,
  },
  titleText: {
    fontWeight: 'bold',
    fontSize: 20,
    color: '#fff',
  },
  caloriesText: {
    fontSize: 17,
    color: '#fff',
  },
  contentText: {
    paddingTop: 10,
    fontSize: 14,
  },
  ingredientText: {
    fontSize: 13,
    height: 93,
    overflow: 'hidden',
  },
  lowerContainer: {
    padding: 10,
    borderRadius: 20,
    backgroundColor: 'white',
    position: 'relative',
    top: -20,
  },
  btn: {
    flexDirection: 'row',
    position: 'absolute',
    top: 5,
    left: 5,
    height: 30,
    borderRadius: 20,
    justifyContent: 'center',
    alignSelf: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
    zIndex: 99,
    backgroundColor: '#ff3c3c',
    paddingHorizontal: 10,
  },
  btnLike: {
    flexDirection: 'row',
    position: 'absolute',
    top: 5,
    right: 5,
    width: 40,
    height: 30,
    borderRadius: 20,
    justifyContent: 'center',
    alignSelf: 'center',
    alignItems: 'center',
    zIndex: 99,
  },
  btnMore: {
    marginTop: 30,
    width: '100%',
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignSelf: 'center',
    alignItems: 'center',
    backgroundColor: '#ff3c3c',
  },
  DarkOverlay: {
    flex: 2,
    width: '100%',
    position: 'absolute',
    top: 0,
    right: 0,
    left: 0,
    height: 210,
    backgroundColor: '#000',
    opacity: 0.4,
    borderRadius: 20,
  },
});
