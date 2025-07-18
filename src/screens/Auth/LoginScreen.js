import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, KeyboardAvoidingView, Platform, ScrollView, Alert, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { login } from '../../api/auth';
import Logo from '../../assets/logo-icon.png';

export default function LoginScreen({ navigation }) {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const response = await login({ email, password });
      console.log('Login success', response.data);
      Alert.alert("Succès", "Connexion réussie !");
      // stocker ici le token reçu avec AsyncStorage
    } catch (error) {
      console.log('Login error', error.response?.data);
      Alert.alert("Erreur", "Email ou mot de passe incorrect");
    }
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <ScrollView contentContainerStyle={styles.container}>
        <Image source={Logo} style={styles.logo} />
        <Text style={styles.title}>Connexion</Text>

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

        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Se connecter</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Register')}>
          <Text style={styles.linkText}>Pas de compte ? Inscrivez-vous</Text>
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
