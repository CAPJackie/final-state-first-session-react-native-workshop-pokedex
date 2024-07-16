import { getPokemonImage } from "@/api/pokeapi";
import { FlatList, Image, StyleSheet, Text, View } from "react-native";

interface Pokemon {
  name: string;
  url: string;
}

export default function Index() {
  const pokemonList: Pokemon[] = [
    { name: "bulbasaur", url: "https://pokeapi.co/api/v2/pokemon/1/" },
    { name: "ivysaur", url: "https://pokeapi.co/api/v2/pokemon/2/" },
    { name: "venusaur", url: "https://pokeapi.co/api/v2/pokemon/3/" },
    { name: "charmander", url: "https://pokeapi.co/api/v2/pokemon/4/" },
    { name: "charmeleon", url: "https://pokeapi.co/api/v2/pokemon/5/" },
    { name: "charizard", url: "https://pokeapi.co/api/v2/pokemon/6/" },
    { name: "squirtle", url: "https://pokeapi.co/api/v2/pokemon/7/" },
    { name: "wartortle", url: "https://pokeapi.co/api/v2/pokemon/8/" },
    { name: "blastoise", url: "https://pokeapi.co/api/v2/pokemon/9/" },
    { name: "caterpie", url: "https://pokeapi.co/api/v2/pokemon/10/" },
    { name: "metapod", url: "https://pokeapi.co/api/v2/pokemon/11/" },
    { name: "butterfree", url: "https://pokeapi.co/api/v2/pokemon/12/" },
    { name: "weedle", url: "https://pokeapi.co/api/v2/pokemon/13/" },
    { name: "kakuna", url: "https://pokeapi.co/api/v2/pokemon/14/" },
    { name: "beedrill", url: "https://pokeapi.co/api/v2/pokemon/15/" },
  ];

  const renderItem = ({ item }: { item: Pokemon }) => (
    <View style={styles.item}>
      <View style={styles.grayBackground} />
      <View style={styles.itemColumn}>
        <Image
          source={{ uri: `${getPokemonImage(item.url)}` }}
          style={styles.image}
        />
        <Text style={styles.text}>{item.name}</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.subcontainer}>
        <FlatList
          data={pokemonList}
          keyExtractor={(item) => item.name}
          renderItem={renderItem}
          numColumns={3}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#DC0A2D",
  },
  subcontainer: {
    marginHorizontal: 5,
    marginVertical: 10,
    padding: 8,
    backgroundColor: "white",
    borderRadius: 10,
  },
  grayBackground: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: "50%",
    backgroundColor: "#EFEFEF",
    borderTopStartRadius: 10,
    borderTopEndRadius: 10,
  },
  item: {
    flex: 1,
    backgroundColor: "white",
    margin: 5,
    alignItems: "center",
    borderRadius: 10,
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  itemColumn: {
    alignItems: "center",
  },
  image: {
    width: 100,
    height: 100,
  },
  text: {
    fontSize: 16,
    fontWeight: "bold",
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#DC0A2D",
  },
  loadingText: {
    marginTop: 10,
    fontSize: 18,
    color: "white",
  },
});
