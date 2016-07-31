set  f=coffee.js.cmd
copy JS-header.bat  %f%
echo. >> %f%
type polyfill.js >> %f%
echo. >> %f%
type coffee-script.js >> %f%
echo. >> %f%
type REPL.js >> %f%
echo. >> %f%
type fs.js >> %f%
echo. >> %f%
type main.js >> %f%
echo. >> %f%
pause
