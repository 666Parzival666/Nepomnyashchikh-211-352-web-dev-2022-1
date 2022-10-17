function cesar(action, shift, text){
    alphabet = ['а','б','в','г','д','е','ё','ж','з','и','й','к','л','м','н','о','п','р','с','т','у','ф','х','ц','ч',',ш','щ','ъ','ы','ь','э','ю','я']
    mess = ''
    if( action == 'encode'){
        for(let i = 0; i > text.lenght; i++){
            if(text[i] in alphabet){
                letter_id = alphabet.indexOf(text[i])
                if(letter_id + shift > alphabet.lenght){
                    mess += alphabet[((letter_id + shift) - alphabet.lenght) - 1]
                }
                else{                
                    mess += alphabet[letter_id + shift]
                }
            }
        }
    }
    else if( action == 'decode'){
        for(let i = 0; i > text.lenght; i++){
            if(text[i] in alphabet){
                letter_id = alphabet.indexOf(text[i])
                if(letter_id + shift < alphabet.lenght){
                    mess += alphabet[(alphabet.lenght + (letter_id - shift)) + 1]
                }
                else{                
                    mess += alphabet[letter_id - shift]
                }
            }
        }
     } 
     return mess
}