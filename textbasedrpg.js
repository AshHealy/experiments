
//Create a character and set the initial health
let character = {
    name: "",
    health: 100
  };
  
  //Create a function to get user input and set character name
  function getName() {
    let name = prompt("What is your character's name?");
    character.name = name;
    console.log("Welcome " + character.name);
  }
  
  //Create a function to start the game
  function startGame() {
    console.log("Your journey has begun!");
    getName();
    mainMenu();
  }
  
  //Create a function to display the main menu
  function mainMenu() {
    console.log("Main Menu:");
    console.log("1. Explore");
    console.log("2. Shop");
    console.log("3. Check Character Stats");
    let choice = prompt("What would you like to do?");
    if (choice == 1) {
      explore();
    } else if (choice == 2) {
      shop();
    } else if (choice == 3) {
      checkStats();
    } else {
      console.log("Invalid choice, please try again!");
      mainMenu();
    }
  }
  
  //Create a function to explore a new area
  function explore() {
    console.log("You have entered a new area!");
    let randomNumber = Math.floor(Math.random() * 2) + 1;
    if (randomNumber == 1) {
      console.log("You have found some healing herbs! Your health has been restored!");
      character.health = 100;
    } else {
      console.log("You have encountered an enemy!");
      fight();
    }
    mainMenu();
  }
  
  //Create a function to visit the shop
  function shop() {
    console.log("Welcome to the shop!");
    console.log("You have " + character.gold + " gold.");
    console.log("1. Buy Healing Potion (50 gold)");
    console.log("2. Buy Weapon (100 gold)");
    let choice = prompt("What would you like to buy?");
    if (choice == 1) {
      if (character.gold >= 50) {
        console.log("You have purchased a healing potion!");
        character.gold -= 50;
        character.items.push("healing potion");
      } else {
        console.log("You do not have enough gold for that!");
      }
    } else if (choice == 2) {
      if (character.gold >= 100) {
        console.log("You have purchased a weapon!");
        character.gold -= 100;
        character.items.push("weapon");
      } else {
        console.log("You do not have enough gold for that!");
      }
    } else {
      console.log("Invalid choice, please try again!");
      shop();
    }
    mainMenu();
  }
  
  //Create a function to check the character's stats
  function checkStats() {
    console.log("Name: " + character.name);
    console.log("Health: " + character.health);
    console.log("Items: " + character.items);
    console.log("Gold: " + character.gold);
    mainMenu();
  }
  
  //Create a function to fight an enemy
  function fight() {
    // Enemy stats
    let enemy = {
      health: 50
    };
  
    // Player stats
    let player = {
      health: character.health,
      weapon: "fists"
    };
  
    // Check if the player has a weapon
    if (character.items.indexOf("weapon") > -1) {
      player.weapon = "weapon";
    }
  
    // Player attacks
    let playerAttack = Math.floor(Math.random() * 25) + 1;
    enemy.health -= playerAttack;
    console.log("You attack the enemy with your " + player.weapon + " for " + playerAttack + " damage!");
  
    // Enemy attacks
    let enemyAttack = Math.floor(Math.random() * 25) + 1;
    player.health -= enemyAttack;
    console.log("The enemy attacks you for " + enemyAttack + " damage!");
  
    // Check for victory
    if (enemy.health <= 0) {
      console.log("You have defeated the enemy!");
      character.gold += 25;
      console.log("You have gained 25 gold!");
    } else if (player.health <= 0) {
      console.log("You have been defeated!");
      startGame();
    } else {
      character.health = player.health;
      fight();
    }
  }
  
  //Start the game
  startGame();