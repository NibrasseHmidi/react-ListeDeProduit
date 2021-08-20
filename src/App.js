import Produit from './Produit/Produit';
import './App.css';
import React, { Component } from 'react';

class App extends Component {
  state={
       produits:[
       
     { imgSrc:"https://www.givenchybeauty.com/dw/image/v2/BBZW_PRD/on/demandware.static/-/Sites-givenchy-beauty-master/default/dw9364c516/images/P036722/3274872419315_P036722_IRR_EDT_80ML_b_5.png?sw=400&sh=500&sm=fit",
   name :"Irresistible Givenchy",
  Price:"45,75€",},

{ imgSrc:" https://cdn2.tendance-parfums.com/media/catalog/product/cache/7af997895935dfca5856fd669a708948/n/5/n5-chanel-eau-de-parfum-vaporisateur-35-ml.jpg",
   name :"N°5 CHANEL",
  Price:"60,00 €",},

 
{ imgSrc:"https://www.yslbeauty.fr/dw/image/v2/AAQP_PRD/on/demandware.static/-/Sites-ysl-master-catalog/default/dw668c67bb/Fragrance/For%20Her/WW-50657YSL_libre_intense/3614273069540_ysl_women-fragrance_libre-edp-intense-20_50ml.png?sw=242&sh=315&sm=fit&q=70",
   name :"Yves Saint Laurent",
  Price:"43,00 €",
},

{imgSrc:"https://m.media-amazon.com/images/I/51SP1Rn6LKL._AC_SX466_.jpg",
   name :"Yves Rocher Évidence",
  Price:"39,00 € ",},
   
{imgSrc:"https://www.versace.com/dw/image/v2/ABAO_PRD/on/demandware.static/-/Sites-ver-master-catalog/default/dw8924ea22/original/90_R520032-R090MLS_RNUL_20_YellowDiamond90ml-Fragrances-versace-online-store_4_24.jpg?sw=450&sh=632&sm=fit&sfrm=jpg",
   name :"YELLOW DIAMOND",
  Price:"95.00 €",
},
{imgSrc:"https://www.fragrancefoundation.fr/site/2012/wp-content/uploads/2020/05/tresor-400x400.jpg",
   name :"TRESOR – LANCÔME",
  Price:"87.20 €",},
       ]
  };

  render() {
  return (
    <div className="App">
   
<Produit
produits={this.state.produits}>  </Produit >      
    
    </div>
  );
  }
 
}

export default App;
