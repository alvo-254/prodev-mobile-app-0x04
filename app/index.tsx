import { View, Text, ImageBackground, TouchableOpacity, Image } from 'react-native';
import { styles } from '@/styles/_mainstyle';
import { BACKGROUNDIMAGE, HEROLOGO } from '@/constants';
import { Link } from 'expo-router';

export default function Index() {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={BACKGROUNDIMAGE}
        style={styles.backgroundImageContainer}
        resizeMode="cover"
      >
        <View style={styles.logoContainer}>
          <Image source={HEROLOGO} />
        </View>

        <View style={styles.titleContainer}>
          <Text style={styles.titleText}>Find your dream villa in seconds</Text>
          <View style={styles.titleSubTextContainer}>
            <Text style={styles.titleSubText}>
              Book your dream villa with ease and enjoy a seamless experience
            </Text>
          </View>
        </View>

        <View style={{ flex: 1 }} />

        <View style={styles.buttonGroup}>
          <Link href="/join" asChild>
            <TouchableOpacity style={styles.buttonPrimary}>
              <Text style={styles.buttonPrimaryText}>Join now</Text>
            </TouchableOpacity>
          </Link>
          <Link href="/signin" asChild>
            <TouchableOpacity style={styles.buttonSecondary}>
              <Text style={styles.buttonSecondaryText}>Sign in</Text>
            </TouchableOpacity>
          </Link>
        </View>

        <View style={styles.buttonGroupSubText}>
          <Text style={{ color: 'white' }}>Already have an account?</Text>
          <Link href="/signin" asChild>
            <TouchableOpacity>
              <Text style={{ color: 'white', textDecorationLine: 'underline' }}>Sign in</Text>
            </TouchableOpacity>
          </Link>
        </View>
      </ImageBackground>
    </View>
  );
}
