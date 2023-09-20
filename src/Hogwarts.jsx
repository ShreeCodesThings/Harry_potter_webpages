import './Hogwarts.css';

function Hogwarts({setPage}){

    function internalNav(event, target){
        event.preventDefault();
        setPage(target);
      }

    return(
        /*text page*/
      <div className="hogwarts">
        <h1 className='hogwarts-heading'>Welcome to Hogwarts School of Witchcraft & Wizardry</h1>
       <div className="hogwarts-intro">
            <p> Hogwarts School of Witchraft and Wizardry is an all magical school and oldest of the all wizarding schools established through the history.
                The other wizarding school are Durmstrang, Beauxbatons and so on.
            </p>
            <p>Hogwarts is the largest in areas and is situated well hidden and away from prying muggle eyes in the heart of London. It is often reached through Hogwarts express
                which brings in students across all ages with the start point being Platform 9 and three quarters. The platform is just across the King's cross station.
                Different areas in Hogwarts include the Owlery tower for flying pets, the forbidden forest, the great hall, the dungeons where potions are taught and various secret passages.
            </p>
            <p>
                There are various subjects taught in Hogwarts with electives available for third years and above.
            </p>
            <p>Please see that the magical experience here are based purely out of imagination and fan fiction. 
                Any resemblance fictional or otherwise is purely co-incidental! Proceed with caution!</p>
            <p>
                After reaching Hogwarts you will be sorted to your respective houses which will be your home. 
                The accommodation is dorm based and each house will have its own space. 
                Before you proceed, take a moment to read about the Houses and subjects you will have.
            </p>
            <button className="hogwarts-sorting" onClick={(event) => internalNav(event, 'Hogwarts Houses')} href="/Houses" data-target='Hogwarts Houses' >Sorting!</button>
            <button className="hogwarts-syllabus" onClick={(event) => internalNav(event, 'Hogwarts Subject Wiki')} href="/Wiki" data-target='Hogwarts Subject Wiki' >Know More!</button>
        </div>


        <div className="hogwarts__carousel-container">
           <div className="hogwarts-carousel" aria-label="food image carousel" tabIndex="0">
                {/* <a className="carousel__skip-link" href="#skip-link">Carousel</a> */}
                
                <div className="hogwarts__images">
                    <div className="image-item" id="carousel-image1" aria-label="image 1 out of the 5" tabIndex="0">
                        <img className = "hogwarts-image1"
                        src="https://source.unsplash.com/FdJmE0YibvQ/500x500"
                        alt="Hogwarts reflected on the great lake"/>
                    </div>
                    <div className="image-item" id="carousel-image2" aria-label="image 2 out of the 5" tabIndex="0">
                        <div className="image-item" id="carousel-image2" aria-label="image 2 out of the 5" tabIndex="0">
                            <img className = "hogwarts-image2"
                            src="https://source.unsplash.com/whMKS_jm0ic/500x500"
                            alt="One of the clanking armors in great hall"/>
                        </div>
                    </div>
                    <div className="image-item" id="carousel-image3" aria-label="image 3 out of the 5" tabIndex="0">
                        <div className="image-item" id="carousel-image3" aria-label="image 3 out of the 5" tabIndex="0">
                            <img className = "hogwarts-image3"
                            src="https://source.unsplash.com/v-IkXXcQ0Eo/500x500"
                            alt="The Hogwarts express trundling down to Hogwarts"/>
                        </div>
                    </div>
                    <div className="image-item" id="carousel-image4" aria-label="image 4 out of the 5" tabIndex="0">
                        <div className="image-item" id="carousel-image3" aria-label="image 3 out of the 5" tabIndex="0">
                            <img className = "hogwarts-image3"
                            src="https://source.unsplash.com/cAFAVm3VKZA/500x500"
                            alt="An ordinary day of Potions class with all glass vials in and around"/>
                        </div>
                    </div>
                    <div className="image-item" id="carousel-image5" aria-label="image 5 out of the 5" tabIndex="0">
                        <div className="image-item" id="carousel-image3" aria-label="image 3 out of the 5" tabIndex="0">
                            <img className = "hogwarts-image3"
                            src="https://source.unsplash.com/WsBtj3RL0fs/500x500"
                            alt="A dragon statue perched at the gates with its roaring mouth wide"/>
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

export default Hogwarts;