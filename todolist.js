
window.addEventListener('load',function (){
    if(localStorage.getItem("task"))
    {
        var b=localStorage.getItem("task")
        let li = ""
    b.split(',').forEach(function(ele, index){
       li += '<li><div>'+ele+'</div><span class="close">\u00D7</span></li>'
    })
    document.getElementById('ol1').innerHTML = li;
    }
       document.querySelector('input').focus()
    document.querySelector('input').addEventListener('keydown', function(event){
        if(event.keyCode === 13){
            todoList()
        }
    })
    document.querySelector('button').addEventListener('click', todoList);
    function todoList(){
    var li=document.createElement("li");
    var inputvalue=document.querySelector("#todoinput").value;
    var t=document.createTextNode(inputvalue);
    var div = document.createElement("DIV");
    div.appendChild(t)
    li.appendChild(div)
    var s=document.createElement("SPAN");
        var txt=document.createTextNode("\u00D7");
        s.className="close";
        s.appendChild(txt);
    li.appendChild(s);
    if(inputvalue==''){
        alert('enter some value');
    }
    else{
        document.getElementById('ol1').appendChild(li);
        document.querySelector('#clr').classList.remove('hide')
    }
    
    document.getElementById("todoinput").value="";
    if(localStorage.getItem("task")){
        var a = localStorage.getItem("task").split(',');
        a.push(inputvalue)
        localStorage.setItem("task",a);
        console.log(localStorage.getItem("task"));

    }
    else
    {
        var a1=[inputvalue];
        localStorage.setItem("task",a1);
    }
    
    }
    
    document.querySelector('#ol1').addEventListener('click', function(event){
        if(event.target.classList.contains('close')){
            event.target.parentElement.remove()
            if(document.querySelector('#ol1').childElementCount === 0){
                document.querySelector('#clr').classList.add('hide');
            }
        }
    })
    document.querySelector("#clr").addEventListener('click',todoListRemove);
    function todoListRemove(){
        document.querySelector("#ol1").innerHTML = '';
        document.querySelector('#clr').classList.add('hide');
    }
    var l=document.querySelector("ol");
    l.addEventListener('click',function(e){
        if(e.target.tagName==="LI" || e.target.tagName === "DIV")
        {
            e.target.classList.toggle("checked");
        }
        });

    })
    


    


