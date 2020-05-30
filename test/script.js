var productArray=["Pizza","Pâtes","Sandwich","Côte de beuf","Menu Plat du jour","Menu Enfant","Menu Midi","Menu soir","Glaces","Tiramisu","cafe","vin","Salade"]
var priceArray=[7,6,4,9,10,5,8,10,4,5,1.50,3,4]
var nbrOption=[2,1,1]
var msgArray=["Produit ajouté à la commande!","Produit retiré de la commande!"]
var color=["green","#f44336"]
var nom_retaurant="RestaurantTest"
var adresse="15 rue de la paix, Compiegne"
var numero="0654675443"



function add_element(indice){	
	var res=0;
  var Option=[]
	var tableau = document.getElementById("tableau");
	var number=document.getElementById("Prod"+arguments[0].toString()).value;
  for (i =1; i < nbrOption[arguments[0]]+1; i++){

     Option=Option+document.getElementById("Option"+arguments[0].toString()+i.toString()).value;
     Option=Option+"/"
  }  
	var ligne = tableau.insertRow(-1);

	var colonne1 = ligne.insertCell(0);//on a une ajouté une cellule
	colonne1.innerHTML +=  productArray[arguments[0]];//on y met le contenu de titre
	
	var colonne2 = ligne.insertCell(1);
	colonne2.innerHTML +=  Option ;
  
  var colonne3 = ligne.insertCell(2);
  colonne3.innerHTML += number;

	var colonne4 = ligne.insertCell(3);
	colonne4.innerHTML +=   number*priceArray[arguments[0]];

	
	var colonne5 = ligne.insertCell(4);
	colonne5.innerHTML += "€";


		var colonne6 = ligne.insertCell(5);
	colonne6.innerHTML = '<button onclick="deleteRow(this)">❌</button>';

	document.querySelector("#alert").style.display ="block";
	document.querySelector("#alert").style.background=color[0];
	document.getElementById("txt_al").innerHTML = msgArray[0];
	 setTimeout(hide, 1500);

	 calc_tot();
}

function deleteRow(elem) {

   var table = elem.parentNode.parentNode.parentNode;
  var rowCount = table.rows.length;


  var row = elem.parentNode.parentNode; 
  row.parentNode.removeChild(row);


	document.querySelector("#alert").style.display ="block";
	document.querySelector("#alert").style.background = color[1];
	document.getElementById("txt_al").innerHTML = msgArray[1];
	 setTimeout(hide, 2000);	

	 calc_tot();

   
}

function calc_tot(){
	 var oTable = document.getElementById('tableau');

    //gets rows of table
    var rowLength = oTable.rows.length;

    var total=0
    //loops through rows    
    for (i =1; i < rowLength; i++){
    	
      //gets cells of current row  
       var oCells = oTable.rows.item(i).cells;

       //gets amount of cells of current row
       var cellLength = oCells.length;



    	 var cellVal = oCells.item(3).innerHTML;
 
       var total= total+parseFloat(cellVal);
    }
    document.querySelector("#Tot").innerHTML = total.toString();

}


function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

function myFunction2() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav responsive") {
    x.className = "topnav";
  } else {
    x.className = "topnav";
  }
    document.querySelector("#myMenu").style.display ="none";
}


function hide(){
	document.querySelector("#alert").style.display ="none";
	document.querySelector("#qrdiv").style.display ="none";
	document.querySelector("#myMenu").style.display ="none";
}

function gen_qr()
{
	 var oTable = document.getElementById('tableau');
	 var date = new Date();
    var rowLength = oTable.rows.length;
	 var qr="http://chart.apis.google.com/chart?cht=qr&chs=300x300&chl=";
	 var qr=qr+nom_retaurant+"%0D%0A";
	 var qr=qr+adresse+"%0D%0A";
	  var qr=qr+numero+"%0D%0A";
	 var qr=qr+date.getDate()+"/"+(date.getMonth()+1)+"/"+date.getFullYear()+":%0D%0A";
	 var qr= qr+"Produit  Quantité  Prix:%0D%0A"
    for (i =1; i < rowLength; i++){
    	var total="";
      //gets cells of current row  
       var oCells = oTable.rows.item(i).cells;

       //gets amount of cells of current row
       var cellLength = oCells.length;



    	for(var j = 0; j < cellLength-1; j++){

              // get your cell info here

              var cellVal = oCells.item(j).innerHTML;
 
       var total= total+" / "+cellVal;
    }
    qr=qr+"%0D%0A"+total;
  
}
  var note_client=document.getElementById('remarques').value;
    qr=qr+"%0D%0A"+"remarques client:"+note_client;
document.getElementById('img_qr').setAttribute('src', qr);
document.querySelector("#qrdiv").style.display ="block";

}


function search() {
  // Declare variables
  var input, filter, ul, li, a, i;
  input = document.getElementById("mySearch");
  filter = input.value.toUpperCase();
  ul = document.getElementById("myMenu");
  li = ul.getElementsByTagName("li");

  // Loop through all list items, and hide those who don't match the search query
  for (i = 0; i < li.length; i++) {
  	  document.querySelector("#myMenu").style.display ="block";
    a = li[i].getElementsByTagName("a")[0];
    if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
        document.querySelector("#myMenu").style.display ="none";
    } else {
      li[i].style.display = "none";

    }

  }
}