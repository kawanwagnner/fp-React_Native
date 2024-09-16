import { StatusBar } from "expo-status-bar";
import { View, ScrollView } from "react-native";
import Prime from "./src/components/Prime";
import Texto from "./src/components/Texto";
import Contador from "./src/components/Contador";

export default function App() {
  return (
    <ScrollView>
      <Prime />
      <StatusBar style="auto" />
      <Texto />
      <Contador />
    </ScrollView>
  );
}
