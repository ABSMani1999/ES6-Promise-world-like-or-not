var world = new Promise(people);

function people(resolve,reject){
	let like = prompt("World is like or not like ?");
	setInterval(function(){
	
	
	if(like === "like"){
		resolve("I'm happiest in the");
	}
	else{
		reject("I'm not happy in the");
	}
	
	},2000);
	
	
}

world.then(liked).catch(notLiked);

function liked(happy){
	document.write(happy+" <b>world</b>");
}

function notLiked(notHappy){
	document.write(notHappy+" <b>world</b>");
}