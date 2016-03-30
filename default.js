// global variable configuration ===============================================================
// This part of the code define some global variable that could be used for multiple times
// within this js file.

var deletebutton;
var indexarray = [];
var parentnode = document.getElementById('listitem');

// setting function ===============================================================
// This function is used to decide whether to show the clear and submit button based on
// whether there is any value being added into the ul element. It is being recalled everytime
// user add,delete or clear the value.

window.onload = setting();
function setting(){
    console.log(parentnode.hasChildNodes());
   if(parentnode.hasChildNodes()){
     document.getElementById('clear').style.display="inline-block";
    document.getElementById('submit').style.display="inline-block";
   }
   else{
     document.getElementById('clear').style.display="none";
     document.getElementById('submit').style.display="none";
   }
}


// add value function ===============================================================
// This function is used to add value into the list element.whenever an value is entered,
// the function will create a list element and a hidden input box and put the input value
// into the input box.

function addvalue(){
  document.getElementsByTagName('p')[2].innerHTML = null;
  if(document.getElementById('name').value.length === 0){
       document.getElementsByTagName('p')[2].innerHTML = "You must enter the name first";
      return false;
  }
  else{
    var node1 = document.createElement('input');
    var node = document.createElement('li');
    var nodeindex = node;
    var value = document.getElementById('name').value;
    var textnode = document.createTextNode(value);
    node1.setAttribute("type","hidden");
    node1.setAttribute("name","name ");
    node1.setAttribute("value",value );
    node.appendChild(textnode);
    document.getElementById('listitem').appendChild(node);
    var nodelist = parentnode.getElementsByTagName('LI');
    var nodelistlength = nodelist.length;
    document.getElementsByTagName('li')[nodelistlength-1].appendChild(node1);
    deletebutton = document.createElement('input');
    deletebutton.setAttribute("type","button");
    deletebutton.setAttribute("onclick","deletefunction(this)");
    deletebutton.setAttribute('value','Delete this');
    deletebutton.setAttribute('class','deletebutton');
    deletebutton.index = nodelistlength -1;
    indexarray.push(deletebutton.index);
    node1.setAttribute("name","name "+deletebutton.index);
    document.getElementsByTagName('li')[nodelistlength-1].appendChild(deletebutton);
    document.getElementById('name').value = null;
    setting();
  }
};

// delete value function ===============================================================
// This function is used to delete the specific value in the list, for example, user might
// want to just delete one of the input value in the list, he could easily click on the delete button
// that assigns to that input value, and both the value and the button itself would be deleted.

function deletefunction(){
      var target  = event.target;
      var targetparent = target.parentNode;
      console.log(targetparent);
      var i = 0;
   while( (targetparent = targetparent.previousSibling) != null ){
                    ++i;
   }
      console.log(i);
      var nodelist = parentnode.getElementsByTagName('LI');
      var nodetoremove = nodelist[i];
      console.log(nodetoremove);
      parentnode.removeChild(nodetoremove);
      setting();
};

// clear value function ===============================================================
// This function is used to clear all the input value at one time. After clear all the value,
// it will intrigue the setting function and set clear button into display none.

function clearvalue(){
    var targetelement = document.getElementById('listitem');
    console.log(targetelement);
    while(targetelement.firstChild){
      targetelement.removeChild(targetelement.firstChild);
    }
    setting();
};

// submit value function ===============================================================
/* This function is used to submit all the value in the list.
  The requirement is to submit all the value in an array, in the addvalue function i put each of the value
 in a hidden input box, therfore when the user click on the submit button, the form will
 be submitted via the post method and these input values will form an array as user submit it.
 Yet, the array could only been seen in the backend, like in php code.or in the developer mode within the browser.
 So, in order to let you have a clear view of what the array look like, I push the value of each hidden input box in the list
 into an array and you could see the array in the browser console, also I put the string value of this array inside a hidden box,
 so you could also see the list element's array value in the browser developer mode.*/

function submitvalue(){
  var nodelist = parentnode.getElementsByTagName('LI');
  var nodelistlength = nodelist.length;
  if(nodelistlength === 0){
    alert("Currentlist is empty");
    return false;
  }
  else{
    var listarray = [];
    for(nodecount=0; nodecount<nodelistlength; nodecount++){
         var add = nodelist[nodecount].textContent;
         console.log(add);
         listarray.push(add);
         console.log(listarray);//could see the array of the input list elements in the browser console.
         document.getElementById('list').value = listarray;
         console.log(document.getElementById('list').value);
         console.log(typeof document.getElementById('list').value);/*if we put this array value into a input box, the type of this array will
                                                                     change into string, as we could see in the cosole. Therefore, in order to submit
                                                                     the listelement's value as an array, i have to put each of them into a hidden input box
                                                                     and then submit together. In this occasion, if you look into the browser developer mode Network,
                                                                     you could find the whole form's value that is being submitted actually forms a big array in the backend.
                                                                     If you see in the php code, it should be much clearer.
                                                                     */
    }
  }
};
