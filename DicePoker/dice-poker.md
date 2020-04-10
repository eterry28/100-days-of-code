# Dice

Dice game of Yacht is played with 5 standard dice (having from 1 to 6 points on their sides). The player's goal is to gather some beautiful combination of points. Suppose, the following combinations are respected:

two of dice have the same points, like 3 6 5 6 1 - called pair;
three of dice have the same points, like 2 4 5 4 4 - called three;
four of dice have the same points, like 1 4 1 1 1 - called four;
all five dice have the same points, like 2 2 2 2 2 - called yacht;
two pairs at once, like 3 6 5 3 5 - called two-pairs;
pair and three at once, like 1 6 6 1 6 - called full-house;
sequence from 1 to 5, like 2 4 3 5 1 - called small-straight (see notes);
sequence from 2 to 6, like 6 3 4 2 5 - called big-straight.
Note1: combinations named with two words are written with dash, same as answers which our code should produce.
Note2: "small-straight" should be called "little-straight", this was mistakenly borrowed from "Yachtzee" game rules, where it denotes straight of 4 dice - but now it is too late to change checker code, sorry :)

Such combinations increase player's score by different values, but it is not important now.

Our goal is to write a program which for given combination of dice will determine its type.

Input data contains a number of test-cases in the first line.
Next lines contain 5 values each - points of player's dice.
Answer should contain the name for each of combinations. Names could be pair, two-pairs, three, four, yacht, full-house, small-straight, big-straight or none, separated with spaces.