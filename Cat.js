function cat(name){
	this.name = name;
    this.die = false;
	this.stomach =[];
}
function eat(mouse){
    this.stomach.push(mouse);
}
function drink(water){
    this.stomach.push(water);
}
function die(){
    this.die= true;
}
module.export= cat;