function Add(a,b)
{
    if(!isNaN(a)&&!isNaN(b))
    {
        console.log(a+b);
    }
    else
    {
        console.log("you should insert nums");
    }
}
function Sub(x,y)
{
    if(!isNaN(x)&&!isNaN(y))
    {
        console.log(x-y);
    }
    else
    {
        console.log("you should insert nums");
    }
}
function Multiple(s,z)
{
    if(!isNaN(s)&&!isNaN(z))
    {
        console.log(s*z);
    }
    else
    {
        console.log("you should insert nums");
    }
}

module.exports = {
	Summ: Add,
	Subb: Sub,
    Multii:Multiple
}