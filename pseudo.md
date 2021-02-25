# This is a pseudo code to Mincraft

-- HTML

    Landing-Page.html:
        <div class='container'>
            <img class='logo></img>
            <button class='start-btn>START</button>
        </div>

    Game-Page.html:
        <div id='world'>
            <div class='main'></div> // Here will be injected divs from js building the matrix
            <div class='game elements'> // flex -> direction column
                <h1 class='inventory'></h1>
                <h3>Tools</h3>
                <div class='axe'>AXE</div> // background of axe img & text of 'AXE'
                <div class='pickaxe'>PICKAXE</div> // background of axe img & text of 'PICKAXE'
                <div class='shovel'>SHOVEL</div> // background of axe img & text of 'SHOVEL'
                <h3>Elements</h3>

                Divs of all the elements in the game one above each

                Button - RESET WORLD
                Button - RESET GAME

            </div>
        </div>

-- CSS

- make the classes of:
  Elements:
  leaves
  wood
  stone
  clouds
  sky
  grass
  soil

  Tools:
  axe
  pickaxe
  shovel

  - Make the world display flex
  - Make the main display grid
  - Make the game elements display flex column

-- JS

    - MATRIX
        Build a dynamic 2D matrix
        inject divs to matrix using a loop

    - EVENTS
        capture event for picking a tool
        capture event for grabbing a matrix cell using a tool:
            [pickaxe = stones]
            [shovel = grass & soil]
            [axe = woods & leaves]
        capture event for placing a cell in the matrix (NOTE: placing can be only instead of sky)

    - Inventory Representaion
        const inventoryType = {
            grass: ,
            wood: ,
            .....
        }

    - mapping inventory -
        FILL
    - Draw
        FILL
