config.jars = "jar/ftu.jar";
config.jad = "jar/ftu.jad";
config.midletClassName = "BookReaderMidlet";

MIDlet.shouldStartBackgroundService = function() {
  return fs.exists("/startBackgroundService");
};
