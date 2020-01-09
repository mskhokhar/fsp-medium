import React from 'react';

class Home extends React.Component{
    constructor(props){
        super(props);

        this.incrementIndex = this.incrementIndex.bind(this);
        
    }
    componentDidMount(){
        this.slideIndex = 0;
        this.showSlides();
        setInterval(this.incrementIndex, 2000);
    }

    incrementIndex(){
        if (this.slideIndex < 9) {
            this.slideIndex += 1;
        } else {
            this.slideIndex = 0;
        }
    }
    render(){
        const mySlides = [
            <div className="mySlides fade">
                <img src={window.business} />
                <div className="text">Business</div>
            </div>,

            <div className="mySlides fade">
                <img src={window.education} />
                <div className="text">Education</div>
            </div>,

            <div className="mySlides fade">
                <img src={window.food} />
                <div className="text">Food</div>
            </div>,

            <div className="mySlides fade">
                <img src={window.health} />
                <div className="text">Health</div>
            </div>,

            <div className="mySlides fade">
                <img src={window.lgbt} />
                <div className="text">LGBTQIA</div>
            </div>,

            <div className="mySlides fade">
                <img src={window.psychology} />
                <div className="text">Psychology</div>
            </div>,
            <div className="mySlides fade">
                <img src={window.relationships} />
                <div className="text">Relationships</div>
            </div>,

            <div className="mySlides fade">
                <img src={window.technology} />
                <div className="text">Technology</div>
            </div>,

            <div className="mySlides fade">
                <img src={window.work} />
                <div className="text">Work</div>
            </div>
        ];
        return (
            <div>
                <h1>Get smarter about what matters to you</h1>
                
                <div className="slideshow-container">
                    {
                        mySlides[this.slideIndex]
                    }
                    {/* <div >
                        <span className="dot" onClick={this.currentSlide(1)}></span>
                        <span className="dot" onClick={this.currentSlide(2)}></span>
                        <span className="dot" onClick={this.currentSlide(3)}></span>
                        <span className="dot" onClick={this.currentSlide(4)}></span>
                        <span className="dot" onClick={this.currentSlide(5)}></span>
                        <span className="dot" onClick={this.currentSlide(6)}></span>
                        <span className="dot" onClick={this.currentSlide(7)}></span>
                        <span className="dot" onClick={this.currentSlide(8)}></span>
                        <span className="dot" onClick={this.currentSlide(9)}></span>
                    </div> */}
                </div>
                <div>Get Started</div>
                <div>Checklist</div>
                <div>About Blogium</div>
                <div>
                    <p>Expand your reading</p>
                    <p>Expand your mind</p>
                    <button>Get Started</button>
                </div>
                <footer>
                    <div>
                        <p>GITHUB pAGE</p>
                        <p>Schema</p>
                        <p>Sample State</p>
                        <p>FRONTEND ROUTES</p>
                        <p>BACKEND ROUTES</p>

                    </div>
                    <div>
                        For Android and playstore symbols
                    </div>
                </footer>
            </div>
        
            
        );
    }
}

export default Home;