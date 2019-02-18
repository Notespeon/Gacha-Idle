var gameData = {
	gold: 500,
	goldIncome: 0,
	incomeMulti: 1,
	charsOwned: [0,0,0],
	shinyOwned: [0,0,0],
	shinyCount: 0,
	shinyChance: 0,
	crateRoll: 0,
	shinyRoll: 0,
	units: [[],[],[]], //2D array for all units, 9+8 1*, 5+19 2*, 1+5 3*
	unitNames: [["Bob the Boulder (*)",
	"Rick the Rogue (*)",
	"Peter the Patient (*)",
	"Stacy the Storm (*)",
	"Vicky the Valiant (*)",
	"Sam the Savage (*)",
	"Henry the Hungry (*)",
	"Fae the Freak (*)",
	"Stan the Silent (*)",
	"Fin the Fang (*)",
	"Danny the Danger (*)",
	"Stephen the Shepherd(*)",
	"Chloe the Crooked (*)",
	"Gerald the Gravedigger (*)",
	"Winston the Wild (*)",
	"Terry the Thirst (*)",
	"Troy the Thug (*)"],
	["Percy the Prince (**)", 
	"Marvin the Marked (**)", 
	"Carl the Cruel (**)", 
	"Fred the Fury (**)",
	"Ann the Anomaly (**)",
	"Vanessa the Vulture (**)",
	"Sophie the Silent (**)",
	"Ernie the Enigma (**)",
	"Dobby the Defiant (**)",
	"Meridith the Monster (**)",
	"Vernon the Viper (**)",
	"Charlie the Challenger (**)",
	"Felice the Flame (**)",
	"Curt the Colossal (**)",
	"Figaro the Fearless (**)",
	"Bron the Bear (**)",
	"Harry the Horror (**)",
	"Isaac the Impure (**)",
	"Wesley the Wonder (**)",
	"Gabriel the Grim (**)",
	"Hayden the Hurricane (**)",
	"Tiny the Titan (**)",
	"Mia the Menace (**)",
	"Ethan the Exalted (**)"],
	["Patrick the Phantom (***)",
	"Ulysses the Undying (***)",
	"David the Dragonheart (***)",
	"Steven the Serpent (***)",
	"Penelope the Paragon (***)",
	"Andrew the Army (***)"]],
	thePhantom: 0,
	thePrince: 0,
	theMarked: 0,
	theCruel: 0,
	theFury: 0,
	theAnomaly: 0,
	theBoulder: 0,
	theRogue: 0,
	thePatient: 0,
	theStorm: 0,
	theValiant: 0,
	initial: 0
}

function tab(tab) {
	document.getElementById("buyCrateMenu").style.display = "none"
	document.getElementById("charCollection").style.display = "none"
	document.getElementById(tab).style.display = "inline-block"
	if(tab == 'charCollection') {
		document.getElementById("collect").className = "active"
		document.getElementById("cratemenu").className = "inactive"
	} else if (tab == 'buyCrateMenu') {
		document.getElementById("cratemenu").className = "active"
		document.getElementById("collect").className = "inactive"
	}
}

tab("buyCrateMenu")

function rollUnit(starNumber, unitNumber) {
	if (starNumber == 0) {
		gameData.shinyChance = 100
	} else if (starNumber == 1) {
		gameData.shinyChance = 10
	} else if (starNumber == 2) {
		gameData.shinyChance = 1
	}
	if (gameData.units[starNumber][unitNumber] == 1 && gameData.shinyRoll < gameData.shinyChance) {
		gameData.units[starNumber][unitNumber] = 2
		gameData.shinyOwned[starNumber] += 1
		document.getElementById("helpfulMessage").className = "shiny-alert"
	} else if (gameData.units[starNumber][unitNumber] == 1 || gameData.units[starNumber][unitNumber] == 2) {
		document.getElementById("helpfulMessage").className = "dupe-alert"
	}
	if (gameData.units[starNumber][unitNumber] == 0) {
		gameData.units[starNumber][unitNumber] = 1
		gameData.charsOwned[starNumber] += 1
	} 
	document.getElementById("helpfulMessage").innerHTML = "You Received " + gameData.unitNames[starNumber][unitNumber]
}

