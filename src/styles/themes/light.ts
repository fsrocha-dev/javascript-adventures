import { lighten, shade } from 'polished'

export default {
  title: 'light',

  colors: {
    primary: '#f9f9f9',
    secundary: '#747474',

    purple: '#646cff',

    background: '#fff',
    text: '#213647',

    border: lighten(0.45, '#747474'),

    link: '#747474',
    linkHover: '#646cff',

    switchBg: '#f1f1f1',

    skeletonBase: '#f3f3f3',
    skeletonHighlightColor: '#f1f1f1'
  }
}