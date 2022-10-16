function poly(str){
    for(i = 0; i<Math.floor(str.lenght/2); i++){
        if(str[i]!= str[-i])
            return false;
    }
    return true;
}


console.log(poly("abccba"));
console.log(poly("abc"));