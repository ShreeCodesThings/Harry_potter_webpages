import React, { useState } from 'react';
import './Wiki.css';

function Wiki(){

    const [isActive1, setIsActive1] = useState(false);
    const [isActive2, setIsActive2] = useState(false);
    const [isActive3, setIsActive3] = useState(false);

    const accordionData1 = {
        title1: 'Core Subjects',
        content1:
        <ul>
            <li>
                <h2>Astronomy</h2>
                <h3>Deals with the study of celestial or intergalactic elements such as stars, planets, moons. It is one of the subjects that
                    is directly translated to that of the muggle world.</h3>
                <p>Faculty: Professor Sinitra</p>
                <p>Location: Astronomy tower</p>
                <p>Materials: collapsible brass telescopes</p>
            </li>
            <li>
                <h2>Defence against Dark Arts</h2>
                <h3>A subject with practical applications that has been taught for students at all levels to protect themselves 
                    against the dark arts and to be protected against dark creatures.
                </h3>
                <p>Faculty: Professor Severus Snape, Professor Albus Dumbledore, Professor Remus Lupin, Professor Mad-eye Moody</p>
                <p>Location: Room of Requirements and the North Tower</p>
                <p>Suggested Readings: Self-protection Guides: Volume 1, Advanced Protection: Volume 1, Volume 2,Volume 3</p>
            </li>
            <li>
                <h2>Tranfiguration</h2>
                <h3>The art of changing inanimate subjects into animate ones and vice versa.
                    One of the dangerous subjects that doesn't always have the best outcome.</h3>
                    <p>Faculty: Professor Minerva McGonagall</p>
                    <p>Location: Hogwarts North Wing</p>
                    <p>Suggested Readings: Transfigurations and early nuances.</p>
            </li>
        </ul>
      };

      const accordionData2 = {
        title2: '5th years and above electives',
        content2: 
        <ul>
            <li>
                <h2>Magical Creatures</h2>
                <h3>One of the newest subjects introduced at Hogwarts. The subject deals with study and care of many magical creatures that have lived
                    through the magical history along with ones that have long gone. Involves sustained contact with creatures like Oculus, dragons, nifflers,
                    hippogriffs and so on.
                </h3>
                <p>Faculty: Professor Rubeus Hagrid</p>
                <p>Location: Towards the Fobidden forest</p>
                <p>Suggested Reading: Fantastic Beasts and how to find them</p>
            </li>
            <li>
                <h2>Divinition</h2>
                <h3>A subject dedicated to a title that has been considered vague by the magical community. However, the subject is to be treated
                    with utmost importance since it talks about prophecies, the hidden pasts and the future.
                </h3>
                <p>Faculty: Professor Trelawney</p>
                <p>Location: Attic towers</p>
                <p>Materials: udon tea leaves, crystal balls, map of Jupiter Moons</p>
            </li>
        </ul>
      };

      const accordionData3 = {
        title3: 'Extra Co-curriculars',
        content3: 
        <ul>
            <li>
                <h2>Quiddich</h2>
                <h3>A game played with multiple sized balls and bats. The most important highlight being it is the only game on broomsticks.
                    The game ends after having caught the smallest ball called the snitch. This one has wings. There is a seeker who needs to be 
                    fast to catch a snitch. Bludgers are the biggest balls often used to unseat players in mid air. Quaffles are used by chasers score goals while seekers
                    look for snitches.
                </h3>
                <p>Location: Quiddich Pitch</p>
            </li>
            <li>
                <h2>Wizarding Chess</h2>
                <h3>Often played with live chess elements. The players on each side have to figure out the best way to beat each other and
                    at the same time avoid pawns vying for their own self-defence. The difference between muggle chess and wizarding chess is that
                    chess pawns have a life of their own and have an emotional aspect to them.
                </h3>
            </li>
        </ul>
      };



      const { title1, content1 } = accordionData1;
      const { title2, content2 } = accordionData2;
      const { title3, content3 } = accordionData3;
    
      return(
        <div className="wiki__accordion">
            <h1>Hogwarts Subjects!</h1>
            <div className="accordion">
                <div className="accordion-item">
                    <div className="accordion-title" onClick={() => setIsActive1(!isActive1)}>
                        <div>{title1}</div>
                        <div>{isActive1 ? '-' : '+'}</div>
                    </div>
                {isActive1 &&  <div className="accordion-content">{content1}</div>}
                </div>

                <div className="accordion-item">
                    <div className="accordion-title" onClick={() => setIsActive2(!isActive2)}>
                        <div>{title2}</div>
                        <div>{isActive2 ? '-' : '+'}</div>
                    </div>
                {isActive2 &&  <div className="accordion-content">{content2}</div>}
                </div>

                <div className="accordion-item">
                    <div className="accordion-title" onClick={() => setIsActive3(!isActive3)}>
                        <div>{title3}</div>
                        <div>{isActive3 ? '-' : '+'}</div>
                    </div>
                {isActive3 &&  <div className="accordion-content">{content3}</div>}
                </div>

            </div>
            <div className="wiki__filler"></div>
        </div>
    );



}


export default Wiki;