/*trying navigation with the button*/
import './Home.css';
// import Main from './Main';
// import App from './App';
// import {useState} from 'react';
import { useRef } from 'react';

// import Hogsmeade from './Hogsmeade';
// import WizardingNews from './WizardingNews';

function Home({setPage, onNav}){
   
    console.log(setPage);
    const modalRef = useRef(null);

    function internalNav(event, target){
        event.preventDefault();
        setPage(target);
    } 

    return(
        /*just normal content*/
        <div className="home-div">
          {/* <img className= "hogwarts_day_light"
              src="https://source.unsplash.com/Q8jGeWKO7Ag/600x600" 
              alt="A first glimpse at Hogwarts"></img> */}

            <p className="home-para">
                It is one lazy day at Privot Drive in London. There is nothing strange about today. You can hear Uncle Vernon complaining to
                Aunt Petunia is the next room. The cousin Dudley is snoring loudly after his binge eating of all of possible meals available at school and home.
                But, there is only one thing amiss, an envelope built in heavy quality paper catches your eye. Its lying at the porche.
            </p>
            <p className="home-para">
                Aunt Petunia notices that while pouring tea. She signals for the envelope to be brought in. 
                Once you notice the envelope, you are thrilled! This is the first time someone knows your exact address.
                Surprized, and careful not a get a paper cut, you open the envelope by finding a button on this page.
            </p>
            <p className="home-para">
                The envelope has a crisp writing written in black ink. You wonder if this has something to do with the shooting stars in Kent.
                You even remember the random stranger muttering away as though it was in different language.
            </p>
            <p className="home-para"> The magical experience is yet to begin!</p>
        
              <dialog className="modal" ref={modalRef}>
                <h1 className="modal__heading">Welcome to Hogwarts</h1>
                <p>This letter is for the intended eyes for the recipient only!</p>
                <p> You have been accepted to Hogwarts which is one of the largest Magical Schools in history. The school aims to identify
                  and formally train young witches and wizards. It is with great pleasure that we intend to inform you that you are ready to start on
                  your magical education. 
                </p>
                <p> If you choose to accept & start as a student You are very welcome - we look forward to having you! 
                  You can start by saying Accept! Should you decline, your magical journey ends here.</p>
                <p>Yours sincerely,</p>
                <p>Hogwarts School of Witchcraft & Wizardry, Admissions Team</p>

                <button className="modal__submit" onClick={(event) => internalNav(event, 'Hogwarts')} href="/Hogwarts" data-target='Hogwarts' >Accept!</button>
                <button className="modal__cancel" onClick={ () => modalRef.current.close() }>Decline</button>
              </dialog>
              <button
                className="modal__open"
                onClick={ () => {
                  modalRef.current.showModal();
                }}
              >Let's go!</button>
      </div>

        
    );
}

export default Home;
