(function(){
    var script = {
 "gap": 10,
 "start": "this.init(); this.visibleComponentsIfPlayerFlagEnabled([this.IconButton_BDA317DD_B64E_7695_41E1_A3966D93CF78], 'cardboardAvailable'); this.syncPlaylists([this.ThumbnailList_B8F31EF2_B507_05E6_41DC_003580A7B45F_playlist,this.mainPlayList])",
 "paddingRight": 0,
 "verticalAlign": "top",
 "children": [
  "this.MainViewer",
  "this.ThumbnailList_B8F31EF2_B507_05E6_41DC_003580A7B45F",
  "this.Label_B9D7285E_B507_0CDF_41C5_6D8DABA5423E",
  "this.IconButton_BDA317DD_B64E_7695_41E1_A3966D93CF78"
 ],
 "paddingBottom": 0,
 "backgroundPreloadEnabled": true,
 "id": "rootPlayer",
 "desktopMipmappingEnabled": false,
 "width": "100%",
 "defaultVRPointer": "laser",
 "contentOpaque": false,
 "class": "Player",
 "borderRadius": 0,
 "definitions": [{
 "items": [
  {
   "media": "this.panorama_BD038DC1_B13C_E46D_41C7_A1DC0523682D",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_B8F31EF2_B507_05E6_41DC_003580A7B45F_playlist, 0, 1)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_BD038DC1_B13C_E46D_41C7_A1DC0523682D_camera"
  },
  {
   "media": "this.panorama_BC0616B4_B13D_242B_41E1_B619445622AF",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_B8F31EF2_B507_05E6_41DC_003580A7B45F_playlist, 1, 2)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_BC0616B4_B13D_242B_41E1_B619445622AF_camera"
  },
  {
   "media": "this.panorama_BDD1FB13_B13D_6DED_41BF_9F6E016AF6B5",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_B8F31EF2_B507_05E6_41DC_003580A7B45F_playlist, 2, 3)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_BDD1FB13_B13D_6DED_41BF_9F6E016AF6B5_camera"
  },
  {
   "media": "this.panorama_BA55D36A_B13C_FC3F_41C7_6B148F8F9DBA",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_B8F31EF2_B507_05E6_41DC_003580A7B45F_playlist, 3, 0)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_BA55D36A_B13C_FC3F_41C7_6B148F8F9DBA_camera"
  }
 ],
 "id": "ThumbnailList_B8F31EF2_B507_05E6_41DC_003580A7B45F_playlist",
 "class": "PlayList"
},
{
 "mouseControlMode": "drag_acceleration",
 "buttonCardboardView": "this.IconButton_BDA317DD_B64E_7695_41E1_A3966D93CF78",
 "gyroscopeVerticalDraggingEnabled": true,
 "touchControlMode": "drag_rotation",
 "id": "MainViewerPanoramaPlayer",
 "class": "PanoramaPlayer",
 "viewerArea": "this.MainViewer",
 "displayPlaybackBar": true
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_BDD1FB13_B13D_6DED_41BF_9F6E016AF6B5_camera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": -176.56,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_BB5E306D_B652_A9B5_41E1_8E8A5246EBFD",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": -177.27,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_BB536065_B652_A9B5_41D1_6C25EA901953",
 "automaticZoomSpeed": 10
},
{
 "label": "Panorama5",
 "id": "panorama_BC0616B4_B13D_242B_41E1_B619445622AF",
 "vfov": 180,
 "adjacentPanoramas": [
  {
   "backwardYaw": 29.77,
   "yaw": -60.83,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_BDD1FB13_B13D_6DED_41BF_9F6E016AF6B5"
  },
  {
   "backwardYaw": 2.73,
   "yaw": 5.79,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_BA55D36A_B13C_FC3F_41C7_6B148F8F9DBA"
  }
 ],
 "partial": false,
 "overlays": [
  "this.overlay_BE5790F4_B15F_1C2B_41D1_01CA330C928D",
  "this.overlay_A07E20EC_B15D_7C3B_41B4_C42C34CA9770",
  "this.overlay_A0537953_B15D_2C6D_41BE_D0EF2A7CA9D1",
  "this.overlay_BEEC1B7B_B15B_2C1D_41D4_178DDA07D278",
  "this.overlay_A30B495A_B155_2C1F_41C5_CA8D3C7F3B12",
  "this.overlay_BEE62945_B157_2C75_41D5_28E88B837B53"
 ],
 "thumbnailUrl": "media/panorama_BC0616B4_B13D_242B_41E1_B619445622AF_t.jpg",
 "hfovMax": 130,
 "pitch": 0,
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_BC0616B4_B13D_242B_41E1_B619445622AF_0/f/0/{row}_{column}.jpg",
      "colCount": 6,
      "rowCount": 6,
      "width": 3072,
      "class": "TiledImageResourceLevel",
      "height": 3072,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_BC0616B4_B13D_242B_41E1_B619445622AF_0/f/1/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_BC0616B4_B13D_242B_41E1_B619445622AF_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_BC0616B4_B13D_242B_41E1_B619445622AF_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_BC0616B4_B13D_242B_41E1_B619445622AF_0/u/0/{row}_{column}.jpg",
      "colCount": 6,
      "rowCount": 6,
      "width": 3072,
      "class": "TiledImageResourceLevel",
      "height": 3072,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_BC0616B4_B13D_242B_41E1_B619445622AF_0/u/1/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_BC0616B4_B13D_242B_41E1_B619445622AF_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_BC0616B4_B13D_242B_41E1_B619445622AF_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_BC0616B4_B13D_242B_41E1_B619445622AF_t.jpg",
   "back": {
    "levels": [
     {
      "url": "media/panorama_BC0616B4_B13D_242B_41E1_B619445622AF_0/b/0/{row}_{column}.jpg",
      "colCount": 6,
      "rowCount": 6,
      "width": 3072,
      "class": "TiledImageResourceLevel",
      "height": 3072,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_BC0616B4_B13D_242B_41E1_B619445622AF_0/b/1/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_BC0616B4_B13D_242B_41E1_B619445622AF_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_BC0616B4_B13D_242B_41E1_B619445622AF_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_BC0616B4_B13D_242B_41E1_B619445622AF_0/d/0/{row}_{column}.jpg",
      "colCount": 6,
      "rowCount": 6,
      "width": 3072,
      "class": "TiledImageResourceLevel",
      "height": 3072,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_BC0616B4_B13D_242B_41E1_B619445622AF_0/d/1/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_BC0616B4_B13D_242B_41E1_B619445622AF_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_BC0616B4_B13D_242B_41E1_B619445622AF_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_BC0616B4_B13D_242B_41E1_B619445622AF_0/l/0/{row}_{column}.jpg",
      "colCount": 6,
      "rowCount": 6,
      "width": 3072,
      "class": "TiledImageResourceLevel",
      "height": 3072,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_BC0616B4_B13D_242B_41E1_B619445622AF_0/l/1/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_BC0616B4_B13D_242B_41E1_B619445622AF_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_BC0616B4_B13D_242B_41E1_B619445622AF_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_BC0616B4_B13D_242B_41E1_B619445622AF_0/r/0/{row}_{column}.jpg",
      "colCount": 6,
      "rowCount": 6,
      "width": 3072,
      "class": "TiledImageResourceLevel",
      "height": 3072,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_BC0616B4_B13D_242B_41E1_B619445622AF_0/r/1/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_BC0616B4_B13D_242B_41E1_B619445622AF_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_BC0616B4_B13D_242B_41E1_B619445622AF_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "hfovMin": "120%",
 "class": "Panorama",
 "hfov": 360
},
{
 "initialPosition": {
  "yaw": -174.21,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_BB7D4092_B652_A96F_41C5_6C620813DF9F",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 12.77,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_BABF8055_B652_A995_41E1_E7B3BE4549F6",
 "automaticZoomSpeed": 10
},
{
 "label": "Panorama2_002",
 "id": "panorama_BDD1FB13_B13D_6DED_41BF_9F6E016AF6B5",
 "vfov": 180,
 "adjacentPanoramas": [
  {
   "backwardYaw": 3.44,
   "yaw": -167.23,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_BD038DC1_B13C_E46D_41C7_A1DC0523682D"
  },
  {
   "backwardYaw": -60.83,
   "yaw": 29.77,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_BC0616B4_B13D_242B_41E1_B619445622AF"
  },
  {
   "backwardYaw": -99.31,
   "yaw": -12.86,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_BA55D36A_B13C_FC3F_41C7_6B148F8F9DBA"
  }
 ],
 "partial": false,
 "overlays": [
  "this.overlay_A00C2DDB_B12D_241D_41CE_AC0131B1D5AB",
  "this.overlay_BE6B00C5_B12F_1C75_41C0_C3BF6F2EFCC4",
  "this.overlay_BE26AA5A_B12C_EC1F_41C7_984D943BCDCB",
  "this.overlay_BFDFA2AE_B12B_1C37_41E5_A1CC88382EEA",
  "this.overlay_BEBD36CB_B155_E47D_41E0_47FA2260A388"
 ],
 "thumbnailUrl": "media/panorama_BDD1FB13_B13D_6DED_41BF_9F6E016AF6B5_t.jpg",
 "hfovMax": 130,
 "pitch": 0,
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_BDD1FB13_B13D_6DED_41BF_9F6E016AF6B5_0/f/0/{row}_{column}.jpg",
      "colCount": 6,
      "rowCount": 6,
      "width": 3072,
      "class": "TiledImageResourceLevel",
      "height": 3072,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_BDD1FB13_B13D_6DED_41BF_9F6E016AF6B5_0/f/1/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_BDD1FB13_B13D_6DED_41BF_9F6E016AF6B5_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_BDD1FB13_B13D_6DED_41BF_9F6E016AF6B5_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_BDD1FB13_B13D_6DED_41BF_9F6E016AF6B5_0/u/0/{row}_{column}.jpg",
      "colCount": 6,
      "rowCount": 6,
      "width": 3072,
      "class": "TiledImageResourceLevel",
      "height": 3072,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_BDD1FB13_B13D_6DED_41BF_9F6E016AF6B5_0/u/1/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_BDD1FB13_B13D_6DED_41BF_9F6E016AF6B5_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_BDD1FB13_B13D_6DED_41BF_9F6E016AF6B5_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_BDD1FB13_B13D_6DED_41BF_9F6E016AF6B5_t.jpg",
   "back": {
    "levels": [
     {
      "url": "media/panorama_BDD1FB13_B13D_6DED_41BF_9F6E016AF6B5_0/b/0/{row}_{column}.jpg",
      "colCount": 6,
      "rowCount": 6,
      "width": 3072,
      "class": "TiledImageResourceLevel",
      "height": 3072,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_BDD1FB13_B13D_6DED_41BF_9F6E016AF6B5_0/b/1/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_BDD1FB13_B13D_6DED_41BF_9F6E016AF6B5_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_BDD1FB13_B13D_6DED_41BF_9F6E016AF6B5_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_BDD1FB13_B13D_6DED_41BF_9F6E016AF6B5_0/d/0/{row}_{column}.jpg",
      "colCount": 6,
      "rowCount": 6,
      "width": 3072,
      "class": "TiledImageResourceLevel",
      "height": 3072,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_BDD1FB13_B13D_6DED_41BF_9F6E016AF6B5_0/d/1/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_BDD1FB13_B13D_6DED_41BF_9F6E016AF6B5_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_BDD1FB13_B13D_6DED_41BF_9F6E016AF6B5_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_BDD1FB13_B13D_6DED_41BF_9F6E016AF6B5_0/l/0/{row}_{column}.jpg",
      "colCount": 6,
      "rowCount": 6,
      "width": 3072,
      "class": "TiledImageResourceLevel",
      "height": 3072,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_BDD1FB13_B13D_6DED_41BF_9F6E016AF6B5_0/l/1/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_BDD1FB13_B13D_6DED_41BF_9F6E016AF6B5_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_BDD1FB13_B13D_6DED_41BF_9F6E016AF6B5_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_BDD1FB13_B13D_6DED_41BF_9F6E016AF6B5_0/r/0/{row}_{column}.jpg",
      "colCount": 6,
      "rowCount": 6,
      "width": 3072,
      "class": "TiledImageResourceLevel",
      "height": 3072,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_BDD1FB13_B13D_6DED_41BF_9F6E016AF6B5_0/r/1/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_BDD1FB13_B13D_6DED_41BF_9F6E016AF6B5_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_BDD1FB13_B13D_6DED_41BF_9F6E016AF6B5_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "hfovMin": "120%",
 "class": "Panorama",
 "hfov": 360
},
{
 "initialPosition": {
  "yaw": -150.23,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_BAA9005D_B652_A995_41E4_62CF6D2C68DB",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_BC0616B4_B13D_242B_41E1_B619445622AF_camera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_BD038DC1_B13C_E46D_41C7_A1DC0523682D_camera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 80.69,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_BB731082_B652_A96F_41C5_B48BA534D768",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 119.17,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_BB487075_B652_A995_41E1_7A44E5A02508",
 "automaticZoomSpeed": 10
},
{
 "items": [
  {
   "media": "this.panorama_BD038DC1_B13C_E46D_41C7_A1DC0523682D",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_BD038DC1_B13C_E46D_41C7_A1DC0523682D_camera"
  },
  {
   "media": "this.panorama_BC0616B4_B13D_242B_41E1_B619445622AF",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_BC0616B4_B13D_242B_41E1_B619445622AF_camera"
  },
  {
   "media": "this.panorama_BDD1FB13_B13D_6DED_41BF_9F6E016AF6B5",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_BDD1FB13_B13D_6DED_41BF_9F6E016AF6B5_camera"
  },
  {
   "media": "this.panorama_BA55D36A_B13C_FC3F_41C7_6B148F8F9DBA",
   "end": "this.trigger('tourEnded')",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 0)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_BA55D36A_B13C_FC3F_41C7_6B148F8F9DBA_camera"
  }
 ],
 "id": "mainPlayList",
 "class": "PlayList"
},
{
 "label": "Panorama1_001",
 "id": "panorama_BD038DC1_B13C_E46D_41C7_A1DC0523682D",
 "vfov": 180,
 "adjacentPanoramas": [
  {
   "backwardYaw": -167.23,
   "yaw": 3.44,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_BDD1FB13_B13D_6DED_41BF_9F6E016AF6B5"
  }
 ],
 "partial": false,
 "overlays": [
  "this.overlay_A138C4DC_B135_641B_41E4_31395CF87B2F"
 ],
 "thumbnailUrl": "media/panorama_BD038DC1_B13C_E46D_41C7_A1DC0523682D_t.jpg",
 "hfovMax": 130,
 "pitch": 0,
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_BD038DC1_B13C_E46D_41C7_A1DC0523682D_0/f/0/{row}_{column}.jpg",
      "colCount": 6,
      "rowCount": 6,
      "width": 3072,
      "class": "TiledImageResourceLevel",
      "height": 3072,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_BD038DC1_B13C_E46D_41C7_A1DC0523682D_0/f/1/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_BD038DC1_B13C_E46D_41C7_A1DC0523682D_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_BD038DC1_B13C_E46D_41C7_A1DC0523682D_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_BD038DC1_B13C_E46D_41C7_A1DC0523682D_0/u/0/{row}_{column}.jpg",
      "colCount": 6,
      "rowCount": 6,
      "width": 3072,
      "class": "TiledImageResourceLevel",
      "height": 3072,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_BD038DC1_B13C_E46D_41C7_A1DC0523682D_0/u/1/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_BD038DC1_B13C_E46D_41C7_A1DC0523682D_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_BD038DC1_B13C_E46D_41C7_A1DC0523682D_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_BD038DC1_B13C_E46D_41C7_A1DC0523682D_t.jpg",
   "back": {
    "levels": [
     {
      "url": "media/panorama_BD038DC1_B13C_E46D_41C7_A1DC0523682D_0/b/0/{row}_{column}.jpg",
      "colCount": 6,
      "rowCount": 6,
      "width": 3072,
      "class": "TiledImageResourceLevel",
      "height": 3072,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_BD038DC1_B13C_E46D_41C7_A1DC0523682D_0/b/1/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_BD038DC1_B13C_E46D_41C7_A1DC0523682D_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_BD038DC1_B13C_E46D_41C7_A1DC0523682D_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_BD038DC1_B13C_E46D_41C7_A1DC0523682D_0/d/0/{row}_{column}.jpg",
      "colCount": 6,
      "rowCount": 6,
      "width": 3072,
      "class": "TiledImageResourceLevel",
      "height": 3072,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_BD038DC1_B13C_E46D_41C7_A1DC0523682D_0/d/1/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_BD038DC1_B13C_E46D_41C7_A1DC0523682D_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_BD038DC1_B13C_E46D_41C7_A1DC0523682D_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_BD038DC1_B13C_E46D_41C7_A1DC0523682D_0/l/0/{row}_{column}.jpg",
      "colCount": 6,
      "rowCount": 6,
      "width": 3072,
      "class": "TiledImageResourceLevel",
      "height": 3072,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_BD038DC1_B13C_E46D_41C7_A1DC0523682D_0/l/1/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_BD038DC1_B13C_E46D_41C7_A1DC0523682D_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_BD038DC1_B13C_E46D_41C7_A1DC0523682D_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_BD038DC1_B13C_E46D_41C7_A1DC0523682D_0/r/0/{row}_{column}.jpg",
      "colCount": 6,
      "rowCount": 6,
      "width": 3072,
      "class": "TiledImageResourceLevel",
      "height": 3072,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_BD038DC1_B13C_E46D_41C7_A1DC0523682D_0/r/1/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_BD038DC1_B13C_E46D_41C7_A1DC0523682D_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_BD038DC1_B13C_E46D_41C7_A1DC0523682D_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "hfovMin": "120%",
 "class": "Panorama",
 "hfov": 360
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_BA55D36A_B13C_FC3F_41C7_6B148F8F9DBA_camera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 167.14,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_BB68C0A1_B652_AAAA_41D8_28417F75DA30",
 "automaticZoomSpeed": 10
},
{
 "label": "Panorama3_000",
 "id": "panorama_BA55D36A_B13C_FC3F_41C7_6B148F8F9DBA",
 "vfov": 180,
 "adjacentPanoramas": [
  {
   "backwardYaw": 5.79,
   "yaw": 2.73,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_BC0616B4_B13D_242B_41E1_B619445622AF"
  },
  {
   "backwardYaw": -12.86,
   "yaw": -99.31,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_BDD1FB13_B13D_6DED_41BF_9F6E016AF6B5"
  }
 ],
 "partial": false,
 "overlays": [
  "this.overlay_A2C59439_B15B_241D_41E2_C4980BE28A83",
  "this.overlay_A332AC0D_B15D_2BF5_41C7_84DC67156ACC",
  "this.overlay_A372BAB5_B15C_EC15_41D8_D7B8A2122376"
 ],
 "thumbnailUrl": "media/panorama_BA55D36A_B13C_FC3F_41C7_6B148F8F9DBA_t.jpg",
 "hfovMax": 130,
 "pitch": 0,
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_BA55D36A_B13C_FC3F_41C7_6B148F8F9DBA_0/f/0/{row}_{column}.jpg",
      "colCount": 6,
      "rowCount": 6,
      "width": 3072,
      "class": "TiledImageResourceLevel",
      "height": 3072,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_BA55D36A_B13C_FC3F_41C7_6B148F8F9DBA_0/f/1/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_BA55D36A_B13C_FC3F_41C7_6B148F8F9DBA_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_BA55D36A_B13C_FC3F_41C7_6B148F8F9DBA_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_BA55D36A_B13C_FC3F_41C7_6B148F8F9DBA_0/u/0/{row}_{column}.jpg",
      "colCount": 6,
      "rowCount": 6,
      "width": 3072,
      "class": "TiledImageResourceLevel",
      "height": 3072,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_BA55D36A_B13C_FC3F_41C7_6B148F8F9DBA_0/u/1/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_BA55D36A_B13C_FC3F_41C7_6B148F8F9DBA_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_BA55D36A_B13C_FC3F_41C7_6B148F8F9DBA_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_BA55D36A_B13C_FC3F_41C7_6B148F8F9DBA_t.jpg",
   "back": {
    "levels": [
     {
      "url": "media/panorama_BA55D36A_B13C_FC3F_41C7_6B148F8F9DBA_0/b/0/{row}_{column}.jpg",
      "colCount": 6,
      "rowCount": 6,
      "width": 3072,
      "class": "TiledImageResourceLevel",
      "height": 3072,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_BA55D36A_B13C_FC3F_41C7_6B148F8F9DBA_0/b/1/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_BA55D36A_B13C_FC3F_41C7_6B148F8F9DBA_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_BA55D36A_B13C_FC3F_41C7_6B148F8F9DBA_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_BA55D36A_B13C_FC3F_41C7_6B148F8F9DBA_0/d/0/{row}_{column}.jpg",
      "colCount": 6,
      "rowCount": 6,
      "width": 3072,
      "class": "TiledImageResourceLevel",
      "height": 3072,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_BA55D36A_B13C_FC3F_41C7_6B148F8F9DBA_0/d/1/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_BA55D36A_B13C_FC3F_41C7_6B148F8F9DBA_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_BA55D36A_B13C_FC3F_41C7_6B148F8F9DBA_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_BA55D36A_B13C_FC3F_41C7_6B148F8F9DBA_0/l/0/{row}_{column}.jpg",
      "colCount": 6,
      "rowCount": 6,
      "width": 3072,
      "class": "TiledImageResourceLevel",
      "height": 3072,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_BA55D36A_B13C_FC3F_41C7_6B148F8F9DBA_0/l/1/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_BA55D36A_B13C_FC3F_41C7_6B148F8F9DBA_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_BA55D36A_B13C_FC3F_41C7_6B148F8F9DBA_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_BA55D36A_B13C_FC3F_41C7_6B148F8F9DBA_0/r/0/{row}_{column}.jpg",
      "colCount": 6,
      "rowCount": 6,
      "width": 3072,
      "class": "TiledImageResourceLevel",
      "height": 3072,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_BA55D36A_B13C_FC3F_41C7_6B148F8F9DBA_0/r/1/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_BA55D36A_B13C_FC3F_41C7_6B148F8F9DBA_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_BA55D36A_B13C_FC3F_41C7_6B148F8F9DBA_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "hfovMin": "120%",
 "class": "Panorama",
 "hfov": 360
},
{
 "playbackBarHeadShadowColor": "#000000",
 "toolTipShadowVerticalLength": 0,
 "paddingBottom": 0,
 "id": "MainViewer",
 "playbackBarBorderRadius": 0,
 "transitionDuration": 500,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "width": "100%",
 "class": "ViewerArea",
 "progressRight": 0,
 "borderRadius": 0,
 "toolTipPaddingLeft": 6,
 "playbackBarHeadBorderColor": "#000000",
 "progressOpacity": 1,
 "playbackBarHeadBorderRadius": 0,
 "toolTipTextShadowColor": "#000000",
 "playbackBarHeadBorderSize": 0,
 "vrPointerSelectionColor": "#FF6600",
 "paddingLeft": 0,
 "transitionMode": "blending",
 "playbackBarHeadShadowVerticalLength": 0,
 "progressBarBackgroundColorDirection": "vertical",
 "toolTipShadowColor": "#333333",
 "toolTipShadowOpacity": 1,
 "progressBackgroundColorDirection": "vertical",
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "borderSize": 0,
 "playbackBarHeadShadow": true,
 "progressBackgroundColorRatios": [
  0
 ],
 "vrPointerSelectionTime": 2000,
 "height": "100%",
 "toolTipShadowBlurRadius": 3,
 "firstTransitionDuration": 0,
 "toolTipTextShadowBlurRadius": 3,
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBorderColor": "#000000",
 "progressHeight": 10,
 "progressBottom": 0,
 "playbackBarBottom": 5,
 "playbackBarOpacity": 1,
 "toolTipBorderColor": "#767676",
 "playbackBarLeft": 0,
 "progressBorderColor": "#000000",
 "paddingRight": 0,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "toolTipFontColor": "#606060",
 "toolTipPaddingTop": 4,
 "playbackBarHeadHeight": 15,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "progressBarOpacity": 1,
 "toolTipBorderSize": 1,
 "vrPointerColor": "#FFFFFF",
 "progressBorderSize": 0,
 "toolTipFontStyle": "normal",
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "progressLeft": 0,
 "toolTipShadowSpread": 0,
 "playbackBarProgressOpacity": 1,
 "playbackBarBorderSize": 0,
 "toolTipFontFamily": "Arial",
 "playbackBarBackgroundOpacity": 1,
 "toolTipShadowHorizontalLength": 0,
 "playbackBarHeight": 10,
 "progressBorderRadius": 0,
 "playbackBarBackgroundColorDirection": "vertical",
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "playbackBarHeadWidth": 6,
 "toolTipFontSize": "1.11vmin",
 "playbackBarHeadShadowOpacity": 0.7,
 "playbackBarHeadShadowHorizontalLength": 0,
 "minHeight": 50,
 "toolTipOpacity": 1,
 "playbackBarBorderColor": "#FFFFFF",
 "shadow": false,
 "playbackBarProgressBorderSize": 0,
 "progressBarBorderColor": "#000000",
 "playbackBarRight": 0,
 "minWidth": 100,
 "paddingTop": 0,
 "displayTooltipInTouchScreens": true,
 "toolTipBorderRadius": 3,
 "progressBarBorderSize": 0,
 "playbackBarProgressBorderRadius": 0,
 "toolTipBackgroundColor": "#F6F6F6",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "playbackBarHeadOpacity": 1,
 "toolTipPaddingRight": 6,
 "toolTipTextShadowOpacity": 0,
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "progressBarBorderRadius": 0,
 "toolTipFontWeight": "normal",
 "playbackBarHeadShadowBlurRadius": 3,
 "toolTipDisplayTime": 600,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Main Viewer"
 },
 "propagateClick": false,
 "toolTipPaddingBottom": 4
},
{
 "verticalAlign": "top",
 "paddingBottom": 10,
 "id": "ThumbnailList_B8F31EF2_B507_05E6_41DC_003580A7B45F",
 "left": "0.8%",
 "width": "41.209%",
 "itemThumbnailScaleMode": "fit_outside",
 "itemThumbnailWidth": 75,
 "class": "ThumbnailList",
 "itemPaddingLeft": 3,
 "borderRadius": 5,
 "itemThumbnailShadowVerticalLength": 3,
 "scrollBarWidth": 10,
 "paddingLeft": 20,
 "itemBackgroundColorRatios": [],
 "itemPaddingTop": 3,
 "itemPaddingRight": 3,
 "itemBackgroundColor": [],
 "itemThumbnailShadowSpread": 1,
 "height": 115.1,
 "selectedItemLabelFontColor": "#FFCC00",
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "itemThumbnailShadow": true,
 "backgroundColor": [
  "#000000"
 ],
 "itemThumbnailShadowColor": "#000000",
 "itemThumbnailOpacity": 1,
 "itemThumbnailShadowOpacity": 0.54,
 "itemLabelFontColor": "#FFFFFF",
 "scrollBarVisible": "rollOver",
 "itemLabelPosition": "bottom",
 "rollOverItemLabelFontWeight": "normal",
 "itemLabelGap": 9,
 "layout": "horizontal",
 "itemThumbnailShadowHorizontalLength": 3,
 "itemOpacity": 1,
 "paddingRight": 20,
 "itemBackgroundColorDirection": "vertical",
 "itemThumbnailBorderRadius": 50,
 "itemMode": "normal",
 "itemLabelFontWeight": "normal",
 "backgroundColorDirection": "vertical",
 "itemHorizontalAlign": "center",
 "selectedItemLabelFontWeight": "bold",
 "playList": "this.ThumbnailList_B8F31EF2_B507_05E6_41DC_003580A7B45F_playlist",
 "itemBackgroundOpacity": 0,
 "itemThumbnailShadowBlurRadius": 8,
 "bottom": "0.83%",
 "itemLabelFontSize": 14,
 "minHeight": 20,
 "itemPaddingBottom": 3,
 "shadow": false,
 "minWidth": 20,
 "scrollBarMargin": 2,
 "itemLabelTextDecoration": "none",
 "itemLabelFontFamily": "Arial",
 "paddingTop": 10,
 "rollOverItemBackgroundOpacity": 0,
 "itemThumbnailHeight": 75,
 "backgroundColorRatios": [
  0
 ],
 "horizontalAlign": "left",
 "scrollBarColor": "#FFFFFF",
 "itemBorderRadius": 0,
 "backgroundOpacity": 0.24,
 "itemLabelFontStyle": "normal",
 "gap": 10,
 "itemLabelHorizontalAlign": "center",
 "data": {
  "name": "ThumbnailList35762"
 },
 "propagateClick": false,
 "itemVerticalAlign": "middle"
},
{
 "fontFamily": "Arial",
 "paddingRight": 0,
 "verticalAlign": "middle",
 "data": {
  "name": "Label2317"
 },
 "paddingBottom": 0,
 "height": "4.292%",
 "id": "Label_B9D7285E_B507_0CDF_41C5_6D8DABA5423E",
 "backgroundColorDirection": "vertical",
 "width": "8.885%",
 "fontColor": "#000000",
 "right": "1.65%",
 "class": "Label",
 "borderRadius": 0,
 "text": "Monet's Water Lilies",
 "paddingLeft": 0,
 "top": "2.75%",
 "minHeight": 1,
 "shadow": false,
 "backgroundColor": [],
 "borderSize": 0,
 "minWidth": 1,
 "paddingTop": 0,
 "fontStyle": "normal",
 "backgroundColorRatios": [],
 "horizontalAlign": "center",
 "backgroundOpacity": 0.4,
 "fontSize": "1.48vmin",
 "textDecoration": "none",
 "propagateClick": false,
 "fontWeight": "bold"
},
{
 "cursor": "hand",
 "paddingRight": 0,
 "verticalAlign": "middle",
 "paddingBottom": 0,
 "id": "IconButton_BDA317DD_B64E_7695_41E1_A3966D93CF78",
 "left": "1.68%",
 "transparencyActive": false,
 "maxHeight": 56,
 "maxWidth": 56,
 "width": 56,
 "iconURL": "skin/IconButton_BDA317DD_B64E_7695_41E1_A3966D93CF78.png",
 "class": "IconButton",
 "borderRadius": 0,
 "paddingLeft": 0,
 "minHeight": 1,
 "bottom": "19.89%",
 "mode": "push",
 "shadow": false,
 "height": 56,
 "borderSize": 0,
 "minWidth": 1,
 "paddingTop": 0,
 "horizontalAlign": "center",
 "backgroundOpacity": 0,
 "propagateClick": false,
 "data": {
  "name": "IconButton14318"
 }
},
{
 "maps": [
  {
   "hfov": 12.51,
   "yaw": -174.01,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_BC0616B4_B13D_242B_41E1_B619445622AF_1_HS_0_1_0_map.gif",
      "width": 99,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -2.65
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.openLink('https://www.musee-orangerie.fr/fr/collection/les-nympheas-de-claude-monet', '_blank')",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_BE5790F4_B15F_1C2B_41D1_01CA330C928D",
 "data": {
  "label": "Polygon"
 }
},
{
 "maps": [
  {
   "hfov": 84.07,
   "yaw": 137.13,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_BC0616B4_B13D_242B_41E1_B619445622AF_1_HS_1_1_0_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 59
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -1.27
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.openLink('https://www.musee-orangerie.fr/fr/collection/les-nympheas-de-claude-monet', '_blank')",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_A07E20EC_B15D_7C3B_41B4_C42C34CA9770",
 "data": {
  "label": "Polygon"
 }
},
{
 "maps": [
  {
   "hfov": 8.17,
   "yaw": 32.44,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_BC0616B4_B13D_242B_41E1_B619445622AF_0_HS_2_0_0_map.gif",
      "width": 17,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -39.72
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": 32.44,
   "hfov": 8.17,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_BC0616B4_B13D_242B_41E1_B619445622AF_0_HS_2_0.png",
      "width": 241,
      "class": "ImageResourceLevel",
      "height": 219
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -39.72,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.openLink('files/file_A0C36FF2_B155_242F_41DC_3FFA763D929A.pdf', '_blank')",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_A0537953_B15D_2C6D_41BE_D0EF2A7CA9D1",
 "data": {
  "label": "Image"
 }
},
{
 "maps": [
  {
   "hfov": 9.41,
   "yaw": -22.23,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_BC0616B4_B13D_242B_41E1_B619445622AF_0_HS_3_0_0_map.gif",
      "width": 20,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 20.89
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": -22.23,
   "hfov": 9.41,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_BC0616B4_B13D_242B_41E1_B619445622AF_0_HS_3_0.png",
      "width": 229,
      "class": "ImageResourceLevel",
      "height": 179
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 20.89,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.openLink('files/file_A0C33FF3_B155_242D_41E1_3EBD8D7E31B7.pdf', '_blank')",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_BEEC1B7B_B15B_2C1D_41D4_178DDA07D278",
 "data": {
  "label": "Image"
 }
},
{
 "maps": [
  {
   "hfov": 17,
   "yaw": 5.79,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_BC0616B4_B13D_242B_41E1_B619445622AF_0_HS_4_0_0_map.gif",
      "width": 34,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -22.22
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "image": "this.AnimatedImageResource_A3A92A37_B16D_2C15_41CA_5DDC1A2B41E4",
   "pitch": -22.22,
   "yaw": 5.79,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 17,
   "distance": 100
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_BA55D36A_B13C_FC3F_41C7_6B148F8F9DBA, this.camera_BB536065_B652_A9B5_41D1_6C25EA901953); this.mainPlayList.set('selectedIndex', 3)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_A30B495A_B155_2C1F_41C5_CA8D3C7F3B12",
 "data": {
  "label": "Arrow 05c"
 }
},
{
 "maps": [
  {
   "hfov": 15.16,
   "yaw": -60.83,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_BC0616B4_B13D_242B_41E1_B619445622AF_0_HS_5_0_0_map.gif",
      "width": 34,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -20.33
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "image": "this.AnimatedImageResource_A3A99A37_B16D_2C15_41B5_590791CF5C2E",
   "pitch": -20.33,
   "yaw": -60.83,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 15.16,
   "distance": 100
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_BDD1FB13_B13D_6DED_41BF_9F6E016AF6B5, this.camera_BAA9005D_B652_A995_41E4_62CF6D2C68DB); this.mainPlayList.set('selectedIndex', 2)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_BEE62945_B157_2C75_41D5_28E88B837B53",
 "data": {
  "label": "Arrow 05c"
 }
},
{
 "maps": [
  {
   "hfov": 16.81,
   "yaw": 29.77,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_BDD1FB13_B13D_6DED_41BF_9F6E016AF6B5_0_HS_0_0_0_map.gif",
      "width": 34,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -19.03
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "image": "this.AnimatedImageResource_A3A9AA37_B16D_2C15_41E1_1AD0B4610418",
   "pitch": -19.03,
   "yaw": 29.77,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 16.81,
   "distance": 100
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_BC0616B4_B13D_242B_41E1_B619445622AF, this.camera_BB487075_B652_A995_41E1_7A44E5A02508); this.mainPlayList.set('selectedIndex', 1)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_A00C2DDB_B12D_241D_41CE_AC0131B1D5AB",
 "data": {
  "label": "Arrow 05c"
 }
},
{
 "maps": [
  {
   "hfov": 18.96,
   "yaw": -12.86,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_BDD1FB13_B13D_6DED_41BF_9F6E016AF6B5_0_HS_1_0_0_map.gif",
      "width": 34,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -15.13
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "image": "this.AnimatedImageResource_A3A81A37_B16D_2C15_41DF_206CAB8D363E",
   "pitch": -15.13,
   "yaw": -12.86,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 18.96,
   "distance": 100
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_BA55D36A_B13C_FC3F_41C7_6B148F8F9DBA, this.camera_BB731082_B652_A96F_41C5_B48BA534D768); this.mainPlayList.set('selectedIndex', 3)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_BE6B00C5_B12F_1C75_41C0_C3BF6F2EFCC4",
 "data": {
  "label": "Arrow 05c"
 }
},
{
 "maps": [
  {
   "hfov": 90,
   "yaw": 90,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_BDD1FB13_B13D_6DED_41BF_9F6E016AF6B5_1_HS_2_1_1_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0
  },
  {
   "hfov": 90,
   "yaw": -180,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_BDD1FB13_B13D_6DED_41BF_9F6E016AF6B5_1_HS_2_2_2_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0
  },
  {
   "hfov": 90,
   "yaw": 0,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_BDD1FB13_B13D_6DED_41BF_9F6E016AF6B5_1_HS_2_3_5_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -90
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.openLink('https://www.musee-orangerie.fr/fr/oeuvres/le-matin-clair-aux-saules-196308', '_blank')",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_BE26AA5A_B12C_EC1F_41C7_984D943BCDCB",
 "data": {
  "label": "Polygon"
 }
},
{
 "maps": [
  {
   "hfov": 54.65,
   "yaw": -126.76,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_BDD1FB13_B13D_6DED_41BF_9F6E016AF6B5_1_HS_3_1_6_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 125
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -0.35
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.openLink('https://www.musee-orangerie.fr/fr/collection/les-nympheas-de-claude-monet', '_blank')",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_BFDFA2AE_B12B_1C37_41E5_A1CC88382EEA",
 "data": {
  "label": "Polygon"
 }
},
{
 "maps": [
  {
   "hfov": 17.56,
   "yaw": -167.23,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_BDD1FB13_B13D_6DED_41BF_9F6E016AF6B5_0_HS_4_0_0_map.gif",
      "width": 19,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -4.83
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": -167.23,
   "hfov": 17.56,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_BDD1FB13_B13D_6DED_41BF_9F6E016AF6B5_0_HS_4_0.png",
      "width": 400,
      "class": "ImageResourceLevel",
      "height": 336
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -4.83,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_BD038DC1_B13C_E46D_41C7_A1DC0523682D, this.camera_BB5E306D_B652_A9B5_41E1_8E8A5246EBFD); this.mainPlayList.set('selectedIndex', 0)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_BEBD36CB_B155_E47D_41E0_47FA2260A388",
 "data": {
  "label": "Image"
 }
},
{
 "maps": [
  {
   "hfov": 10.96,
   "yaw": 3.44,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_BD038DC1_B13C_E46D_41C7_A1DC0523682D_0_HS_0_0_0_map.gif",
      "width": 24,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -24.35
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "image": "this.AnimatedImageResource_A3ABBA36_B16D_2C17_41D1_722D9E02B0FD",
   "pitch": -24.35,
   "yaw": 3.44,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 10.96,
   "distance": 50
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_BDD1FB13_B13D_6DED_41BF_9F6E016AF6B5, this.camera_BABF8055_B652_A995_41E1_E7B3BE4549F6); this.mainPlayList.set('selectedIndex', 2)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_A138C4DC_B135_641B_41E4_31395CF87B2F",
 "data": {
  "label": "Arrow 05a Left-Up"
 }
},
{
 "maps": [
  {
   "hfov": 11.88,
   "yaw": -36.22,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_BA55D36A_B13C_FC3F_41C7_6B148F8F9DBA_0_HS_0_0_0_map.gif",
      "width": 20,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -3.54
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": -36.22,
   "hfov": 11.88,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_BA55D36A_B13C_FC3F_41C7_6B148F8F9DBA_0_HS_0_0.png",
      "width": 270,
      "class": "ImageResourceLevel",
      "height": 211
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -3.54,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.openLink('files/file_A0C22FF3_B155_242D_41B0_DBDB62E19B09.pdf', '_blank')",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_A2C59439_B15B_241D_41E2_C4980BE28A83",
 "data": {
  "label": "Image"
 }
},
{
 "maps": [
  {
   "hfov": 16.96,
   "yaw": 2.73,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_BA55D36A_B13C_FC3F_41C7_6B148F8F9DBA_0_HS_1_0_0_map.gif",
      "width": 34,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -13.42
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "image": "this.AnimatedImageResource_A3AF1A38_B16D_2C1B_41E1_39C52DB0C7D9",
   "pitch": -13.42,
   "yaw": 2.73,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 16.96,
   "distance": 100
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_BC0616B4_B13D_242B_41E1_B619445622AF, this.camera_BB7D4092_B652_A96F_41C5_6C620813DF9F); this.mainPlayList.set('selectedIndex', 1)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_A332AC0D_B15D_2BF5_41C7_84DC67156ACC",
 "data": {
  "label": "Arrow 05c"
 }
},
{
 "maps": [
  {
   "hfov": 17.02,
   "yaw": -99.31,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_BA55D36A_B13C_FC3F_41C7_6B148F8F9DBA_0_HS_2_0_0_map.gif",
      "width": 57,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -34.02
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "image": "this.AnimatedImageResource_A3AFCA38_B16D_2C1B_41E6_05005018D86A",
   "pitch": -34.02,
   "yaw": -99.31,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 17.02,
   "distance": 50
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_BDD1FB13_B13D_6DED_41BF_9F6E016AF6B5, this.camera_BB68C0A1_B652_AAAA_41D8_28417F75DA30); this.mainPlayList.set('selectedIndex', 2)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_A372BAB5_B15C_EC15_41D8_D7B8A2122376",
 "data": {
  "label": "Arrow 05c Left"
 }
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_BC0616B4_B13D_242B_41E1_B619445622AF_0_HS_4_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 330
  }
 ],
 "id": "AnimatedImageResource_A3A92A37_B16D_2C15_41CA_5DDC1A2B41E4",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_BC0616B4_B13D_242B_41E1_B619445622AF_0_HS_5_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 330
  }
 ],
 "id": "AnimatedImageResource_A3A99A37_B16D_2C15_41B5_590791CF5C2E",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_BDD1FB13_B13D_6DED_41BF_9F6E016AF6B5_0_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 330
  }
 ],
 "id": "AnimatedImageResource_A3A9AA37_B16D_2C15_41E1_1AD0B4610418",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_BDD1FB13_B13D_6DED_41BF_9F6E016AF6B5_0_HS_1_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 330
  }
 ],
 "id": "AnimatedImageResource_A3A81A37_B16D_2C15_41DF_206CAB8D363E",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_BD038DC1_B13C_E46D_41C7_A1DC0523682D_0_HS_0_0.png",
   "width": 560,
   "class": "ImageResourceLevel",
   "height": 540
  }
 ],
 "id": "AnimatedImageResource_A3ABBA36_B16D_2C17_41D1_722D9E02B0FD",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_BA55D36A_B13C_FC3F_41C7_6B148F8F9DBA_0_HS_1_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 330
  }
 ],
 "id": "AnimatedImageResource_A3AF1A38_B16D_2C1B_41E1_39C52DB0C7D9",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_BA55D36A_B13C_FC3F_41C7_6B148F8F9DBA_0_HS_2_0.png",
   "width": 720,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_A3AFCA38_B16D_2C1B_41E6_05005018D86A",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41
}],
 "scrollBarWidth": 10,
 "vrPolyfillScale": 0.5,
 "mobileMipmappingEnabled": false,
 "paddingLeft": 0,
 "minHeight": 20,
 "scrollBarMargin": 2,
 "shadow": false,
 "borderSize": 0,
 "minWidth": 20,
 "paddingTop": 0,
 "height": "100%",
 "scrollBarOpacity": 0.5,
 "horizontalAlign": "left",
 "overflow": "visible",
 "scrollBarColor": "#000000",
 "layout": "absolute",
 "scrollBarVisible": "rollOver",
 "scripts": {
  "stopAndGoCamera": function(camera, ms){  var sequence = camera.get('initialSequence'); sequence.pause(); var timeoutFunction = function(){ sequence.play(); }; setTimeout(timeoutFunction, ms); },
  "existsKey": function(key){  return key in window; },
  "historyGoForward": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.forward(); } },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, stopAudios){  var self = this; var closeFunction = function(){ playList.set('selectedIndex', -1); self.MainViewer.set('toolTipEnabled', true); if(stopAudios) { self.resumeGlobalAudios(); } this.resumePlayers(playersPaused, !stopAudios); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var getWinValue = function(property){ return w.get(property) || 0; }; var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = self.getMediaWidth(media); var mediaHeight = self.getMediaHeight(media); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = getWinValue('footerHeight'); var headerHeight = getWinValue('headerHeight'); if(!headerHeight) { var closeButtonHeight = getWinValue('closeButtonIconHeight') + getWinValue('closeButtonPaddingTop') + getWinValue('closeButtonPaddingBottom'); var titleHeight = self.getPixels(getWinValue('titleFontSize')) + getWinValue('titlePaddingTop') + getWinValue('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += getWinValue('headerPaddingTop') + getWinValue('headerPaddingBottom'); } var contentWindowWidth = windowWidth - getWinValue('bodyPaddingLeft') - getWinValue('bodyPaddingRight') - getWinValue('paddingLeft') - getWinValue('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - getWinValue('bodyPaddingTop') - getWinValue('bodyPaddingBottom') - getWinValue('paddingTop') - getWinValue('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + getWinValue('bodyPaddingLeft') + getWinValue('bodyPaddingRight') + getWinValue('paddingLeft') + getWinValue('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + getWinValue('bodyPaddingTop') + getWinValue('bodyPaddingBottom') + getWinValue('paddingTop') + getWinValue('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - getWinValue('actualWidth')) * 0.5); w.set('y', (parentHeight - getWinValue('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var mediaClass = media.get('class'); var isVideo = mediaClass == 'Video' || mediaClass == 'Video360'; playList.set('selectedIndex', 0); if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); playList.get('items')[0].get('player').play(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); if(stopAudios) { this.pauseGlobalAudios(); } var playersPaused = this.pauseCurrentPlayers(!stopAudios); w.bind('close', closeFunction, this); w.show(this, true); },
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "openLink": function(url, name){  if(url == location.href) { return; } var isElectron = (window && window.process && window.process.versions && window.process.versions['electron']) || (navigator && navigator.userAgent && navigator.userAgent.indexOf('Electron') >= 0); if (name == '_blank' && isElectron) { if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf' || url.startsWith('file://')) { var shell = window.require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else if(isElectron && (name == '_top' || name == '_self')) { window.location = url; } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "autotriggerAtStart": function(playList, callback, once){  var onChange = function(event){ callback(); if(once == true) playList.unbind('change', onChange, this); }; playList.bind('change', onChange, this); },
  "resumeGlobalAudios": function(caller){  if (window.pauseGlobalAudiosState == undefined || !(caller in window.pauseGlobalAudiosState)) return; var audiosPaused = window.pauseGlobalAudiosState[caller]; delete window.pauseGlobalAudiosState[caller]; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = audiosPaused.length-1; j>=0; --j) { var a = audiosPaused[j]; if(objAudios.indexOf(a) != -1) audiosPaused.splice(j, 1); } } for (var i = 0, count = audiosPaused.length; i<count; ++i) { var a = audiosPaused[i]; if (a.get('state') == 'paused') a.play(); } },
  "setStartTimeVideo": function(video, time){  var items = this.getPlayListItems(video); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; var player = item.get('player'); if(player.get('video') == video && player.get('state') == 'playing') { player.seek(time); } else { startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } } },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, exclude){  var self = this; var item = playList.get('items')[index]; var media = item.get('media'); var player = item.get('player'); var caller = media.get('id'); var endFunc = function(){ if(playList.get('selectedIndex') != index) { if(hasState){ player.unbind('stateChange', stateChangeFunc, self); } self.resumeGlobalAudios(caller); } }; var stateChangeFunc = function(event){ var state = event.data.state; if(state == 'stopped'){ this.resumeGlobalAudios(caller); } else if(state == 'playing'){ this.pauseGlobalAudios(caller, exclude); } }; var mediaClass = media.get('class'); var hasState = mediaClass == 'Video360' || mediaClass == 'Video'; if(hasState){ player.bind('stateChange', stateChangeFunc, this); } this.pauseGlobalAudios(caller, exclude); this.executeFunctionWhenChange(playList, index, endFunc, endFunc); },
  "keepComponentVisibility": function(component, keep){  var key = 'keepVisibility_' + component.get('id'); var value = this.getKey(key); if(value == undefined && keep) { this.registerKey(key, keep); } else if(value != undefined && !keep) { this.unregisterKey(key); } },
  "getMediaWidth": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxW=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('width') > maxW) maxW = r.get('width'); } return maxW; }else{ return r.get('width') } default: return media.get('width'); } },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; if(this.getPlayListItemByMedia(playList, media) != undefined) return playList; } return undefined; },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "shareWhatsapp": function(url){  window.open('https://api.whatsapp.com/send/?text=' + encodeURIComponent(url), '_blank'); },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  var keepVisibility = this.getKey('keepVisibility_' + component.get('id')); if(keepVisibility) return; this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchDevice') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "setMainMediaByIndex": function(index){  var item = undefined; if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); item = this.mainPlayList.get('items')[index]; } return item; },
  "getMediaFromPlayer": function(player){  switch(player.get('class')){ case 'PanoramaPlayer': return player.get('panorama') || player.get('video'); case 'VideoPlayer': case 'Video360Player': return player.get('video'); case 'PhotoAlbumPlayer': return player.get('photoAlbum'); case 'MapPlayer': return player.get('map'); } },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose.call(this, true); } }; var onBeginFunction = function() { item.unbind('begin', onBeginFunction, self); var media = item.get('media'); if(media.get('class') != 'Panorama' || (media.get('camera') != undefined && media.get('camera').get('initialSequence') != undefined)){ player.bind('stateChange', stateChangeFunction, self); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose.call(this, false); } }; var disposeCallback = function(){ dispose.call(this, false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, this); }; itemDispatcher.bind('end', restoreInitialPositionFunction, this); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } if(player){ item.unbind('begin', onBeginFunction, this); player.unbind('stateChange', stateChangeFunction, this); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, this); } } if(sameViewerArea){ var currentMedia = this.getMediaFromPlayer(player); if(currentMedia == undefined || currentMedia == item.get('media')){ playListDispatcher.set('selectedIndex', indexDispatcher); } if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, this); } else{ viewerArea.set('visible', viewerVisibility); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { mediaDispatcher = this.getMediaFromPlayer(currentPlayer); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var player = item.get('player'); var viewerArea = player.get('viewerArea'); var viewerVisibility = viewerArea.get('visible'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var buttons = []; var addButtons = function(property){ var value = player.get(property); if(value == undefined) return; if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } if(player != itemDispatcher.get('player') || !mediaDispatcherByParam){ item.bind('begin', onBeginFunction, self); } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "showPopupPanoramaOverlay": function(popupPanoramaOverlay, closeButtonProperties, imageHD, toggleImage, toggleImageHD, autoCloseMilliSeconds, audio, stopBackgroundAudio){  var self = this; this.MainViewer.set('toolTipEnabled', false); var cardboardEnabled = this.isCardboardViewMode(); if(!cardboardEnabled) { var zoomImage = this.zoomImagePopupPanorama; var showDuration = popupPanoramaOverlay.get('showDuration'); var hideDuration = popupPanoramaOverlay.get('hideDuration'); var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); var popupMaxWidthBackup = popupPanoramaOverlay.get('popupMaxWidth'); var popupMaxHeightBackup = popupPanoramaOverlay.get('popupMaxHeight'); var showEndFunction = function() { var loadedFunction = function(){ if(!self.isCardboardViewMode()) popupPanoramaOverlay.set('visible', false); }; popupPanoramaOverlay.unbind('showEnd', showEndFunction, self); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', 1); self.showPopupImage(imageHD, toggleImageHD, popupPanoramaOverlay.get('popupMaxWidth'), popupPanoramaOverlay.get('popupMaxHeight'), null, null, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedFunction, hideFunction); }; var hideFunction = function() { var restoreShowDurationFunction = function(){ popupPanoramaOverlay.unbind('showEnd', restoreShowDurationFunction, self); popupPanoramaOverlay.set('visible', false); popupPanoramaOverlay.set('showDuration', showDuration); popupPanoramaOverlay.set('popupMaxWidth', popupMaxWidthBackup); popupPanoramaOverlay.set('popupMaxHeight', popupMaxHeightBackup); }; self.resumePlayers(playersPaused, audio == null || !stopBackgroundAudio); var currentWidth = zoomImage.get('imageWidth'); var currentHeight = zoomImage.get('imageHeight'); popupPanoramaOverlay.bind('showEnd', restoreShowDurationFunction, self, true); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', hideDuration); popupPanoramaOverlay.set('popupMaxWidth', currentWidth); popupPanoramaOverlay.set('popupMaxHeight', currentHeight); if(popupPanoramaOverlay.get('visible')) restoreShowDurationFunction(); else popupPanoramaOverlay.set('visible', true); self.MainViewer.set('toolTipEnabled', true); }; if(!imageHD){ imageHD = popupPanoramaOverlay.get('image'); } if(!toggleImageHD && toggleImage){ toggleImageHD = toggleImage; } popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); } else { var hideEndFunction = function() { self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } popupPanoramaOverlay.unbind('hideEnd', hideEndFunction, self); self.MainViewer.set('toolTipEnabled', true); }; var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } popupPanoramaOverlay.bind('hideEnd', hideEndFunction, this, true); } popupPanoramaOverlay.set('visible', true); },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "getPixels": function(value){  var result = new RegExp('((\\+|\\-)?\\d+(\\.\\d*)?)(px|vw|vh|vmin|vmax)?', 'i').exec(value); if (result == undefined) { return 0; } var num = parseFloat(result[1]); var unit = result[4]; var vw = this.rootPlayer.get('actualWidth') / 100; var vh = this.rootPlayer.get('actualHeight') / 100; switch(unit) { case 'vw': return num * vw; case 'vh': return num * vh; case 'vmin': return num * Math.min(vw, vh); case 'vmax': return num * Math.max(vw, vh); default: return num; } },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "getKey": function(key){  return window[key]; },
  "init": function(){  if(!Object.hasOwnProperty('values')) { Object.values = function(o){ return Object.keys(o).map(function(e) { return o[e]; }); }; } var history = this.get('data')['history']; var playListChangeFunc = function(e){ var playList = e.source; var index = playList.get('selectedIndex'); if(index < 0) return; var id = playList.get('id'); if(!history.hasOwnProperty(id)) history[id] = new HistoryData(playList); history[id].add(index); }; var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i) { var playList = playLists[i]; playList.bind('change', playListChangeFunc, this); } },
  "triggerOverlay": function(overlay, eventName){  if(overlay.get('areas') != undefined) { var areas = overlay.get('areas'); for(var i = 0; i<areas.length; ++i) { areas[i].trigger(eventName); } } else { overlay.trigger(eventName); } },
  "initGA": function(){  var sendFunc = function(category, event, label) { ga('send', 'event', category, event, label); }; var media = this.getByClassName('Panorama'); media = media.concat(this.getByClassName('Video360')); media = media.concat(this.getByClassName('Map')); for(var i = 0, countI = media.length; i<countI; ++i){ var m = media[i]; var mediaLabel = m.get('label'); var overlays = this.getOverlays(m); for(var j = 0, countJ = overlays.length; j<countJ; ++j){ var overlay = overlays[j]; var overlayLabel = overlay.get('data') != undefined ? mediaLabel + ' - ' + overlay.get('data')['label'] : mediaLabel; switch(overlay.get('class')) { case 'HotspotPanoramaOverlay': case 'HotspotMapOverlay': var areas = overlay.get('areas'); for (var z = 0; z<areas.length; ++z) { areas[z].bind('click', sendFunc.bind(this, 'Hotspot', 'click', overlayLabel), this); } break; case 'CeilingCapPanoramaOverlay': case 'TripodCapPanoramaOverlay': overlay.bind('click', sendFunc.bind(this, 'Cap', 'click', overlayLabel), this); break; } } } var components = this.getByClassName('Button'); components = components.concat(this.getByClassName('IconButton')); for(var i = 0, countI = components.length; i<countI; ++i){ var c = components[i]; var componentLabel = c.get('data')['name']; c.bind('click', sendFunc.bind(this, 'Skin', 'click', componentLabel), this); } var items = this.getByClassName('PlayListItem'); var media2Item = {}; for(var i = 0, countI = items.length; i<countI; ++i) { var item = items[i]; var media = item.get('media'); if(!(media.get('id') in media2Item)) { item.bind('begin', sendFunc.bind(this, 'Media', 'play', media.get('label')), this); media2Item[media.get('id')] = item; } } },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "pauseGlobalAudios": function(caller, exclude){  if (window.pauseGlobalAudiosState == undefined) window.pauseGlobalAudiosState = {}; if (window.pauseGlobalAudiosList == undefined) window.pauseGlobalAudiosList = []; if (caller in window.pauseGlobalAudiosState) { return; } var audios = this.getByClassName('Audio').concat(this.getByClassName('VideoPanoramaOverlay')); if (window.currentGlobalAudios != undefined) audios = audios.concat(Object.values(window.currentGlobalAudios)); var audiosPaused = []; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = 0; j<objAudios.length; ++j) { var a = objAudios[j]; if(audiosPaused.indexOf(a) == -1) audiosPaused.push(a); } } window.pauseGlobalAudiosState[caller] = audiosPaused; for (var i = 0, count = audios.length; i < count; ++i) { var a = audios[i]; if (a.get('state') == 'playing' && (exclude == undefined || exclude.indexOf(a) == -1)) { a.pause(); audiosPaused.push(a); } } },
  "setStartTimeVideoSync": function(video, player){  this.setStartTimeVideo(video, player.get('currentTime')); },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction.call(this); if(endFunction && endObject) endObject.unbind('end', endFunction, this); playList.unbind('change', changePlayListFunction, this); } }; if(endFunction){ var playListItem = playList.get('items')[index]; if(playListItem.get('class') == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); if(camera != undefined) endObject = camera.get('initialSequence'); if(endObject == undefined) endObject = camera.get('idleSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "changeBackgroundWhilePlay": function(playList, index, color){  var stopFunction = function(event){ playListItem.unbind('stop', stopFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playListItem.bind('stop', stopFunction, this); } },
  "getPanoramaOverlayByName": function(panorama, name){  var overlays = this.getOverlays(panorama); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } return undefined; },
  "historyGoBack": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.back(); } },
  "getMediaHeight": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxH=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('height') > maxH) maxH = r.get('height'); } return maxH; }else{ return r.get('height') } default: return media.get('height'); } },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return audio; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); var stateChangeFunctions = audio.getBindings('stateChange'); for(var i = 0; i<stateChangeFunctions.length; ++i){ var f = stateChangeFunctions[i]; if(typeof f == 'string') f = new Function('event', f); panoramaAudio.bind('stateChange', f, this); } audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } return this.playGlobalAudio(audio, endCallback); },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var buttons = player.get('buttonPlayPause'); if(typeof buttons !== 'undefined' && player.get('state') == 'playing'){ if(!Array.isArray(buttons)) buttons = [buttons]; for(var i = 0; i<buttons.length; ++i) buttons[i].set('pressed', true); } },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "setOverlayBehaviour": function(overlay, media, action){  var executeFunc = function() { switch(action){ case 'triggerClick': this.triggerOverlay(overlay, 'click'); break; case 'stop': case 'play': case 'pause': overlay[action](); break; case 'togglePlayPause': case 'togglePlayStop': if(overlay.get('state') == 'playing') overlay[action == 'togglePlayPause' ? 'pause' : 'stop'](); else overlay.play(); break; } if(window.overlaysDispatched == undefined) window.overlaysDispatched = {}; var id = overlay.get('id'); window.overlaysDispatched[id] = true; setTimeout(function(){ delete window.overlaysDispatched[id]; }, 2000); }; if(window.overlaysDispatched != undefined && overlay.get('id') in window.overlaysDispatched) return; var playList = this.getPlayListWithMedia(media, true); if(playList != undefined){ var item = this.getPlayListItemByMedia(playList, media); if(playList.get('items').indexOf(item) != playList.get('selectedIndex')){ var beginFunc = function(e){ item.unbind('begin', beginFunc, this); executeFunc.call(this); }; item.bind('begin', beginFunc, this); return; } } executeFunc.call(this); },
  "registerKey": function(key, value){  window[key] = value; },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties, stopAudios){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); if(stopAudios) { self.resumeGlobalAudios(); } }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); if(stopAudios) { this.pauseGlobalAudios(); } popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ var item = items[i]; if(item.get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return item; } } },
  "getPlayListItemByMedia": function(playList, media){  var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media) return item; } return undefined; },
  "unregisterKey": function(key){  delete window[key]; },
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if (timeoutUserInteractionID) clearTimeout(timeoutUserInteractionID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "getOverlays": function(media){  switch(media.get('class')){ case 'Panorama': var overlays = media.get('overlays').concat() || []; var frames = media.get('frames'); for(var j = 0; j<frames.length; ++j){ overlays = overlays.concat(frames[j].get('overlays') || []); } return overlays; case 'Video360': case 'Map': return media.get('overlays') || []; default: return []; } },
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return audio; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); return audio; },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); }
 },
 "downloadEnabled": false,
 "mouseWheelEnabled": true,
 "propagateClick": false,
 "data": {
  "name": "Player2114"
 }
};

    
    function HistoryData(playList) {
        this.playList = playList;
        this.list = [];
        this.pointer = -1;
    }

    HistoryData.prototype.add = function(index){
        if(this.pointer < this.list.length && this.list[this.pointer] == index) {
            return;
        }
        ++this.pointer;
        this.list.splice(this.pointer, this.list.length - this.pointer, index);
    };

    HistoryData.prototype.back = function(){
        if(!this.canBack()) return;
        this.playList.set('selectedIndex', this.list[--this.pointer]);
    };

    HistoryData.prototype.forward = function(){
        if(!this.canForward()) return;
        this.playList.set('selectedIndex', this.list[++this.pointer]);
    };

    HistoryData.prototype.canBack = function(){
        return this.pointer > 0;
    };

    HistoryData.prototype.canForward = function(){
        return this.pointer >= 0 && this.pointer < this.list.length-1;
    };
    //

    if(script.data == undefined)
        script.data = {};
    script.data["history"] = {};    //playListID -> HistoryData

    TDV.PlayerAPI.defineScript(script);
})();
