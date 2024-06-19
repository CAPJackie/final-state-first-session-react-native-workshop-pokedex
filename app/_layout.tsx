import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import 'react-native-reanimated';

import { useColorScheme } from '@/hooks/useColorScheme';
import PokemonProvider from '@/contexts/PokemonContext';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <PokemonProvider>
        <Stack>
          <Stack.Screen 
            name="index" 
            options={{
              title: 'Pokédex',
              headerShadowVisible: false,
              headerStyle: { backgroundColor: '#DC0A2D' }, 
              headerTitleStyle: { color: 'white', fontWeight: 'bold' }
            }} 
          />
          <Stack.Screen 
            name="pokemon/[name]"
            options={{ 
              headerShadowVisible: false,
              headerTintColor: 'white',
              headerStyle: { backgroundColor: '#DC0A2D' }, 
              headerBackTitleVisible: false, 
              title: ''
            }}
          />
          <Stack.Screen name="+not-found" />
        </Stack>
      </PokemonProvider>
    </ThemeProvider>
  );
}
