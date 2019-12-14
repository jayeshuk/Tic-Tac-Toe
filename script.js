var mode=0;
var state=false;
var chance=0;
var allow=[];
var content=[];
for(var j=0;j<9;j++){
    allow[j]=0;
}

var i,j,k,a,b;
// var O=document.createElement('img0');
// img0.src="/o.png";
// var X=document.createElement('img1');
// img1.src="/x.png"; 


/*############################### */

for(i=0;i<9;i++){
    document.getElementById('cell-'+(i+1)).innerHTML="--";
}

document.getElementById('result').innerHTML="";

/*############################### */

document.getElementById('con-0').addEventListener('mousedown',function() {
    mode=0;
    chance=0;
    console.log('Mode='+mode);
});

document.getElementById('con-1').addEventListener('mousedown',function() {
    mode=1;
    chance=1;
    console.log('Mode='+mode);
});

// document.getElementById("btn-n").addEventListener('click', function() {
//     document.getElementById("sq").style.display = "block";
// });


/*##############################################################
###################       New Game      ########################
#############################################################*/


document.getElementById('btn-n').addEventListener('click',function(){
    state=true;
    for(i=0;i<9;i++){
        document.getElementById('cell-'+(i+1)).innerHTML="--";
    }    
    //Reset Cells
    for(j=0;j<9;j++){
        allow[j]=0;
    }

    for(k=0;k<9;k++){
        content[k]=document.getElementById('cell-'+(k+1)).innerHTML;
    }

    document.getElementById('result').innerHTML="";
    
});


/*##############################################################
#################     Cell Access    ##########################
#############################################################*/
document.getElementById('cell-1').addEventListener('mouseup',function(){
    if(state){
    print_char('cell-1');
    mode===1?mode=0:mode=1;
    
    }
});

document.getElementById('cell-2').addEventListener('mouseup',function(){
    if(state){
    print_char('cell-2');
    mode===1?mode=0:mode=1;
    
    }
});

document.getElementById('cell-3').addEventListener('mouseup',function(){
    if(state){
    print_char('cell-3');
    mode===1?mode=0:mode=1;
    
    }
});

document.getElementById('cell-4').addEventListener('mouseup',function(){
    if(state){
    print_char('cell-4');
    mode===1?mode=0:mode=1;
    
    }
});
document.getElementById('cell-5').addEventListener('mouseup',function(){
    if(state){
    print_char('cell-5');
    mode===1?mode=0:mode=1;
    
    }
});

document.getElementById('cell-6').addEventListener('mouseup',function(){
    if(state){
    print_char('cell-6');
    mode===1?mode=0:mode=1;
    
    }
});

document.getElementById('cell-7').addEventListener('mouseup',function(){
    if(state){
    print_char('cell-7');
    mode===1?mode=0:mode=1;
    
    }
});

document.getElementById('cell-8').addEventListener('mouseup',function(){
    if(state){
    print_char('cell-8');
    mode===1?mode=0:mode=1;
    
    }
});


document.getElementById('cell-9').addEventListener('mouseup',function(){
    if(state){
    print_char('cell-9');
    mode===1?mode=0:mode=1;
    
    }
});

/*##############################################################
#################        Printer     ##########################
#############################################################*/
function print_char(id2){
    if(mode===0 && state===true && allow[id2[5]-1]===0){
        document.getElementById(id2).innerHTML="O";
        allow[id2[5]-1]+=1;
        content[id2[5]-1]="O";
        
    }else if(mode===1 && state===true && allow[id2[5]-1]===0){
        document.getElementById(id2).innerHTML="X";
        allow[id2[5]-1]+=1;
        content[id2[5]-1]="X";
        
    }
    console.log(content);
    check();
}

/*##############################################################
#################     Cell Checker    ##########################
#############################################################*/


function check(){
    for(k=0;k<7;k=k+3){
        if(content[k]===content[k+1] && content[k]===content[k+2] && content[k]!=="--"){
            a=k;
            var clss=document.getElementById('cell-'+(a+1)).innerHTML;
            if(clss==="O" && chance===0){
                document.getElementById('result').innerHTML="Player-1 Wins.!";
                console.log("Player-1 Wins.!");
            }else if(clss==="X" && chance===0){
                document.getElementById('result').innerHTML="Player-2 Wins.!";
                console.log('Player-2 Wins.!');
            }
            state=false;
            break;
        }
    }

    for(k=0;k<3;k++){
        if(content[k]===content[k+3] && content[k]===content[k+6] && content[k]!=="--"){
            b=k;
            var clss2=document.getElementById('cell-'+(b+1)).innerHTML;
            if(clss2==="O" && chance===1){
                document.getElementById('result').innerHTML="Player-2 Wins.!";
                console.log("Player-2 Wins.!");
            }else if(clss2==="X" && chance===1){
                document.getElementById('result').innerHTML="Player-1 Wins.!";
                console.log('Player-1 Wins.!');
            }
            state=false;
            break;
        }
    }

    if(content[0]===content[4] && content[0]===content[8] && content[0]!=="--"){
        var clss3=document.getElementById('cell-1').innerText;
        if(clss3==="O" && chance===0){
            document.getElementById('result').innerHTML="Player-1 Wins.!";
            console.log('Player-1 Wins.!'); 
        }else if(clss3==="X" && chance===0){
            document.getElementById('result').innerHTML="Player-2 Wins.!";
            console.log("Player-2 Wins.!"); 
        }
        state=false;
    }
    
    

    if(content[2]===content[4] && content[2]===content[6] && content[2]!=="--"){
        var clss4=document.getElementById('cell-3').innerText;
        if(clss4==="O" && chance===1){
            document.getElementById('result').innerHTML="Player-2 Wins.!";
            console.log('Player-2 Wins.!'); 
        }else if(clss4==="X" && chance===1){
            document.getElementById('result').innerHTML="Player-1 Wins.!";
            console.log("Player-1 Wins.!"); 
        }
        state=false;
    }
    
}