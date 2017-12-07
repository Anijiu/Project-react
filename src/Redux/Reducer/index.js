var _ = require('lodash');

const reducer = (state=false,info)=>{
	//console.log(info);
	let {type ,payload} = info;
	switch(type){
		case "showsearch":
			// var newstate =[...state];
			// newstate.push(payload)
			return payload;
		default :
			return state;
	}

	return state;
}
const goodlistReducer=(state=[],info)=>{
	let {type,payload} =info;
	switch(type){
		case "goodlist":
		  return payload;
		default :
		  return state;
	}
}
const shopswipeReducer=(state="",info)=>{
	let {type,payload} =info;
	switch(type){
		case "shopswipe":
		  return payload;
		default :
		  return state;
	}
}
const judgelistReducer=(state="",info)=>{
	let {type,payload} =info;
	switch(type){
		case "judgelist":
		  return payload;
		default :
		  return state;
	}
}
const searchListReducer=(state=[],info)=>{
	let {type,payload} =info;
	switch(type){
		case "searchList":
		  return payload;
		default :
		  return state;
	}
}
var list=[]
const cardListReducer=(state=[],info)=>{
	let {type,payload} =info;	
	switch(type){
		case "cardlist":
			var changeslist;					
			state=[...state,payload];
			var changeslist=_.uniqBy(state,'productInfo');
			_.forEach(changeslist,function(val1,index1){
				val1.num=val1.num?val1.num:1;
				_.forEach(state,function(val2,index2){
					if(val2.productItem['0'].id==val1.productItem['0'].id&&index1!=index2){
						val1.num+=1;
						val1.productInfo.old_price=parseFloat(val1.num*val2.productInfo.price)
					}
				})
			})
			list=[...changeslist]	
		  return list;
		case "changenum":
			let index=_.findIndex(state, function(o) { return o.productItem['0'].id == payload.id; });
			state[index]=payload.list;
			if(payload.type=="plus"){
				if(state[index].num==1){
					state[index].num=1;
				}else{
					state[index].num-=1;
				}				
			}else if(payload.type=="add"){
				state[index].num+=1;
			}
			list=[...state];
			return list;
		case "deletegoods":
			let index1=_.findIndex(state, function(o) { return o.productItem['0'].id == payload.id; });
			state.splice(index1,1);
			list=[...state]
			return list;
		default :
		  return state;
	}
}

export {reducer,goodlistReducer,shopswipeReducer,judgelistReducer,searchListReducer,cardListReducer};

/*
const cart = (state=[],info)=>{
	let {type,payload} =info;
	switch(type){
		case "cart" :
		// console.log(payload);
		var changestate;
		state=[...state,payload];
			changestate=_.uniqBy(state, 'info');
			_.forEach(changestate,function(val1,index1){
				_.forEach(state,function(val2,index2){
					if(val2.info.id==val1.info.id&&index1!=index2){
						val1.num+=val2.num;
					}
				})
			})
			state=[...changestate];
			console.log(state);
			return state;
		case "cartchange":
			let index=_.findIndex(state, function(o) { return o.info.id == payload.id; });
			if(payload.numtype=="jia"){
			state[index].num+=1;
		}
		if(payload.numtype=="jian"){
			if(state[index].num==1){
				state[index].num=2
			}
			state[index].num-=1;
		}
		if(payload.numtype=="delate"){
			state.splice(index,1);
		}
		state=[...state];
		return state;
		default :
			return state; 
	}
}  */
