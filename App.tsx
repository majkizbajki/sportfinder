import React, {useEffect} from 'react';
import {SafeAreaView, Text} from 'react-native';
import RNBootSplash from 'react-native-bootsplash';

function App(): JSX.Element {
  useEffect(() => {
    const init = async () => {
      // …do multiple sync or async tasks
    };

    init().finally(async () => {
      await RNBootSplash.hide({fade: true, duration: 500});
    });
  }, []);

  return (
    <SafeAreaView>
      <Text>Sign in</Text>
    </SafeAreaView>
  );
}

export default App;
