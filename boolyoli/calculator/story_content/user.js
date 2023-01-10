function ExecuteScript(strId)
{
  switch (strId)
  {
      case "67PyAetRoiq":
        Script1();
        break;
      case "5YOknljfDOG":
        Script2();
        break;
  }
}

function Script1()
{
  player = GetPlayer();

var x = player.GetVar("SizeOfRoom");
var y = player.GetVar("CountOfRooms");

var func2 = 50*x+500;
if (func2 <1000) 
{
 func2 = 1000;
}
func2= player.GetVar("check2")*func2;

if (y==1)
{ 
var func3=1000;
}
else
{
var func3=500*y;
}

var func4=20*x;

var func5=player.GetVar("check5")*func4;
var func6=player.GetVar("check6")*func4;
var func7=player.GetVar("check7")*func4;
var func8=player.GetVar("check8")*func4;
var func9=player.GetVar("check9")*func4;
var func10=player.GetVar("check10")*func4;
var func11=player.GetVar("check11")*func4;
var func12=player.GetVar("check12")*func4;
var func13=player.GetVar("check13")*func4;
var func14=player.GetVar("check14")*func4;
var func15=player.GetVar("check15")*func4;
var func16=player.GetVar("check16")*func4;

var func17=player.GetVar("check17")*60*x;
if (func17 < 1000)
{
func17=1000;
}

var func18=player.GetVar("check18")*500*y;
var func19=player.GetVar("check19")*100*x;
var func20=player.GetVar("check20")*200*x;
var func21=player.GetVar("check21")*100*x;
var func22=player.GetVar("check22")*300*x;
var func23=player.GetVar("check23")*8000;

var func24 = Math.ceil((50*x+500)/1000)*1000;
func24= player.GetVar("check24")*func24;

var totalcount=func2+func3+func4+func5+func6+func7+func8+func9+func10+func11+func12+func13+func14+func15+func16+func17+func18+func19+func20+func21+func22+func23+func24;


alert("всего: " + totalcount + " руб.\nОбмер помещния = "+func2 +"\nРазработка концепции = " + func3 + "\nОбмерный план = " + func4 + "\nПлан перепланировки = " + func5 +"\nПлан расстановки мебели = " + func6 + "\nПлан демонтажных работ = " + func7 + "\nПлан монтажных работ = " + func8 +"\nПлан потолков = "+ func9 +"\nПлан полов = " + func10 + "\nПлан теплых полов = " + func11 + "\nПлан расположения светильников = " + func12 + "\nПлан расположения розеток и выключателей = " + func13 + "\nПлан расположения сантехнического оборудования = " + func14 + "\nЧертежи встроенной и корпусной мебели под заказ = " + func15+"\nДополнительные чертежи при необходимости = " + func16 +"\nРазвертки помещений с указанием материалов и декоративных элементов = "+ func17 +"\nКоллажи интерьера = "+ func18 + "\nСписок покупок = " + func19 + "\nКомплектация  = " + func20 +"\nСмета = " + func21 + "\n3д визуализация = " + func22+"\nАвторский надзор = " + func23 + "\nФинальная консультация по расстановке декора = " + func24);


}

function Script2()
{
  player = GetPlayer();

var x = player.GetVar("SizeOfRoom");
var y = player.GetVar("CountOfRooms");

var func2 = 50*x+500;
if (func2 <1000) 
{
 func2 = 1000;
}
func2= player.GetVar("check2")*func2;

if (y==1)
{ 
var func3=1000;
}
else
{
var func3=500*y;
}

var func4=20*x;

var func5=player.GetVar("check5")*func4;
var func6=player.GetVar("check6")*func4;
var func7=player.GetVar("check7")*func4;
var func8=player.GetVar("check8")*func4;
var func9=player.GetVar("check9")*func4;
var func10=player.GetVar("check10")*func4;
var func11=player.GetVar("check11")*func4;
var func12=player.GetVar("check12")*func4;
var func13=player.GetVar("check13")*func4;
var func14=player.GetVar("check14")*func4;
var func15=player.GetVar("check15")*func4;
var func16=player.GetVar("check16")*func4;

var func17=player.GetVar("check17")*60*x;
if (func17 < 1000)
{
func17=1000;
}

var func18=player.GetVar("check18")*500*y;
var func19=player.GetVar("check19")*100*x;
var func20=player.GetVar("check20")*200*x;
var func21=player.GetVar("check21")*100*x;
var func22=player.GetVar("check22")*300*x;
var func23=player.GetVar("check23")*8000;

var func24 = Math.ceil((50*x+500)/1000)*1000;
func24= player.GetVar("check24")*func24;

var totalcount=func2+func3+func4+func5+func6+func7+func8+func9+func10+func11+func12+func13+func14+func15+func16+func17+func18+func19+func20+func21+func22+func23+func24;


player.SetVar("TotalCost", totalcount);

//alert("всего: " + totalcount + " руб.\nОбмер помещния = "+func2 +"\nРазработка концепции = " + func3 + "\nОбмерный план = " + func4 + "\nПлан перепланировки = " + func5 +"\nПлан расстановки мебели = " + func6 + "\nПлан демонтажных работ = " + func7 + "\nПлан монтажных работ = " + func8 +"\nПлан потолков = "+ func9 +"\nПлан полов = " + func10 + "\nПлан теплых полов = " + func11 + "\nПлан расположения светильников = " + func12 + "\nПлан расположения розеток и выключателей = " + func13 + "\nПлан расположения сантехнического оборудования = " + func14 + "\nЧертежи встроенной и корпусной мебели под заказ = " + func15+"\nДополнительные чертежи при необходимости = " + func16 +"\nРазвертки помещений с указанием материалов и декоративных элементов = "+ func17 +"\nКоллажи интерьера = "+ func18 + "\nСписок покупок = " + func19 + "\nКомплектация  = " + func20 +"\nСмета = " + func21 + "\n3д визуализация = " + func22+"\nАвторский надзор = " + func23 + "\nФинальная консультация по расстановке декора = " + func24);

}

