function fun(){
    console.log("inside function1");
    function fun2(){
        console.log("inside function 2");
    }
    fun2();
}
fun();