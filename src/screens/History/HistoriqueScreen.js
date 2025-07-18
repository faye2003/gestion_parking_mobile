import React from 'react';
import { View, Text, StyleSheet, ImageBackground, TextInput, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import Logo from '../../assets/logo-icon.png';

export default function HistoriqueScreen() {
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
          <Icon name="settings" size={20} color="#2e2f45" />
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
  searchContainer: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 32,
    paddingHorizontal: 8,
    height: 40,
  },
  imglogo: {
    width: 30,
    height: 30,
    resizeMode: 'contain',
    alignSelf: 'center',
    marginBottom: 16
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
