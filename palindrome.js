// wriiten code for palindrome.
let str='namai';
bag='';
for (i=0;i<str.length;i++){
  bag=str[i]+bag;
  
}
if(bag==str){
  console.log('given string is palindromic in nature ')
}
else {
  console.log('nature is not palindromic')
}