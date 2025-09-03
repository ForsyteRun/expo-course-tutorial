import FontAwesome from '@expo/vector-icons/FontAwesome';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { Tabs } from "expo-router";
import { SafeAreaView } from 'react-native-safe-area-context';

export default function TabsLayout() {

  return (
    < Tabs screenOptions={{ tabBarActiveTintColor: 'green', headerShown: false, animation: 'fade' }
    }>
      <Tabs.Screen name="home" options={{ tabBarLabel: 'Home', tabBarIcon: ({ color, size }) => <FontAwesome name="home" size={size} color={color} /> }} />
      <Tabs.Screen name="explore" options={{ tabBarLabel: 'Explorers', tabBarIcon: ({ color, size }) => <FontAwesome name="wpexplorer" size={size} color={color} /> }} />
      <Tabs.Screen name="progress" options={{ tabBarLabel: 'Progres', tabBarIcon: ({ color, size }) => <MaterialCommunityIcons name="progress-check" size={size} color={color} /> }} />
      <Tabs.Screen name="profile" options={{ tabBarLabel: 'Profile', tabBarIcon: ({ color, size }) => <FontAwesome name="user" size={size} color={color} /> }} />
    </Tabs >
  );
}