function openCrate1() {
	if(gameData.gold >= 100) {
		document.getElementById("helpfulMessage").className = "helpful-message"
		gameData.gold -= 100
		gameData.crateRoll = Math.floor(Math.random() * 1000)
		gameData.shinyRoll = Math.floor(Math.random() * 1000)

		if (gameData.crateRoll < 1) {
			rollUnit(2, 0) //3 stars, unit 1
		} else if (gameData.crateRoll < 20) {
			rollUnit(1, 0) //2 stars, unit 1
		} else if (gameData.crateRoll < 40) {
			rollUnit(1, 1)
		} else if (gameData.crateRoll < 60) {
			rollUnit(1, 2)
		} else if (gameData.crateRoll < 80) {
			rollUnit(1, 3)
		} else if (gameData.crateRoll < 100) {
			rollUnit(1, 4)
		} else if (gameData.crateRoll < 200) {
			rollUnit(0, 0)
		} else if (gameData.crateRoll < 300) {
			rollUnit(0, 1)
		} else if (gameData.crateRoll < 400) {
			rollUnit(0, 2)
		} else if (gameData.crateRoll < 500) {
			rollUnit(0, 3)
		} else if (gameData.crateRoll < 600) {
			rollUnit(0, 4)
		} else if (gameData.crateRoll < 700) {
			rollUnit(0, 5)
		} else if (gameData.crateRoll < 800) {	
			rollUnit(0, 6)
		} else if (gameData.crateRoll < 900) {
			rollUnit(0, 7)
		} else if (gameData.crateRoll < 1000) {
			rollUnit(0, 8)
		}
		document.getElementById("goldOwned").innerHTML = gameData.gold + " Gold"
	}
}

function openCrate2() {
	if(gameData.gold >= 10000) {
		document.getElementById("helpfulMessage").className = "helpful-message"
		gameData.gold -= 10000
		gameData.crateRoll = Math.floor(Math.random() * 1000)
		gameData.shinyRoll = Math.floor(Math.random() * 1000)
		if (gameData.crateRoll < 2) {
			rollUnit(2,1) //3 stars, unit 2
		} else if (gameData.crateRoll < 4) {
			rollUnit(2,2)
		} else if (gameData.crateRoll < 6) {
			rollUnit(2,3)
		} else if (gameData.crateRoll < 8) {
			rollUnit(2,4)
		} else if (gameData.crateRoll < 10) {
			rollUnit(2,5)
		} else if (gameData.crateRoll < 20) {
			rollUnit(1,5)
		} else if (gameData.crateRoll < 30) {
			rollUnit(1,6)
		} else if (gameData.crateRoll < 40) {
			rollUnit(1,7)
		} else if (gameData.crateRoll < 50) {
			rollUnit(1,8)
		} else if (gameData.crateRoll < 60) {
			rollUnit(1,9)
		} else if (gameData.crateRoll < 70) {
			rollUnit(1,10)
		} else if (gameData.crateRoll < 80) {
			rollUnit(1,11)
		} else if (gameData.crateRoll < 90) {
			rollUnit(1,12)
		} else if (gameData.crateRoll < 100) {
			rollUnit(1,13)
		} else if (gameData.crateRoll < 110) {
			rollUnit(1,14)
		} else if (gameData.crateRoll < 120) {
			rollUnit(1,15)
		} else if (gameData.crateRoll < 130) {
			rollUnit(1,16)
		} else if (gameData.crateRoll < 140) {
			rollUnit(1,17)
		} else if (gameData.crateRoll < 150) {
			rollUnit(1,18)
		} else if (gameData.crateRoll < 160) {
			rollUnit(1,19)
		} else if (gameData.crateRoll < 170) {
			rollUnit(1,20)
		} else if (gameData.crateRoll < 180) {
			rollUnit(1,21)
		} else if (gameData.crateRoll < 190) {
			rollUnit(1,22)
		} else if (gameData.crateRoll < 200) {
			rollUnit(1,23)
		} else if (gameData.crateRoll < 300) {
			rollUnit(0,9)
		} else if (gameData.crateRoll < 400) {
			rollUnit(0,10)
		} else if (gameData.crateRoll < 500) {
			rollUnit(0,11)
		} else if (gameData.crateRoll < 600) {
			rollUnit(0,12)
		} else if (gameData.crateRoll < 700) {
			rollUnit(0,13)
		} else if (gameData.crateRoll < 800) {
			rollUnit(0,14)
		} else if (gameData.crateRoll < 900) {
			rollUnit(0,15)
		} else if (gameData.crateRoll < 1000) {
			rollUnit(0,16)
		}
		document.getElementById("goldOwned").innerHTML = gameData.gold + " Gold"
	}
}

