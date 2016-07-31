<!-- : Begin batch script
@echo off
:echo batch output
cscript //nologo "%~f0?.wsf" %*
exit /b

----- Begin wsf script --->
<!-- https://stackoverflow.com/questions/9074476/is-it-possible-to-embed-and-execute-vbscript-within-a-batch-file-without-using-a  -->
<job>
<!-- https://github.com/jashkenas/coffee-script/raw/master/extras/coffee-script.js -->
<script src="polyfill.js" language="JScript" />
<script src="coffee-script.js" language="JScript" />
<script src="REPL.js" language="JScript" />
<script src="fs.js" language="JScript" />
<script src="main.js" language="JScript" />
</job>