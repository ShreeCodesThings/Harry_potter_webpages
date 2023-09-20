import './WizardingNews.css';
import {useState} from 'react';

function WizardingNews(){
  
  
  function onSubmit(event){
    setIsNameInvalid(!name);
    setIsEmailInvalid(!name);

  // event.preventDefault();

  if(name && email && newsConfirm)
      { console.log("name is:",name);
      console.log("email is:",email);
      console.log("News Delivery confirmation:", newsConfirm);
      }
  else{
      console.log("form submission not successful!");
      event.preventDefault();
  }
}

const [name, setName] = useState('');
const [isNameInvalid, setIsNameInvalid] = useState(false);

const [email, setEmail] = useState('');
const [isEmailInvalid, setIsEmailInvalid] = useState(false);

const [newsConfirm, setNewsConfirm] = useState(false);


const nameErrClass = isNameInvalid ? "register__name--invalid":"";

    return(
        /*just normal content*/
        <div className="news-div">
      
          <header className='news_name'>Wizarding News</header>

          <div className="news-subheading">York, London - Tuesday January 06, 2022</div>


          <div className="news-content">
              <div className="news-columns">
                <div className="news-column">
                  <div className="head"><span className="headline-third">Hogwarts Express's new route</span>
                    <p><span className="headline-fourth">by RITA SKEETER</span></p>
                  </div>
                    The Hogwarts express was seen trundling and whistling amongst the mountains in the far north. The route was a deviation from the usual.
                  <p>The Hogwarts express departs from Platfrom 9 and three quarters on King's Cross every single time without fail. But this was an unusual happening, the Hogwarts express although it departed from the usual platform,
                    it normally weaves around the country side. This time, the students gazed mirthlessly into the ever whites that stretched along side them.
                    It was mostly definitely not the term start after the winter season. But, there was something unusual about the route. The train is set to stop at the newly made entrance for it at the edge of the forbidden
                    forest. Students are definitely in for a treat.
                  </p>
                  <p>The Hogwarts usually deems the forbidden forest to be a place which is strictly out of bounds for students.However, the new route enables
                    students to demystify the forest in their own safe place while the route to Hogwarts is through extreme north of Europe. While, one part of the journey is fully snow-capped and seems like a winter wonderland,
                    the train will be seen entering the magical world amidst many colors.
                    Students aboard the train are in for a surprize.
                  </p>
                  </div>

                  <div className="news-column">
                      <div className="head"><span className="headline-fifth">The 7 Horcruxes</span>
                        <p><span className="headline-sixth">The story never seems to end</span></p>
                      </div>
                        <p>It was one other long day. Harry Potter(17), Hermione Granger(18), Ron Weasley(17) set out to take on the horcruxes alone.
                          It has been 2 months and they have been wandering about cluelessly looking to destroy the piece of darkened soul hidden away
                          before it could destroy their magical world.
                        </p>
			                  <figure className="figure">
                          <img className ="newspaper__image1"
                          src="https://source.unsplash.com/tNFQhpZExCw/350x200"
                          alt="The Deathly Hallows Symbol"/>
                        <figcaption className="figcaption">The Deathly Hallows</figcaption>
                        </figure>

                        <p>It looks like the dark forces are gathering strength and it has been unnerving to see just three teenagers on their dreams to become aurors are on
                          an early assignment from school.
                        </p>

                        <p>The known prophesized Harry Potter is on a mission with his friends to destroy the rumoured 7 horcruxes. Horcruxes refer to inanimate objects
                          that are used to store away a piece of soul through violent dark arts. One of the horcruxes to be destroyed is the diary as a part of chamber of secrets.
                        </p>
                  </div>

                  <div className="news-column">
                      <div className="head"><span className="headline-third">Quality Quiddich Supplies now open at Hogsmeade</span>
                        <p><span className="headline-sixth">Quiddich Weekly</span></p>
                      </div>
                        <p>Quiddich Supplies have almost always been available in Diagon Alley. But, Hogwarts students now don't have to worry about doing their favorite
                          sports shopping right in the beginning of the semester.
                        </p>
			                  
                        <p>The same shop opened up a branch in Hogsmeade enabling them to do their Quiddich shopping whenever they go and visit the village.
                          The opening has been a huge success considering Hogwarts is a main customer.
                        </p>

                        <figure className="figure">
                          <img className ="newspaper__image2"
                          src="https://source.unsplash.com/3yfE6tF6N24/350x200"
                          alt="The Quiddich Supplies Store"/>
                        <figcaption className="figcaption">The Quiddich Supplies Store</figcaption>
                        </figure>

                        <p>The shop is placed strategically between Honeydukes and a local crafts store. Everytime one enters, they get to see the magnificent sight of Nimbus,
                          Firebolt that are the newest in the market. Every quiddich fan gets their jaw dropped at the magnificent collection for all ages and showcase the best brands.
                        </p>
                  </div>


                </div>
              </div>

              {/* adding form content here */}

      <div className='news-registration'>
        <h2 className = "news__heading">Register to get everyday Magical news delivery!</h2>
        <p className="news-info">
            * Indicates a mandatory field without which the form would not be submitted.
        </p>
        <form onSubmit = {onSubmit} className='register'>
            <div className="register__field">
                <label className="register__label register__name-label" htmlFor="name">Name:</label>
                <input 
                    className={`register__name ${nameErrClass}`}
                    value={name} 
                    name="name"
                    onInput={
                        event => {
                            console.log(event.target.value);
                            setName(event.target.value);
                            setIsNameInvalid(!event.target.value);
                        }
                    }
                    id="name"
                />
                <span className="register__error register__name-error">{isNameInvalid && "Name field required"}</span>
            </div>
            <div className="register__field">
                <label className="register__label register__email-label" htmlFor="email">Email:</label>
                <input 
                    className="register__email" 
                    name="email" 
                    onInput={
                        event => {
                            console.log(event.target.value);
                            setEmail(event.target.value);
                            setIsEmailInvalid(!event.target.value);
                        }
                    }
                    id="email"
            />
                {/* choose to show element based on state */}
                {/* {isEmailInvalid && <span className="register__error register__email-error">This element is required</span>} */}
                <span className="register__error register__email-error">{isEmailInvalid && "Email is required"}</span>
            </div>


            {!isNameInvalid && !isEmailInvalid &&
            <div className="checkbox">
                    <label htmlFor="sign_up">Do you want WizardingNews to be automatically delivered to your inbox everyday?</label>
                    {/* <span className="register__required">*Required</span> */}
                    <input type="checkbox" 
                        className="news_signup"
                        onChange={
                            () => {
                                console.log(newsConfirm);
                                setNewsConfirm(!newsConfirm);
                                // setIsNewsConfirmInvalid(!event.target.value);
                            }
                        }
                        id="sign_up" 
                        name="sign_up"
                    />
                    <span className="register__error register__news-error">{!newsConfirm && "Please confirm news delivery"}</span>
            </div> }

           
            <button type="submit" className="register__submit">Register</button>
        </form>   
     </div>


              
            </div>
    );
}



export default WizardingNews;