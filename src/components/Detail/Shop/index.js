import React from "react"
import "./index.scss"
import ReactSwipe from "react-swipe"
import {connect} from "react-redux"

class Shop extends React.Component{
	constructor(props) {
		super(props);
		this.state={
			imageList:[]
		}
	}
	componentWillUnmount() {
		//console.log(this.props.goodlistId)
	}
	
	render(){
		if(this.props.goodlistId.length<=0){
			return <li>no record</li>
		}else{
			return (
				<div>
					
				 <ReactSwipe className="carousel" swipeOptions={{continuous: true,auto: 2000}} key={this.props.goodlistId.length}>
	                {
	                	this.props.goodlistId.templatePhoto.map(item=>
	                		<img src={item.image} key={item.id}/>
	                	)
	                }
	            </ReactSwipe>
	             <div className="detail">
	                <div className="info">
	                   <h3>{this.props.goodlistId.productInfo.product_name}</h3>
	                   <h4>{this.props.goodlistId.productInfo.product_desc}</h4>
	                   <div className="price">
	                     <small>￥</small>
	                     <em>{this.props.goodlistId.productInfo.old_price}</em>
	                   </div>
	                   <div className="size">
	                     <span className="cur">
	                       <strong>{this.props.goodlistId.productItem[0]
	            .volume}</strong> 
	                       <small>  明日达  </small> 
	                     </span>  
	                     <em>{this.props.goodlistId.sendTimeMsg}</em> 
	                    </div>
	                    <h5>{this.props.goodlistId.productInfo.op_weight}</h5>
	                    <div className="shopcard" onClick={()=>{
	                    	this.props.cardList(this.props.goodlistId)
	                    }}>加入购物车</div>
	                 </div> 
	                 
	                 <div className="info-item">       
	                     <i className="iconfont icon-selected"></i>
	                     <span>48小时退换货</span>
	                     <i className="iconfont icon-selected"></i>
	                     <span>全程冷链</span>
	                     <i className="iconfont icon-selected"></i>
	                     <span>果园标准</span>
	                     <i className="iconfont icon-selected"></i>
	                     <span>全球直采</span>
	                 </div>

	             </div>
				</div>
			)
		}
		
	}
}
export default connect(
	(state)=>{
		//console.log(state.shopswipe)
		return {
			goodlistId:state.shopswipe
		}

	},
	{
		cardList:(goodlistInfo)=>{
			return {
				type:"cardlist",
				payload:goodlistInfo
			}
		}
	}
	)(Shop);