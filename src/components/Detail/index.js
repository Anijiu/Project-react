import React from "react"
import "./index.scss"
import { NavLink } from "react-router-dom"

class Detail extends React.Component{
	constructor(props) {
		super(props);
		this.state={
			
		}
	}
	render(){
		return <div>
			<div className="head">
			  <NavLink to="/home">
			    <i className="iconfont icon-back"></i>
			  </NavLink>			  
			  <div className="ul">
			    <NavLink to="/detail/shop" className="navlink">商品</NavLink>
			    <NavLink to="/detail/intro" className="navlink">详情</NavLink>
			    <NavLink to="/detail/judge" className="navlink">评价</NavLink>
			  </div>
			
			</div>
			{
				this.props.children
			}
		</div>
	}
}
export default Detail;