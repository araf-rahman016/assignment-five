1.What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

**ans:
getElementById selects a single element by its unique ID and returns that element or null.
getElementsByClassName selects all elements with a given class and returns a live HTMLCollection, which updates if the DOM changes.
querySelector uses CSS selectors and returns the first matching element, whether it’s by ID, class, tag, or attribute.
querySelectorAll also uses CSS selectors but returns all matching elements in a static NodeList that doesn’t change when the DOM updates.
In short, use getElementById for unique IDs, getElementsByClassName for live collections, and querySelector / querySelectorAll for flexible CSS-style selections.

2.How do you create and insert a new element into the DOM?

**ans:
I can create a new element in the DOM using document.createElement("tagName").
Then, I can set its text using element.textContent or element.innerHTML, and add attributes or classes if needed.
To place it in the document, use methods like appendChild() or append() on a parent node.
For inserting before a specific element, I can use parent.insertBefore(newElement, referenceElement).
In short, the process is: create → customize → insert into the desired parent element.

3.What is Event Bubbling and how does it work?

**ans:
Event bubbling is a process in the DOM where an event starts from the target element and then propagates upward through its parent elements.
For example, 
if I click a button inside a div, the click event first fires on the button, then on the div, and then on higher ancestors like body and document.
This happens because events "bubble up" from the innermost element to the outermost.
I can control this behavior using methods like event.stopPropagation() to stop the bubbling.
Event bubbling is useful for event delegation, where a parent element handles events for its child elements efficiently.

4.What is Event Delegation in JavaScript? Why is it useful?

**ans:
Event delegation is a technique where I attach a single event listener to a parent element instead of adding listeners to multiple child elements.
Because of event bubbling, the event from a child element propagates up to the parent, where it can be handled.
This approach improves performance since fewer event listeners are used, especially when dealing with many child elements.
It also makes it easier to handle dynamically added elements, as the parent listener will still catch their events.
In short, event delegation is both efficient and flexible for managing events in JavaScript.

5.What is the difference between preventDefault() and stopPropagation() methods?

**ans:
preventDefault() is used to stop the default action of an element, like preventing a form from submitting or a link from opening.
stopPropagation() is used to stop the event from bubbling up or trickling down the DOM tree.
In other words, preventDefault() affects the element’s default behavior, while stopPropagation() affects the event flow.
They can be used together if you want to both stop the default action and prevent the event from moving to parent elements.
For example, 
clicking a link inside a div: preventDefault() stops the navigation, and stopPropagation() prevents the click from reaching the div.