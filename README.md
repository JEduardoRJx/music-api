# music-api

## Response Format
 Response format is in `JSON`
 
 ## All Routes
All Routes stem from:
[To Music API](https://musick-api.herokuapp.com/api/v1/albums/)
`https://musick-api.herokuapp.com/api/v1/albums`

## GET All Albums
`GET /api/v1/albums/`
<details>
Will return all albums.

| **Param**     | **Value**     | **Description**  |
| ------------- |:-------------:| ----------------|
| `id`          | *integer*     | Album id, ex: `1`|
| `album`       | *string*      | Name of album:, ex: `Thriller` |
| `artist`      | *string*      | Name of artist, ex: `Michael Jackson` |
| `genre`       | *string*      | Genre, ex: `Pop` |
| `year`        | *integer*     | Year release, `1982` |

### Sample Response
```javascript 
    [
      {
        "id": 1,
        "album": "Thriller",
        "artist": "Michael Jackson",
        "genre": "Pop",
        "year": 1982
       },
       {
        "id": 2,
        "album": "Singles"
        ,"artist": "Future Islands",
        "genre": "Indie",
        "year": 2014},
       },
       {
        "id": 3,
        "album": "This Is Happening",
        "artist": "LCD Soundsystem",
        "genre": "Dance",
        "year": 2010},
       },
       {
        "id":4,
        "album": "Disappear Here",
        "artist": "Bad Suns",
        "genre": "Rock",
        "year": 2016},
       },
       {
        "id":5,
        "album": "ANTI",
        "artist": "Rihanna",
        "genre": "Hip hop",
        "year": 2016
        }
      ]  
```
</details>

## GET An Album
`GET /api/v1/albums/:id`
<details>
Will return all albums.

| **Param**     | **Value**     | **Description**  |
| ------------- |:-------------:| ----------------|
| `id`          | *integer*     | Projects id, ex: `1`|
| `album`       | *string*      | Name of album:, ex: `Thriller` |
| `artist`      | *string*      | Name of artist, ex: `Michael Jackson` |
| `genre`       | *string*      | Genre, ex: `Pop` |
| `year`        | *integer*     | Year release, `1982` |

### Sample Response
```javascript 
    [
      {
        "id": 1,
        "album": "Thriller",
        "artist": "Michael Jackson",
        "genre": "Pop",
        "year": 1982
       }
      ]  
```
</details>

## GET All Artists
`GET /api/v1/artists`
<details>
Will return all artists.

| **Param**     | **Value**     | **Description**  |
| ------------- |:-------------:| ----------------|
| `id`          | *integer*     | Projects id, ex: `1`|
| `artist`      | *string*      | Name of artist, ex: `Michael Jackson` |

### Sample Response
```javascript 
    [
      {
        "id": 1,
        "artist": "Michael Jackson",
       },
       {
        "id": 2,
        "artist": "Future Islands",
       }
      ]  
```
</details>

## GET An Artist
`GET /api/v1/artists?:id`
<details>
Will return all artists.

| **Param**     | **Value**     | **Description**  |
| ------------- |:-------------:| ----------------|
| `id`          | *integer*     | Projects id, ex: `1`|
| `artist`      | *string*      | Name of artist, ex: `Michael Jackson` |

### Sample Response
```javascript 
    [
      {
        "id": 1,
        "artist": "Michael Jackson",
       }
      ]  
```
</details>


## GET All Genres
`GET /api/v1/genres`
<details>
Will return all genres.

| **Param**     | **Value**     | **Description**  |
| ------------- |:-------------:| ----------------|
| `id`          | *integer*     | Genre id, ex: `1`|
| `genre`       | *string*      | Name of artist, ex: `Pop` |
| `numOfAlbums` | *string*      | Number of Albums with that genre, ex: `10` |

### Sample Response
```javascript 
    [
      {
        "id": 1,
        "genre": "Pop",
        "numOfAlbums": 10
       },
       {
        "id": 2,
        "genre": "Indie",
        "numOfAlbums": 12
       },
       {
        "id": 3,
        "genre": "Dance",
        "numOfAlbums": 5
       }
      ]  
```
</details>

## POST An Album via Query
`GET /api/v1/albums/?album[album]=NameOfAlbum&album[genre]=genre&album[artist]=nameOfArtist&album[year]=2020`
<details>
Will Post a new genre all genres.

| **Param**     | **Value**     | **Description**  |
| ------------- |:-------------:| ----------------|
| `album[album]`| *string*      | Name Of Album, ex: `Album Name`|
| `artist`      | *string*      | Name of artist, ex: `Artist Name` |
| `genre`       | *string*      | Genre typet, ex: `Pop` |
| `year`        | *string*      | Year release, ex: `2020` |

### Sample Response
```javascript 
    [
      {
        "id": 100,
        "album": "Album Name",
        "artist": "Artist Name",
        "genre": "Pop",
        "year": 2020
       }
      ]  
```
</details>


## PUT An Album via Query
`PUT /api/v1/albums/?album[album]=NameOfAlbum&album[genre]=genre&album[artist]=nameOfArtist&album[year]=2020`
<details>
Will update an existing album. You do not need all four values just one query at least

| **Param**     | **Value**     | **Description**  |
| ------------- |:-------------:| ----------------|
| `album[album]`| *string*      | Name Of Album, ex: `Album Name`|
| `artist`      | *string*      | Name of artist, ex: `Artist Name` |
| `genre`       | *string*      | Genre typet, ex: `Pop` |
| `year`        | *string*      | Year release, ex: `2020` |

### Sample Response
```javascript 
    [
      {
        "id": 100,
        "album": "Album Name",
        "artist": "Artist Name",
        "genre": "Pop",
        "year": 2020
       }
      ]  
```
</details>


## DELETE An Album
`DELETE /api/v1/albums/:id`
Will delete an album
