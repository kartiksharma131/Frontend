//this keyword

var obj={
    "fanme":"kartik",
    age:25,
    fun: function(){
        console.log(this.fanme);
    }
}

obj.fun();