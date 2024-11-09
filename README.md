FlySky CT6B RC Controller Joysticks
This project simulates joystick controllers designed to mimic the FlySky CT6B RC controller interface, allowing users to interact with a graphical joystick interface.

Features
Dual Joystick Setup: Two interactive joysticks simulate control input.
Smooth Return: Joysticks smoothly return to center position upon release.
Responsive Design: Flexibly adjusts and centers in the browser window.
Files
HTML (index.html): Defines the layout and structure of the joystick interface.
JavaScript (script.js): Controls joystick behavior, including drag-and-drop movement and return animation.
CSS (styles.css): Manages layout, styling, and responsiveness.
Installation & Usage
Clone the repository:
bash
Copy code
git clone https://github.com/mauryas69/joysticks-version1.git
Open index.html in a web browser to view and interact with the joysticks.
Code Overview
HTML
The HTML file structures the page layout, setting up two joystick containers.

html
Copy code
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>FlySky CT6B RC Controller Joysticks</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div class="controller">
        <div class="joystick-container" id="joystick1">
            <div class="joystick" id="stick1"></div>
        </div>
        <div class="joystick-container" id="joystick2">
            <div class="joystick" id="stick2"></div>
        </div>
    </div>
    <script src="script.js"></script>
</body>
</html>
JavaScript
The JavaScript file (script.js) initializes joystick control, allowing movement and smooth re-centering after drag release.

CSS
The CSS file (styles.css) styles the page layout, joystick appearance, and interactive transitions.

Contributing
To contribute:

Fork this repository.
Make your changes and test locally.
Submit a pull request.
