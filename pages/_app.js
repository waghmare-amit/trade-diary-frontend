import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import Sidebar from '../components/Sidebar';

const theme = createTheme({
  palette: {
    mode: 'light'
  }
});

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Sidebar />
      <div style={{ marginLeft: 240 }}>
        <Component {...pageProps} />
      </div>
    </ThemeProvider>
  );
}
