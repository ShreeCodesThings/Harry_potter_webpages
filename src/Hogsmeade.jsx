import './Hogsmeade.css';

function Hogsmeade(){
    return(
        /*text page*/
      <div className="hogsmeade">
        <h1 className='hogsmeade-heading'>Welcome to Hogsmeade - the wizarding village</h1>
       <div className="hogsmeade-intro">
            <p> The Hogsmeade wizarding village is one the heavily populated all magical village. It is a short getaway from the Hogwarts castle.
                The village is situated well on the shadowy side of Hogwarts. The Hogwarts express annually drops off students at the start of every academic year.
                The village is open for students on few saturdays and only to students at third year and up.
            </p>
            <p>During the winter, entire village is snow-decked and is often visible through windows of high Hogwarts castle towers. It is a home to many
                small wizarding businesses that have sprung up over a period of few centuries. Of the well known names are different chocolatiers like Honeydukes
                often known for their snacks and chocolates.
            </p>
            <p>
                Honeydukes has been a regal snack maker with high apparition history for its various signature dishes. 
                Of the well known dishes shown to the right are the Butter Beer, pumpkin pie, baked potatoes with herbs, chocolate ganache cake,
                and oven-fired pizza.
            </p>
        </div>


        <div className="hogsmeade__carousel-container">
           <div className="hogsmeade-carousel" aria-label="food image carousel" tabIndex="0">
                {/* <a className="carousel__skip-link" href="#skip-link">Carousel</a> */}
                
                <div className="hogsmeade__food-images">
                    <div className="image-item" id="carousel-image1" aria-label="image 1 out of the 5" tabIndex="0">
                        <img className = "food-image1"
                        src="https://source.unsplash.com/uRLHEjAkBX8/500x500"
                        alt="Delicious warm butter beer"/>
                    </div>
                    <div className="image-item" id="carousel-image2" aria-label="image 2 out of the 5" tabIndex="0">
                        <div className="image-item slide-2" id="carousel-image2" aria-label="image 2 out of the 5" tabIndex="0">
                            <img className = "food-image2"
                            src="https://source.unsplash.com/K9_Frc6OBTs/500x500"
                            alt="Pumpkin pie made of garden harvested pumpkins"/>
                        </div>
                    </div>
                    <div className="image-item" id="carousel-image3" aria-label="image 3 out of the 5" tabIndex="0">
                        <div className="image-item slide-3" id="carousel-image3" aria-label="image 3 out of the 5" tabIndex="0">
                            <img className = "food-image3"
                            src="https://source.unsplash.com/9DEggBoY8CY/500x500"
                            alt="Baked potatoes with tasteful rosemary and thyme"/>
                        </div>
                    </div>
                    <div className="image-item" id="carousel-image4" aria-label="image 4 out of the 5" tabIndex="0">
                        <div className="image-item slide-3" id="carousel-image3" aria-label="image 3 out of the 5" tabIndex="0">
                            <img className = "food-image3"
                            src="https://source.unsplash.com/W1TOhhlbQpw/500x500"
                            alt="Warm chocolate oozing out of the dark chocolate cake"/>
                        </div>
                    </div>
                    <div className="image-item" id="carousel-image5" aria-label="image 5 out of the 5" tabIndex="0">
                        <div className="image-item slide-3" id="carousel-image3" aria-label="image 3 out of the 5" tabIndex="0">
                            <img className = "food-image3"
                            src="https://source.unsplash.com/MQUqbmszGGM/500x500"
                            alt="Tomato cheese pizza"/>
                        </div>
                    </div>       
                </div>
                <div className="hogsmeade__carousel-nav">
                    <a className="carousel-nav" href="#carousel-image1" aria-label="Navigate to image 1">1</a>
                    <a className="carousel-nav" href="#carousel-image2" aria-label="Navigate to image 2">2</a>
                    <a className="carousel-nav" href="#carousel-image3" aria-label="Navigate to image 3">3</a>
                    <a className="carousel-nav" href="#carousel-image4" aria-label="Navigate to image 4">4</a>
                    <a className="carousel-nav" href="#carousel-image5" aria-label="Navigate to image 5">5</a>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Hogsmeade;