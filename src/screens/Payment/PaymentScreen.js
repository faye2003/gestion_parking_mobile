import React, { useState } from 'react';
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { Picker } from '@react-native-picker/picker';

export default function PaymentScreen() {
  // 📝 Données mockées dynamiques :
  const vehicles = [
    { id: 1, plate: 'AB123CD', owner: 'Aurélie' },
    { id: 2, plate: 'DK456EF', owner: 'Moussa' },
    { id: 3, plate: 'SN789GH', owner: 'Fatou' },
  ];

  const paymentMethods = [
    { id: 1, label: 'Orange Money +221••••', value: 'orange' },
    { id: 2, label: 'Wave +221••••', value: 'wave' },
    { id: 3, label: 'Carte bancaire ****1234', value: 'visa' },
  ];

  const [selectedVehicle, setSelectedVehicle] = useState(vehicles[0].id);
  const [selectedPayment, setSelectedPayment] = useState(paymentMethods[0].value);
  const price = 1000; // Exemple montant dynamique calculé

  return (
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>Confirmez le Paiement</Text>

        {/* Card 1 : Parking info */}
        <View style={styles.card}>
          <View style={styles.row}>
            <Icon name="map-pin" size={20} color="#84ab4c" />
            <View style={styles.cardContent}>
              <Text style={styles.cardTitle}>12345</Text>
              <Text style={styles.cardSubtitle}>Sénégal - Zone Verte - Visiteur</Text>
            </View>
            <TouchableOpacity>
              <Icon name="edit-2" size={16} color="#84ab4c" />
            </TouchableOpacity>
          </View>
        </View>

        {/* Card 2 : Vehicle selector */}
        <View style={styles.card}>
          <Text style={styles.sectionLabel}>Véhicule</Text>
          <Picker
            selectedValue={selectedVehicle}
            onValueChange={(itemValue) => setSelectedVehicle(itemValue)}
            style={styles.picker}
          >
            {vehicles.map((v) => (
              <Picker.Item key={v.id} label={`${v.plate} (${v.owner})`} value={v.id} />
            ))}
          </Picker>
        </View>

        {/* Expiration */}
        <View style={styles.card}>
          <View style={styles.row}>
            <Icon name="clock" size={20} color="#84ab4c" />
            <View style={styles.cardContent}>
              <Text style={styles.cardSubtitle}>Expire aujourd'hui à</Text>
              <Text style={styles.expiration}>10:11</Text>
              <Text style={styles.cardSubtitle}>Même prix que 30 min(s)</Text>
            </View>
            <TouchableOpacity>
              <Icon name="edit-2" size={16} color="#84ab4c" />
            </TouchableOpacity>
          </View>
        </View>

        {/* Montant */}
        <View style={styles.card}>
          <View style={styles.row}>
            <Icon name="dollar-sign" size={20} color="#84ab4c" />
            <View style={styles.cardContent}>
              <Text style={styles.cardSubtitle}>Montant total</Text>
              <Text style={styles.amount}>{price.toLocaleString()} FCFA</Text>
            </View>
          </View>
        </View>

        {/* Payment selector */}
        <View style={styles.card}>
          <Text style={styles.sectionLabel}>Payer avec</Text>
          <Picker
            selectedValue={selectedPayment}
            onValueChange={(itemValue) => setSelectedPayment(itemValue)}
            style={styles.picker}
          >
            {paymentMethods.map((pm) => (
              <Picker.Item key={pm.id} label={pm.label} value={pm.value} />
            ))}
          </Picker>
        </View>

        {/* Bouton confirmer */}
        <TouchableOpacity style={styles.confirmButton}>
          <Text style={styles.confirmButtonText}>CONFIRMER LE PAIEMENT</Text>
        </TouchableOpacity>
      </ScrollView>
  );
}

// const styles = StyleSheet.create({
//   background: {
//     flex: 1,
//     resizeMode: 'cover',
//   },
//   container: {
//     padding: 16,
//   },
//   title: {
//     textAlign: 'center',
//     fontSize: 18,
//     color: '#2e2f45',
//     fontWeight: 'bold',
//     marginVertical: 16,
//   },
//   card: {
//     backgroundColor: '#ffffffcc',
//     borderRadius: 12,
//     padding: 12,
//     marginBottom: 14
//   },
//   row: {
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   cardContent: {
//     flex: 1,
//     marginLeft: 8,
//   },
//   cardTitle: {
//     fontWeight: 'bold',
//     color: '#2e2f45',
//   },
//   cardSubtitle: {
//     fontSize: 12,
//     color: '#2e2f45',
//   },
//   expiration: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     color: '#2e2f45',
//   },
//   amount: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     color: '#2e2f45',
//   },
//   sectionLabel: {
//     fontSize: 14,
//     color: '#2e2f45',
//     marginBottom: 4,
//     fontWeight: '500',
//   },
//   picker: {
//     backgroundColor: '#fff',
//     borderRadius: 8,
//   },
//   confirmButton: {
//     backgroundColor: '#84ab4c',
//     paddingVertical: 14,
//     borderRadius: 8,
//     alignItems: 'center',
//     marginTop: 8,
//   },
//   confirmButtonText: {
//     color: '#fff',
//     fontWeight: 'bold',
//   },
// });

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
  },
  container: {
    padding: 16,
  },
  title: {
    textAlign: 'center',
    fontSize: 20,
    color: '#2e2f45',
    fontWeight: 'bold',
    marginVertical: 20,
  },
  card: {
    backgroundColor: '#ffffffcc',
    borderRadius: 12,
    padding: 12,
    marginBottom: 14,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.15,
    shadowRadius: 4,
    elevation: 4,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  cardContent: {
    flex: 1,
    marginLeft: 8,
  },
  cardTitle: {
    fontWeight: 'bold',
    color: '#2e2f45',
    fontSize: 14,
  },
  cardSubtitle: {
    fontSize: 12,
    color: '#2e2f45',
  },
  expiration: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2e2f45',
  },
  amount: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2e2f45',
  },
  sectionLabel: {
    fontSize: 14,
    color: '#2e2f45',
    marginBottom: 4,
    fontWeight: '600',
  },
  picker: {
    backgroundColor: '#fff',
    borderRadius: 8,
    borderColor: '#84ab4c',
    borderWidth: 1,
    marginTop: 4,
  },
  confirmButton: {
    backgroundColor: '#84ab4c',
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 4,
  },
  confirmButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 14,
    letterSpacing: 1,
  },
});

