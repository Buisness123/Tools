function load(){
    MilwuakeeChange();
    DewaltChange();
    RyobiChange();
    RigidChange();
    EchoChange();
    OtherChange();
}


function MilwuakeeChange(){
    var milwuakposition = document.getElementById("list").value;
    var name = [
        "MilWuakee Impact",
        "Milwuakee Impact 12v"
    ];
    var price = [
        "$400",
        "$90?"
    ];
    var image = [
        "milwimpact.jpg",
        "milw12vimpact.jpg"
    ];
    var text = [
        "N/A",
        "N/A"

    ];

    if(milwuakposition == "0"){
        Milsetname(name[0]);
        Milsetprice(price[0]);
        Milsetimage(image[0]);
        Milsettext(text[0]);
    }
    if(milwuakposition == "1"){
        Milsetname(name[1]);
        Milsetprice(price[1]);
        Milsetimage(image[1]);
        Milsettext(text[1]);
    }
}
function Milsetname(name){
    document.getElementById("name").innerHTML = name;
}
function Milsetprice(price){
    document.getElementById("price").innerHTML = price;
}
function Milsetimage(image){
    document.getElementById("image").src = image;
}
function Milsettext(text){
    document.getElementById("text").innerHTML = text;
}


function DewaltChange(){
    var Dewaltposition = document.getElementById("Dewaltlist").value;
    var name = [
        "Dewalt Hondai 3100psi"
    ];
    var price = [
        "$350"
    ];
    var image = [
        "dewalthondai3100.jpg"
    ];
    var text = [

    ];

    if(Dewaltposition == "0"){
        Dewaltsetname(name[0]);
        Dewaltsetprice(price[0]);
        Dewaltsetimage(image[0]);
        Dewaltsettext(text[0]);
    }
}
function Dewaltsetname(Dewaltname){
    document.getElementById("Dewaltname").innerHTML = Dewaltname;
}
function Dewaltsetprice(Dewaltprice){
    document.getElementById("Dewaltprice").innerHTML = Dewaltprice;
}
function Dewaltsetimage(Dewaltimage){
    document.getElementById("Dewaltimage").src = Dewaltimage;
}
function Dewaltsettext(Dewalttext){
    document.getElementById("Dewalttext").innerHTML = Dewalttext;
}



function EchoChange(){
    var Echoposition = document.getElementById("Echolist").value;
    var name = [
        "Echo CS-310",
        "Echo CS-4910",
        "Echo PB-680H/T",
        "Echo Shaft"
    ];
    var price = [
        "$160",
        "$250",
        "$290",
        "$280"
    ];
    var image = [
        "echocs310.jpg",
        "echocs4910.jpg",
        "echopb-680ht.jpg",
        "echoshaft.jpg"
    ];
    var text = [
        "N/A",
        "N/A",
        "N/A",
        "N/A"
    ];

    if(Echoposition == "0"){
        Echosetname(name[0]);
        Echosetprice(price[0]);
        Echosetimage(image[0]);
        Echosettext(text[0]);
    }
    if(Echoposition == "1"){
        Echosetname(name[1]);
        Echosetprice(price[1]);
        Echosetimage(image[1]);
        Echosettext(text[1]);
    }
    if(Echoposition == "2"){
        Echosetname(name[2]);
        Echosetprice(price[2]);
        Echosetimage(image[2]);
        Echosettext(text[2]);
    }
    if(Echoposition == "3"){
        Echosetname(name[3]);
        Echosetprice(price[3]);
        Echosetimage(image[3]);
        Echosettext(text[3]);
    }
}
function Echosetname(Echoname){
    document.getElementById("Echoname").innerHTML = Echoname;
}
function Echosetprice(Echoprice){
    document.getElementById("Echoprice").innerHTML = Echoprice;
}
function Echosetimage(Echoimage){
    document.getElementById("Echoimage").src = Echoimage;
}
function Echosettext(Echotext){
    document.getElementById("Echotext").innerHTML = Echotext;
}



