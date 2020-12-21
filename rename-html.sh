#!/bin/sh

for file in $(find ./out/ -name "*.html" ! -name "index.html"); do
  echo $file
  newname=`echo $file | sed 's/\.html$//g'`

  mv $file $newname
done
