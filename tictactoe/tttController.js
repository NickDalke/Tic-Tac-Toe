angular
	.module('tttApp')
	.controller('tttController', tttController);



	// making the angular module attached to a controller

	// 1 - inject '$firebaseObject' or '$firebaseArray' into our controller using the $inject method:

	// tttController.$inject = ['$firebaseObject'];


	// // 2 - add the $firebaseObject or $firebaseArray to our function arguments so we can use it.

	// function tttController($firebaseArray){
	// var self = this;
	// self.addChat = addChat;  
	// self.chats = getChats();   

	// // 4 - then we attach this getChats() function to self.chats, so everytime we refer to self.chats, 
	// // it is referring to the firebase Array. attach it here...

	// // 6 - then we attach this addChat function to self.addChat, so everytime we refer to self.addChat, 
	// // it is referring to the firebase Array. attach it here...

	// // 3 - instead of hardcoding the self.chats array, we write a function that goes to firebase and gets 
	// // the array for us: we should call the function something like getChats();

	// function getChats(){
	//     var ref = new Firebase("https://chatapp111.firebaseio.com/"); 
	//     var chats = $firebaseArray(ref);  //this means treat the firebase link as an Array 
	//     return chats 
	// }

	// // 5 - the firebase Array has special commands that we use on it: '$add'
	// // we can use this to build an addChat function to push chat objects to our array:
	// function addChat(){
	//     self.chats.$add({message: self.text});
	//     self.text = null;
	// }
 //    }

 //ATTEMPT 2 

 function tttController($firebaseObject){
    	var self = this;
    	self.placeImage = placeImage();
    	self.myTurn = 0;
    	self.gameOver = false;
    	self.checkWinner = checkWinner();
    	self.go = go;

       	self.board = (function(){
       		var ref = new Firebase('https://boiling-inferno-7631.firebaseio.com/');
       		var board = $firebaseObject(ref);
       		return board;
       	})();

        self.test = "This works"

// self.squares allows the ng-repeat to call this function that iterates through a 9 index long loops 
// and places a square for each one, and assigns it an empty value. Shout out John Ward, thanks buddy! 
		 self.squares.$loaded(
		    function(){if(self.squares.length==0){
		      for(i=0;i<9;i++){
		        self.squares.$add({index:i, value:'empty'}); 
		      } 
		    } 
		    console.log(self.squares.length);})

			function go() {
    		if (self.myTurn % 2 === 0) {
    			return "O";
    			} else {
    			return "X";
    		}
    		self.myTurn++;
    		}
    
    	function placeImage($index){  //attach this to an ng-click in the html 
	    		// for (var i = 0; i <= 2; i++){
	    		// 	var i = self.myTurn;
	    		// self.myTurn++;
	    		// if (self.myTurn % 2 === 0) {
	    		// 		self.squares[index] === "O";
	    		// 	} else {
	    		// 		self.squares[index] === "X";
	    		// }

	    	var go = go();
	    		if (go === "O") {
	    			self.squares[index].O = true;
	    		} else if (go === "X") {
	    			self.squares[index].X = true;
	    		}

	    		if((self.squares[index].X ===!null) || (self.squares[index].O===!null)){ 
	    				alert("Occupado!");
	    				return;

	    		self.checkWinner();
	    		}
	    	}

	    	// wtf do you think this does? 

	function checkWinner(){
	    if(firstplayerOn == true && display =="" && gameOver == false){
	     if (((self.squares[0].O === true) && (self.squares[1].O === true) && (self.squares[2].X === true))||
            ((self.squares[0].O === true) && (self.squares[3].O === true) && (self.squares[6].X === true)) ||
            ((self.squares[0].O === true) && (self.squares[4].O === true) && (self.squares[8].X === true)) ||
            ((self.squares[1].O === true) && (self.squares[4].O === true) && (self.squares[7].X === true)) ||
            ((self.squares[2].O === true) && (self.squares[5].O === true) && (self.squares[8].X === true)) ||
            ((self.squares[2].O === true) && (self.squares[4].O === true) && (self.squares[6].X === true)) ||
            ((self.squares[3].O === true) && (self.squares[4].O === true) && (self.squares[5].X === true)) ||
            ((self.squares[6].O === true) && (self.squares[7].O === true) && (self.squares[8].X === true))) 
        {
            self.gameStatus = "X wins. But this victory, like all victories, is fleeting, and meaningless.";
            return;
        }

       	else if (((self.squares[0].isO === true) && (self.squares[1].isO === true) && (self.squares[2].isO === true)) ||
            ((self.squares[0].O === true) && (self.squares[3].O === true) && (self.squares[6].O === true)) ||
            ((self.squares[0].O === true) && (self.squares[4].O === true) && (self.squares[8].O === true)) ||
            ((self.squares[1].O === true) && (self.squares[4].O === true) && (self.squares[7].O === true)) ||
            ((self.squares[2].O === true) && (self.squares[5].O === true) && (self.squares[8].O === true)) ||
            ((self.squares[2].O === true) && (self.squares[4].O === true) && (self.squares[6].O === true)) ||
            ((self.squares[3].O === true) && (self.squares[4].O === true) && (self.squares[5].O === true)) ||
            ((self.squares[6].O === true) && (self.squares[7].O === true) && (self.squares[8].O === true))) 
        {
            self.gameStatus = "O wins. But this victory, like all victories, is fleeting, and meaningless.";
            return;
        }
	    }

    	console.log(self)


    }
}





















