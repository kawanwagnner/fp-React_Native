import { StatusBar } from "expo-status-bar";
import { View, ScrollView } from "react-native";
import Prime from "./src/Screens/Prime/Prime";
import Texto from "./src/components/Texto";

export default function App() {
  return (
    <ScrollView>
      <Prime />
      <StatusBar style="auto" />
      <Texto />
    </ScrollView>
  );
}
