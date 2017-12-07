import React from "react"
import "./index.scss"
import {NavLink} from "react-router-dom"
import "@/assets/iconfont/iconfont.css"


class Footerbar extends React.Component{
	constructor(props) {
		super(props);
		this.state={
			
		}
	}
	render(){
		return <footer>
		<ul>
			<NavLink to="/home" activeClassName="footactive">
				<i className="iconfont icon-rfq1"></i><p>首页</p>
			</NavLink>
			<NavLink to="/list" activeClassName="footactive">
				<i className="iconfont icon-viewgallery"></i><p>分类</p>
			</NavLink>
			<NavLink to="/card" activeClassName="footactive">
				<i className="iconfont icon-cart"></i><p>购物车</p>
			</NavLink>
		</ul>
			
		</footer>
	}
}
export default Footerbar;