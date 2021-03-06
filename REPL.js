var REPL = {
	       inputText:null,
	       version: "0.3",
	       changeLog: {
			"0.3":["added help message"],
			"0.2":["Wrapped REPL inside of a try/catch block.",
                               "Added multi-line mode."],
			"0.1":["Initial Release"]
		},
	
		start: function() {
			if(!REPL.inputText)REPL.showMOTD();
			REPL.exec();
		},
	
		showMOTD: function() {
			WScript.StdOut.WriteLine ("Welcome to the WSH REPL V "+REPL.version);
			WScript.StdOut.WriteLine ("Granting Wishes!");
			WScript.StdOut.WriteLine ("use say for print.");
                        WScript.StdOut.WriteLine ("use _ to see the latest value \nand _$ for the compiled js source;");
		},
	
	
		exec: function() {
      	               var _isMultiLinesMode=false;
                       var _singleLine="";
                       var _multiLines="";
                       var _; 
                       var _$; 
					   var __$;
                       var say = function (args) {WScript.StdOut.WriteLine(args);};
					   if(REPL.inputText)_multiLines=REPL.inputText;
                       while(true) {        
                            if (_isMultiLinesMode) {
        	                   _multiLines += _singleLine + "\n";
                            }
	
                            else {
                               _singleLine = _multiLines || _singleLine;
                               _multiLines="";
                                try {
                                  __$=CoffeeScript.compile(_singleLine,{"bare":true});
                                  _=eval(__$);
                                  if(typeof(_) !== "function")say(_);
                                }      catch(e) {
                                          REPL.displayError(e);
                                       }

                            }
				WScript.StdOut.Write(_isMultiLinesMode?"      >":"Coffee>");
					 		$=__$;
                            _singleLine = WScript.StdIn.ReadLine();
 
                            if(!_singleLine)_isMultiLinesMode=!_isMultiLinesMode;
			}
		},
	
		displayError: function(e) {
			WScript.StdOut.WriteLine("[Genie Error] Cannot grant wish! ");
			WScript.StdOut.WriteLine(e + " " + e.number);
			WScript.StdOut.WriteLine(e.name);
			WScript.StdOut.WriteLine(e.description);
		}
	}