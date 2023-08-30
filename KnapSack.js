const input = {
    n: 0,
    weight: [],
    profit: [],
    pwRatio:[],
    capacity: 0,
  };
  
  
  function takeInput(input){
      input.n=Number(prompt("Enter total number of items: "));
      for(let i=0;i<input.n;i++){
          input.weight[i]=Number(prompt("Enter weight of item "+(i+1)+": "));
      }
      for(let i=0;i<input.n;i++){
          input.profit[i]=Number(prompt("Enter profit of item "+(i+1)+": "));
      }
      input.capacity=Number(prompt('What is the capacity of the knapsack: '));
  }
  
  
  function pwRatio(input){
      for(let i=0;i<input.weight.length;i++){
          input.pwRatio.push(Number((input.profit[i]/input.weight[i]).toFixed(2)));
      }
      for(let i=0;i<input.pwRatio.length;i++){
          for(let j=i+1;j<input.pwRatio.length;j++){
              if(input.pwRatio[i]<input.pwRatio[j]){
                  let temp=input.pwRatio[i];
                  input.pwRatio[i]=input.pwRatio[j];
                  input.pwRatio[j]=temp;
                  temp=input.weight[i];
                  input.weight[i]=input.weight[j];
                  input.weight[j]=temp;
                  temp=input.profit[i];
                  input.profit[i]=input.profit[j];
                  input.profit[j]=temp;  
              }
          }
      }
  }
  
  
  function giveOutput(input){
      let solution=0;
      for(let i=0;i<input.pwRatio.length;i++){
          if(input.weight[i]<input.capacity){
              solution+=input.profit[i];
              input.capacity-=input.weight[i];
          }
          else if(input.weight[i]>input.capacity){
              let remainingValue=Math.ceil(input.capacity*((input.profit[i]/input.weight[i])));
              solution+=remainingValue;
              input.capacity-=input.capacity;
              if(input.capacity==0){
                  break;
              }
          }
      }
      console.log(solution);
  }
  
  
  takeInput(input);
  pwRatio(input);
  giveOutput(input);
  
  
  
  




