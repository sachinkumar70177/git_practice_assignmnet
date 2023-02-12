// code for prime number.

let x=5;
let count=0;
for(i=1;i<=5;i++)
{
if(5%i==0)
{
count++;
}
}
if (count==1 || count>2)
{
console.log(x,"is not  a prime number");
}
else
{
console.log(x,"is  a prime number");
}
