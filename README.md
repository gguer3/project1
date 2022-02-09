# project1

Goal of Project
    -> create a pond and have a mama duck follow the computer mouse around
        and everytime the mouse is clicked add a new baby duck
        the baby ducks will follow the mama duck

1) BACKGROUND

    * a lot of trial and error
    * mostly hard coded
    * tweaking numbers to satisfy personal aesthetic

    -> I used the curveVertex() function to outline the pond
    -> not really a pattern to the points used
    -> I used the strokeJoin() and vertex() functions to draw the grass
    -> not really a pattern to these points either
        ->> could define intervals for the grass and condense the code into a for loop
        ->> i didn't really want a consistant interval
    -> oscillating the pond to creat wavelike motion by adding and taking away from the values
        of the y variable of the points in the curve
    
2) DRAWING A DUCK

    -> started with a semicirlce for the body (using arc() function)
    -> added a line and trianlge for legs
    -> used more arc() functions for the neck
    -> circle for the head and another strokeJoin() + vertex() for the beak
    -> made duck proportional about the center of the body/semicircle
    -> set center of the body/semicircle to (mouseX, mouseY)
    -> added a line in the beak, a point for the eye, and a wing later on
    -> to draw a smaller duck I repeat the same code but with snmaller proportions

3) ADDING DUCKS

    -> create a variable to count how many ducks should be there
    -> increment that variable up by one everytime the mouse is clicked
        ->> using a mouseClicked() function
    -> I created a for loop that draw ducks to loop as many times as the value of the variable
        ->> included an of statement to draw a mama duck if that value was one
        ->> and to draw a baby duck if that value was otherwise

4) MAKING LITTLE DUCKS FOLLOW MAMA

    -> I created an array called history to hold the data for where the mouse has been
    -> everytime the draw function runs it creates a vector with the current (mouseX, mouseY)
        and using .push() the vector gets added to the end of the array
        ->> not sure if I wanted to splice the array to get rid of old data
        ->> I didn't but it might save time or space
    -> pos = history[history.length-(10*i)]
        ->> used this to define the position of the baby ducks
        ->> 10 can be changed to spread out or slow down the baby ducks while they follow behind
        ->> i is the number of ducks being drawn
            the greater i is, the more ducks there are, the more thats necessary to subtract from the length
            (the end of the array is the most recent position
            i.e. the closer to the beginning of the array, the farther back in time)
