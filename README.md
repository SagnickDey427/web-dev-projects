Hi , this is my collection of small web development projects .

🎯 1st project --> Blurry image loader : It is a simple image loader which loads the image everytime one loads the page. 

  ⟫I used JS to create the percentage loader which is nothing but just a increment function put into a setInterval() function. 
  
  ⟫Created an animation where the image gets less blurrier in the same time interval as it takes to load from 0% to 100%. 
  
  ⟫I tried both CSS and JS method of making the loaded percentage disappear slowly as it comes near 100%.

🎯 2nd project --> Vertical slider : It is a simple slider that changes the image and it's corresponding text slide as we press buttons.

  ⟫First i designed the basic structure of the website, created text and image slides.

  ⟫I created a function changeSlide() that takes the direction of arrow and changes the current active slide index correspondingly, hence i also added the transform property to both left and right slides.

🎯 3rd project --> Random choice picker : It is a random choice picker where choice are entered by comma(',').

  ⟫First we designed the layout of the page with html ns css.

  ⟫In javascript, we created a list of choices separated by ',' and then assigned it to span tags under the input area.

  ⟫setTimeInterval() function is used to create the random selecting animation. Finally we choose a random tag using Math.random() function .

🎯4th project --> Light/Dark theme selector with browser localStorage .

  ⟫First we designed a basic webpage normally with html and css.

  ⟫For light/dark theme, we set different classes called 'light' and 'dark' and 'solar' which goes with either light or dark class . We set some color-variables in :root{} and set the colors of different sections to different variables in light/dark mode by slightly changing the color of the variables in each mode.

  ⟫We used many new, different properties and methods , here like :
    1. 'clip-path' property in CSS.
    2. 'hue-rotate()' method in 'filter' property in CSS.
    3. ':focus-within' pseudo-class. 
    4. browser's localStorage to save the color selections even after reloading the page.   