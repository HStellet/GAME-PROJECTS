var a=prompt("enter the name of the player 1");
var b=prompt("enter the name of the player 2");
var colora='rgb(86, 151, 255)';
var colorb='rgb(237, 45, 73)';
var arr=[];
var arr2=[];
var x=$('table tr');

var y = 1;
var currentName = a;
var currentColor = colora;

function changeColor(row,col,color)
{
  return x.eq(row).find('td').eq(col).find('button').css('background-color',color);
}

function colorReport(row,col){
  return x.eq(row).find('td').eq(col).find('button').css('background-color');
}



function checkEmpty(col)
{
  var colorRep=colorReport(5,col);
  for(var i=5;i>-1;i--)
  {
    colorRep=colorReport(i,col);
    if (colorRep === 'rgb(128, 128, 128)') {
      return i
  }
}
}

function highlight(e)
{


  for(var x=0;x<4;x++)
  {
    if(colorReport(arr[x],arr2[x])!=e)
      changeColor(arr[x],arr2[x],e);
    else if(colorReport(arr[x],arr2[x])==e && currentColor==colora)
        changeColor(arr[x],arr2[x],colorb);
      else if(colorReport(arr[x],arr2[x])==e && currentColor==colorb)
      changeColor(arr[x],arr2[x],colora);
  }


}


function colorCheck(a,b,c,d){
  return (a===b && a===c && a===d && a!== 'rgb(128, 128, 128)' && a!== undefined);
}
function winning(){
  var count=0;
      for (var row = 0; row < 6; row++) {
      for (var col = 0; col < 4; col++) {
        if (colorCheck(colorReport(row,col), colorReport(row,col+1) ,colorReport(row,col+2), colorReport(row,col+3))) {


          arr=[row,row,row,row];
          arr2=[col,col+1,col+2,col+3];

          return true;
        }else {
          continue;
        }
      }
    }



    for (var col = 0; col < 7; col++) {
      for (var row = 0; row < 3; row++) {
        if (colorCheck(colorReport(row,col), colorReport(row+1,col) ,colorReport(row+2,col), colorReport(row+3,col))) {

          arr=[row,row+1,row+2,row+3];
          arr2=[col,col,col,col];

          return true;
        }else {
          continue;
        }
      }
    }


    for (var col = 0; col < 5; col++) {
      for (var row = 0; row < 7; row++) {
        if (colorCheck(colorReport(row,col), colorReport(row+1,col+1) ,colorReport(row+2,col+2), colorReport(row+3,col+3))) {

          arr=[row,row+1,row+2,row+3];
          arr2=[col,col+1,col+2,col+3];

          return true;
        }else if (colorCheck(colorReport(row,col), colorReport(row-1,col+1) ,colorReport(row-2,col+2), colorReport(row-3,col+3))) {

          arr=[row,row-1,row-2,row-3];
          arr2=[col,col+1,col+2,col+3];

          return true;
        }else {
          continue;
        }
      }
    }

    return false;
  }



$('h3').text(a+": it is your turn, please pick a column to drop your blue chip.");

$('.board button').on('click',function() {

  var col = $(this).closest("td").index();
  var bottomAvail = checkEmpty(col);
  changeColor(bottomAvail,col,currentColor);
  if (winning()) {

        $('h3').fadeOut('fast');
        $('h2').fadeOut('fast');
        $('h1').text(currentName+" has won! Refresh your browser to play again!").css("fontSize", "50px")
$('button').unbind('click');

 setInterval("highlight('rgb(0, 0, 0)')",200);
    }

  y = y * -1 ;


  if (y === 1) {
    currentName = a;
    $('h3').text(currentName+": it is your turn, please pick a column to drop your blue chip.");
    currentColor = colora;
  }else {
    currentName = b;
    $('h3').text(currentName+": it is your turn, please pick a column to drop your red chip.");
    currentColor = colorb;
  }

})
