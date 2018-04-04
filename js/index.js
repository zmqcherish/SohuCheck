function timerFunc(){
    var isDone = false
    
    setTimeout("mainfun()",2000);
}
function mainfun(){
    var mainTable = document.getElementById('ext-gen22');
    if(mainTable){
      var children = mainTable.childNodes;
      if(children.length<2){
        setTimeout("mainfun()",2000);
      }else{
          var trs = Array.prototype.slice.call(children);
          trs.forEach(function(tr){
            try {
                handle(tr)
            } catch (error) {
                
            }  
          });
          alert("完成，请认真检查后提交");
      }
    }
}

function handle(tr){
    var td = tr.children[0].children[0];
    var txt = td.innerText;
    if(txt.indexOf("无打卡")!=-1){
        // console.log(1);
    }
    else if(txt.indexOf("正常")!=-1){
        var trrs = td.children[0].children;
        var times = trrs[3].innerText;
        var end = times.split("~")[1].split(":");
        trrs[8].firstChild.firstChild.click();

        var content = td.children[1].firstChild.firstChild.children;
        var contentTable = content[0].firstChild.children[2];
        if(contentTable.childElementCount!=2){
            var cTable = contentTable.firstChild.children;
            var endHour = Number(end[0]);
            var endMin = Number(end[1]);

            if(txt.indexOf("休息日")!=-1){
                var start = times.split("~")[0].split(":");
                
                cTable[0].firstChild.value  = "62728b0b-538b-423b-ba2b-c5928691b2db";//周末加班 津贴
                addOnChange(cTable[0].firstChild);

                cTable[2].children[1].value = start[0]; 
                addOnChange(cTable[2].children[1]);
                
                cTable[2].children[2].value = start[1];
                addOnChange(cTable[2].children[2]);

                cTable[3].children[1].value = end[0];
                addOnChange(cTable[3].children[1]);
                if(end[1][0]=='0'){
                    cTable[3].children[2].value = end[1][1];
                }else{
                    cTable[3].children[2].value = end[1];
                }
            }
            else if(endHour>20 || (endHour==20&&endMin>=30)){
                
                cTable[3].children[1].value = 18;
                cTable[3].children[2].value = 30;
                cTable[5].firstChild.children[1].click();
                var cTable2 = contentTable.children[1].children;
                var val;
                if(endHour>21||(endHour==21&&endMin>=30)){
                    val = "e31d3265-5b6c-40d7-ba6e-07a8cd3ada74";//日常加班 津贴
                }
                else{
                    val = "b3cea43e-0df6-4730-8d94-49acbdcb45be";//日常加班 报销
                }
                
                cTable2[0].firstChild.value = val;
                addOnChange(cTable2[0].firstChild);

                cTable2[2].children[1].value = 18;
                addOnChange(cTable2[2].children[1]);
                
                cTable2[2].children[2].value = 30;
                addOnChange(cTable2[2].children[2]);
                
                cTable2[3].children[1].value = end[0];
                addOnChange(cTable2[3].children[1]);

                if(end[1][0]=='0'){
                    cTable2[3].children[2].value = end[1][1];
                }else{
                    cTable2[3].children[2].value = end[1];
                }
            }
            content[0].children[1].firstChild.click();
        }
    }
    // return false;
}

//触发onchange事件
function addOnChange(obj){
    var evt = document.createEvent("HTMLEvents");
    evt.initEvent("change", false, true);
    obj.dispatchEvent(evt);
}

timerFunc()
