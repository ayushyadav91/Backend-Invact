const cricketers = [
     { name: "Virat", eden_gardens: 72, wankhede_stadium: 88, feroz_shah_kotla: 45, chepauk: 74 },
     { name: "Rohit", eden_gardens: 64, wankhede_stadium: 41, feroz_shah_kotla: 68, chepauk: 34 },
     { name: "Shikhar", eden_gardens: 54, wankhede_stadium: 38, feroz_shah_kotla: 72, chepauk: 44 },
     { name: "Rishabh", eden_gardens: 22, wankhede_stadium: 27, feroz_shah_kotla: 34, chepauk: 51 }
   ];
   
   // Print the scores in the desired format
   for (let cricketer of cricketers) {
     console.log(`${cricketer.name}'s scores:`);
     console.log(`Eden Gardens: ${cricketer.eden_gardens}`);
     console.log(`Wankhede Stadium: ${cricketer.wankhede_stadium}`);
     console.log(`Feroz Shah Kotla: ${cricketer.feroz_shah_kotla}`);
     console.log(`Chepauk: ${cricketer.chepauk}`);
     console.log();
   }