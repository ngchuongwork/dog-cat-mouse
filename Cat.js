function cat(name){
	this.name = name;
	this.stomach =[];
}
function eat(mouse){
    this.stomach.push(mouse);
}
function drink(water){
    this.stomach.push(water);
}
module.export= cat;