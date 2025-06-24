import {useAppStateContext} from '@/hooks'
import {APICall} from '@/network'
import {Screen, Utility} from '@/utils'
import {useNavigation} from '@react-navigation/native'
import {useEffect, useRef, useState} from 'react'

const useHomeScreen = () => {
  const selectedType = useRef<Number>(0)
  const navigation: any = useNavigation()
  const {startPoint, endPoint, setIsLoading} = useAppStateContext()
  const [startError, setStartError] = useState('')
  const [endError, setEndError] = useState('')

  const onPressField = (type: number) => {
    selectedType.current = type
    navigation.push(Screen.SearchScreen, {type: type})
  }

  const onConform = () => {
    if (!startPoint) {
      setStartError('Please Select Start Point')
      return
    }

    if (!endPoint) {
      setEndError('Please select EndPont')
      return
    }

    console.log('start', startPoint)

    const startLat = startPoint?.LATITUDE
    const startLng  = startPoint?.LONGITUDE
    const endLat = endPoint?.LATITUDE
    const endLng = endPoint?.LONGITUDE

    const url = `http://router.project-osrm.org/route/v1/driving/${startLng},${startLat};${endLng},${endLat}?overview=full&geometries=geojson`
    setIsLoading(true)
    APICall('get', url)
      .then((response: any) => {
        console.log('Response', response)
        if (response?.code === "Ok") {
          navigation.push(Screen.MapViewScreen, {mapData: response})
        }else{
          setEndError("Something went wrong please try again latter")
        }
      })
      .finally(() => {
        setIsLoading(false)
      })
  }

  useEffect(() => {
    if (startPoint) {
      setStartError('')
    }
    if (endPoint) {
      setEndError('')
    }
  }, [startPoint, endPoint])

  return {startPoint, endPoint, startError, endError, onPressField, onConform}
}

export default useHomeScreen
