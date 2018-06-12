#!/bin/bash
overwrite="--overwrite"
format="--format=jpg"
##resolution="1366x768"
resolution="342x192"
while read p; do
  pageres `echo "$p $resolution $format $overwrite"`
done <website-preview-list.txt
