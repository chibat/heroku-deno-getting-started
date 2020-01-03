#!/bin/bash -e

curl -fsSL https://deno.land/x/install/install.sh | sh

if [ -z "$DENO_INSTALL" ]
then
  deno --version
else
  $DENO_INSTALL/deno --version
fi


