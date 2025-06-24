import {useEffect, useState} from 'react'
import _ from 'lodash'
import {APICall} from '@/network'
import {useNavigation, useRoute} from '@react-navigation/native'
import {useAppStateContext} from '@/hooks'

const INITIAL_STATE = {
  searchText: '',
  locationList: [],
  isLoading: false
}

const useSearchScreen = () => {
  const route: any = useRoute()
  const {setStartEndPoint} = useAppStateContext()
  const navigation: any = useNavigation()
  const {type} = route.params
  const [mainState, setMainState] = useState(INITIAL_STATE)

  console.log('route', route)

  const {searchText} = mainState

  const onSearchDelay = _.debounce(() => {
    getSearchResult()
  }, 1000)

  const setState = (obj: any) => {
    setMainState((prevState) => {
      return {...prevState, ...obj}
    })
  }

  const onChangeSearch = (text: string) => {
    setState({searchText: text})
  }

  const getSearchResult = () => {
    const url = `https://www.onemap.gov.sg/api/common/elastic/search?searchVal=${searchText}&returnGeom=Y&getAddrDetails=Y&pageNum=1`
   
    APICall('GET', url)
      .then((response: any) => {
        console.log('response', response)
        setState({
          locationList: response?.results
        })
      })
      .finally(() => {
        setState({isLoading: false})
      })
  }

  const onPresSelect = (item: any) => {
    setStartEndPoint(type, item)
    navigation.pop()
  }

  useEffect(() => {
    setState({isLoading: true})
    onSearchDelay()
  }, [searchText])

  return {
    mainState,
    onChangeSearch,
    onPresSelect
  }
}

export default useSearchScreen
