import {StyleSheet} from 'react-native'
import {scale, verticalScale} from './Responsive'

const CommonStyles = StyleSheet.create({
  centerItem: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  flex: {
    flex: 1
  },
  row: {
    flexDirection: 'row'
  },
  capitalize: {
    textTransform: 'capitalize'
  },
  mainContainer: {
    flex: 1,
    paddingHorizontal: scale(15),
    paddingVertical: verticalScale(15)
  }
})

export default CommonStyles
