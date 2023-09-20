import './Houses.css'

function Houses(){
    return(
        /*this has the styling for Hogwarts houses page*/
    <div className="hogwarts-houses">
      <h1 className='houses-heading'>Let the sorting Begin!</h1>
        <div className = "hogwarts-houses__firstcard">
              <h3>Gryffindor</h3>
              <img className ="hogwarts-houses__card1img"
              src="/images/gryffindor_lion.jpeg"
              alt="Hogwarts gryffindor lion logo for first card"/>
              <p>One of the houses of Hogwarts. The founder of this house is Godric Gryffindor. The colors that denote this
                house are red and gold. The sorting hat puts people into these houses based on their ability to be highly courageous.
                They have their rooms in the Gryffindor Tower.
              </p>
              {/* <a href="#" class="btn1">Read More</a> */}
            </div>

            <div className = "hogwarts-houses__secondcard">
              <h3>Slytherin</h3>
              <img className ="hogwarts-houses__card2img"
              src="/images/slytherin_snake.jpeg"
              alt="Hogwarts slytherin snake logo for second card"/>
              <p>The house in Hogwarts known for its residents being cunning. Lord Voldemort is known to have been in this house. The house
                was initially founded by Salazar Slytherin who could speak to snakes in parseltongue. The colors for this house are green and
                silver.
              </p>
              {/* <a href="#" class="btn1">Read More</a> */}
            </div>

            <div className = "hogwarts-houses__thirdcard">
              <h3>Ravenclaw</h3>
              <img className ="hogwarts-houses__card3img"
              src="/images/ravenclaw_eagle.jpeg"
              alt="Hogwarts ravenclaw eagle logo for third card"/>
              <p>The characteristics of this house members and the founder Rowena Ravenclaw is sheer intelligence. The symbol of this house is the eagle.
                The Ravenclaw folks sport the color blue.
              </p>
              {/* <a href="#" class="btn1">Read More</a> */}
            </div>
             
            <div className = "hogwarts-houses__fourthcard">
              <h3>Hufflepuff</h3>
              <img className ="hogwarts-houses__card4img"
              src="/images/hufflepuff_beaver.jpeg"
              alt="Hogwarts Hufflepuff beaver logo for fourth card"/>
              <p>Honest and loyal. These are two most important characteristics of those belonging to Hufflepuff. 
                The founder of this house is Helga Hufflepuff. The hard-working folks are known to wear the color yellow which also spreads cheer!
              </p>
              {/* <a href="#" class="btn1">Read More</a> */}
            </div>
     </div>
    );
}

export default Houses;