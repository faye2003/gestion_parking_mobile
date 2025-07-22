import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { useRoute } from '@react-navigation/native';

const { width, height } = Dimensions.get('window');

export default function DetailParkingScreen() {
  const route = useRoute();
  const { parking } = route.params;

  // Coordonnées mock (remplacer par les vraies données de l'API si dispo)
  const location = {
    latitude: 14.6928,  // Dakar par défaut pour l’exemple
    longitude: -17.4467,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01,
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{parking.name}</Text>
      <Text style={styles.subtitle}>{parking.spaces} places disponibles</Text>
      <Text style={styles.status}>Statut : {parking.status}</Text>
      <Text style={styles.distance}>Distance : {parking.distance} m</Text>

      <MapView style={styles.map} initialRegion={location}>
        <Marker
          coordinate={{ latitude: location.latitude, longitude: location.longitude }}
          title={parking.name}
          description={`${parking.spaces} places • ${parking.distance} m`}
        />
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#2e2f45',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: '#2e2f45',
    marginBottom: 4,
  },
  status: {
    fontSize: 14,
    color: '#2e2f45',
    marginBottom: 4,
  },
  distance: {
    fontSize: 14,
    color: '#2e2f45',
    marginBottom: 12,
  },
  map: {
    width: width - 32,
    height: height * 0.4,
    borderRadius: 12,
  },
});
