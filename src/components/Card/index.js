import React from "react"
import "./index.scss"
import {connect} from "react-redux"

class Card extends React.Component{
	constructor(props) {
		super(props);
		this.state={
			isshow:false
		}
	}
	render(){
		return <div>
				  <div id="card">
				    <ul>
				    	{
					    	this.props.goodsinfo.map((item,index)=>
			    		      <li key={item.productItem[0].id}>
			    		        <img src={item.templatePhoto[0].image}/>
			    		        <div className="right">
			    		          <h5>{item.productInfo.product_name}</h5>
			    		          <p>{item.productInfo.product_desc}</p>		    		     
			    		          <p className="price">￥{item.productInfo.price}</p>
			    		          <div className="goodnum">
			    		          	<span className="plus" onClick={()=>{
			    		          		this.props.changeNum({type:"plus",id:item.productItem[0].id,list:this.props.goodsinfo[index]})
			    		          	}}>-</span>
			    		          	<span className="num" ref="num">{item.num}</span>   		          	
			    		          	<span className="add" onClick={()=>{
			    		          		this.props.changeNum({type:"add",id:item.productItem[0].id,list:this.props.goodsinfo[index]})
			    		          	}}>+</span>
			    		          	<span className="delete" onClick={()=>{
			    		          		this.props.deleteGoods({type:"delete",id:item.productItem[0].id})
			    		          	}}>删除</span>
			    		          </div>
			    		        </div>

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
			//console.log(state.cardlist)
			return {
				goodsinfo:state.cardlist
			}
		},
		{
			changeNum:(obj)=>{
				//console.log(obj)
				return {
					type:"changenum",
					payload:obj
				}
			},
			deleteGoods:(obj)=>{
				return {
					type:"deletegoods",
					payload:obj
				}
			}			
		}
	)(Card);