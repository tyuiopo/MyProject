const str='hello world';
const fn = () =>{
	console.log(str)
}

const obj={
	name:'tom',
	age:18
}


/*
module.exports.str=str;
module.exports.fn=fn;
*/

module.exports={
	str,
	fn
}
// console.log('01',module.exports);