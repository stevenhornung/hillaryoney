Home = React.createClass({
  pics() {
    pics = [];
    for (i = 1; i <= 35; i++) {
      pics.push("IMG_" + i + ".JPG");
    }
    return _.shuffle(pics);
  },

  render() {
    return (
      <div id="home">
        <div className="image-container">
          {this.pics().map((pic)=>
            <img key={pic} src={"//d2gwl2nm6rhtp1.cloudfront.net/img/gallery/" + pic}/>
          )}
        </div>
      </div>
    );
  }
});