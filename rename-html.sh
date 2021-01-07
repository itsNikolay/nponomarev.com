#!/bin/sh

for file in $(find ./out -name "*.html" ! -name "index.html" ! -name "yandex_a413ad079bd04bd4.html"); do
  newname=`echo $file | sed 's/\.html$//g'`

  mv -v $file $newname
done
