#!/bin/bash

FOLDER="$( cd $(dirname "${BASH_SOURCE[0]}"); pwd )"

[ ! -f "${FOLDER}/private_key.pem" -o ! -f "${FOLDER}/public_key.pem" ] && \
  "${FOLDER}/rsa-keys-create.sh"

[ ! -f "${FOLDER}/jwt.key" ] && \
  "${FOLDER}/jwt-create.sh"

export NODE_ENV=${NODE_ENV:-development}
export PORT=${NODE_ENV:-5000}

npm run build && PUBLIC_KEY="$(cat "${FOLDER}/public_key.pem")" \
npm run start:dev
