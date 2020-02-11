import React from 'react';
import Product from './components/Product'
class App extends React.Component{
	onClick(){
	console.log('this is components app');
	}
	onClick2(text){
	console.log(text);
	}
	render(){
		
		var products =[
		{
			id:'2',
			name:'Iphone 6 Plus',
			price:1600000,
			img:'https://cdn.tgdd.vn/Products/Images/42/60831/iphone-6-3-400x460.png',
			status:true
		},
		{
			id:'3',
			name:'Iphone 7 Plus',
			price:1800000,
			img:'https://cdn.tgdd.vn/Products/Images/42/60831/iphone-6-3-400x460.png',
			status:true
		}
		];
		let elements=products.map((products,index)=>{
			var result='';
			
				result=	<Product key={products.id}
					img={products.img}
					price={products.price}
					
					>
					{products.name}
					</Product>
			return result;
		});
			
		return(
			<div>
				<nav className="navbar navbar-inverse"> 
					<div className="container-fluid">
						<a className="navbar-brand">Props</a>
					</div>
				</nav>
				<div className="container">
					<div className="row">
						<div className="row">
							<div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
								{elements}
							</div>
							<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
								<button type="button" className="btn btn-warning" onClick={this.onClick}>
								Click me!
								</button>
								<button type="button" className="btn btn-warning" onClick={this.onClick2('ABC')}>
								Click me 2!
								</button>
							</div>
							</div>
						</div>
					</div>
				</div>
		);
	}
}
export default App;
