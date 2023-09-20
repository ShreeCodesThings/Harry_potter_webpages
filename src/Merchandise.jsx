import './Merchandise.css';

function Merchandise(){
    return(
        <div className = "merchandise" id="maincontent">
            <h1 className = "merchandise__heading">Holiday specials for everyone!</h1>
            <div className = "merchandise__content">
                <img className = "merchandise__image1"
                src="https://source.unsplash.com/zOFQ8v3YBBU/300x300/"
                alt="warm socks for the holidays!"/>
                <p className="para1">
                <span className = "merchandise__heading2">Color changing socks for flat 20% off!!</span><br></br>
                These socks are woven to be magically warm. They are hand-spelled and they change color for every day of the week. 
                It would be a super cool stocking stuffer and they also mend themselves in case there are holes.</p>

                <img className = "merchandise_image2" src="https://source.unsplash.com/BBQ15BncPCc/300x300/" alt="quill with invisible ink" />
                <p className = "para2">
                <span className = "merchandise__heading2">Pay a knut every month!</span><br></br>
                    This super elegant and expensive quill is out for a knut every month in installment! Known for strong grip and is compatible with invisble ink.
                Surprize family and friends with this piece and you will be a family favorite in no time! The writing has a warm citrusy aroma and the quill is sensitive to the writer's emotions!
                    </p> 

                <img className = "merchandise_image3" src="https://source.unsplash.com/WCHzXscc5Lo/300x300/" alt="kitten in our wicker-work basket!" />
                <p className = "para3">
                <span className = "merchandise__heading2">Free for the cutest pet contestant and at flat 60% for others!</span><br></br>
                We have your pet care all in order. Why not give a gift eternal comfort for your best companions? Be it a owl, a cat, a mouse, a turtle, our wicker-work basket is designed to magically 
                accommodate your pet's size and keep it temperature controlled! In other words, one size fits all!</p>
            </div>
        </div>

    );
}

export default Merchandise;