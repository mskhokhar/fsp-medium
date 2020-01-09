import React from 'react';

class Home extends React.Component{
    constructor(props){
        super(props);
        this.state = { slideIndex: 0 };

        this.incrementIndex = this.incrementIndex.bind(this);
        this.currentSlide = this.currentSlide.bind(this);
        
    }
    componentDidMount(){
        setInterval(this.incrementIndex, 4000);
    }

    incrementIndex(){
        const dot = document.getElementsByClassName('dot');
        if (this.state.slideIndex < 8) {
            this.setState({slideIndex: this.state.slideIndex+1}, () => {
                dot[this.state.slideIndex-1].classList.toggle("active");
                dot[this.state.slideIndex].classList.toggle("active");
            });
        } else {
            this.setState({ slideIndex: 0 }, () => {
                dot[8].classList.toggle("active");
                dot[this.state.slideIndex].classList.toggle("active");
            });
        }
    }
    
    currentSlide(index){
        const dot = document.getElementsByClassName('dot');
        const previousIndex = this.state.slideIndex;
        this.setState({slideIndex: index}, () => {
            dot[previousIndex].classList.toggle("active");
            dot[this.state.slideIndex].classList.toggle("active");
        });
        this.setState({});
    }
    render(){
        
        const mySlides = [
            (<div className="mySlides fade">
                <div className="text">Business</div>
                <img src={window.business} />
            </div>),

            (<div className="mySlides fade">
                <div className="text">Education</div>
                <img src={window.education} />
            </div>),

            (<div className="mySlides fade">
                <div className="text">Food</div>
                <img src={window.food} />
            </div>),

            (<div className="mySlides fade">
                <div className="text">Health</div>
                <img src={window.health} />
            </div>),

            (<div className="mySlides fade">
                <div className="text">LGBTQIAA</div>
                <img src={window.lgbt} />
            </div>),

            (<div className="mySlides fade">
                <div className="text">Psychology</div>
                <img src={window.psychology} />
            </div>),
            (<div className="mySlides fade">
                <div className="text">Relationships</div>
                <img src={window.relationships} />
            </div>),

            (<div className="mySlides fade">
                <div className="text">Technology</div>
                <img src={window.technology} />
            </div>),

            (<div className="mySlides fade">
                <div className="text">Work</div>
                <img src={window.work} />
            </div>)
        ];
        return (
            <div className='main-home-container'>
                <div className="home-header-container">
                    <h1 className="home-header" >Get smarter about what matters to you.</h1>
                </div>
                
                <div className="slideshow-container">
                    
                    {mySlides[this.state.slideIndex]}
                            
                </div>
                <div className='dots-container' >
                    <span className="dot active" onClick={() => this.currentSlide(0)}></span>
                    <span className="dot" onClick={() => this.currentSlide(1)}></span>
                    <span className="dot" onClick={() => this.currentSlide(2)}></span>
                    <span className="dot" onClick={() => this.currentSlide(3)}></span>
                    <span className="dot" onClick={() => this.currentSlide(4)}></span>
                    <span className="dot" onClick={() => this.currentSlide(5)}></span>
                    <span className="dot" onClick={() => this.currentSlide(6)}></span>
                    <span className="dot" onClick={() => this.currentSlide(7)}></span>
                    <span className="dot" onClick={() => this.currentSlide(8)}></span>
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