var mainGameLoop = window.setInterval(function() {
	if (gameData.initial == 0) {
		for (i = 0; i < 3; i++) {
			for (j = 0; j <25; j++)
			gameData.units[i][j] = 0
		}
		gameData.initial = 1
	}

	gameData.shinyCount = gameData.shinyOwned[0] + gameData.shinyOwned[1] + gameData.shinyOwned[2]
	gameData.incomeMulti = (1+(gameData.shinyOwned[0]*0.1)+gameData.shinyOwned[1]+(gameData.shinyOwned[2]*10))
	gameData.goldIncome = Math.floor((gameData.charsOwned[0] + gameData.charsOwned[1]*5 + gameData.charsOwned[2]*100)*gameData.incomeMulti)
	gameData.gold += gameData.goldIncome
	document.getElementById("goldOwned").innerHTML = gameData.gold + " Gold"
	document.getElementById("charactersOwned1").innerHTML = "You own ("+ gameData.charsOwned[0] +"/17) 1 star characters, producing " + gameData.charsOwned[0]*1 + " gold per second"
	document.getElementById("charactersOwned2").innerHTML = "You own ("+ gameData.charsOwned[1] +"/24) 2 star characters, producing " + gameData.charsOwned[1]*5 + " gold per second"
	document.getElementById("charactersOwned3").innerHTML = "You own ("+ gameData.charsOwned[2] +"/6) 3 star characters, producing " + gameData.charsOwned[2]*100 + " gold per second"
	document.getElementById("shiniesOwned").innerHTML = "You have a " + Math.round(gameData.incomeMulti*10)/10 + "x multiplier from collecting " + gameData.shinyCount + " rainbow characters, " + gameData.shinyOwned[0] + " *, " + gameData.shinyOwned[1] + " **, " + gameData.shinyOwned[2] + " ***"
	document.getElementById("totalIncome").innerHTML = "You are currently earning " + gameData.goldIncome + " Gold per second"

	var wrapper = document.getElementById("starterCrateWrapper");
	var myHTML = '';

	for (i = 0; i < 9; i++) {
		if(gameData.units[0][i] == 0) {
			myHTML += '<span style="color:#b3b3b3">' + gameData.unitNames[0][i] + '</span><br/><br/>';
		} else if (gameData.units[0][i] == 1) {
			myHTML += '<span style="color:black">' + gameData.unitNames[0][i] + '</span><br/><br/>';
		} else if (gameData.units[0][i] == 2) {
			myHTML += '<span style="color:red"><b>' + gameData.unitNames[0][i] + '</b></span><br/><br/>';
		}
	}
	for (i = 0; i < 5; i++) {
		if(gameData.units[1][i] == 0) {
			myHTML += '<span style="color:#b3b3b3">' + gameData.unitNames[1][i] + '</span><br/><br/>';
		} else if (gameData.units[1][i] == 1) {
			myHTML += '<span style="color:black">' + gameData.unitNames[1][i] + '</span><br/><br/>';
		} else if (gameData.units[1][i] == 2) {
			myHTML += '<span style="color:red"><b>' + gameData.unitNames[1][i] + '</b></span><br/><br/>';
		}
	}
	for (i = 0; i < 1; i++) {
		if(gameData.units[2][i] == 0) {
			myHTML += '<span style="color:#b3b3b3">' + gameData.unitNames[2][i] + '</span><br/><br/>';
		} else if (gameData.units[2][i] == 1) {
			myHTML += '<span style="color:black">' + gameData.unitNames[2][i] + '</span><br/><br/>';
		} else if (gameData.units[2][i] == 2) {
			myHTML += '<span style="color:red"><b>' + gameData.unitNames[2][i] + '</b></span><br/><br/>';
		}
	}
	wrapper.innerHTML = myHTML

	var wrapper = document.getElementById("beginnerCrateWrapper");
	var myHTML = '';

	for (i = 9; i < 17; i++) {
		if(gameData.units[0][i] == 0) {
			myHTML += '<span style="color:#b3b3b3">' + gameData.unitNames[0][i] + '</span><br/><br/>';
		} else if (gameData.units[0][i] == 1) {
			myHTML += '<span style="color:black">' + gameData.unitNames[0][i] + '</span><br/><br/>';
		} else if (gameData.units[0][i] == 2) {
			myHTML += '<span style="color:red"><b>' + gameData.unitNames[0][i] + '</b></span><br/><br/>';
		}
	}
	for (i = 5; i < 24; i++) {
		if(gameData.units[1][i] == 0) {
			myHTML += '<span style="color:#b3b3b3">' + gameData.unitNames[1][i] + '</span><br/><br/>';
		} else if (gameData.units[1][i] == 1) {
			myHTML += '<span style="color:black">' + gameData.unitNames[1][i] + '</span><br/><br/>';
		} else if (gameData.units[1][i] == 2) {
			myHTML += '<span style="color:red"><b>' + gameData.unitNames[1][i] + '</b></span><br/><br/>';
		}
	}
	for (i = 1; i < 6; i++) {
		if(gameData.units[2][i] == 0) {
			myHTML += '<span style="color:#b3b3b3">' + gameData.unitNames[2][i] + '</span><br/><br/>';
		} else if (gameData.units[2][i] == 1) {
			myHTML += '<span style="color:black">' + gameData.unitNames[2][i] + '</span><br/><br/>';
		} else if (gameData.units[2][i] == 2) {
			myHTML += '<span style="color:red"><b>' + gameData.unitNames[2][i] + '</b></span><br/><br/>';
		}
	}
	wrapper.innerHTML = myHTML

}, 1000)

//var saveGameLoop = window.setInterval(function() {
//	localStorage.setItem('gachaIdleSave', JSON.stringify(gameData))
//}, 15000)

//var savegame = JSON.parse(localStorage.getItem("gachaIdleSave"))
//if (savegame !== null) {
//	gameData = savegame
//}