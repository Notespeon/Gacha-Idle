var gameData = {
	gold: 500,
	goldIncome: 0,
	incomeMulti: 1,
	charsOwned1: 0,
	charsOwned2: 0,
	charsOwned3: 0,
	shinyOwned1: 0,
	shinyOwned2: 0,
	shinyOwned3: 0,
	shinyCount: 0,
	crateRoll: 0,
	shinyRoll: 0,
	unitsA: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], //9 in Pack 1, 8 in Pack 2
	unitsB: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], //5 in Pack 1, 19 in Pack 2
	unitsC: [0,0,0,0,0,0], //1 in Pack 1, 5 in Pack 2
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
	theValiant: 0
}

function openCrate1() {
	if(gameData.gold >= 100) {
		document.getElementById("helpfulMessage").className = "helpful-message"
		gameData.gold -= 100
		gameData.crateRoll = Math.floor(Math.random() * 1000)
		gameData.shinyRoll = Math.floor(Math.random() * 1000)
		//document.getElementById("helpfulMessage").innerHTML = gameData.crateRoll + " Was Your Roll"
		if (gameData.crateRoll == 0) {
			if (gameData.unitsC[0] == 1 && gameData.shinyRoll == 0) {
				gameData.unitsC[0] = 2
				gameData.shinyOwned3 += 1
				document.getElementById("helpfulMessage").className = "shiny-alert"
			} else if (gameData.unitsC[0] == 1 || gameData.unitsC[0] == 2) {
				document.getElementById("helpfulMessage").className = "dupe-alert"
			}
			if (gameData.unitsC[0] == 0) {
				gameData.unitsC[0] = 1
				gameData.charsOwned3 += 1
			} 
			document.getElementById("helpfulMessage").innerHTML = "You Received Patrick the Phantom (***)"
		} else if (gameData.crateRoll < 20) {
			if (gameData.unitsB[0] == 1 && gameData.shinyRoll < 10) {
				gameData.unitsB[0] = 2
				gameData.shinyOwned2 += 1
				document.getElementById("helpfulMessage").className = "shiny-alert"
			} else if (gameData.unitsB[0] == 1 || gameData.unitsB[0] == 2) {
				document.getElementById("helpfulMessage").className = "dupe-alert"
			}
			if (gameData.unitsB[0] == 0) {
				gameData.unitsB[0] = 1
				gameData.charsOwned2 += 1
			}
			document.getElementById("helpfulMessage").innerHTML = "You Received Percy the Prince (**)"
		} else if (gameData.crateRoll < 40) {
			if (gameData.unitsB[1] == 1 && gameData.shinyRoll < 10) {
				gameData.unitsB[1] = 2
				gameData.shinyOwned2 += 1
				document.getElementById("helpfulMessage").className = "shiny-alert"
			} else if (gameData.unitsB[1] == 1 || gameData.unitsB[1] == 2) {
				document.getElementById("helpfulMessage").className = "dupe-alert"
			}
			if (gameData.unitsB[1] == 0) {
				gameData.unitsB[1] = 1
				gameData.charsOwned2 += 1
			}
			document.getElementById("helpfulMessage").innerHTML = "You Received Marvin the Marked (**)"
		} else if (gameData.crateRoll < 60) {
			if (gameData.unitsB[2] == 1 && gameData.shinyRoll < 10) {
				gameData.unitsB[2] = 2
				gameData.shinyOwned2 += 1
				document.getElementById("helpfulMessage").className = "shiny-alert"
			} else if (gameData.unitsB[2] == 1 || gameData.unitsB[2] == 2) {
				document.getElementById("helpfulMessage").className = "dupe-alert"
			}
			if (gameData.unitsB[2] == 0) {
				gameData.unitsB[2] = 1
				gameData.charsOwned2 += 1
			}
			document.getElementById("helpfulMessage").innerHTML = "You Received Carl the Cruel (**)"
		} else if (gameData.crateRoll < 80) {
			if (gameData.unitsB[3] == 1 && gameData.shinyRoll < 10) {
				gameData.unitsB[3] = 2
				gameData.shinyOwned2 += 1
				document.getElementById("helpfulMessage").className = "shiny-alert"
			} else if (gameData.unitsB[3] == 1 || gameData.unitsB[3] == 2) {
				document.getElementById("helpfulMessage").className = "dupe-alert"
			}
			if (gameData.unitsB[3] == 0) {
				gameData.unitsB[3] = 1
				gameData.charsOwned2 += 1
			}
			document.getElementById("helpfulMessage").innerHTML = "You Received Fred the Fury (**)"
		} else if (gameData.crateRoll < 100) {
			if (gameData.unitsB[4] == 1 && gameData.shinyRoll < 10) {
				gameData.unitsB[4] = 2
				gameData.shinyOwned2 += 1
				document.getElementById("helpfulMessage").className = "shiny-alert"
			} else if (gameData.unitsB[4] == 1 || gameData.unitsB[4] == 2) {
				document.getElementById("helpfulMessage").className = "dupe-alert"
			}
			if (gameData.unitsB[4] == 0) {
				gameData.unitsB[4] = 1
				gameData.charsOwned2 += 1
			}
			document.getElementById("helpfulMessage").innerHTML = "You Received Ann the Anomaly (**)"
		} else if (gameData.crateRoll < 200) {
			if (gameData.unitsA[0] == 1 && gameData.shinyRoll < 100) {
				gameData.unitsA[0] = 2
				gameData.shinyOwned1 += 1
				document.getElementById("helpfulMessage").className = "shiny-alert"
			} else if (gameData.unitsA[0] == 1 || gameData.unitsA[0] == 2) {
				document.getElementById("helpfulMessage").className = "dupe-alert"
			}
			if (gameData.unitsA[0] == 0) {
				gameData.unitsA[0] = 1
				gameData.charsOwned1 += 1
			}
			document.getElementById("helpfulMessage").innerHTML = "You Received Bob the Boulder (*)"
		} else if (gameData.crateRoll < 300) {
			if (gameData.unitsA[1] == 1 && gameData.shinyRoll < 100) {
				gameData.unitsA[1] = 2
				gameData.shinyOwned1 += 1
				document.getElementById("helpfulMessage").className = "shiny-alert"
			} else if (gameData.unitsA[1] == 1 || gameData.unitsA[1] == 2) {
				document.getElementById("helpfulMessage").className = "dupe-alert"
			}
			if (gameData.unitsA[1] == 0) {
				gameData.unitsA[1] = 1
				gameData.charsOwned1 += 1
			}
			document.getElementById("helpfulMessage").innerHTML = "You Received Rick the Rogue (*)"
		} else if (gameData.crateRoll < 400) {
			if (gameData.unitsA[2] == 1 && gameData.shinyRoll < 100) {
				gameData.unitsA[2] = 2
				gameData.shinyOwned1 += 1
				document.getElementById("helpfulMessage").className = "shiny-alert"
			} else if (gameData.unitsA[2] == 1 || gameData.unitsA[2] == 2) {
				document.getElementById("helpfulMessage").className = "dupe-alert"
			}
			if (gameData.unitsA[2] == 0) {
				gameData.unitsA[2] = 1
				gameData.charsOwned1 += 1
				
			}
			document.getElementById("helpfulMessage").innerHTML = "You Received Peter the Patient (*)"
		} else if (gameData.crateRoll < 500) {
			if (gameData.unitsA[3] == 1 && gameData.shinyRoll < 100) {
				gameData.unitsA[3] = 2
				gameData.shinyOwned1 += 1
				document.getElementById("helpfulMessage").className = "shiny-alert"
			} else if (gameData.unitsA[3] == 1 || gameData.unitsA[3] == 2) {
				document.getElementById("helpfulMessage").className = "dupe-alert"
			}
			if (gameData.unitsA[3] == 0) {
				gameData.unitsA[3] = 1
				gameData.charsOwned1 += 1
			}
			document.getElementById("helpfulMessage").innerHTML = "You Received Stacy the Storm (*)"
		} else if (gameData.crateRoll < 600) {
			if (gameData.unitsA[4] == 1 && gameData.shinyRoll < 100) {
				gameData.unitsA[4] = 2
				gameData.shinyOwned1 += 1
				document.getElementById("helpfulMessage").className = "shiny-alert"
			} else if (gameData.unitsA[4] == 1 || gameData.unitsA[4] == 2) {
				document.getElementById("helpfulMessage").className = "dupe-alert"
			}
			if (gameData.unitsA[4] == 0) {
				gameData.unitsA[4] = 1
				gameData.charsOwned1 += 1
			}
			document.getElementById("helpfulMessage").innerHTML = "You Received Vicky the Valiant (*)"
		} else if (gameData.crateRoll < 700) {
			if (gameData.unitsA[5] == 1 && gameData.shinyRoll < 100) {
				gameData.unitsA[5] = 2
				gameData.shinyOwned1 += 1
				document.getElementById("helpfulMessage").className = "shiny-alert"
			} else if (gameData.unitsA[5] == 1 || gameData.unitsA[5] == 2) {
				document.getElementById("helpfulMessage").className = "dupe-alert"
			}
			if (gameData.unitsA[5] == 0) {
				gameData.unitsA[5] = 1
				gameData.charsOwned1 += 1
			}
			document.getElementById("helpfulMessage").innerHTML = "You Received Sam the Savage (*)"
		} else if (gameData.crateRoll < 800) {	
			if (gameData.unitsA[6] == 1 && gameData.shinyRoll < 100) {
				gameData.unitsA[6] = 2
				gameData.shinyOwned1 += 1
				document.getElementById("helpfulMessage").className = "shiny-alert"
			} else if (gameData.unitsA[6] == 1 || gameData.unitsA[6] == 2) {
				document.getElementById("helpfulMessage").className = "dupe-alert"
			}
			if (gameData.unitsA[6] == 0) {
				gameData.unitsA[6] = 1
				gameData.charsOwned1 += 1
			}
			document.getElementById("helpfulMessage").innerHTML = "You Received Henry the Hungry (*)"
		} else if (gameData.crateRoll < 900) {
			if (gameData.unitsA[7] == 1 && gameData.shinyRoll < 100) {
				gameData.unitsA[7] = 2
				gameData.shinyOwned1 += 1
				document.getElementById("helpfulMessage").className = "shiny-alert"
			} else if (gameData.unitsA[7] == 1 || gameData.unitsA[7] == 2) {
				document.getElementById("helpfulMessage").className = "dupe-alert"
			}
			if (gameData.unitsA[7] == 0) {
				gameData.unitsA[7] = 1
				gameData.charsOwned1 += 1
			}
			document.getElementById("helpfulMessage").innerHTML = "You Received Fae the Freak (*)"
		} else if (gameData.crateRoll < 1000) {
			if (gameData.unitsA[8] == 1 && gameData.shinyRoll < 100) {
				gameData.unitsA[8] = 2
				gameData.shinyOwned1 += 1
				document.getElementById("helpfulMessage").className = "shiny-alert"
			} else if (gameData.unitsA[8] == 1 || gameData.unitsA[8] == 2) {
				document.getElementById("helpfulMessage").className = "dupe-alert"
			}
			if (gameData.unitsA[8] == 0) {
				gameData.unitsA[8] = 1
				gameData.charsOwned1 += 1
			}
			document.getElementById("helpfulMessage").innerHTML = "You Received Stan the Silent (*)"
		}
		document.getElementById("goldOwned").innerHTML = gameData.gold + " Gold"
	}
}

