/************************Question 1*****************************************/

$('#all').on('click',allP);  /*id for all paragraphs*/
$('#first').on('click',firstP);  /*id for the first div*/
$('#second').on('click',secondP);  /*id for the second div*/
var pTotal=0;   /*total p elements */
var pFirst=0;   /*total p elements in div1*/
var pSecond=0;   /*total p elements in div2*/
function allP()
{

    $('p').addClass('green3');   /*gives all p elements the green border*/
    $('p').each(function(index)  /*.each to iterate all of the p; this is an array*/
    {


        pTotal=index;
    });

    alert(pTotal+1);     /*plus 1 because it's an array*/
}

function firstP()
{
    $('div:first p').addClass('red3');  /*borders for first div p elements*/
    $('div:first p').each(function(index)
    {


        pFirst=index;
    });
    alert(pFirst+1);  /*counts index. Add one more*/
}

function secondP()
{
    $('div:last p').addClass('blue3');   /*borders for second div p elements*/
    $('div:last p').each(function(index)
    {


        pSecond=index;
    });
    alert(pSecond+1); /*counts index. Add one more*/
}

/*****************************Question2**************************************/
/*
Add 2 buttons. When page initially displayed, the 1st button should be enabled and the 2nd button should be disabled.
When the 1st button is clicked, the 2nd button should be enabled, and the first button be disabled.
Clicking the 2nd button should enable the 1st buttonand disable the 2nd button and so on, alternating between buttons as they are clicked.
*/

/*****.prop accepts two parameters, a name and a value(boolean.   If the value is true, it will turn on the parameter.
 * If false it will turn if off*/
$('#OffandOn').prop('disabled',true);        /*turns off button 2*/
$('#OnandOff').on('click',enable2);   /*click on for button 1*/
$('#OffandOn').on('click',enable1);   /*click on for button 2*/

function enable2()   /*calls function for button 1*/
{
    $('#OffandOn').prop('disabled',false);  /*turns on button 2*/
    $('#OnandOff').prop('disabled',true);   /*turns off button 1*/
    console.log("enabled 2")


}

function enable1()
{
    $('#OffandOn').prop('disabled',true);   /*turns off button 2*/
    $('#OnandOff').prop('disabled',false);    /*turns on button 1*/
    console.log('enabled 1')

}