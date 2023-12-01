#!/bin/bash

FOLDER="$( cd $(dirname "${BASH_SOURCE[0]}"); pwd )"

openssl genpkey -algorithm RSA -out "${FOLDER}/private_key.pem" -pkeyopt rsa_keygen_bits:4096
openssl rsa -pubout -in "${FOLDER}/private_key.pem" -out "${FOLDER}/public_key.pem"
