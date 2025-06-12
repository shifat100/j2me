function gup(name, loc=window.location.href) { name = name.replace(/[\[]/,"\\\[").replace(/[\]]/,"\\\]"); var regexS = "[\\?&]"+name+"=([^&#]*)"; var regex = new RegExp(regexS); var results = regex.exec(loc); if(results == null) return ""; else return results[1]; } 

config.jars = gup("jarlink");
config.jad = gup("jadlink");
config.midletClassName = gup("midlet");

MIDlet.shouldStartBackgroundService = function() {
  return fs.exists("/startBackgroundService");
};
