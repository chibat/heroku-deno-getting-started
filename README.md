
# heroku-deno-getting-started

## Buildpack

https://github.com/chibat/heroku-buildpack-deno

## Running Locally
Make sure you have [Deno](https://deno.land/) and the [Heroku CLI](https://cli.heroku.com/) installed.
```
$ git clone https://github.com/chibat/heroku-deno-getting-started.git
$ cd heroku-deno-getting-started
$ deno main.ts --allow-net --allow-env
```
Your app should now be running on [localhost:8080](http://localhost:8080/).

## Deploying to Heroku
```
$ heroku create --buildpack https://github.com/chibat/heroku-buildpack-deno.git
$ git push heroku master
$ heroku open
```

## Settings to download all dependencies at deployment time

Create `fetch.ts` in project root directory.
Import the source code that starts the application in `fetch.ts`.

example
```typescript
import {} from "./main.ts";
```

The downloaded files are cached.

## About listen port

Use the environment variable `PORT` provided by the heroku runtime as the port number that the application listen.



