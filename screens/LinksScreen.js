import React from 'react';
import { WebView } from 'react-native-webview';

export default function LinksScreen() {
  return <WebView source={{ uri: 'https://socialclub.rocks' }} style={{ marginTop: 20 }} />;
}

LinksScreen.navigationOptions = {
  header: null,
};