import React from 'react'
import {AppContainer, AppHeader} from '@/components'
import {useRoute} from '@react-navigation/native'
import {WebView} from 'react-native-webview'
import {View} from 'react-native'
import {CommonStyles} from '@/utils'

const MapViewScreen = () => {
  const route = useRoute()
  const {mapData}: any = route.params
  const coordinates = mapData?.routes?.[0]?.geometry?.coordinates || []

  // Convert coordinates to Leaflet's [lat, lng] format
  const leafletCoords = coordinates.map(([lng, lat]: [number, number]) => [lat, lng])

  // HTML for Leaflet map
  const html = `
    <!DOCTYPE html>
    <html>
    <head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <link rel="stylesheet" href="https://unpkg.com/leaflet/dist/leaflet.css" />
      <style>
        #map { height: 100vh; width: 100vw; }
        html, body { margin: 0; padding: 0; height: 100%; }
      </style>
    </head>
    <body>
      <div id="map"></div>
      <script src="https://unpkg.com/leaflet/dist/leaflet.js"></script>
      <script>
        var map = L.map('map').setView([${leafletCoords[0][0]}, ${leafletCoords[0][1]}], 14);
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
          maxZoom: 19,
        }).addTo(map);
        var polyline = L.polyline(${JSON.stringify(leafletCoords)}, {color: '#0F53FF'}).addTo(map);
        map.fitBounds(polyline.getBounds());
        L.marker([${leafletCoords[0][0]}, ${leafletCoords[0][1]}]).addTo(map).bindPopup('Start').openPopup();
        L.marker([${leafletCoords[leafletCoords.length - 1][0]}, ${leafletCoords[leafletCoords.length - 1][1]}]).addTo(map).bindPopup('End');
      </script>
    </body>
    </html>
  `

  return (
    <AppContainer>
      <AppHeader headerTitle={'Map View'} />
      <View style={CommonStyles.flex}>
        <WebView originWhitelist={['*']} source={{html}} style={{flex: 1}} />
      </View>
    </AppContainer>
  )
}

export default MapViewScreen
