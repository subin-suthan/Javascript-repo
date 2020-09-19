var stud={name:'Ram',
           empid:20,
            hobbies:['music','sports'],
             address:{
                  city:'ban',state:'kar'
             }
        }

        var json=JSON.stringify(stud);
        console.log(typeof json)
        var jsonobj=JSON.parse(json)
        console.log(typeof jsonobj)