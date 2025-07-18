import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, KeyboardAvoidingView, Platform, ScrollView, Alert, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { register } from '../../api/auth';
import Logo from '../../assets/logo-icon.png';


export default function RegisterScreen({ navigation }) {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = async () => {
    try {
      const response = await register({ name, email, password });
      console.log('Register success', response.data);
      Alert.alert("Succès", "Inscription réussie !");
      // stocker ici le token reçu avec AsyncStorage
    } catch (error) {
      console.log('Register error', error.response?.data);
      Alert.alert("Erreur", "Veuillez entrer des informations correctes !");
    }
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <ScrollView contentContainerStyle={styles.container}>
        <Image source={Logo} style={styles.logo} />
        <Text style={styles.title}>Veuillez vous inscrire</Text>

        {/* Nom complet */}
        <View style={styles.inputContainer}>
          <Icon name="user" size={20} color="#555" style={styles.icon} />
          <TextInput
            placeholder="Nom complet"
            value={name}
            onChangeText={setName}
            style={styles.input}
          />
        </View>

        {/* Email */}
        <View style={styles.inputContainer}>
          <Icon name="mail" size={20} color="#555" style={styles.icon} />
          <TextInput
            placeholder="Email"
            style={styles.input}
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
          />
        </View>

        {/* Mot de passe */}
        <View style={styles.inputContainer}>
          <Icon name="lock" size={20} color="#555" style={styles.icon} />
          <TextInput
            placeholder="Mot de passe"
            style={styles.input}
            value={password}
            onChangeText={setPassword}
            secureTextEntry={!showPassword}
          />
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
            <Icon name={showPassword ? "eye" : "eye-off"} size={20} color="#555" />
          </TouchableOpacity>
        </View>

        {/* Confirmer mot de passe */}
        <View style={styles.inputContainer}>
          <Icon name="lock" size={20} color="#555" style={styles.icon} />
          <TextInput
            placeholder="Confirmer mot de passe"
            style={styles.input}
            value={password}
            onChangeText={setPassword}
            secureTextEntry={!showConfirmPassword}
          />
          <TouchableOpacity onPress={() => setShowConfirmPassword(!showConfirmPassword)}>
            <Icon name={showConfirmPassword ? "eye" : "eye-off"} size={20} color="#555" />
          </TouchableOpacity>
        </View>

        {/* Bouton */}
        <TouchableOpacity style={styles.button} onPress={handleRegister}>
          <Text style={styles.buttonText}>S'inscrire</Text>
        </TouchableOpacity>

        {/* Lien vers connexion */}
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Text style={styles.linkText}>Déjà un compte ? Se connecter</Text>
        </TouchableOpacity>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    paddingHorizontal: 24,
    backgroundColor: '#fff'
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 24,
    textAlign: 'center'
  },
  logo: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
    alignSelf: 'center',
    marginBottom: 16
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f9f9f9',
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 2 // Android shadow
  },
  icon: {
    marginRight: 8
  },
  input: {
    flex: 1,
    height: 50
  },
  button: {
    backgroundColor: '#84ab4c',
    paddingVertical: 14,
    borderRadius: 8,
    marginBottom: 12
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold'
  },
  linkText: {
    color: '#007bff',
    textAlign: 'center'
  }
});
