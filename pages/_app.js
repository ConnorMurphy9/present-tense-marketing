// `pages/_app.js`
import NavigationBar from '../components/NavigationBar';
import '../styles/globals.css';

function App({ Component, pageProps }) {
    return (
      <>
        <NavigationBar />
        <Component {...pageProps} />
      </>
    
    );
  }

  export default App;