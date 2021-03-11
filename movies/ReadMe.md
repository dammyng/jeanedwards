# Movie Service

The service uses http://www.omdbapi.com service api to provide provide information on movies searched by tile and id

### Install dependencies
`dotnet restore`

### Run Test  
`cd movies.Tests`
`cd dotnet restore`
`cd dotnet test`

### Start server 
`dotnet start`

### Features

#### 1. Get movies by title
`Endpoint: localhost:5000/api/movies/{title query}`

**Sample Request**
```shell
    curl --location --request GET 'localhost:5000/api/movies/love' \
    --header 'Content-Type: application/json'
```
**Expected Response**
```json
{
    "search": [
        {
            "title": "Crazy, Stupid, Love.",
            "year": "2011",
            "imdbID": "tt1570728",
            "type": "movie",
            "poster": "https://m.media-amazon.com/images/M/MV5BMTg2MjkwMTM0NF5BMl5BanBnXkFtZTcwMzc4NDg2NQ@@._V1_SX300.jpg"
        }
       ....
       ....
       ....
    ],
    "totalResults": "17938",
    "response": "True"
}
```


#### 2. Get movie detail by id 
`Endpoint: localhost:5000/api/movies/{id query}`

**Sample Request**
```shell
    curl --location --request GET 'localhost:5000/api/movies/details/tt1570728' \
    --header 'Content-Type: application/json'
```
**Expected Response**
```json
    {
        "title": "Crazy, Stupid, Love.",
        "year": "2011",
        "rated": "PG-13",
        "released": "29 Jul 2011",
        ...
        ...
        "website": "N/A",
        "response": "True"
    }
```


### Limitations and Notes
-   Redirected to HTTPS is commented out to avoid client side certification challenge//  app.UseHttpsRedirection();
- CORS policy is also set to allow all
