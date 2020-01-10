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
        const category = document.getElementsByClassName('category');
        if (this.state.slideIndex < 8) {
            this.setState({slideIndex: this.state.slideIndex+1}, () => {
                category[this.state.slideIndex-1].classList.toggle("active");
                category[this.state.slideIndex].classList.toggle("active");
            });
        } else {
            this.setState({ slideIndex: 0 }, () => {
                category[8].classList.toggle("active");
                category[this.state.slideIndex].classList.toggle("active");
            });
        }
    }
    
    currentSlide(index){
        const category = document.getElementsByClassName('category');
        const previousIndex = this.state.slideIndex;
        this.setState({slideIndex: index}, () => {
            category[previousIndex].classList.toggle("active");
            category[this.state.slideIndex].classList.toggle("active");
        });
        this.setState({});
    }
    render(){
        
        const mySlides = [
            (<div className="mySlides fade">
                <img src={window.business} />
            </div>),

            (<div className="mySlides fade">
                <img src={window.education} />
            </div>),

            (<div className="mySlides fade">
                <img src={window.food} />
            </div>),

            (<div className="mySlides fade">
                <img src={window.health} />
            </div>),

            (<div className="mySlides fade">
                <img src={window.lgbt} />
            </div>),

            (<div className="mySlides fade">
                <img src={window.psychology} />
            </div>),
            (<div className="mySlides fade">
                <img src={window.relationships} />
            </div>),

            (<div className="mySlides fade">
                <img src={window.technology} />
            </div>),

            (<div className="mySlides fade">
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
                <div className='category-container' >
                    <span className="category active" onClick={() => this.currentSlide(0)}>BUSINESS</span>
                    <span className="category" onClick={() => this.currentSlide(1)}>EDUCATION</span>
                    <span className="category" onClick={() => this.currentSlide(2)}>FOOD</span>
                    <span className="category" onClick={() => this.currentSlide(3)}>HEALTH</span>
                    <span className="category" onClick={() => this.currentSlide(4)}>LGBTQIAA</span>
                    <span className="category" onClick={() => this.currentSlide(5)}>PSYCHOLOGY</span>
                    <span className="category" onClick={() => this.currentSlide(6)}>RELATIONSHIPS</span>
                    <span className="category" onClick={() => this.currentSlide(7)}>TECHNOLOGY</span>
                    <span className="category" onClick={() => this.currentSlide(8)}>WORK</span>
                </div>
                <div className="checklist">
                    <div>
                        <img className="ticked-circle" src={window.tick_circle} alt="tick_circle"/>
                        <div>World-class publications</div>
                    </div>
                    <div>
                        <img className="ticked-circle" src={window.tick_circle} alt="tick_circle"/>
                        <div>Undiscovered voices</div>
                    </div>
                    <div>
                        <img className="ticked-circle" src={window.tick_circle} alt="tick_circle"/>
                        <div>Topics you love</div>
                    </div>
                    <h1 className="checklist-lastchild">All on Blogium, all for you.</h1>
                </div>
                
                <div className="about-container-business-idea">
                    
                    <h1>No ads. No problems.</h1>
                    <span>Your privacy stays yours. We don’t sell your data or target you with ads. Ever.</span>
                
                    
                </div>
                <div className="about-container-intro">
                    <div>
                        <p>We do things differently.</p>
                        <p>Medium is not like any other platform on the internet. <span className="highlighted" >Our sole purpose is to help you find compelling ideas, knowledge, and perspectives.</span> We don’t serve ads—we serve you, the curious reader who loves to learn new things. Medium is home to thousands of independent voices, and we combine humans and technology to find the best reading for you—and filter out the rest.</p>
                    </div>
                </div>
                <hr className="hr" />
                <div>Expand your reading</div>
                <div>Expand your mind</div>
                <button>Get Started</button>
                
            </div>
        
            
        );
    }
}

export default Home;