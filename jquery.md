# jQuery: Usage, Syntax, Functions, and Programming Approach

## Introduction to jQuery

jQuery is a fast, lightweight, and feature-rich JavaScript library designed to simplify client-side scripting. It allows developers to manipulate HTML documents, handle events, create animations, and manage asynchronous requests easily.

### Why Use jQuery?

-   Simplifies DOM manipulation
-   Cross-browser compatibility
-   Efficient event handling
-   Built-in animation effects
-   AJAX support
-   Lightweight and easy to use

## Getting Started with jQuery

To use jQuery, include the library in your HTML file using a CDN link:

```html
<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
```

## Basic Syntax

jQuery syntax follows a simple structure:

```javascript
$(document).ready(function () {
    // jQuery code goes here
});
```

The `$` symbol represents the jQuery function, which is used to select elements and perform actions.

### Example: Changing Text Content

```javascript
$(document).ready(function () {
    $("#myElement").text("New Text Content");
});
```

## jQuery Selectors

Selectors allow selecting and manipulating HTML elements:

| Selector         | Description                                     |
| ---------------- | ----------------------------------------------- |
| `$("p")`         | Selects all `<p>` elements                      |
| `$("#id")`       | Selects an element with the specified `id`      |
| `$(".class")`    | Selects all elements with the specified `class` |
| `$("div:first")` | Selects the first `<div>` element               |

### Example: Selecting Elements

```javascript
$("#btn").click(function () {
    $(".content").css("color", "blue");
});
```

## Event Handling in jQuery

jQuery simplifies event handling with functions such as:

| Event       | Description                          |
| ----------- | ------------------------------------ |
| `click()`   | Triggered when an element is clicked |
| `hover()`   | Mouse hover event                    |
| `keydown()` | Key press event                      |
| `submit()`  | Form submission event                |

### Example: Click Event

```javascript
$("#btn").click(function () {
    alert("Button Clicked!");
});
```

## jQuery Effects & Animations

jQuery provides various methods for animations:

| Effect             | Description               |
| ------------------ | ------------------------- |
| `hide(speed)`      | Hides the element         |
| `show(speed)`      | Shows the element         |
| `toggle(speed)`    | Toggles between hide/show |
| `fadeIn(speed)`    | Fades in an element       |
| `fadeOut(speed)`   | Fades out an element      |
| `slideUp(speed)`   | Slides an element up      |
| `slideDown(speed)` | Slides an element down    |

### Example: Sliding Text Animation

```javascript
$(document).ready(function () {
    function slideText() {
        $(".sliding-text").animate({ left: "0%" }, 1000, function () {
            $(this).delay(2000).animate({ left: "-100%" }, 1000, slideText);
        });
    }
    slideText();
});
```

## AJAX with jQuery

AJAX allows data fetching without reloading the page:

```javascript
$.ajax({
    url: "data.json",
    method: "GET",
    success: function (response) {
        console.log(response);
    },
    error: function (error) {
        console.error("Error fetching data");
    },
});
```

## jQuery Example Programs

### 1. Bill Generator

```javascript
$(document).ready(function () {
    $("#produceBill").on("click", function () {
        const brand = $("#brand").val();
        const items = [];
        $('input[name="item"]:checked').each(function () {
            items.push($(this).val());
        });
        const quantity = $("#quantity").val();
        if (items.length === 0) {
            alert("Please select at least one item.");
            return;
        }
        if (!quantity || quantity <= 0) {
            alert("Please enter a valid quantity.");
            return;
        }
        const totalAmount = items.length * quantity * 100;
        alert(
            `Brand: ${brand}\nItems: ${items.join(
                ", "
            )}\nQuantity: ${quantity}\nTotal Amount: $${totalAmount}`
        );
    });
});
```

### 2. Bouncing Ball Animation

```javascript
$(document).ready(function () {
    function bounceBall() {
        $("#ball").animate({ top: "350px" }, 1000, "linear", function () {
            $("#ball").animate({ top: "0px" }, 1000, "linear", bounceBall);
        });
    }
    bounceBall();
});
```

## Conclusion

jQuery simplifies web development by providing an easy-to-use API for DOM manipulation, event handling, animations, and AJAX. It remains relevant for projects requiring quick and efficient scripting, especially for legacy browsers and lightweight applications.

## jQuery Functions with Code, Output, and Explanation

| Function      | Code Example                                                                                                                             | Output                                             | Explanation                                        |
| ------------- | ---------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- |
| `text()`      | `$("#myElement").text("New Text Content");`                                                                                              | Updates the text content of the selected element.  | Sets or retrieves the text content of an element.  |
| `click()`     | `$("#btn").click(function() { alert("Button Clicked!"); });`                                                                             | Shows an alert on button click.                    | Triggers an event when an element is clicked.      |
| `animate()`   | `$("#ball").animate({ top: "350px" }, 1000, "linear", function () { $("#ball").animate({ top: "0px" }, 1000, "linear", bounceBall); });` | Moves an element smoothly.                         | Performs custom animations on elements.            |
| `slideUp()`   | `$(".content").slideUp();`                                                                                                               | Hides the selected element with a sliding effect.  | Slides the element upwards to hide it.             |
| `slideDown()` | `$(".content").slideDown();`                                                                                                             | Displays the hidden element with a sliding effect. | Slides the element down to reveal it.              |
| `fadeIn()`    | `$(".content").fadeIn();`                                                                                                                | Smoothly displays an element.                      | Fades in the selected element.                     |
| `fadeOut()`   | `$(".content").fadeOut();`                                                                                                               | Smoothly hides an element.                         | Fades out the selected element.                    |
| `toggle()`    | `$(".content").toggle();`                                                                                                                | Toggles visibility of an element.                  | Alternates between hiding and showing an element.  |
| `each()`      | `$("input[name='item']").each(function() { console.log($(this).val()); });`                                                              | Logs values of selected checkboxes.                | Iterates through elements and executes a function. |
| `val()`       | `$("#brand").val();`                                                                                                                     | Retrieves or sets the value of an input field.     | Gets or sets the value of form inputs.             |
| `attr()`      | `$("#image").attr("src", "new.jpg");`                                                                                                    | Changes the image source dynamically.              | Retrieves or sets attributes of an element.        |
| `css()`       | `$("#content").css("color", "blue");`                                                                                                    | Changes text color to blue.                        | Modifies CSS properties dynamically.               |
| `hide()`      | `$("#content").hide();`                                                                                                                  | Hides the selected element.                        | Hides elements from the DOM.                       |
| `show()`      | `$("#content").show();`                                                                                                                  | Displays a hidden element.                         | Shows elements in the DOM.                         |
| `ajax()`      | `$.ajax({ url: "data.json", method: "GET", success: function(response) { console.log(response); } });`                                   | Fetches data asynchronously.                       | Makes AJAX requests to a server.                   |
