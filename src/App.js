import React, {useState} from 'react';
import {
  SafeAreaView,
  Text,
  View,
  FlatList,
  StyleSheet,
  Switch,
} from 'react-native';

const data = [
  {id: 0, name: 'cafe.exe', isFavorite: true},
  {id: 1, name: 'KafaKafe', isFavorite: false},
  {id: 2, name: 'BugG', isFavorite: false},
  {id: 3, name: 'Rock`n Coke', isFavorite: true},
  {id: 4, name: 'do(drink)', isFavorite: false},
  {id: 5, name: 'esc', isFavorite: false},
];

function App() {
  const [cafeList, setCafeList] = useState(data);
  const [showOnlyFavorites, setShowOnlyFavorites] = useState(false);

  function onFavoritesChange(isFavoriteSelected) {
    setShowOnlyFavorites(isFavoriteSelected);
    isFavoriteSelected
      ? setCafeList(cafeList.filter(cafe => cafe.isFavorite))
      : setCafeList(data);
  }

  const renderCafe = ({item}) => {
    return (
      <View style={styles.cafe_container}>
        <Text style={styles.cafe_title}>{item.name}</Text>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.favorite_container}>
        <Text style={styles.favorite_title}>Show Only Favorites</Text>
        <Switch value={showOnlyFavorites} onValueChange={onFavoritesChange} />
      </View>
      <FlatList data={cafeList} renderItem={renderCafe} />
    </SafeAreaView>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  favorite_container: {
    justifyContent: 'center',
    padding: 10,
    alignItems: 'center',
  },
  favorite_title: {
    fontWeight: 'bold',
    margin: 5,
  },
  cafe_container: {
    margin: 10,
    borderRadius: 8,
    borderColor: '#bdbdbd',
    backgroundColor: '#eceff1',
    borderWidth: 1,
    padding: 5,
  },
  cafe_title: {
    fontSize: 25,
    margin: 10,
    color: '#263238',
  },
});
