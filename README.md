
# heroku-deno-getting-started

## Buildpack

https://github.com/chibat/heroku-buildpack-deno

## Running Locally
Make sure you have [Deno](https://deno.land/) and the [Heroku CLI](https://cli.heroku.com/) installed.
```
$ git clone https://github.com/chibat/heroku-deno-getting-started.git
$ cd heroku-deno-getting-started
$ deno run --allow-net=:8080 app.ts --port=8080
```
Your app should now be running on [localhost:8080](http://localhost:8080/).

## Deploying to Heroku
```
$ heroku create --buildpack https://github.com/chibat/heroku-buildpack-deno.git
$ git push heroku master
$ heroku open
```

## more examples
* https://github.com/chibat/heroku-deno-tsconfig-importmap-example (Alosaur)
* https://github.com/chibat/heroku-deno-customized-build-example (Aleph.js)
* https://github.com/chibat/heroku-deno-postgres-example (PostgreSQL)



