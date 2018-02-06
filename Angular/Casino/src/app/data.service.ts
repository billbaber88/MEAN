import { Injectable } from '@angular/core';

@Injectable()
export class DataService {
  gold: number =  20;
  logData: string[] = [];
  winnings: number;
  wingdings: boolean;
  bet: number;
  netWinnings: number;

  constructor() { }

  spin(sender: string){
    let results = Math.random();
    // this reverses the logData array so we can input our new strings at the end of the array
    this.logData.reverse();

    if(sender === "easy"){
      this.bet = 5;
      if (this.gold< 5){
        this.logData.push("You don't have enough money for that spin. Please take out a second mortgage or move to a different machine.")
        this.logData.reverse();
        return;
      } else {
        console.log("Player paid $5 to spin!")
        if(results < .50){
          this.winnings = 0;
        } else {
        this.winnings = (Math.floor(Math.random() * 10)+1)
        }
      }
    } else if(sender === "medium"){
      this.bet = 10;
      if (this.gold<10){
        this.logData.push("You don't have enough money for that spin. Please take out a second mortgage or move to a different machine.")
        this.logData.reverse();
        return;
      } else {
        console.log("Player paid $10 to spin!")
        if(results < .50){
          this.winnings = 0;
        } else {
        this.winnings= (Math.floor(Math.random() * 50)+1);
        }
      }
    } else if(sender === "hard"){
      this.bet = 50;
      if (this.gold<50){
        this.logData.push("You don't have enough money for that spin. Please take out a second mortgage or move to a different machine.")
        this.logData.reverse();
        return;
      } else {  
        if(results < .50){
          this.winnings = 0;
        } else {
          this.winnings = (Math.floor(Math.random() * 150)+1);
        }
      }
    } else if(sender === "nightmare"){
      this.bet = 100;
      if (this.gold<100){
        this.logData.push("You don't have enough money for that spin. Please take out a second mortgage or move to a different machine.")
        this.logData.reverse();
        return;
      } else {  
        if(results < .50){
          this.winnings = 0;
        } else {
        this.winnings= (Math.floor(Math.random() * 500)+1);
        }   
    }
  } else if(sender === 'loan'){
    this.logData.push("Player received $500 from the Casino. Don't lose it all or we'll break your legs!");
    this.logData.reverse();
    this.gold += 500;
    return;
  }
    
  this.netWinnings = this.winnings-this.bet;

    console.log(this.winnings);
    if(this.winnings > 0){
      if(this.netWinnings < 0){
        this.logData.push("You paid $" + this.bet + " to spin and won $" + this.winnings + "! Overall you had a net loss of $" + (this.netWinnings *-1) + ".")
      } else {
        this.logData.push("You paid $" + this.bet + " to spin and won $" + this.winnings + "! You gained a total of $" + this.netWinnings + " with this spin.")
      }
      
    } else {
      this.logData.push("You won nothing! The casino thanks you for your donation of $" + this.bet + "!");
    }    
    // Switches the array around so we see the most recent strings at the top of the html list. The reverse function above switches it back for pushing new strings to the end of the array
    this.logData.reverse();
    return [this.gold += this.netWinnings];
    }
  

}
