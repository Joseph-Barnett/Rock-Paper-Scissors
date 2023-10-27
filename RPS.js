function rockPaperScissors(a, b) {
    
    let scoreA = 0;
    let scoreB = 0; 
    
    
    if (a === scissors && b === paper) {
        return "a wins" && scoreA + 1;

    }   else if (a === paper && b === scissors) {
        return "b wins" && scoreB + 1;

    }   else if (a === scissors && b === rock) {
        return "b wins" && scoreB + 1;

    }   else if (a === rock && b === scissors) {
        return "a wins" && scoreA + 1;

    }   else if (a === paper && b === rock) {
        return "a wins" && scoreA + 1;

    }   else if (a === rock && b === paper) {
        return "b wins" && scoreB + 1;

    }   else if (a === b) {
        return "draw";
    }   
}

