import React from 'react'

import NeshanMap from 'react-neshan-map-leaflet';


function SimpleMap() {
  return (
      <NeshanMap
      options={{
          key: 'web.PPrZCZOfUsRDnQvy8H6YJrWoAaQV7UOI6yDRY70e',
          maptype: 'dreamy',
          poi: true,
          traffic: false,
          center: [35.715300, 51.419945],
          zoom: 13
      }}
      className={"testClass"}
      style= {{

        width: '605px',
        height: '490px',
        margin: 0,
        padding: 0,
        borderRadius: '10px',
        background: '#eee'
      }}

      onInit={(L, myMap) => {
          let marker = L.marker([35.715300, 51.419945])
          .addTo(myMap)
          .bindPopup('I am a popup.');

          myMap.on('click', function (e) {
          marker.setLatLng(e.latlng)
          });

          L.circle([35.715300, 51.419945], {
          color: 'blue',
          fillColor: 'blue',
          fillOpacity: 0.5,
          stroke: 'false',
          radius: 50
          }).addTo(myMap);
      }}
      />
  );
}

export default SimpleMap;

