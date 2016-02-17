const handleClick = (imgUrl, e) => {
  sImageBox.open(imgUrl);
};

ImageItem = React.createClass({
  render() {
    var imgUrl = "//d2gwl2nm6rhtp1.cloudfront.net/img/gallery/" + this.props.imageName

    return (
      <img className="js-activate-s-image-box" src={imgUrl} onClick={handleClick.bind(null, imgUrl)}/>
    );
  }
});