import React from "react"
import "./index.scss"
import {connect} from "react-redux"

class Intro extends React.Component{
	constructor(props) {
		super(props);
		this.state={
			
		}
	}
	render(){
		return <div>
			<div>
				<ul className="imglist">
					{
						this.props.goodlistId.templatePhoto.map(item=>
							<li key={item.id}>
						        <img src={item.big_image}/>
						    </li>
						)
						 
					}
				</ul>
			</div>
			
		</div>
	}
}
export default connect(
	(state)=>{
		//console.log(state.shopswipe)
		return {
			goodlistId:state.shopswipe
		}

	},
	null
	)(Intro);