function rockPaperScissors(a, b) {
    if (a === scissors && b === paper) {
        return "a wins";

    }   else if (a === paper && b === scissors) {
        return "b wins";

    }   else if (a === scissors && b === rock) {
        return "b wins";

    }   else if (a === rock && b === scissors) {
        return "a wins";

    }   else if (a === paper && b === rock) {
        return "a wins";

    }   else if (a === rock && b === paper) {
        return "b wins";

    }   else if (a === b) {
        return "draw";
    
    }   else if (a === b) {
        return "draw";
    
    }   else if (a === b) {
        return "draw";
    }   


}
