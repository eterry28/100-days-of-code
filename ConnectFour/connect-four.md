# Connect Four



**Design Considerations**

*void play()* 
play one game

*void doNextMove()* 
handle getting, verifying, and recording the next player’s move

*boolean isBadMove(int move)* 
return true if the given move is not legal

*void doOneMove(int move)*
given a legal move, record it

*void printBoard()* 
print the current gameboard

*boolean gameOver()* 
return true if the game is over

*boolean boardFull()* 
return true if the whole gameboard is full

*boolean hasWon(int playerNum)* 
return true if the given player has won

*boolean hasPattern( int[][] pattern )* 
return true if the given pattern occurs in the gameboard

*boolean hasPatternIgnoreZeros( int[][] pattern )* 
return true if the given pattern occurs in the gameboard, where zeros in the pattern can match any value in the gameboard

*boolean isMatch(int[][] pattern, int row, int col)* 
return true if the given pattern occurs in the gameboard with its upper-left corner in the given position

*boolean isMatchIgnoreZeros(int[][] pattern, int row, int col)* 
return true if the given pattern occurs in the gameboard with its upper-left corner in the given position, where zeros in the pattern can match any value in the gameboard