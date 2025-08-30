import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, ActivityIndicator } from 'react-native';
import { useNavigation } from '@react-navigation/native';

// ⚠️ Simulons une API pour cet exemple :
const mockApiData = [
  { id: '1', name: 'Parking A', spaces: 350, distance: 100, status: 'Ouvert' },
  { id: '2', name: 'Parking B', spaces: 120, distance: 250, status: 'Fermé' },
  { id: '3', name: 'Parking C', spaces: 85, distance: 350, status: 'Ouvert' },
  { id: '4', name: 'Parking D', spaces: 400, distance: 500, status: 'Fermé' },
];

export default function ParkingScreen() {
  const navigation = useNavigation();

  const [parkings, setParkings] = useState([]);
  const [loading, setLoading] = useState(true);

  // Simuler appel API :
  useEffect(() => {
    setTimeout(() => {
      setParkings(mockApiData);
      setLoading(false);
    }, 1000); // Simule 1 seconde de latence API
  }, []);

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.card}
      onPress={() => navigation.navigate('ParkingDetail', { parking: item })}
    >
      <View>
        <Text style={styles.parkingName}>{item.name}</Text>
        <Text style={styles.parkingInfo}>{item.spaces} places</Text>
      </View>
      <View style={{ alignItems: 'flex-end' }}>
        <View
          style={[
            styles.statusBadge,
            item.status === 'Ouvert' ? styles.statusOpen : styles.statusClosed,
          ]}
        >
          <Text style={styles.statusText}>{item.status}</Text>
        </View>
        <Text style={styles.parkingInfo}>{item.distance} m</Text>
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
    <View style={styles.container}>
      <Text style={styles.title}>Parking</Text>
      <FlatList
        data={parkings}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={{ paddingVertical: 8 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
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
