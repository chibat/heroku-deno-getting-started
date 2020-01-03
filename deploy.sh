#!/bin/sh -x

git remote |grep -e \s*heroku$

if [ "$?" != "0" ]
then
  npx heroku create --buildpack https://github.com/chibat/heroku-buildpack-deno.git
fi

git push heroku master

