import React from 'react';
import { View, Text, StyleSheet, ImageBackground, TextInput, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import Logo from '../../assets/logo-icon.png';

export default function HomeScreen({ navigation }) {
  return (
    <ImageBackground
      source={{ uri: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be' }} // Remplace par ton image
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
            <Icon name="user" size={20} color="#2e2f45" style={{ marginRight: 12 }} />
          </TouchableOpacity>
          <Icon name="settings" size={20} color="#2e2f45" />
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

      {/* Link */}
      <TouchableOpacity style={styles.mapLink}>
        <Text style={styles.mapLinkText}>Voir la carte</Text>
      </TouchableOpacity>
    </ImageBackground>
  );
}

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
    color: '#2e2f45',
    fontWeight: 'bold',
  },
  country: {
    color: '#2e2f45',
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
    backgroundColor: '#ffffffcc',
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
// import { View, Text } from 'react-native';

// export default function HistoriqueScreen() {
//   return (
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//       <Text>Page Historique</Text>
//     </View>
//   );
// }


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

