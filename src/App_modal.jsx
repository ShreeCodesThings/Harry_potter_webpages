/*modal display page - needs styling */
import './App.css';
import { useRef } from 'react';

function App() {
  const modalRef = useRef(null);
  return (
    <div className="app">

      <p>
        Amet iure impedit magni soluta error Exercitationem expedita beatae mollitia minima animi? Eos culpa doloremque.
        This is going to be my hogwarts.
      </p>
      <dialog className="modal" ref={modalRef}>
        <h1>Displaying content</h1>
        <p> You have been accepted to Hogwarts and you are excited to go to the biggest wizarding school in history.</p>
        <button class="modal__submit">Submit</button>
        <button class="modal__cancel" onClick={ () => modalRef.current.close() }>Cancel</button>
      </dialog>
      <button
        class="modal__open"
        onClick={ () => {
          modalRef.current.showModal();
        }}
      >Open Modal</button>
    </div>
  );
}

export default App;