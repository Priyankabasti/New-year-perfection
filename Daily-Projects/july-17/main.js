// let word = "HelloWorld";
// let count=0;
// // console.log(word);
// for(let i=0;i<word.length;i++){
//     // console.log(word[i]);
//     if(
//         word[i]=="a" || word[i]=="e" || word[i]=="i" || word[i]=="o" || word[i]=="u"
//     )
//     count ++;
//     console.log(count)
// }

function countOvals(){
    let word = "HelloWorld";
    let count=0;
    for( let i=0;word[i]<word.length;word[i]++){
       if(word[i]=="a" || word[i]=="e" || word[i]=="i" || word[i]=="o" || word[i]=="u"){
        count ++;
       }
       return count;
    }
}