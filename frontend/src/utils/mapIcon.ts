import Leaflet from 'leaflet';

import mapMarkerImg from '../images/happy-marker.svg';

const happyMapIcon = Leaflet.icon({
  iconUrl: mapMarkerImg,
  
  iconSize: [48, 58],
  iconAnchor: [24, 58],
  popupAnchor: [170, 2]
})

export default happyMapIcon;