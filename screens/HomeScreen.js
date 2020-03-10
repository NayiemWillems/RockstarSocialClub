import React from 'react';

import { WebView } from 'react-native-webview';

export default function HomeScreen() {
  return <WebView source={{ uri: 'https://socialclub.rockstargames.com/' }} style={{ marginTop: 20 }} />;
}

HomeScreen.navigationOptions = {
  header: null,
};