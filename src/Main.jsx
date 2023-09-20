/*using Main stub to let the code run */

/*using main to show page navigation*/


/*<NavBar setPage={setPage} />*/
import './Main.css';
// import {useState} from 'react';

import Home from './Home';
import Hogsmeade from './Hogsmeade';
import WizardingNews from './WizardingNews';
import Houses from './Houses';
import Privacy from './Privacy';
import Merchandise from './Merchandise';
import Hogwarts from './Hogwarts'
import Wiki from './Wiki';

/*add page and setPage after making changes in App*/
function Main({page, setPage, onNav }){

   /*const[page, setPage] = useState('Home');*/ /*move this to app to help navigation*/
   // const [newPage, setNewPage] = useState('Home');

    return(
       <main id="main">
                
        {/* onNav is strictly optional, but it is the chunk that enables navigation */}

        { page === 'Home' && <Home setPage={setPage} onNav={onNav}/> }
        { page === 'Hogsmeade' && <Hogsmeade/> }
        { page === 'Hogwarts' && <Hogwarts setPage={setPage}/>}
        { page === 'Wizarding News' && <WizardingNews/>}

        { page === 'Hogwarts Houses' && <Houses/>}

        {page === 'Privacy Policy' && <Privacy/>}

        {page ==='Hogwarts Subject Wiki' && <Wiki/>}
        {page ==='Merchandise' && <Merchandise/>}

       </main>
    );
}

export default Main;