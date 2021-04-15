import React, { useState } from 'react';

const Formcomponent = () => {
    const [form, setFormValue] = useState({
        firstname: 'ali',
        lastname: 'sss',
        email: 'mahsa.k@gamil.com',
        gender: 'female'
    });
    //const onClickBUTTON = (name) => {
    //alert(name);
    //}
    const onSubmitForm = (event) => {
        event.preventDefault();
        const fields = event.target.elements;
        setFormValue({
            firstname: fields.firstname.value,
            lastname: fields.lastname.value,
            email: fields.email.value,
            gender: fields.gender.value
        });
    }
    return (
       //<button onClick={() => onClickBUTTON("ali")}></button>
        //تابع بدون ورودی<button onClick={onClickBUTTON}></button>

        <>

            <form onSubmit={onSubmitForm}>
                <input type="text" name="firstname" placeholder="نام خود را وارد کنید" />
                <input type="text" name="lastname" placeholder="نام خانوادگی خود را وارد کنید" />
                <input type="eamil" name="email" placeholder="ایمیل خود را وارد کنید" />
                <label className="form-check-label" for="RadioDefault">
                male
                </label>
               <input className="form-check-input" type="radio" name="gender" value="male" id="RadioDefault"/>
               <label className="form-check-label" for="RadioDefault2">
               Female
                </label> 
                <input className="form-check-input" type="radio" name="gender" value="Female" id="RadioDefault2" />
      
                <button>submit</button>

            </form>
            <div>firstname:{form.firstname}</div>
            <div>lastname:{form.lastname}</div>
            <div>email:{form.email}</div>
            <div>gender:{form.gender}</div>
        </>
    )
}

export default Formcomponent;
