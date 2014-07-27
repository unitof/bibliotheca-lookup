var masterVerseCountArray = [
	["Genesis ", 31, 25, 24, 26, 32, 22, 24, 22, 29, 32, 32, 20, 18, 24, 21, 16, 27, 33, 38, 18, 34, 24, 20, 67, 34, 35, 46, 22, 35, 43, 54, 33, 20, 31, 29, 43, 36, 30, 23, 23, 57, 38, 34, 34, 28, 34, 31, 22, 33, 26],
	["Exodus", 22, 25, 22, 31, 23, 30, 29, 28, 35, 29, 10, 51, 22, 31, 27, 36, 16, 27, 25, 26, 37, 30, 33, 18, 40, 37, 21, 43, 46, 38, 18, 35, 23, 35, 35, 38, 29, 31, 43, 38],
	["Leviticus", 17, 16, 17, 35, 26, 23, 38, 36, 24, 20, 47, 8, 59, 57, 33, 34, 16, 30, 37, 27, 24, 33, 44, 23, 55, 46, 34],
	["Numbers", 54, 34, 51, 49, 31, 27, 89, 26, 23, 36, 35, 16, 33, 45, 41, 35, 28, 32, 22, 29, 35, 41, 30, 25, 19, 65, 23, 31, 39, 17, 54, 42, 56, 29, 34, 13],
	["Deuteronomy", 46, 37, 29, 49, 33, 25, 26, 20, 29, 22, 32, 31, 19, 29, 23, 22, 20, 22, 21, 20, 23, 29, 26, 22, 19, 19, 26, 69, 28, 20, 30, 52, 29, 12],
	["Joshua", 18, 24, 17, 24, 15, 27, 26, 35, 27, 43, 23, 24, 33, 15, 63, 10, 18, 28, 51, 9, 45, 34, 16, 33],
	["Judges", 36, 23, 31, 24, 31, 40, 25, 35, 57, 18, 40, 15, 25, 20, 20, 31, 13, 31, 30, 48, 25],
	["Ruth", 22, 23, 18, 22],
	["1 Samuel", 28, 36, 21, 22, 12, 21, 17, 22, 27, 27, 15, 25, 23, 52, 35, 23, 58, 30, 24, 42, 16, 23, 28, 23, 43, 25, 12, 25, 11, 31, 13],
	["2 Samuel", 27, 32, 39, 12, 25, 23, 29, 18, 13, 19, 27, 31, 39, 33, 37, 23, 29, 32, 44, 26, 22, 51, 39, 25],
	["1 Kings", 53, 46, 28, 20, 32, 38, 51, 66, 28, 29, 43, 33, 34, 31, 34, 34, 24, 46, 21, 43, 29, 54],
	["2 Kings", 18, 25, 27, 44, 27, 33, 20, 29, 37, 36, 20, 22, 25, 29, 38, 20, 41, 37, 37, 21, 26, 20, 37, 20, 30],
	["1 Chronicles", 54, 55, 24, 43, 41, 66, 40, 40, 44, 14, 47, 41, 14, 17, 29, 43, 27, 17, 19, 8, 30, 19, 32, 31, 31, 32, 34, 21, 30],
	["2 Chronicles", 18, 17, 17, 22, 14, 42, 22, 18, 31, 19, 23, 16, 23, 14, 19, 14, 19, 34, 11, 37, 20, 12, 21, 27, 28, 23, 9, 27, 36, 27, 21, 33, 25, 33, 26, 23],
	["Ezra", 11, 70, 13, 24, 17, 22, 28, 36, 15, 44],
	["Nehemiah", 11, 20, 38, 17, 19, 19, 72, 18, 37, 40, 36, 47, 31],
	["Esther", 22, 23, 15, 17, 14, 14, 10, 17, 32, 3, 17, 8, 30, 16, 24, 10],
	["Job", 22, 13, 26, 21, 27, 30, 21, 22, 35, 22, 20, 25, 28, 22, 35, 22, 16, 21, 29, 29, 34, 30, 17, 25, 6, 14, 21, 28, 25, 31, 40, 22, 33, 37, 16, 33, 24, 41, 30, 32, 26, 17],
	["Psalm", 6, 12, 9, 9, 13, 11, 18, 10, 21, 18, 7, 9, 6, 7, 5, 11, 15, 51, 15, 10, 14, 32, 6, 10, 22, 11, 14, 9, 11, 13, 25, 11, 22, 23, 28, 13, 40, 23, 14, 18, 14, 12, 5, 27, 18, 12, 10, 15, 21, 23, 21, 11, 7, 9, 24, 14, 12, 12, 18, 14, 9, 13, 12, 11, 14, 20, 8, 36, 37, 6, 24, 20, 28, 23, 11, 13, 21, 72, 13, 20, 17, 8, 19, 13, 14, 17, 7, 19, 53, 17, 16, 16, 5, 23, 11, 13, 12, 9, 9, 5, 8, 29, 22, 35, 45, 48, 43, 14, 31, 7, 10, 10, 9, 8, 18, 19, 2, 29, 176, 7, 8, 9, 4, 8, 5, 6, 5, 6, 8, 8, 3, 18, 3, 3, 21, 26, 9, 8, 24, 14, 10, 8, 12, 15, 21, 10, 20, 14, 9, 6],
	["Proverbs", 33, 22, 35, 27, 23, 35, 27, 36, 18, 32, 31, 28, 25, 35, 33, 33, 28, 24, 29, 30, 31, 29, 35, 34, 28, 28, 27, 28, 27, 33, 31],
	["Ecclesiastes", 18, 26, 22, 17, 19, 12, 29, 17, 18, 20, 10, 14],
	["Song of Soloman", 17, 17, 11, 16, 16, 12, 14, 14],
	["Isaiah", 31, 22, 26, 6, 30, 13, 25, 23, 20, 34, 16, 6, 22, 32, 9, 14, 14, 7, 25, 6, 17, 25, 18, 23, 12, 21, 13, 29, 24, 33, 9, 20, 24, 17, 10, 22, 38, 22, 8, 31, 29, 25, 28, 28, 25, 13, 15, 22, 26, 11, 23, 15, 12, 17, 13, 12, 21, 14, 21, 22, 11, 12, 19, 11, 25, 24],
	["Jeremiah", 19, 37, 25, 31, 31, 30, 34, 23, 25, 25, 23, 17, 27, 22, 21, 21, 27, 23, 15, 18, 14, 30, 40, 10, 38, 24, 22, 17, 32, 24, 40, 44, 26, 22, 19, 32, 21, 28, 18, 16, 18, 22, 13, 30, 5, 28, 7, 47, 39, 46, 64, 34],
	["Lamentations", 22, 22, 66, 22, 22],
	["Ezekiel", 28, 10, 27, 17, 17, 14, 27, 18, 11, 22, 25, 28, 23, 23, 8, 63, 24, 32, 14, 44, 37, 31, 49, 27, 17, 21, 36, 26, 21, 26, 18, 32, 33, 31, 15, 38, 28, 23, 29, 49, 26, 20, 27, 31, 25, 24, 23, 35],
	["Daniel", 21, 49, 100, 34, 30, 29, 28, 27, 27, 21, 45, 13, 64, 42],
	["Hosea", 9, 25, 5, 19, 15, 11, 16, 14, 17, 15, 11, 15, 15, 10],
	["Joel", 20, 27, 5, 21],
	["Amos", 15, 16, 15, 13, 27, 14, 17, 14, 15],
	["Obadiah", 21],
	["Jonah", 16, 11, 10, 11],
	["Micah", 16, 13, 12, 14, 14, 16, 20],
	["Nahum", 14, 14, 19],
	["Habakkuk", 17, 20, 19],
	["Zephaniah", 18, 15, 20],
	["Haggai", 15, 23],
	["Zechariah", 17, 17, 10, 14, 11, 15, 14, 23, 17, 12, 17, 14, 9, 21],
	["Malachi", 14, 17, 24],
	["Matthew", 25, 23, 17, 25, 48, 34, 29, 34, 38, 42, 30, 50, 58, 36, 39, 28, 27, 35, 30, 34, 46, 46, 39, 51, 46, 75, 66, 20],
	["Mark", 45, 28, 35, 41, 43, 56, 37, 38, 50, 52, 33, 44, 37, 72, 47, 20],
	["Luke", 80, 52, 38, 44, 39, 49, 50, 56, 62, 42, 54, 59, 35, 35, 32, 31, 37, 43, 48, 47, 38, 71, 56, 53],
	["John", 51, 25, 36, 54, 47, 71, 53, 59, 41, 42, 57, 50, 38, 31, 27, 33, 26, 40, 42, 31, 25],
	["Acts", 26, 47, 26, 37, 42, 15, 60, 40, 43, 48, 30, 25, 52, 28, 41, 40, 34, 28, 40, 38, 40, 30, 35, 27, 27, 32, 44, 31],
	["Romans", 29, 31, 25, 21, 23, 25, 39, 33, 21, 36, 21, 14, 23, 33, 27, ],
	["1 Corinthians", 31, 16, 23, 21, 13, 20, 40, 13, 27, 33, 34, 31, 13, 40, 58, 24],
	["2 Corinthians", 24, 17, 18, 18, 21, 18, 16, 24, 15, 18, 33, 21, 13],
	["Galatians", 21, 29, 31, 26, 18, ],
	["Ephesians", 22, 21, 32, 33, 24, ],
	["Philippians", 30, 30, 21, 23],
	["Colossians", 23, 25, 18, ],
	["1 Thessalonians", 10, 20, 13, 18, 28],
	["2 Thessalonians", 12, 17, 18],
	["1 Timothy", 20, 15, 16, 16, 25, 21],
	["2 Timothy", 18, 26, 17, 22],
	["Titus", 16, 15, 15],
	["Philemon", 25],
	["Hebrews", 14, 18, 19, 16, 14, 20, 28, 13, 28, 39, 40, 29, 25, ],
	["James", 27, 26, 18, 17, 20],
	["1 Peter", 25, 25, 22, 19, 14],
	["2 Peter", 21, 22, 18],
	["1 John", 10, 29, 24, 21, 21],
	["2 John", 13],
	["3 John", 15],
	["Jude", 25],
	["Revelation", 20, 29, 22, 11, 14, 17, 17, 13, 21, 11, 19, 17, 18, 20, 8, 21, 18, 24, 21, 15, 27, 21]];

