require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';

//获取图片相关数据
var imageDatas = require('../data/imageData.json');

//利用自执行函数，将图片信息转换成路径信息
imageDatas = (function getImageUrl(imageDataArr){
  for(var i=0;i<imageDataArr.length;i++){
    var everyImageData = imageDataArr[i];

    everyImageData.imageUrl = require('../images/'+everyImageData.fileName);
    
    imageDataArr[i] = everyImageData;
  }

  return imageDataArr;

})(imageDatas);

// let yeomanImage = require('../images/yeoman.png');

var galleryByReactApp = React.createClass({
  render:function(){
    return(
      <section className='stage'>
        <section className='img-sec'>
          
        </section>
        <nav className='controller-nav'>
          
        </nav>
      </section>
    )
  }
})

// class AppComponent extends React.Component {
//   render() {
//     return (
//       <div className="index">
//         <img src={yeomanImage} alt="Yeoman Generator" />
//         <div className="notice">Plesase edit <code>src/components/Main.js</code> to get started!</div>
//       </div>
//     );
//   }
// }

AppComponent.defaultProps = {
};

export default AppComponent;
