function cat(name){
	this.name = name;
	this.stomach =[];
}
function eat(mouse){
    this.stomach.push(mouse);
}
module.export= cat;