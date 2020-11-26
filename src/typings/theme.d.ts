import 'styled-components';

import { Theme } from '../styles';

type theme = typeof Theme;

declare module 'styled-components' {
  export interface DefaultTheme extends theme {}
};
