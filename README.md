# react-use-outside
## Custom React hook to fire given action when the user clicks outside given element.

This is a small bit of code, but surely a useful one. This "click-outside" functionality is something that you might find yourself googling multiple times, or even coding it from scratch many times. Since I've done the same, I decided to share what I got up to this point from different and unrelated implementations, so you can maybe use in your project.

This iteration expects not only a `ref` of the element that should have its outside detected and the function that it should fire when this outside is clicked, but also a list of exceptions, which are the IDs of elements that won't fire the action if you click on them.

Have a look, and clone this on your project! 😁
