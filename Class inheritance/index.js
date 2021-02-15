

class school {
    constructor(name ,id, school) {
        this.id = id;
        this.schoolName = school;
        this.studentName = name;
    }

   
    set setInformation(school) {
        this.schoolName = school;
       
    }
   
    get getInformation () {
        return (this.schoolName);
    }
   }

   info = new school("CCT");

   info.setInformation = "Crimson College Of Technology";

   document.getElementById('sch').innerHTML = info.getInformation;

class student extends school {
    constructor(id, name, address, contact, classes) {
        super(name, id)
        this.studentAddress = address;
        this.studentContact = contact;
        this.studentClasses = classes

    }

    studentInfo() {
        return '<hr />'  + '<br />' + "Student Id:"+' '+this.id +'<br /> '+"Student Name:"+' '+this.studentName +'<br /> ' + "Student Address:" +' '+ this.studentAddress +'<br /> '+ "Student Contact:" +' '+ this.studentContact + '<br /> '+"Student Class:"+' '+this.studentClasses;
        
    }
}




student1 = new student("01", "Ramesh Giri", "Pharsatilar", "9839833434", "Bachelor(7th)")
student2 = new student("02" , "Pramish Thapa", "Horizonchowk", "9839833434", "Bachelor(7th)")
student3 = new student("03" ,"Sagar Shrestha", "manglapur", "98398344", "Bachelor(7th)")
student4 = new student("04" ,"Santosh Paudel", "Butwal", "983983343", "Bachelor(7th)")



// console.log(info.getInformation);
//    console.log(student1.studentInfo(),student2.studentInfo(),student3.studentInfo(),student4.studentInfo(),)




document.getElementById('stu').innerHTML = student1.studentInfo() + student2.studentInfo() + student3.studentInfo() + student4.studentInfo();



