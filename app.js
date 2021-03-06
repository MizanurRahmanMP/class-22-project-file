



// Gets elements 

import Alert from "./src/alert.js";
import Storage from "./src/Storage.js";

const staff_add_form = document.getElementById('staff_add_form');
const staff_data_list = document.getElementById('staff_data_list');



// Staff form submite data 

staff_add_form.addEventListener('submit', function(e){
    
    e.preventDefault();

    const msg = document.querySelector('.msg');



    let form_data = new FormData(e.target);
    let data = Object.fromEntries(form_data.entries());


    let { name, cell, location, photo } = data;

    if( name == '' || cell == '' || location == '' ){
        msg.innerHTML = Alert.danger(' All fields are required ');

    }else{

        Storage.set('staffs', data)
        staff_add_form.reset();
        getAllstaff();


        
    }


})


// Get all staff

getAllstaff();
function getAllstaff(){

    let data = Storage.get('staffs');

    let list = '';
    data.map(( data, index ) => {

        let { name, cell, location, photo } = data;

        list += ` 
        
            <tr>
                <td> ${ index + 1 } </td>
                <td> ${ name } </td>
                <td> ${ cell } </td>
                <td> ${ location } </td>
                <td><img style="width:50px; height:50px; object-fit:cover;" src=" ${ photo ? photo : 'assets/img/avatar.png' } "></td>
                <td>
                    <button class="btn btn-info btn-sm"><i class="fa fa-eye"></i></button>
                    <button class="btn btn-warning btn-sm"><i class="fa fa-edit"></i></button>
                    <button class="btn btn-danger btn-sm"><i class="fa fa-trash"></i></button>
                </td>
            </tr>
        
        
        `
    });



    staff_data_list.innerHTML = list;
}



