import React from "react"
import "./index.scss"
import {connect} from "react-redux"

class Choise extends React.Component{
	constructor(props) {
		super(props);
		this.state={
			
		}
	}
	render(){
		return <div>		
		{
			this.props.show?
			<div className="choise">	
				<div className="nav">
					<div className="head">
						<i className="iconfont icon-close" onClick={()=>{
							//this.props.changeshow(false)
						}}></i>
						<span>选择收货地址</span>
					</div>
					<div className="searchchoise">
						<span>
							<em>杭州</em>
							<i className="iconfont icon-moreunfold"></i>
						</span>
						<div className="searchbar">
							<i className="iconfont icon-search"></i>
							<input type="text" placeholder="请输入收货地址"/>
						</div>
					</div>
				</div>
				<div className="curr first-click">
					<h5>当前地址</h5>
					<div className="section">
						<div className="item flex">
							<div id="local-address">定位失败</div>
							<div className="relocation">
								<i className="iconfont icon-map"></i>
								重新定位
							</div>
						</div>
					</div>
				</div>
				<div className="curr first-click">
					<h5>附近地址</h5>
					<div className="section">
						<div className="item flex">
							<div id="local-address">无法获取附近地址</div>
							<div className="relocation">更多地址</div>
						</div>
					</div>
				</div>
			</div>
			:null
		}
		</div>
	
	
	}
}
export default Choise;