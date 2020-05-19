#!/bin/bash -ex

export DENO_INSTALL=$HOME/.deno
export PATH=$DENO_INSTALL/bin:$PATH
curl -fsSL https://deno.land/x/install/install.sh | sh -s v1.0.0
deno --version

npm install heroku -g

