# Yoga API
Code works.
The issue was the construction of my create promise in my controllers.js file.  Roger gave clean syntax that I was able to modify for both CREATE and DELETE.

## Postman guidance:
Heroku API Endpoint:
https://yogapi.herokuapp.com/

### Get READ:
https://yogapi.herokuapp.com/
Returns all asanas as text.

### Post CREATE:
https://yogapi.herokuapp.com/
Body RAW JSON
```javascript
{
    "id": 49,
    "sanskrit_name": "Chakrasana",
    "english_name": "Wheel",
    "img_url": "https://storage.needpix.com/rsynced_images/yoga-3427131_1280.png"
}
```

### POST DELETE
https://yogapi.herokuapp.com/delete
```javascript
{
    "english_name": "Wheel"
}
```


