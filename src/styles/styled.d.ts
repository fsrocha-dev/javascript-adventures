import 'styled-components'
declare module 'styled-components' {
  export interface DefaultTheme {
    title: string,

    colors: {
      primary: string,
      secundary: string,

      purple: string,
  
      background: string,
      text: string,

      border: string,

      switchBg: string

      skeletonBase: string,
      skeletonHighlightColor: string
    }
  }
}