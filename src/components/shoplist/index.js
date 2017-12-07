import React from "react"
import "./index.scss"
import {connect} from "react-redux"

class Shoplist extends React.Component{
	constructor(props) {
		super(props);
		this.state={
			isshow:false
		}
	}
	componentDidMount() {
		//console.log(this.props.match.params.keyword);
		this.props.searchListPromise(this.props.match.params.keyword);
	}
	render(){			
		return <div>
		{
			/* onClick={()=>{
		      	this.props.history.push(`/detail`)
		      	this.props.shopPromise(item.id)
		      	this.props.judgePrommise(item.id)
		      }		    		      

		      }*/
		}
				  <div className="main">
				    <ul>
				    	{
					    	this.props.list.map(item=>
			    		      <li key={item.id} onClick={()=>{
						      	this.props.history.push(`/detail`)
						      	this.props.shopPromise(item.id)
						      	this.props.judgePrommise(item.id)
						      }
					 		 }>
			    		        <img src={item.photo}/>
			    		        <div className="right">
			    		          <h5>{item.product_name}</h5>
			    		          <p>{item.product_desc}</p>
			    		          <span>{item.volume}</span>
			    		          <p className="price">￥{item.price}</p>
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
		return {
			list:state.searchList
		}
	},
	{
		searchListPromise:(keyword)=>{
			return axios.get(`/v3/search/product?keyword=${keyword}store_id_list=2&tms_region_type=1&page_size=50&curr_page=1`).then(res=>{
				return {
					type:"searchList",
					payload:res.data.data
				}
			})
		},
		shopPromise:(id)=>{
			return axios.get(`/v3/product/detail?store_id_list=2&product_id=${id}&store_id=2&delivery_code=9`).then(res=>{
				      return {
				      	type:"shopswipe",
				      	payload:res.data.data
				      }
				    });
		},
		judgePrommise:(id)=>{
			return axios.get(`/v3/comment/list_by_product_id?product_id=${id}&curr_page=1&num_per_page=20&limit=20&show=1`).then(res=>{
		  	  	return {
		  	  		type:"judgelist",
		  	  		payload:res.data.data
		  	  	}
		  	  })
		}
	}
	)(Shoplist);