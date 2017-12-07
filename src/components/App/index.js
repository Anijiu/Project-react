import React from "react"
import "./index.scss"
import Footerbar from "../Common/Footerbar"
import Search from "../Common/Search"
import {connect} from "react-redux"

class App extends React.Component{
	constructor(props) {
		super(props);
		this.state={
			
		}
	}
	render(){
		return <div>
			{
				this.props.children
			}	
			<Footerbar></Footerbar>
		</div>
	}
}
export default App;