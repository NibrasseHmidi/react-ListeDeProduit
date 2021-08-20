import React ,{Component} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Table } from "react-bootstrap";

class Produits extends Component{
  render(){
    const {produits} =this.props;
    const theProduits = produits.map(produit =>{
      return(
 <tr>
       <td className="imgPro">
       <img src={produit.imgSrc} /></td>
        <td className="namepro"> {produit.name}</td>
        <td >{produit.Price}</td>
        <td><button onClick={() => handleName(produit.name)}  className="btn btn-info">View</button></td>
      </tr>
   
      )
    } );
       const handleName = name => alert( `Parfum Is  ${name}`);


    return(
  <div className="tabpro">
     <h1 className="titre">Articles de parfum de collection</h1>
    <Table striped bordered hover>
  <thead>
    <tr>
     <th>pic</th>
          <th>Name</th>
          <th>Price</th>
          <th>Actions</th>
    </tr>
  </thead>
  <tbody>
   {theProduits}
  </tbody>



</Table>
    
  </div>

    )
  }
}

export default  Produits ;