function clearDropDown(dD) {
	while(dD.options.length > 0) {
		dD.remove(0);
	}
}

function getChapterCount(b) {
	return masterVerseCountArray[b - 1].length - 1;
}

function getVerseCount(b, c) {
	return masterVerseCountArray[b - 1][c];
}

function populateChapters(b) {
	chapDropDown = document.getElementById("chapselect");
	clearDropDown(chapDropDown);
	var numOfChapters = 150; // Just in case.
	var numOfChapters = getChapterCount(b);
	for (var i = 1; i <= numOfChapters; i++) {
		var newOption = document.createElement("option");
		newOption.text = i;
		chapDropDown.add(newOption);
	}
}

function populateVerses(b, c) {
	versDropDown = document.getElementById("versselect");
	clearDropDown(versDropDown);
	var numOfVerses = 100; // Just in case.
	var numOfVerses = getVerseCount(b, c);
	for (var i = 1; i <= numOfVerses; i++) {
		var newOption = document.createElement("option");
		newOption.value = i;
		newOption.text = i;
		versDropDown.add(newOption);
	}
}

function resetDropdown(dD) {
	clearDropDown(dD);
	var newOption = document.createElement("option");
	newOption.value = "0";
	newOption.text = String.fromCharCode(215);
	dD.add(newOption);
}

