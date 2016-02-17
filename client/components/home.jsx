Home = React.createClass({
  getImages() {
    images = [];
    for (i = 1; i <= 35; i++) {
      images.push("IMG_" + i + ".JPG");
    }

    for (i = 3060; i <= 3389; i++) {
      images.push("IMG_" + i + ".JPG");
    }

    return _.shuffle(images);
  },

  render() {
    return (
      <div id="home">
        <div className="image-container">
          {this.getImages().map((img)=>
            <ImageItem key={img} imageName={img} />
          )}
        </div>
      </div>
    );
  }
});