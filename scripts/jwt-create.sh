#!/bin/bash

function base64_urlsafe {
  base64 | tr -d '\r\n=' | tr '+/' '-_'
}

FOLDER="$( cd $(dirname "${BASH_SOURCE[0]}"); pwd )"

payload="{}"

header_enc="$(echo -n '{"typ":"JWT","alg":"RS256"}' | base64_urlsafe)"
payload_enc="$(echo -n "$payload" | base64_urlsafe)"
message="$header_enc.$payload_enc"
sig="$(echo -n "$message" | openssl dgst -sha256 -sign "${FOLDER}/private_key.pem" -keyform PEM | base64_urlsafe)"

OUT_FILE="jwt.key"  # Nome do arquivo de saída
echo -n "${message}.${sig}" > "${FOLDER}/${OUT_FILE}"
