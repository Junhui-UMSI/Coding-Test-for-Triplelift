# Coding-Test-for-Triplelift

# Requirements 
- A reusable form using only HTML, CSS and Javascript, Do not use any CSS frameworks or external Javascript libraries.
- Initial state of component: an empty text input bpx and an ADD button. 
	- ADD: If the user enters text to the input box, clicking ADD should add that text to a list.
	- DELETE: There should be a way to delete a list element.
	- SUBMIT: On form submit, the list elements should be submitted as an array.

# My solution
- SETTINGS: Initially, there is only an empty input box and an add button. After user clicks on add button and add the value user put into 
   the inpiut box into the list. The delete, clear and submit button will show up. After user clear all the value or submit all the value, 
   the delete,clear and submit button will disappear as well.
   
- ADD: If the user enters text to the input box, clicking add button and the value will be put into a hidden input box and a list element.
    Also, a delete button for deleting this specific value is created and added into the same list element.
    
- DELETE: I have two solutions for deleting the form value in the list.One for delete specific value, the other one is to clear all the value in it.
  - DELETE SPECIFIC ELEMENTS: user could delete a specific value in the list by clicking on the delete button, also the button will delete itself after clicking on it.
  - CLEAR ALL THE ELEMENTS: user could also click on the clear button, this would clear all the value in the list as well as the delete buttons
  
- SUBMIT: 
  - This is the tricky part here, in order to submit the list elements as an array, I put each value of the list elements
    into a hidden input box, which makes it possible to be submitted by the form. If you look at the developer tools within the browser 
    and check the form data in the network section, the submitted value could be seen in there, actually it is submitted as a big array if you look at from the backend, 
    an array element here is one value inside one input box.
  - Also, I tried another way to make it looks clearer.I pushed the value in each hidden input box of the list elements into an array
    called list, and I console log this array so you could see the value in an array format in the console of the browser. After that i put this array
    into a input box of the form, yet when user submit it, the array in the input box would be transferring into a string value, so the first one would be
    fits with the requirements of the test.

- Form validation:
  - I set some validation in the form, such as user could not add an empty value into the list. If they click add without putting 
    any value into the input box, a warning message would appear on the screen and requires user to put value into it.

