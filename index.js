var numbers = [
    {
      "accNum":"AAA-1234",
      "user":"Alice"
    },
    {
      "accNum":"AAA-5231",
      "user":"Bob"
    },
     {
      "accNum":"AAA-9921",
      "user":"Alice"
    },
   {
      "accNum":"AAA-8191",
      "user":"Alice"
    }
  ];
  
  
  var balance = {
    "AAA-1234": 4593.22,
    "AAA-9921": 0,
    "AAA-5231": 232142.5,
    "AAA-8191": 4344,
  }
  
  
  function accountInfo(user,sortBy ,sortDirection){
    
     sortBy = sortBy || null;
     sortDirection = sortDirection || "asc";
    
    //providing information based on User input
    var filteredbyusername = numbers.filter(function(number) {
    if(number.user === user) {
      return number.accNum;
    }
   
  });
    
    console.log("Filtered account info into array format:",filteredbyusername);
    
    
    //sorting 
    
    function sortDirection (value){
     if(value==="asc") {
         var parsedInteger = numbers.map(function(number){
    return number.accNum.match(/\d+/g).map(Number);
    
  });
  var sortedByAcctNumber = parsedInteger.sort(function(a, b){return b - a;});
  
   
    for(var i=0;i<sortedByAcctNumber.length;i++){
      var sortedArray=[];
    sortedArray.push (sortedByAcctNumber[i]="AAA-"+sortedByAcctNumber[i]);
      console.log("Account number Sorted in Ascending order:",sortedArray);
  }
     }
      
    }
    sortDirection("asc");
  
  }
  /**
  
 * Uncomment the below function to check the values
 *
 *
 **/
  
  //accountInfo("Bob");
  //accountInfo("Charlie");
  accountInfo("Alice");