export async function prepare() {
    try {
      // Keep the splash screen visible while we fetch resources
      await SplashScreen.preventAutoHideAsync();
      // Pre-load fonts, make any API calls you need to do here
      await Font.loadAsync({
        'Oswald':require('./src/Utils/Oswald-Regular.ttf'),
        'Quicksand':require('./src/Utils/Oswald-Regular.ttf'),
      })
      // Artificially delay for two seconds to simulate a slow loading
      // experience. Please remove this if you copy and paste the code!
      await new Promise(resolve => setTimeout(resolve, 2000));
    } catch (e) {
      console.warn(e);
    } finally {
      // Tell the application to render
      setLoaded(true);
    }
  }