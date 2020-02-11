import React from 'react';
class Product extends React.Component{
	constructor(props){
		super(props);
		this.onAddToCart=this.onAddToCart.bind(this);
	}
	onAddToCart(text){
		alert(this.props.children + ' - ' + this.props.price);
		
	}
	render(){
		return(
			<div>
			<div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
				<div className="thumbnail">
					<div className="caption">
					<img alt={this.props.children} src={this.props.img}	/> 
						<h3>{this.props.children}</h3>
						<p>
							{this.props.price}
						</p>
						<p>
							<a className="btn btn-primary" onClick = {this.onAddToCart(this.props.children)}>Buy Now</a>
						</p>
					</div>
				</div>
			</div>
			</div>
		);
	}
}
export default Product;
