@echo off
set  counter=0
:top
md %counter%+"TUBE"
set /a counter+=1
goto top