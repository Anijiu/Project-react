import React from "react"
import "./index.scss"
import {connect} from "react-redux"

class Search extends React.Component{
	constructor(props) {
		super(props);
		this.state={
			datalist:[],
			
		}
	}
	componentDidMount() {
		axios.get("/v3/search/get_hot_keyword").then(res=>{
	      //console.log(res)
	      this.setState({
  	      	datalist:res.data.data
  	      })
	    })

	}
	render(){
		return <div>
		{		
			this.props.show?
			<div className="search">
				<nav className="navbar navbar-default">
				  <div className="container-fluid">
				  <div className="navbar-header">
					<a className="navbar-brand" href="#">返回</a>
				  </div>
				    <form className="navbar-form navbar-left" role="search">
				      <div className="form-group">
				        <input type="text" ref="iputvalue" className="form-control" placeholder="Search" />
				      </div>
				      <div className="btn btn-default" onClick={this.handleClick.bind(this)}>搜索</div>
				    </form>
				  
				   </div>
				</nav>
			    <div className="list">
			    	<p>热门搜索</p>
			    	<ul>
			    		{
			    		this.state.datalist.map(item=>
			    			<li key={item} onClick={()=>{
			    				this.props.history.push(`/shoplist/${item}`)
			    			}}>{item}</li>
			    			)			    		
			    		}
			    	</ul>
			    </div>
			</div>
			:null
		}
		</div>
	}
	handleClick(){
		this.props.history.push("/shoplist/"+encodeURIComponent(this.refs.iputvalue.value))
	}
	
}
export default connect(
	(state)=>{
		return {
			show:state.isshow
		}
	},
	{
		searchShow:(bool)=>{
			return {
				type:"showsearch",
				payload:bool
			}
		}
	}
	)(Search);