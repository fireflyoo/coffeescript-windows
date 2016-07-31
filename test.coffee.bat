1>2# : ^
###
@echo off
coffee.js.cmd /compile:"%~dpf0" /interactive:ture %*
pause
exit /b
###

fac = (end,start=1) -> result=1;result*=i for i in [start..end];result
fact = (end,start=1,result=1) -> if end<=start then result else fact(end-1,start,result*end)