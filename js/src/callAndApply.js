

let Emp1 = {
    name: 'X',
    getEmpDetail: function (age, department) {
        console.log('Name :', this.name, '  Age :', age, '  Department :', department)
    }
}
Emp1.getEmpDetail(23, 'Delivery') // Name : X   Age : 23   Department : Delivery

// 1st approch of chenging "this"
let Emp2 = {
    name: 'Y',
    getEmpDetail: Emp1.getEmpDetail
}
Emp2.getEmpDetail(24, 'Switching') // Name : X   Age : 24   Department : Switching
// still << Name : X>> 

// 2nd approch of changing "this" using "Call" and "Apply"
let Emp3 = {
    name: 'Z',
}

Emp1.getEmpDetail.call(Emp3, 30, 'Admin')        // using Call // Name : Z   Age : 23   Department : abdul
Emp1.getEmpDetail.apply(Emp3, [30, 'Admin']) // Using Apply