import React from 'react';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {store, persistor} from './redux/store';
import NavigationStack from './navigation/NavigationStack';
import {PaperProvider} from 'react-native-paper';
import {StatusBar} from 'react-native';
import NToast from 'react-native-toast-message';
import {BaseColors} from './config/theme';
const App = () => {
  return (
    // main setup with storage
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <PaperProvider>
          <StatusBar
            backgroundColor={BaseColors.black}
            barStyle={'light-content'}
          />
          <NavigationStack />
        </PaperProvider>
      </PersistGate>
      <NToast />
    </Provider>
  );
};

export default App;
