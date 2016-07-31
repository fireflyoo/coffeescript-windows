    // FileSystemObject: http://msdn.microsoft.com/en-us/library/bkx696eh.aspx
    
    var fs = { 
	       o: new ActiveXObject("Scripting.FileSystemObject"),
	       readTextFrom : function (filename) {
                    var ForReading = 1;
                    var f= fs.o.OpenTextFile(filename, ForReading, false);
	                fs.text = f.ReadAll();
	                f.Close();
	       
               },
               writeTextTo : function (filename) {
                    var ForWriting = 2;
                    var f= fs.o.OpenTextFile(filename, ForWriting, true);
	                f.Write(fs.text);
	                f.Close();
                },
               text: ""
    };