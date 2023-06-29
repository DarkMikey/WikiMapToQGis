# WikiMapToQGis

In order to import WikiMap data (json) to QGIS (csv) a data transformation is necessary. This script enabes this by extracting the coordinates from a WikiMap json. 

## Input

```json
[
  {
    "pageid": 9423056,
    "ns": 0,
    "title": "Liste der Kellergassen in Grabern",
    "thumbnail": {
      "source": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Mittergrabern_Kellergasse_1_a.jpg/320px-Mittergrabern_Kellergasse_1_a.jpg",
      "width": 320,
      "height": 213
    },
    "coordinates": [
      {
        "lat": 48.614679,
        "lon": 16.018598,
        "primary": false,
        "name": "Kellergasse Mittergrabern (Osten), Mittergrabern, Grabern"
      }
    ]
  },
  {
    "pageid": 9498937,
    "ns": 0,
    "title": "Liste der Kellergassen in Absdorf",
    "thumbnail": {
      "source": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Absberg_Kellergasse_Neugeb%C3%A4ude_4.jpg/320px-Absberg_Kellergasse_Neugeb%C3%A4ude_4.jpg",
      "width": 320,
      "height": 211
    },
    "coordinates": [
      {
        "lat": 48.410706,
        "lon": 15.978501,
        "primary": false,
        "name": "Neugebäude, Absberg, Absdorf"
      },
      {
        "lat": 48.416243,
        "lon": 15.970898,
        "primary": false,
        "name": "Kellergasse, Absberg, Absdorf"
      }
    ]
  }
]
```

## Output

```json
[
  {
    "lat": 48.614679,
    "lon": 16.018598,
    "primary": false,
    "name": "Kellergasse Mittergrabern (Osten), Mittergrabern, Grabern"
  },
  {
    "lat": 48.410706,
    "lon": 15.978501,
    "primary": false,
    "name": "Neugebäude, Absberg, Absdorf"
  },
  {
    "lat": 48.416243,
    "lon": 15.970898,
    "primary": false,
    "name": "Kellergasse, Absberg, Absdorf"
  }
]
```

# Links
https://wikimap.toolforge.org/?lang=de&page=Kategorie:Liste_(Kellergassen_in_Nieder%C3%B6sterreich)
