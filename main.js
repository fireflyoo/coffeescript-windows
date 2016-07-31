(function() {
if(!WScript.Arguments.Length){
		REPL.start();
}
else
{

	var nargs={compile:null,interactive:false,output:null,print:false,stdio:false,"eval":null,bare:false};
	var inputPath="",outputPath="";
    // FileSystemObject: http://msdn.microsoft.com/en-us/library/bkx696eh.aspx

	for (var key in nargs) {
    if(WScript.Arguments.Named.Exists(key)){nargs[key]=WScript.Arguments.Named.Item(key);}
	}
	var convert=function (inputPath,outputPath) {

               // if output specifies a folder name, output filename is same as input filename with .coffee extension
            if (!outputPath) {
				outputPath = fs.o.getFile(inputPath).name.replace('\.coffee', '.js');
                
            }
	        else {
            if(fs.o.folderExists(outputPath)){outputPath = outputPath + '\\' + fs.o.getFile(inputPath).name.replace('\.coffee', '.js');}
             				
	        }
            try { 
        
           if (nargs.stdio) { 
               // Read all input data from STDIN
               var chunks = [];
               while (!WScript.StdIn.AtEndOfStream)
                   chunks.push(WScript.StdIn.ReadAll());
               fs.text = chunks.join('');
           }
           else {
               fs.readTextFrom(inputPath);
           }

               
            	if(nargs.interactive) {
				   REPL.inputText=fs.text;
				   REPL.start();
				   
			   }   
               else { 
			       fs.text = CoffeeScript.compile(fs.text,{"bare":nargs.bare});
				if (nargs.print) {
                   WScript.StdOut.Write(fs.text);
               }

               else {
                   fs.writeTextTo(outputPath);
               }
			   }
           }
           catch (err) {
               WScript.StdErr.WriteLine(err.message);
               WScript.Quit(1);
           }
    }

	if(nargs.compile || nargs.stdio) {
    if (fs.o.folderExists(nargs.compile)) {
        var e = new Enumerator(fs.o.getFolder(nargs.compile).files);
        for (; !e.atEnd(); e.moveNext()) {
            if (e.item().path.toLowerCase().lastIndexOf('.coffee') != -1) {
                convert(e.item(), nargs.output);
            }
        }
    }
    else {

        convert(nargs.compile,nargs.output);
    }    
	}	
}
})();

