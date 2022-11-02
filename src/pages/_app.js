/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/prop-types */
import Theme from '../styles/theme';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Theme>
        <Component {...pageProps} />
      </Theme>
    </>
  );
}