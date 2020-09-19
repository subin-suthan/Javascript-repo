(function(user){
    console.log("great",user)
})('subin');




function Stud(name,city){

    this.name=name;
    this.city=city;
    this.getDetails=function(){
        console.log("welcome",this.name,"from",this.city)
    }

}


var s1=new Stud("subin","tvm");
console.log(s1)


var s2=new Stud("tom","us");
s2.getDetails()



Stud.prototype.name="abc"
Stud.prototype.getDetails=()=>{
    console.log("great day",this.name);
}

Stud.getDetails();