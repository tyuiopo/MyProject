const add1=require('events');
// console.log(add)


class emm extends add1{

}

const add2=new emm();
// console.log(add2)


add2.on('test',(arg1,arg2)=>{
	console.log(arg1,arg2)
})

add2.emit('test','hi','good');