function RyobiChange(){
    var Ryobiposition = document.getElementById("Ryobilist").value;
    var name = [
        "Ryobi LawnMower",
        "",
        "",
        ""
    ];
    var price = [
        "$500",
        "0",
        "0",
        "0"
    ];
    var image = [
        "ryobilawnmower.jpg",
        "",
        ""
    ];
    var text = [
        "N/A",
        "N/A",
        "N/A"
    ];

    if(Ryobiposition == "0"){
        Ryobisetname(name[0]);
        Ryobisetprice(price[0]);
        Ryobisetimage(image[0]);
        Ryobisettext(text[0]);
    }
    if(Ryobiposition == "1"){
        Ryobisetname(name[1]);
        Ryobisetprice(price[1]);
        Ryobisetimage(image[1]);
        Ryobisettext(text[1]);
    }
    if(Ryobiposition == "2"){
        Ryobisetname(name[2]);
        Ryobisetprice(price[2]);
        Ryobisetimage(image[2]);
        Ryobisettext(text[2]);
    }
}
function Ryobisetname(Ryobiname){
    document.getElementById("Ryobiname").innerHTML = Ryobiname;
}
function Ryobisetprice(Ryobiprice){
    document.getElementById("Ryobiprice").innerHTML = Ryobiprice;
}
function Ryobisetimage(Ryobiimage){
    document.getElementById("Ryobiimage").src = Ryobiimage;
}
function Ryobisettext(Ryobitext){
    document.getElementById("Ryobitext").innerHTML = Ryobitext;
}




function RigidChange(){
    var Rigidposition = document.getElementById("Rigidlist").value;
    var name = [
        "Rigid Radio"
    ];
    var price = [
        "$80",
        "0",
        "0",
        "0"
    ];
    var image = [
        "rigidradio.jpg"
    ];
    var text = [
        "N/A",
        "N/A",
        "N/A"
    ];

    if(Rigidposition == "0"){
        Rigidsetname(name[0]);
        Rigidsetprice(price[0]);
        Rigidsetimage(image[0]);
        Rigidsettext(text[0]);
    }
    if(Rigidposition == "1"){
        Rigidsetname(name[1]);
        Rigidsetprice(price[1]);
        Rigidsetimage(image[1]);
        Rigidsettext(text[1]);
    }
    if(Rigidposition == "2"){
        Rigidsetname(name[2]);
        Rigidsetprice(price[2]);
        Rigidsetimage(image[2]);
        Rigidsettext(text[2]);
    }
}
function Rigidsetname(Rigidname){
    document.getElementById("Rigidname").innerHTML = Rigidname;
}
function Rigidsetprice(Rigidprice){
    document.getElementById("Rigidprice").innerHTML = Rigidprice;
}
function Rigidsetimage(Rigidimage){
    document.getElementById("Rigidimage").src = Rigidimage;
}
function Rigidsettext(Rigidtext){
    document.getElementById("Rigidtext").innerHTML = Rigidtext;
}


function OtherChange(){
    var Otherposition = document.getElementById("Otherlist").value;
    var name = [
        "Brigrrigs"
    ];
    var price = [
        "$600"
    ];
    var image = [
        "brigsgenerator.jpg"
    ];
    var text = [

    ];

    if(Otherposition == "0"){
        Othersetname(name[0]);
        Othersetprice(price[0]);
        Othersetimage(image[0]);
        Othersettext(text[0]);
    }
}
function Othersetname(Othername){
    document.getElementById("Othername").innerHTML = Othername;
}
function Othersetprice(Otherprice){
    document.getElementById("Otherprice").innerHTML = Otherprice;
}
function Othersetimage(Otherimage){
    document.getElementById("Otherimage").src = Otherimage;
}
function Othersettext(Othertext){
    document.getElementById("Othertext").innerHTML = Othertext;
}