function openCrate2() {
	if(gameData.gold >= 10000) {
		document.getElementById("helpfulMessage2").className = "helpful-message"
		gameData.gold -= 10000
		gameData.crateRoll = Math.floor(Math.random() * 1000)
		gameData.shinyRoll = Math.floor(Math.random() * 1000)
		if (gameData.crateRoll < 2) {
			if (gameData.unitsC[1] == 0) {
				gameData.unitsC[1] = 1
				gameData.charsOwned3 += 1
			}
			if (gameData.unitsC[1] == 1 && gameData.shinyRoll == 0) {
				gameData.unitsC[1] = 2
				gameData.shinyOwned3 += 1
				document.getElementById("helpfulMessage2").className = "shiny-alert"
			}
			document.getElementById("helpfulMessage2").innerHTML = "You Received Ulysses the Undying (***)"
		} else if (gameData.crateRoll < 4) {
			if (gameData.unitsC[2] == 0) {
				gameData.unitsC[2] = 1
				gameData.charsOwned3 += 1
			}
			if (gameData.unitsC[2] == 1 && gameData.shinyRoll == 0) {
				gameData.unitsC[2] = 2
				gameData.shinyOwned3 += 1
				document.getElementById("helpfulMessage2").className = "shiny-alert"
			}
			document.getElementById("helpfulMessage2").innerHTML = "You Received David the Dragonheart (***)"
		} else if (gameData.crateRoll < 6) {
			if (gameData.unitsC[3] == 0) {
				gameData.unitsC[3] = 1
				gameData.charsOwned3 += 1
			}
			if (gameData.unitsC[3] == 1 && gameData.shinyRoll == 0) {
				gameData.unitsC[3] = 2
				gameData.shinyOwned3 += 1
				document.getElementById("helpfulMessage2").className = "shiny-alert"
			}
			document.getElementById("helpfulMessage2").innerHTML = "You Received Steven the Serpent (***)"
		} else if (gameData.crateRoll < 8) {
			if (gameData.unitsC[4] == 0) {
				gameData.unitsC[4] = 1
				gameData.charsOwned3 += 1
			}
			if (gameData.unitsC[4] == 1 && gameData.shinyRoll == 0) {
				gameData.unitsC[4] = 2
				gameData.shinyOwned3 += 1
				document.getElementById("helpfulMessage2").className = "shiny-alert"
			}
			document.getElementById("helpfulMessage2").innerHTML = "You Received Penelope the Paragon (***)"
		} else if (gameData.crateRoll < 10) {
			if (gameData.unitsC[5] == 0) {
				gameData.unitsC[5] = 1
				gameData.charsOwned3 += 1
			}
			if (gameData.unitsC[5] == 1 && gameData.shinyRoll == 0) {
				gameData.unitsC[5] = 2
				gameData.shinyOwned3 += 1
				document.getElementById("helpfulMessage2").className = "shiny-alert"
			}
			document.getElementById("helpfulMessage2").innerHTML = "You Received Andrew the Army (***)"
		} else if (gameData.crateRoll < 20) {
			if (gameData.unitsB[5] == 0) {
				gameData.unitsB[5] = 1
				gameData.charsOwned2 += 1
			}
			if (gameData.unitsB[5] == 1 && gameData.shinyRoll < 10) {
				gameData.unitsB[5] = 2
				gameData.shinyOwned2 += 1
				document.getElementById("helpfulMessage2").className = "shiny-alert"
			}
			document.getElementById("helpfulMessage2").innerHTML = "You Received Vanessa the Vulture (**)"
		} else if (gameData.crateRoll < 30) {
			if (gameData.unitsB[6] == 0) {
				gameData.unitsB[6] = 1
				gameData.charsOwned2 += 1
			}
			if (gameData.unitsB[6] == 1 && gameData.shinyRoll < 10) {
				gameData.unitsB[6] = 2
				gameData.shinyOwned2 += 1
				document.getElementById("helpfulMessage2").className = "shiny-alert"
			}
			document.getElementById("helpfulMessage2").innerHTML = "You Received Sophie the Silent (**)"
		} else if (gameData.crateRoll < 40) {
			if (gameData.unitsB[7] == 0) {
				gameData.unitsB[7] = 1
				gameData.charsOwned2 += 1
			}
			if (gameData.unitsB[7] == 1 && gameData.shinyRoll < 10) {
				gameData.unitsB[7] = 2
				gameData.shinyOwned2 += 1
				document.getElementById("helpfulMessage2").className = "shiny-alert"
			}
			document.getElementById("helpfulMessage2").innerHTML = "You Received Ernie the Enigma (**)"
		} else if (gameData.crateRoll < 50) {
			if (gameData.unitsB[8] == 0) {
				gameData.unitsB[8] = 1
				gameData.charsOwned2 += 1
			}
			if (gameData.unitsB[8] == 1 && gameData.shinyRoll < 10) {
				gameData.unitsB[8] = 2
				gameData.shinyOwned2 += 1
				document.getElementById("helpfulMessage2").className = "shiny-alert"
			}
			document.getElementById("helpfulMessage2").innerHTML = "You Received Dobby the Defiant (**)"
		} else if (gameData.crateRoll < 60) {
			if (gameData.unitsB[9] == 0) {
				gameData.unitsB[9] = 1
				gameData.charsOwned2 += 1
			}
			if (gameData.unitsB[9] == 1 && gameData.shinyRoll < 10) {
				gameData.unitsB[9] = 2
				gameData.shinyOwned2 += 1
				document.getElementById("helpfulMessage2").className = "shiny-alert"
			}
			document.getElementById("helpfulMessage2").innerHTML = "You Received Meridith the Monster (**)"
		} else if (gameData.crateRoll < 70) {
			if (gameData.unitsB[10] == 0) {
				gameData.unitsB[10] = 1
				gameData.charsOwned2 += 1
			}
			if (gameData.unitsB[10] == 1 && gameData.shinyRoll < 10) {
				gameData.unitsB[10] = 2
				gameData.shinyOwned2 += 1
				document.getElementById("helpfulMessage2").className = "shiny-alert"
			}
			document.getElementById("helpfulMessage2").innerHTML = "You Received Vernon the Viper (**)"
		} else if (gameData.crateRoll < 80) {
			if (gameData.unitsB[11] == 0) {
				gameData.unitsB[11] = 1
				gameData.charsOwned2 += 1
			}
			if (gameData.unitsB[11] == 1 && gameData.shinyRoll < 10) {
				gameData.unitsB[11] = 2
				gameData.shinyOwned2 += 1
				document.getElementById("helpfulMessage2").className = "shiny-alert"
			}
			document.getElementById("helpfulMessage2").innerHTML = "You Received Charlie the Challenger (**)"
		} else if (gameData.crateRoll < 90) {
			if (gameData.unitsB[12] == 0) {
				gameData.unitsB[12] = 1
				gameData.charsOwned2 += 1
			}
			if (gameData.unitsB[12] == 1 && gameData.shinyRoll < 10) {
				gameData.unitsB[12] = 2
				gameData.shinyOwned2 += 1
				document.getElementById("helpfulMessage2").className = "shiny-alert"
			}
			document.getElementById("helpfulMessage2").innerHTML = "You Received Felice the Flame (**)"
		} else if (gameData.crateRoll < 100) {
			if (gameData.unitsB[13] == 0) {
				gameData.unitsB[13] = 1
				gameData.charsOwned2 += 1
			}
			if (gameData.unitsB[13] == 1 && gameData.shinyRoll < 10) {
				gameData.unitsB[13] = 2
				gameData.shinyOwned2 += 1
				document.getElementById("helpfulMessage2").className = "shiny-alert"
			}
			document.getElementById("helpfulMessage2").innerHTML = "You Received Curt the Colossal (**)"
		} else if (gameData.crateRoll < 110) {
			if (gameData.unitsB[14] == 0) {
				gameData.unitsB[14] = 1
				gameData.charsOwned2 += 1
			}
			if (gameData.unitsB[14] == 1 && gameData.shinyRoll < 10) {
				gameData.unitsB[14] = 2
				gameData.shinyOwned2 += 1
				document.getElementById("helpfulMessage2").className = "shiny-alert"
			}
			document.getElementById("helpfulMessage2").innerHTML = "You Received Figaro the Fearless (**)"
		} else if (gameData.crateRoll < 120) {
			if (gameData.unitsB[15] == 0) {
				gameData.unitsB[15] = 1
				gameData.charsOwned2 += 1
			}
			if (gameData.unitsB[15] == 1 && gameData.shinyRoll < 10) {
				gameData.unitsB[15] = 2
				gameData.shinyOwned2 += 1
				document.getElementById("helpfulMessage2").className = "shiny-alert"
			}
			document.getElementById("helpfulMessage2").innerHTML = "You Received Bron the Bear (**)"
		} else if (gameData.crateRoll < 130) {
			if (gameData.unitsB[16] == 0) {
				gameData.unitsB[16] = 1
				gameData.charsOwned2 += 1
			}
			if (gameData.unitsB[16] == 1 && gameData.shinyRoll < 10) {
				gameData.unitsB[16] = 2
				gameData.shinyOwned2 += 1
				document.getElementById("helpfulMessage2").className = "shiny-alert"
			}
			document.getElementById("helpfulMessage2").innerHTML = "You Received Harry the Horror (**)"
		} else if (gameData.crateRoll < 140) {
			if (gameData.unitsB[17] == 0) {
				gameData.unitsB[17] = 1
				gameData.charsOwned2 += 1
			}
			if (gameData.unitsB[17] == 1 && gameData.shinyRoll < 10) {
				gameData.unitsB[17] = 2
				gameData.shinyOwned2 += 1
				document.getElementById("helpfulMessage2").className = "shiny-alert"
			}
			document.getElementById("helpfulMessage2").innerHTML = "You Received Isaac the Impure (**)"
		} else if (gameData.crateRoll < 150) {
			if (gameData.unitsB[18] == 0) {
				gameData.unitsB[18] = 1
				gameData.charsOwned2 += 1
			}
			if (gameData.unitsB[18] == 1 && gameData.shinyRoll < 10) {
				gameData.unitsB[18] = 2
				gameData.shinyOwned2 += 1
				document.getElementById("helpfulMessage2").className = "shiny-alert"
			}
			document.getElementById("helpfulMessage2").innerHTML = "You Received Wesley the Wonder (**)"
		} else if (gameData.crateRoll < 160) {
			if (gameData.unitsB[19] == 0) {
				gameData.unitsB[19] = 1
				gameData.charsOwned2 += 1
			}
			if (gameData.unitsB[19] == 1 && gameData.shinyRoll < 10) {
				gameData.unitsB[19] = 2
				gameData.shinyOwned2 += 1
				document.getElementById("helpfulMessage2").className = "shiny-alert"
			}
			document.getElementById("helpfulMessage2").innerHTML = "You Received Gabriel the Grim (**)"
		} else if (gameData.crateRoll < 170) {
			if (gameData.unitsB[20] == 0) {
				gameData.unitsB[20] = 1
				gameData.charsOwned2 += 1
			}
			if (gameData.unitsB[20] == 1 && gameData.shinyRoll < 10) {
				gameData.unitsB[20] = 2
				gameData.shinyOwned2 += 1
				document.getElementById("helpfulMessage2").className = "shiny-alert"
			}
			document.getElementById("helpfulMessage2").innerHTML = "You Received Hayden the Hurricane (**)"
		} else if (gameData.crateRoll < 180) {
			if (gameData.unitsB[21] == 0) {
				gameData.unitsB[21] = 1
				gameData.charsOwned2 += 1
			}
			if (gameData.unitsB[21] == 1 && gameData.shinyRoll < 10) {
				gameData.unitsB[21] = 2
				gameData.shinyOwned2 += 1
				document.getElementById("helpfulMessage2").className = "shiny-alert"
			}
			document.getElementById("helpfulMessage2").innerHTML = "You Received Tiny the Titan (**)"
		} else if (gameData.crateRoll < 190) {
			if (gameData.unitsB[22] == 0) {
				gameData.unitsB[22] = 1
				gameData.charsOwned2 += 1
			}
			if (gameData.unitsB[22] == 1 && gameData.shinyRoll < 10) {
				gameData.unitsB[22] = 2
				gameData.shinyOwned2 += 1
				document.getElementById("helpfulMessage2").className = "shiny-alert"
			}
			document.getElementById("helpfulMessage2").innerHTML = "You Received Mia the Menace (**)"
		} else if (gameData.crateRoll < 200) {
			if (gameData.unitsB[23] == 0) {
				gameData.unitsB[23] = 1
				gameData.charsOwned2 += 1
			}
			if (gameData.unitsB[23] == 1 && gameData.shinyRoll < 10) {
				gameData.unitsB[23] = 2
				gameData.shinyOwned2 += 1
				document.getElementById("helpfulMessage2").className = "shiny-alert"
			}
			document.getElementById("helpfulMessage2").innerHTML = "You Received Ethan the Exalted (**)"
		} else if (gameData.crateRoll < 300) {
			if (gameData.unitsA[9] == 0) {
				gameData.unitsA[9] = 1
				gameData.charsOwned1 += 1
			}
			if (gameData.unitsA[9] == 1 && gameData.shinyRoll < 100) {
				gameData.unitsA[9] = 2
				gameData.shinyOwned1 += 1
				document.getElementById("helpfulMessage2").className = "shiny-alert"
			}
			document.getElementById("helpfulMessage2").innerHTML = "You Received Fin the Fang (*)"
		} else if (gameData.crateRoll < 400) {
			if (gameData.unitsA[10] == 0) {
				gameData.unitsA[10] = 1
				gameData.charsOwned1 += 1
			}
			if (gameData.unitsA[10] == 1 && gameData.shinyRoll < 100) {
				gameData.unitsA[10] = 2
				gameData.shinyOwned1 += 1
				document.getElementById("helpfulMessage2").className = "shiny-alert"
			}
			document.getElementById("helpfulMessage2").innerHTML = "You Received Danny the Danger (*)"
		} else if (gameData.crateRoll < 500) {
			if (gameData.unitsA[11] == 0) {
				gameData.unitsA[11] = 1
				gameData.charsOwned1 += 1
			}
			if (gameData.unitsA[11] == 1 && gameData.shinyRoll < 100) {
				gameData.unitsA[11] = 2
				gameData.shinyOwned1 += 1
				document.getElementById("helpfulMessage2").className = "shiny-alert"
			}
			document.getElementById("helpfulMessage2").innerHTML = "You Received Stephen the Shepherd(*)"
		} else if (gameData.crateRoll < 600) {
			if (gameData.unitsA[12] == 0) {
				gameData.unitsA[12] = 1
				gameData.charsOwned1 += 1
			}
			if (gameData.unitsA[12] == 1 && gameData.shinyRoll < 100) {
				gameData.unitsA[12] = 2
				gameData.shinyOwned1 += 1
				document.getElementById("helpfulMessage2").className = "shiny-alert"
			}
			document.getElementById("helpfulMessage2").innerHTML = "You Received Chloe the Crooked (*)"
		} else if (gameData.crateRoll < 700) {
			if (gameData.unitsA[13] == 0) {
				gameData.unitsA[13] = 1
				gameData.charsOwned1 += 1
			}
			if (gameData.unitsA[13] == 1 && gameData.shinyRoll < 100) {
				gameData.unitsA[13] = 2
				gameData.shinyOwned1 += 1
				document.getElementById("helpfulMessage2").className = "shiny-alert"
			}
			document.getElementById("helpfulMessage2").innerHTML = "You Received Gerald the Gravedigger (*)"
		} else if (gameData.crateRoll < 800) {
			if (gameData.unitsA[14] == 0) {
				gameData.unitsA[14] = 1
				gameData.charsOwned1 += 1
			}
			if (gameData.unitsA[14] == 1 && gameData.shinyRoll < 100) {
				gameData.unitsA[14] = 2
				gameData.shinyOwned1 += 1
				document.getElementById("helpfulMessage2").className = "shiny-alert"
			}
			document.getElementById("helpfulMessage2").innerHTML = "You Received Winston the Wild (*)"
		} else if (gameData.crateRoll < 900) {
			if (gameData.unitsA[15] == 0) {
				gameData.unitsA[15] = 1
				gameData.charsOwned1 += 1
			}
			if (gameData.unitsA[15] == 1 && gameData.shinyRoll < 100) {
				gameData.unitsA[15] = 2
				gameData.shinyOwned1 += 1
				document.getElementById("helpfulMessage2").className = "shiny-alert"
			}
			document.getElementById("helpfulMessage2").innerHTML = "You Received Terry the Thirst (*)"
		} else if (gameData.crateRoll < 1000) {
			if (gameData.unitsA[16] == 0) {
				gameData.unitsA[16] = 1
				gameData.charsOwned1 += 1
			}
			if (gameData.unitsA[16] == 1 && gameData.shinyRoll < 100) {
				gameData.unitsA[16] = 2
				gameData.shinyOwned1 += 1
				document.getElementById("helpfulMessage2").className = "shiny-alert"
			}
			document.getElementById("helpfulMessage2").innerHTML = "You Received Troy the Thug (*)"
		}
		document.getElementById("goldOwned").innerHTML = gameData.gold + " Gold"
	}
}

