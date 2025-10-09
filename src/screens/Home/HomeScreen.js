import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList, ImageBackground, TextInput, TouchableOpacity, Image, ActivityIndicator } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import Logo from '../../assets/logo-icon.png';
import Background from '../../assets/bg3.png';
import { useNavigation } from '@react-navigation/native';


const mockApiData = [
  { id: '1', name: 'Parking CFP Mbour', spaces: 350, distance: 100, status: 'Ouvert' },
  { id: '2', name: 'Parking Universitaire', spaces: 120, distance: 250, status: 'Fermé' },
  { id: '3', name: 'Parking Mansou Motors', spaces: 85, distance: 350, status: 'Ouvert' },
  { id: '4', name: 'Parking D', spaces: 400, distance: 500, status: 'Fermé' },
];

export default function HomeScreen() {
  const navigation = useNavigation();

  const [parkings, setParkings] = useState([]);
  const [loading, setLoading] = useState(true);

  // Simuler appel API :
  useEffect(() => {
    setTimeout(() => {
      setParkings(mockApiData);
      setLoading(false);
    }, 1000); // Simule 1 seconde de latence API
  }, [])

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={stylePark.card}
      onPress={() => navigation.navigate('ParkingDetail', { parking: item })}
    >
      <View>
        <Text style={stylePark.parkingName}>{item.name}</Text>
        <Text style={stylePark.parkingInfo}>{item.spaces} places</Text>
      </View>
      <View style={{ alignItems: 'flex-end' }}>
        <View
          style={[
            stylePark.statusBadge,
            item.status === 'Ouvert' ? stylePark.statusOpen : stylePark.statusClosed,
          ]}
        >
          <Text style={stylePark.statusText}>{item.status}</Text>
        </View>
        <Text style={stylePark.parkingInfo}>{item.distance} m</Text>
      </View>
    </TouchableOpacity>
  );

  if (loading) {
    return (
      <View style={[styles.container, { justifyContent: 'center', alignItems: 'center' }]}>
        <ActivityIndicator size="large" color="#84ab4c" />
      </View>
    );
  }

  return (
    <ImageBackground
      // source={Background} // Remplace par ton image
      style={styles.background}
    >
      {/* Header */}
      <View style={styles.header}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Image source={Logo} style={styles.imglogo} />
          <Text style={styles.logo}>Parking-O</Text>
        </View>
        <Text style={styles.country}>Sénégal</Text>
        <View style={{ flexDirection: 'row' }}>
          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <Icon name="user" size={20} color="#84ab4c" style={{ marginRight: 12 }} />
          </TouchableOpacity>
          <Icon name="settings" size={20} color="#84ab4c" />
        </View>
      </View>

      {/* Search bar */}
      <View style={styles.searchContainer}>
        <Icon name="search" size={16} color="#999" style={{ marginHorizontal: 8 }} />
        <TextInput
          placeholder="Choisir votre zone ou tarif"
          placeholderTextColor="#999"
          style={styles.searchInput}
        />
      </View>

      {/* Parking info card */}
      <View style={styles.infoCard}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Icon name="map-pin" size={16} color="#84ab4c" style={{ marginRight: 8 }} />
          <Text style={styles.infoText}>12345 Sénégal - Zone Verte - Visiteur</Text>
        </View>
        <Text style={styles.subText}>Sénégal</Text>
      </View>
      
      <View style={stylePark.container}>
        <Text style={stylePark.title}>Parking à proximité</Text>
        <FlatList
          data={parkings}
          keyExtractor={(item) => item.id}
          renderItem={renderItem}
          contentContainerStyle={{ paddingVertical: 8 }}
        />
      </View>

      {/* Link */}
      <TouchableOpacity style={styles.mapLink}>
        <Text style={styles.mapLinkText}>Voir la carte</Text>
      </TouchableOpacity>
    </ImageBackground>
  );
}

const stylePark = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    paddingHorizontal: 16,
    paddingTop: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#2e2f45',
    marginBottom: 16,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 3,
  },
  parkingName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#2e2f45',
  },
  parkingInfo: {
    fontSize: 13,
    color: '#2e2f45',
    marginTop: 2,
  },
  statusBadge: {
    borderRadius: 12,
    paddingHorizontal: 8,
    paddingVertical: 4,
    marginBottom: 4,
  },
  statusOpen: {
    backgroundColor: '#84ab4c',
  },
  statusClosed: {
    backgroundColor: '#b4b4b4',
  },
  statusText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: 'bold',
  },
});

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
    padding: 16,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 40,
  },
  logo: {
    fontSize: 18,
    color: '#84ab4c',
    fontWeight: 'bold',
  },
  country: {
    color: '#84ab4c',
    fontSize: 14,
  },
  imglogo: {
    width: 30,
    height: 30,
    resizeMode: 'contain',
    alignSelf: 'center',
    marginBottom: 16
  },
  searchContainer: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 32,
    paddingHorizontal: 8,
    height: 40,
  },
  searchInput: {
    flex: 1,
    fontSize: 14,
    color: '#333',
  },
  infoCard: {
    backgroundColor: '#ffffffcc', // Semi-transparent white
    borderRadius: 12,
    padding: 12,
    marginTop: 16,
  },
  infoText: {
    fontSize: 14,
    color: '#2e2f45',
    fontWeight: '500',
  },
  subText: {
    fontSize: 12,
    color: '#2e2f45',
    marginTop: 4,
  },
  mapLink: {
    position: 'absolute',
    bottom: 24,
    alignSelf: 'center',
    backgroundColor: '#fff',
    padding: 12,
    borderRadius: 12
  },
  mapLinkText: {
    color: '#84ab4c',
    fontWeight: 'bold',
    fontSize: 14,
  }
});

// import React from 'react';
// import { View, Text, Button } from 'react-native';

// export default function HomeScreen({ navigation }) {
//   return (
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//       <Text>Page Accueil</Text>
//       <Button title="Aller à Paiement" onPress={() => navigation.navigate('Payment')} />
//       <Button title="Page Connexion" onPress={() => navigation.navigate('Login')} />
//       <Button title="Page Register" onPress={() => navigation.navigate('Register')} />
//     </View>
//   );
// }

