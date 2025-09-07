import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import { styles } from '@/styles/_joinstyle';
import { Link } from 'expo-router';
import { FACEBOOKLOGO, GOOGLELOGO, HEROLOGOGREEN } from '@/constants';
import { Feather } from '@expo/vector-icons';
import { useState } from 'react';

export default function Join() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.iconsection}>
        <Link href="/" asChild>
          <TouchableOpacity>
            <Feather name="arrow-left" size={24} color="black" />
          </TouchableOpacity>
        </Link>
        <Image source={HEROLOGOGREEN} />
      </View>

      <View style={styles.titleTextGroup}>
        <Text style={styles.titleText}>Join now</Text>
        <Text style={styles.subText}>Enter your details to create an account</Text>
      </View>

      <View style={styles.formGroup}>
        <View>
          <Text style={styles.formLabel}>Full Name</Text>
          <TextInput style={styles.formControl} placeholder="Enter your full name" />
        </View>

        <View>
          <Text style={styles.formLabel}>Email</Text>
          <TextInput style={styles.formControl} placeholder="Enter your email" />
        </View>

        <View>
          <Text style={styles.formLabel}>Password</Text>
          <View style={styles.formPasswordControl}>
            <TextInput
              style={styles.passwordControl}
              placeholder="Enter your password"
              secureTextEntry={!showPassword}
            />
            <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
              <Feather name={showPassword ? 'eye-off' : 'eye'} size={24} color="black" />
            </TouchableOpacity>
          </View>
        </View>

        <TouchableOpacity style={styles.primaryButton}>
          <Text style={styles.buttonText}>Join now</Text>
        </TouchableOpacity>

        <View style={styles.dividerGroup}>
          <View style={styles.divider} />
          <Text style={styles.dividerText}>or</Text>
          <View style={styles.divider} />
        </View>

        <View style={styles.secondaryButtonGroup}>
          <TouchableOpacity style={[styles.secondaryButton, { borderColor: '#4285F4' }]}>
            <Image source={GOOGLELOGO} />
            <Text style={[styles.secondaryButtonText, { color: '#4285F4' }]}>
              Continue with Google
            </Text>
          </TouchableOpacity>

          <TouchableOpacity style={[styles.secondaryButton, { borderColor: '#3B5998' }]}>
            <Image source={FACEBOOKLOGO} />
            <Text style={[styles.secondaryButtonText, { color: '#3B5998' }]}>
              Continue with Facebook
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.signupgroup}>
        <Text style={styles.signupTitleText}>Already have an account? </Text>
        <Link href="/signin" asChild>
          <TouchableOpacity>
            <Text style={styles.signupSubTitleText}>Sign in</Text>
          </TouchableOpacity>
        </Link>
      </View>
    </View>
  );
}