var mainGameLoop = window.setInterval(function() {
	gameData.shinyCount = gameData.shinyOwned1 + gameData.shinyOwned2 + gameData.shinyOwned3
	gameData.incomeMulti = (1+(gameData.shinyOwned1*0.1)+gameData.shinyOwned2+(gameData.shinyOwned3*10))
	gameData.goldIncome = Math.floor((gameData.charsOwned1 + gameData.charsOwned2*5 + gameData.charsOwned3*100)*gameData.incomeMulti)
	gameData.gold += gameData.goldIncome
	document.getElementById("goldOwned").innerHTML = gameData.gold + " Gold"
	document.getElementById("charactersOwned1").innerHTML = "You own ("+ gameData.charsOwned1 +"/17) 1 star characters, producing " + gameData.charsOwned1*1 + " gold per second"
	document.getElementById("charactersOwned2").innerHTML = "You own ("+ gameData.charsOwned2 +"/24) 2 star characters, producing " + gameData.charsOwned2*5 + " gold per second"
	document.getElementById("charactersOwned3").innerHTML = "You own ("+ gameData.charsOwned3 +"/6) 3 star characters, producing " + gameData.charsOwned3*100 + " gold per second"
	document.getElementById("shiniesOwned").innerHTML = "You have a " + gameData.incomeMulti + "x multiplier from collecting " + gameData.shinyCount + " rainbow cards"
}, 1000)

//var saveGameLoop = window.setInterval(function() {
//	localStorage.setItem('gachaIdleSave', JSON.stringify(gameData))
//}, 15000)

//var savegame = JSON.parse(localStorage.getItem("gachaIdleSave"))
//if (savegame !== null) {
//	gameData = savegame
//}