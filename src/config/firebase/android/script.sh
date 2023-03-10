#!/bin/bash

if [ $1 = staging ]
then
    cp -f src/config/firebase/android/staging/google-services.json ./android/app/
    echo Firebase staging config successfully uploaded!
elif [ $1 = development ]
then
    cp -f src/config/firebase/android/development/google-services.json ./android/app/
    echo Firebase development config successfully uploaded!
else
    cp -f src/config/firebase/android/production/google-services.json ./android/app/
    echo Firebase production config successfully uploaded!
fi