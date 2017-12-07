import React from "react"
import "./index.scss"
import {connect} from "react-redux"
import ReactSwipe from 'react-swipe';
import {NavLink} from "react-router-dom"

class Home extends React.Component{
	constructor(props) {
		super(props);
		this.state={
			urllogo:null,
			looplist:[],
			url:null,
			datalist1:[],
			item1url1:null,
			item2url:null,
			item2datalist:[]
		}
	}
	componentDidMount() {
			axios.get("/v3/ad/homepage?connect_id=&type=2&lonlat=120.216602%2C30.208994&ad_code=330108&tab_id=").then(res=>{
			//console.log(res)	
		    //this.urllogo=res.data.data.deliveryType["0"];
		     /*this.url=res.data.data.banner.mainBanners["1"].content["0"].image;
				this.looplist=res.data.data.banner.mainBanners["0"].content;
		    //console.log(this.looplist)
		   this.datalist1=res.data.data.banner.mainBanners["3"].content;
		    this.item1url1=res.data.data.banner.mainBanners["4"].content[0];
		    //this.item1url2=res.data.data.banner.mainBanners["7"].content[0];
		    this.item2url=res.data.data.banner.mainBanners["6"].content["0"];
		    this.item2datalist=res.data.data.banner.mainBanners["7"].content;
		    //this.item3datalist=res.data.data.banner.mainBanners["9"].content;
		    this.item4url=res.data.data.banner.mainBanners["26"].content["0"];
		    this.item4datalist=res.data.data.banner.mainBanners["27"].content;
		    //console.log(this.item1url2)   */  
		    this.setState({
		    	urllogo:res.data.data.deliveryType["0"],
		    	looplist:res.data.data.banner.mainBanners["0"].content,
		    	url:res.data.data.banner.mainBanners["1"].content["0"].image,
		    	datalist1:res.data.data.banner.mainBanners["3"].content,
		    	item1url1:res.data.data.banner.mainBanners["4"].content[0].image,
		    	item2url:res.data.data.banner.mainBanners["10"].content["0"].image,
		    	item2datalist:res.data.data.banner.mainBanners["11"].content
		    })
		    
		  })    
	}
	render(){
		return <div id="home">
			<nav>   
			  <div className="left">
			    <img src={this.state.urllogo} alt=""/>
			    <p>江陵路(地铁站)</p>
			    <i className="iconfont icon-moreunfold"></i>
			  </div>
			  <div className="right">
			    <NavLink className="iconfont icon-search" to="/search" onClick={()=>{
			    	this.props.showSearch(true)
			    }}></NavLink>
			  </div>    
			</nav>
			<ReactSwipe className="carousel" swipeOptions={{continuous: true,auto: 2000}} key={this.state.looplist.length}>
                {
                	this.state.looplist.map(item=>
                		<img src={item.image} key={item.banner_seq_id}/>
                	)
                }
            </ReactSwipe>
            <div>
              <img src={this.state.url} className="selfurl"/>
            </div>
           	<div className="newtest">
           	  <ul>
	    			{
	    			    this.state.datalist1.map(item=>
	    			    	<img src={item.image} key={item.banner_seq_id}/>
	    		     	)
           	    	}   
           	  </ul>
           	</div>
           	<div className="item1">
           		<img src={this.state.item1url1} className="img1" />           	   
           	</div>
       	    <div className="item2">
       	      <img src={this.state.item2url} className="item2url" />
       	      <ul className="ulscroll">
       	      {
       	      	this.state.item2datalist.map(item=>
       	      		<li key={item.banner_ad_id} onClick={()=>{
				      	this.props.history.push(`/detail`)
				      	this.props.shopPromise(item.target_id)
				      	this.props.judgePrommise(item.target_id)
				      }		    		      

		      }>
       	      		  <img src={item.image}/>
       	      		  <div>
       	      		    <h5>{item.title}</h5>
       	      		    <p>￥{item.price}/{item.volume}</p>
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
	null,
	{
		showSearch:(bool)=>{
			return {
				type:"showsearch",
				payload:bool
			}
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
	)(Home);