import React from 'react';
import './asset/style.css';
class ReactImageCarousel extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      imageIndex = 0;
    }
  }

  componentDidMount(){
    this.setState({
      imageIndex: this.props.defaultImage ? this.props.defaultImage : 0
    })
  }

  nextImage = () =>{
    this.setState({
      imageIndex: this.state.imageIndex++
    })
  }

  prevImage = () =>{
    this.setState({
      imageIndex: this.state.imageIndex--
    })
  }

  getImage = (index) =>{
    this.setState({
      imageIndex: index
    })
  }

  render(){
    const { images } = this.props;
    return(
      <div style={this.props.style} className={this.props.className}>
        <div className="slideshow-container">
          {
            images && images.length ?
            images.map((image,index) =>
            <div key={index} className="mySlides fade" style={this.state.imageIndex == index ? {display: 'block'} : {}}>
              <div className="numbertext">1 / 3</div>
              <img src={image.source} style="width:100%"/>
              <div className="text">{image.caption}</div>
            </div>
            ) : null
          }
          {
            images && images.length ?
              <a className="prev" onClick={() => this.prevImage()}>&#10094;</a>
            :null
          }
          {
            images && images.length ?
              <a className="next" onClick={() => this.nextImage()}>&#10095;</a>
            :null
          }
        </div>
        <br/>
        <div style="text-align:center">
        {
          images && images.length ?
          images.map((image,index) =>
            <span key={`dot_${index}`} className={this.state.imageIndex == index ? "dot active" : 'dot'} onClick={() => this.getImage(index)}></span>
          ):null
        }
        </div>
      </div>
    )
  }
}

export default ReactImageCarousel;
