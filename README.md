<!--
@page can-getfeatureinfo Home
@group can-getfeatureinfo.types Type Definitions
-->

# can-getfeatureinfo
A client data model for interacting with data from a wms using
the standard GetFeatureInfo request.

# Features
 - Retrieve geojson features from a WMS server like Geoserver

# Quick Start

```

#install can-getfeatureinfo
npm install can-getfeatureinfo --save
npm run export
```

## AMD

```javascript
require(['can-getfeatureinfo/dist/amd/index'], function(Factory){
  var State = Factory({
      name: 'state',
      url: 'http://localhost/geoserver/topp/wms'
  });

  State.getList({
      bbox: [-102.6123046875,27.2900390625,-93.7353515625,36.1669921875],
      projection: 'EPSG:4326',
      x: 50,
      y: 50,
      layers: ['topp:states']
  }).then(function(data) {
      console.log('features!', data);
  });
});
```

## Require JS

```javascript
var Factory = require('can-getfeatureinfo/dist/cjs/index');
var State = Factory({
    name: 'state',
    url: 'http://localhost/geoserver/topp/wms'
});

State.getList({
    bbox: [-102.6123046875,27.2900390625,-93.7353515625,36.1669921875],
    projection: 'EPSG:4326',
    x: 50,
    y: 50,
    layers: ['topp:states']
}).then(function(data) {
    console.log('features!', data);
});
```

## StealJS - ES6 Style Example

```javascript
import Factory from 'index';
import CanMap from 'can/map/';

let State = Factory({
    name: 'state',
    url: 'http://localhost/geoserver/topp/wms'
});

State.getList({
    bbox: [-102.6123046875,27.2900390625,-93.7353515625,36.1669921875],
    projection: 'EPSG:4326',
    x: 50,
    y: 50,
    layers: ['topp:states']
}).then(data => {
    console.log('features!', data);
});

# Running the tests

`npm run test`

Or open `test/index.html` in a browser

# Contributing

Contributions from anyone are welcome!
- Pull Requests
- Report Issues via the issue tracker on github
- Feedback and Code Reviews