function updateAll(dD) {
	var bookDropDown = document.getElementById("bookselect");
	var chapDropDown = document.getElementById("chapselect");
	var versDropDown = document.getElementById("versselect");

	var selBk = bookDropDown.value;
	var selCh = chapDropDown.value;
	var selVs = versDropDown.value;

	if (dD == bookDropDown) {
		populateChapters(dD.value);
		resetDropdown(versDropDown);
		displayBiblioPage(selBk, selCh, selVs);
	}
	if (dD == chapDropDown) {
		populateVerses(bookDropDown.value, dD.value);
		displayBiblioPage(selBk, selCh, selVs);
	}
	if (dD == versDropDown) {
		displayBiblioPage(selBk, selCh, selVs);
	}
}

function displayBiblioPage(book, chap, vers) {

	function pad(num, targleng) {
		var s = num + "";
		while (s.length < targleng) {
			s = "0" + s;
		}
		return s;
	}

	function intMap(src, srcMin, srcMax, tarMin, tarMax) {
		return parseInt(tarMin + (tarMax - tarMin) * (src - srcMin) / (srcMax - srcMin));
	}

	function getBiblioIndex(BibleIndex) {
		var cumPage = intMap(BibleIndex, 00000000, 66022021, 1, 1000);
		var vol = parseInt(cumPage / 250) + 1;
		var page = cumPage % 250;
		return "" + pad(vol, 1) + pad(page, 4);
	}

	function extBiblioVol(BiblioInd) {
		var v = BiblioInd.toString().substring(0, 1);
		return parseInt(v);
	}

	function extBiblioPage(BiblioInd) {
		var p = BiblioInd.toString().substring(1, 5);
		return parseInt(p);
	}

	function buildBiblioStr(vol, page) {
		var pageStr = "Bibliotheca Volume ";
		pageStr += vol;
		pageStr += ", page ";
		pageStr += page;
		return pageStr;
	}

	function getVolColor(v) {
		switch (v) {
			case 1:
				return "#bbbbbb";
				break;
			case 2:
				return "#999999";
				break;
			case 3:
				return "#666666";
				break;
			case 4:
				return "#333333";
				break;
			default:
				return "null";
		}
	}

	function setText(ele, str) {
		ele.innerHTML = str;
	}

	function setBorderColor(ele, vol) {
		var color = getVolColor(vol);
		ele.style.borderColor = color;
	}

	function setTextColor(ele, vol) {
		var color = getVolColor(vol);
		ele.style.color = color;
	}

	function replaceClass(e, o, n) {
		var findRE = new RegExp("(?:^|\\s)" + o + "(?!\\S)", "g");
		var replace = " " + n;
		e.className = e.className.replace(findRE, replace);
	}

	function doHTMLMagic(str, vol) {
		var currentRef = document.getElementById("currentresult");
		var upcomingRef = document.getElementById("upcomingresult");
		var refBoxDiv = document.getElementById("bibliorefdiv");

		setText(upcomingRef, str);
		setTextColor(upcomingRef, vol);
		setBorderColor(refBoxDiv, vol);

		swapIds(upcomingRef, currentRef);
	}

	function doNewHTMLMagic(v, p) {
		var resultFull = document.getElementById("biblio_full")
		var volSpan = document.getElementById("biblio_vol");
		var pagSpan = document.getElementById("biblio_pag");
		var refBoxDiv = document.getElementById("bibliorefdiv");

		setTextColor(refBoxDiv, v);
		setBorderColor(refBoxDiv, v);
		setText(volSpan, v);
		setText(pagSpan, p);
	}

	if (book == "") {intBook = 0;}
	if (chap == "") {intChap = 0;}
	if (vers == "") {intVers = 0;}

	var BibleIndex = parseInt("" + pad(book, 2) + pad(chap, 3) + pad(vers, 3));
	var BiblioIndex = getBiblioIndex(BibleIndex);
	var BiblioVol = extBiblioVol(BiblioIndex);
	var BiblioPage = extBiblioPage(BiblioIndex);

	doNewHTMLMagic(BiblioVol, BiblioPage);
}