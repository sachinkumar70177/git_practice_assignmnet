// wriiten code for palindrome.

let str='naman';
bag='';
for (i=str.length-1;i>=0;i--)
{
  bag=bag+str[i]
  
}
if(bag==str)
{
  console.log('given string is palindromic in nature.')
}
else
{
  console.log('nature is not palindromic.')
}