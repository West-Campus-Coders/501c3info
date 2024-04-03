import { ThemeOptions } from '@mui/material/styles';

export const customtheme: ThemeOptions = {
  palette: {
    mode: 'dark',
    primary: {
      main: '#F1F1F0',
      contrastText: '#A8A29E',
      light: '#F1F1F0',
      dark: '#F1F1F0',
    },
    secondary: {
      main: '#e2b913',
    },
    background: {
      default: '#0c0a09',
      paper: '#0c0a09',
    },
    text: {
      primary: '#F1F1F0',
      secondary: '#E2B913',
      disabled: '#A8A29E',
      hint: '#E2B913',
    },
    divider: '#A8A29E',
    warning: {
      main: '#ed6c02',
    },
    error: {
      main: '#d32f2f',
    },
    info: {
      main: '#0c0a09',
    },
    success: {
      main: '#2e7d32',
    },
  },
};