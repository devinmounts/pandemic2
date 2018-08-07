let geoCordArray = [[64.1353, -21.8952]];

// "zoomLevel": 5,
// "scale": 0.5,
// "title": "Ottawa",
// "latitude": 45.4235,
// "longitude": -75.6979

// map.dataProvider.images.push(
//   {
//     "zoomLevel": 5,
//     "scale": 0.5,
//     "title": "Ottawa",
//     "latitude": 45.4235,
//     "longitude": -75.6979
//   }
// );
let imageObjectArray = [];

imageObjectArray.push(
  {
    "zoomLevel": 5,
    "scale": 0.5,
    "title": "Ottawa",
    "latitude": 45.4235,
    "longitude": -75.6979
  }
)

export var map = AmCharts.makeChart( "chartdiv", {
  "type": "map",
  "theme": "chalk",
  "projection": "miller",

  "imagesSettings": {
    "rollOverColor": "#089282",
    "rollOverScale": 3,
    "selectedScale": 3,
    "selectedColor": "#089282",
    "color": "#13564e"
  },

  "areasSettings": {
    "unlistedAreasColor": "#15A892"
  },
  "dataProvider": {
    "map": "worldLow",
    "images": imageObjectArray
  }
} );

// add events to recalculate map position when the map is moved or zoomed
map.addListener( "positionChanged", updateCustomMarkers );

// this function will take current images on the map and create HTML elements for them
function updateCustomMarkers( event ) {
  // get map object
  var map = event.chart;

  // go through all of the images
  for ( var x in map.dataProvider.images ) {
    // get MapImage object
    var image = map.dataProvider.images[ x ];

    // check if it has corresponding HTML element
    if ( 'undefined' == typeof image.externalElement )
      image.externalElement = createCustomMarker( image );

    // reposition the element accoridng to coordinates
    var xy = map.coordinatesToStageXY( image.longitude, image.latitude );
    image.externalElement.style.top = xy.y + 'px';
    image.externalElement.style.left = xy.x + 'px';
  }
}

// this function creates and returns a new marker element
function createCustomMarker( image ) {
  // create holder
  var holder = document.createElement( 'div' );
  holder.className = 'map-marker';
  holder.title = image.title;
  holder.style.position = 'absolute';

  // maybe add a link to it?
  if ( undefined != image.url ) {
    holder.onclick = function() {
      window.location.href = image.url;
    };
    holder.className += ' map-clickable';
  }

  // create dot
  var dot = document.createElement( 'div' );
  dot.className = 'dot';
  holder.appendChild( dot );

  // create pulse
  var pulse = document.createElement( 'div' );
  pulse.className = 'pulse';
  holder.appendChild( pulse );

  // append the marker to the map container
  image.chart.chartDiv.appendChild( holder );

  return holder;
}

  export function GetInfo() {
    // debugger;
    let latLngArray = [];
    let request = new XMLHttpRequest();
    let url = `https://node-data-generator.herokuapp.com/api/countries?n=1`;

     request.onreadystatechange = function() {
       if (this.readyState === 4 && this.status === 200) {
         let response = JSON.parse(this.responseText);
            // countryArray.push(response);
            // latLngArray.push();
            GetLatLong(response);
       }
     }

     request.open("GET", url, false);
     request.send();

     // return latLngArray;
     // imageObjectArray.push(
     //   {
     //     "zoomLevel": 5,
     //     "scale": 0.5,
     //     "title": "Pretoria",
     //     "latitude": latLngArray[0][0],
     //     "longitude": latLngArray[0][1]
     //   }
     // )
  }


export function GetLatLong(countryArray) {
  // let latLong = [];
  let country = countryArray[0];
  let request = new XMLHttpRequest();
  let url = `https://restcountries.eu/rest/v2/name/${country}?fullText=true`;

  request.onreadystatechange = function() {
    if (this.readyState === 4 && this.status === 200) {
      let response = JSON.parse(this.responseText);
      imageObjectArray.push(
        {
          "zoomLevel": 5,
          "scale": 0.5,
          "title": "Pretoria",
          "latitude": response[0].latlng[0],
          "longitude": response[0].latlng[1]
        });
    }
  }

  request.open("GET", url, true);
  request.send();
  // return latLong;
}
