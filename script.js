function find(sentence){
    let words=sentence.split(/[\s.?]+/);
    let wordlen=0;
    let bigword='';
    let capCount=0;
    for(let i=0;i<words.length;i++){
        if(words[i].length>wordlen){
            bigword=words[i];
            wordlen=words[i].length;
        }else if(words[i].length===wordlen){
            let cap=caps(words[i]);
            if(cap>capCount){
                wordlen=words[i].length;
                capCount=cap;
                bigword=words[i];
            }
        }
    }

    return bigword;
}

function caps(word){
    let count=0;
    for(let i=0;i<word.length;i++){
        if(word[i]>="A"  && word[i]<="Z"){
            count++;
        }
    }
    return count;
}

console.log(find("The dog"));