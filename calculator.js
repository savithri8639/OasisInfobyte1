let input = document.getElementById('inputbox');
function display(num)
{
    input.value += num;
}


function factorial()
{
    let i, num, fact=1;
    num = input.value;
    for(i=1;i<=num;i++)
    {
        fact = fact*i;
    }
    i = i-1;
    input.value = fact;
}
function sin()
{
    input.value = Math.sin(input.value);
}

function calculate()
{
    try{
        input.value = eval(input.value);
    }
    catch(err)
    {
        alert("Invalid");
    }
}

function del()
{
    input.value = input.value.slice(0,-1);
}
function log()
{
    input.value = Math.log(input.value);
}

function pow()
{
    input.value = Math.pow(input.value,2);
}
function pi()
{
    input.value = 3.14;
}

function cos()
{
    input.value = Math.cos(input.value);
}

function tan()
{
    input.value = Math.tan(input.value);
}

function sqrt()
{
    input.value = Math.sqrt(input.value);
}

function e()
{
    input.value = 2.718;
}