# The Movie Database API (TMDBAPI) 
======
TMDB API, IMDB benzeri bir film ve TV programları portalidir.
TMDB API pratiğimizde aşağıdaki kavramlar üzerine konuşacağız:
- API key
- Query parametresi, Path değişkenleri, Session, Token
- POST, DELETE HTTP metotları

### Yapılan İstekler
```
GET ALL FILMS - GET : https://swapi.dev/api/films/
```

```
GET A FILM DETAIL - GET : https://swapi.dev/api/films/:film_id
```

```
CREATE A REQUEST TOKEN - GET : https://api.themoviedb.org/3/authentication/token/new
```

```
CREATE A SESSION ID - POST : https://api.themoviedb.org/3/authentication/session/new
```

```
RATE A MOVIE - POST : https://api.themoviedb.org/3/movie/:movie_id/rating?session_id={{session_id}}
```

```
DELETE A MOVIE RATE - DELETE : https://api.themoviedb.org/3/movie/:movie_id/rating?session_id={{session_id}}
```

## Daha Fazlası İçin
- [TMDB - Dökümantasyon](https://developers.themoviedb.org/3/getting-started)

