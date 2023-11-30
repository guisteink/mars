#!/bin/bash

url="http://localhost:5000/v1/baseDomain"

response=$(curl -s $url)

if [ $? -eq 0 ]; then
    echo "Solicitação bem-sucedida!"
    echo $response
else
    echo "Erro ao fazer a solicitação."
fi
