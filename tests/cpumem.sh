#!/bin/bash
n=$1
d=$2
program=$3

res=$(top -b -n $n -d $d | grep "$program" | awk '{printf $9","$10"\r"}') #/n when on linux

header="\"CPU\",\"Mem\"\n"
echo -e $header$res > "$program".csv