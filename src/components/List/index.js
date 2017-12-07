import React from "react"
import "./index.scss"
import {connect} from "react-redux"

class List extends React.Component{
	constructor(props) {
		super(props);
		this.state={
	    	productGroup:[],
		}
	}
	componentDidMount() {
		var that=this;
		//分页
		var class3_id=319;
		this.props.goodlistPromise(class3_id)
		$('.prev').click(function(){
			class3_id--;
			if (class3_id>=332) {
				class3_id=332
			}
			//console.log(class3_id)
			that.props.goodlistPromise(class3_id)
		})
		$('.next').click(function(){
			class3_id++;
			if (class3_id<=319) {
				class3_id=319
			}
			//console.log(class3_id)
			that.props.goodlistPromise(class3_id)
		})
						
	}
	render(){			
		return <div>
				  <div className="goodslist">商品列表</div>
				  <div className="main">
				    <ul>
				    	{
					    	this.props.goodlist.map(item=>
			    		      <li key={item.id} onClick={()=>{
			    		      	this.props.history.push(`/detail`)
			    		      	this.props.shopPromise(item.id)
			    		      	this.props.judgePrommise(item.id)
			    		      }		    		      

			    		      }>
			    		        <img src={item.bphoto}/>
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
				  <div className="container">
				  	<nav aria-label="Page navigation">
				  	  <ul className="pagination">
				  	    <li><a href="javascript:;" className="prev">上一页</a></li>
				  	    <li><a href="javascript:;" className="next">下一页</a></li>				  	    				  	    
				  	  </ul>
				  	</nav>
				  </div>
		</div>
	}
}
export default connect(
	(state)=>{
		return {
			goodlist:state.goodlist
		}
	},
	{
		goodlistPromise:(class3_id)=>{
			return axios.get(`/v3/product/sub_category_list?store_id_list=2&class2_id=319&class3_id=${class3_id}&sort_type=1&tms_region_type=1`).then(res=>{
				  //console.log(res)
				  return {
				  	type:"goodlist",
				  	payload:res.data.data.productGroup
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

	)(List);