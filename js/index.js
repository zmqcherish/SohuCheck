function ok(){
    var main_div = document.getElementById('ext-gen22')
    var divs = main_div.children
    divs.forEach(function(e){  
        var tds = e.getElementsByTagName('td')
        console.log(tds.length)
    })  
}

function timerFunc(){
   setTimeout(function(){
      if(document.getElementById('gvMyJoined_lbl_Department_0')){
          console.log(1)
      }
        else{
            console.log(2)
            timerFunc();
        }
    },1000);
}


function ok1(){
    // console.log(1)
    // var ddlType = document.getElementById('ddlEmailType')
    // ddlType.selectedIndex=2
    
    var addNode = document.getElementsByClassName('Add');
    addNode[0].click();

    var table = document.getElementById("TabPort");
    var trss = table.children[1].children
    var trs = Array.prototype.slice.call(trss);
    trs.forEach(function(tr){  
        var tds = Array.prototype.slice.call(tr.children);
        tds[0].firstElementChild.value=1;
        tds[1].firstElementChild.value=2;
    }); 
    // [].forEach.call(trs, function(tr) {
    //     //
    //     // [].forEach.call(tds, function(td) {
    //     //     td.text = 1;
    //     // });
    // });   
}

ok1()
