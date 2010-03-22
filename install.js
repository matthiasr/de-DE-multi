var err = initInstall("Wörterbuch Deutsch (de-DE), Hunspell-unterstützt", "de_DE@dicts.j3e.de", "20100306");
if (err != SUCCESS)
    cancelInstall();

var fProgram = getFolder("Program");
err = addDirectory("", "de_DE@dicts.j3e.de",
		   "dictionaries", fProgram, "dictionaries", true);
if (err != SUCCESS)
    cancelInstall();

performInstall();
