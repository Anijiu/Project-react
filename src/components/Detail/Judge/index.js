import React from "react"
import "./index.scss"
import {connect} from "react-redux"

class Judge extends React.Component{
	constructor(props) {
		super(props);
		this.state={
			
		}
	}
	render(){
		return <div>
		<div id="judge">
			<div className="comment-level-item">
				<p>96%好评</p>
				<div className="level">口感<i className="iconfont icon-favorite
		folder
		"></i><i className="iconfont icon-favorite
		folder
		"></i><i className="iconfont icon-favorite
		folder
		"></i><i className="iconfont icon-favorite
		folder
		"></i><i className="iconfont icon-favorite
		folder
		"></i></div>
				<div className="level">颜值<i className="iconfont icon-favorite
		folder
		"></i><i className="iconfont icon-favorite
		folder
		"></i><i className="iconfont icon-favorite
		folder
		"></i><i className="iconfont icon-favorite
		folder
		"></i><i className="iconfont icon-favorite
		folder
		"></i></div>
			</div>
			<ul className="judgelist">
			  {
			  	this.props.judgelist.map(item=>
				<li key={item.id}>
	  			    <div className="judgeinfo">
	  			      <img src={item.userface} alt=""/>
	  			      <span>{item.user_name}</span>
	  			      <span className="date">{item.time}</span>
	  			    </div>
	  			    <p>
	  			      <span>口感{item.star_eat}</span>
	  			      <span>颜值{item.star_show}</span>
	  			    </p>
	  			    <h4>{item.content}</h4>	  			    
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
		return {
			judgelist:state.judgelist
		}
	},
	null
	)(Judge);