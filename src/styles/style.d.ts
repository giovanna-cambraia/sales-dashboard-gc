// styled.d.ts
import 'styled-components';
import type { Theme } from '@types'; // adjust path as needed

declare module 'styled-components' {
  export type DefaultTheme = Theme
}
