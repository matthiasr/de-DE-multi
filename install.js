var err = initInstall("Wörterbuch Deutsch (de-DE), Hunspell-unterstützt", "de_DE@multi", "20100323");
if (err != SUCCESS)
    cancelInstall();

var fProgram = getFolder("Program");
err = addDirectory("", "de_DE@multi",
		   "dictionaries", fProgram, "dictionaries", true);
if (err != SUCCESS)
    cancelInstall();

performInstall();
