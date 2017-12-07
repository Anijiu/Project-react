import React from 'React'
import {
  HashRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom'
import App from "../components/App"
import Home from "../components/Home"
import List from "../components/List"
import Card from "../components/Card"
import Detail from "../components/Detail"
import Shoplist from "../components/Shoplist"
import Search from "../components/Common/Search"
import {Provider} from "react-redux"
import store from "../Redux/Store"
import Intro from "../components/Detail/Intro"
import Judge from "../components/Detail/Judge"
import Shop from "../components/Detail/Shop"


const router=(
	<Provider store={store}>
	<Router>
		<App>
			{
				//switch 只加载匹配路径的第一个孩子
			}
			<Switch>
				<Route path="/home" component={Home}></Route>
				<Route path="/list" component={List}></Route>
				<Route path="/card" component={Card}></Route>
				<Route path="/search" component={Search}></Route>
				<Route path="/shoplist/:keyword" component={Shoplist}></Route>
				<Route path="/detail" render={()=>
					<Detail>
						<Switch>
							<Route path="/detail/shop" component={Shop}></Route>
							<Route path="/detail/intro" component={Intro}></Route>
							<Route path="/detail/judge" component={Judge}></Route>
							<Redirect from="*" to="/detail/shop"/>
						</Switch>
					</Detail>
				}>				 
				</Route>
				<Redirect from="*" to="/home"/>
			</Switch>
		</App>
	</Router>
	</Provider>
	)
export default router;