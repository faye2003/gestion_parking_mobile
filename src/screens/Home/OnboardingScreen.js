import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, FlatList, Dimensions } from 'react-native';
import { PointerType } from 'react-native-gesture-handler';

const { width } = Dimensions.get('window');

// Mock slides data :
const slides = [
  {
    key: '1',
    title: 'Trouvez un parking facilement',
    description: 'Découvrez les places disponibles en temps réel. Sélectionnez juste en un clique',
    image: require('../../assets/onboarding1.png'), // Remplace par ton image locale
  },
  {
    key: '2',
    title: 'Paiement Efficace',
    description: 'Payer en toute sécurité avec votre compte Mobile Money par Carte prépayé.',
    image: require('../../assets/onboarding2.png'), // Image pour 2ème slide
  },
];

export default function OnboardingScreen({ navigation }) {
  const [currentIndex, setCurrentIndex] = React.useState(0);

  const renderItem = ({ item }) => (
    <View style={styles.slide}>
      <Image source={item.image} style={styles.image} />
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.description}>{item.description}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={slides}
        renderItem={renderItem}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={(e) => {
          const index = Math.round(e.nativeEvent.contentOffset.x / width);
          setCurrentIndex(index);
        }}
        keyExtractor={(item) => item.key}
      />

      {/* Pagination dots */}
      <View style={styles.pagination}>
        {slides.map((_, index) => (
          <View
            key={index}
            style={[
              styles.dot,
              currentIndex === index && styles.activeDot,
            ]}
          />
        ))}
      </View>

      {/* Buttons */}
      <TouchableOpacity
        style={styles.nextButton}
        onPress={() => navigation.navigate('HomeTabs')}
      >
        <Text style={styles.nextButtonText}>Next</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.skipButton} 
        onPress={() => navigation.navigate('Register')}
      >
        <Text style={styles.skipText}>S’inscrire</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  slide: { width, alignItems: 'center', justifyContent: 'center', padding: 20 },
  image: { width: 400, height: 440, resizeMode: 'contain', marginBottom: 20 },
  title: { fontSize: 22, fontWeight: 'bold', color: '#2e2f45', textAlign: 'center' },
  description: { fontSize: 14, color: '#2e2f45', textAlign: 'center', marginTop: 10, fontStyle:'italic' },
  pagination: { flexDirection: 'row', justifyContent: 'center', marginBottom: 10 },
  dot: {
    width: 8, height: 8,
    borderRadius: 4,
    backgroundColor: '#b4b4b4',
    marginHorizontal: 4,
  },
  activeDot: { backgroundColor: '#84ab4c' },
  nextButton: {
    backgroundColor: '#84ab4c',
    paddingVertical: 12,
    borderRadius: 20,
    marginHorizontal: 40,
    alignItems: 'center',
    marginBottom: 12,
  },
  skipButton: {
    paddingVertical: 12,
    borderColor: '#84ab4c',
    borderWidth: 1,
    borderRadius: 20,
    marginHorizontal: 40,
    alignItems: 'center',
    marginBottom: 12,
  },
  nextButtonText: { color: '#fff', fontWeight: 'bold', fontSize: 16 },
  skipText: { textAlign: 'center', color: '#2e2f45', fontSize: 14, fontWeight: 'bold', },
});
