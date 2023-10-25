import { Provider } from 'react-redux';
import { StyledEngineProvider } from '@mui/material';
import { store } from '@core/store';
import { ThemeProvider } from '@styles/theme';

export const Providers = ({ children }: { children: React.ReactNode }) => (
  <StyledEngineProvider injectFirst>
    <ThemeProvider>
      <Provider store={store}>{children}</Provider>
    </ThemeProvider>
  </StyledEngineProvider>
);