import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles'

let theme = createMuiTheme({
  palette: {
    reds: {
      LightPink: { backgroundColor: '#FFE0E9' },
      HotPink: { backgroundColor: '#C42151' },
      Rouge: { backgroundColor: '#9A193E' },
      Velvet: { backgroundColor: '#570D22' }
    },
    blues: {
      LightBlue: { backgroundColor: '#C6ECFF' },
      Azure: { backgroundColor: '#12A5ED' },
      PeacockBlue: { backgroundColor: '#005D9F' },
      Twilight: { backgroundColor: '#0A3758' },
      TwilightLight: { backgroundColor: '#506A84' }
    },
    greens: {
      LightGreen: { backgroundColor: '#C9EDD9' },
      Green: { backgroundColor: '#3FCB7E' },
      Viridian: { backgroundColor: '#1D874D' }
    },
    yellows: {
      LightYellow: { backgroundColor: '#FCE4A3' },
      Sunflower: { backgroundColor: '#FFBF10' },
      BurntYellow: { backgroundColor: '#DDA02A' }
    },
    grayscale: {
      White: { backgroundColor: 'white' },
      OffWhite: { backgroundColor: '#F5F8FA' },
      LightGray: { backgroundColor: '#E1E8ED' },
      Gray: { backgroundColor: '#A1AEB8' },
      Black: { backgroundColor: '#333' }
    }
  },
  status: {
    danger: 'orange'
  }
})
theme = responsiveFontSizes(theme)

export default theme
