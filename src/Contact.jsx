import './index.css'
import './Contact.css'

const form = {
    form: document.getElementById("work-form"),
    firstName: document.getElementById("firstName"),
    lastName: document.getElementById("lastName"),
    email: document.getElementById("email"),
    phoneNumber: document.getElementById("phoneNumber"),
    boatType: document.getElementById("boatType"),
    location: document.getElementById("location"),
    workRequest: document.getElementById("workReq"),
    submit: document.getElementById("submit")
};
const mobileForm = {
    form: document.getElementById("work-form-mobile"),
    firstName: document.getElementById("firstNameMobile"),
    lastName: document.getElementById("lastNameMobile"),
    email: document.getElementById("emailMobile"),
    phoneNumber: document.getElementById("phoneNumberMobile"),
    boatType: document.getElementById("boatTypeMobile"),
    location: document.getElementById("locationMobile"),
    workRequest: document.getElementById("workReqMobile"),
    submit: document.getElementById("submit")
}

if(mobileForm.form != null){
    mobileForm.form.onsubmit = function(event){
        submitForm(mobileForm, event);
    }
}else if(form.form != null){
    form.form.onsubmit = function(event){
        submitForm(form, event);
    }
}


function submitForm(form, event){
    event.preventDefault();
    
    if(validateForm(form) && enoughTimeHasPassed()){
        const xhr = new XMLHttpRequest();
        var formData = new FormData();
        formData.append("firstName", form.firstName.value);
        formData.append("lastName", form.lastName.value);
        formData.append("email", form.email.value);
        formData.append("phoneNumber", form.phoneNumber.value);
        formData.append("boatType", form.boatType.value);
        formData.append("location", form.location.value);
        formData.append("WorkRequest", form.workRequest.value);
        
        xhr.open("POST", "https://usebasin.com/f/66616079d131", true);
        xhr.send(formData);
        xhr.onload = function(event){
            if(xhr.status === 200){
                document.getElementById("success").style.display = "block";
                console.log("Success");
                timeOfSubmit = new Date();
                window.location.href = "submitSuccess.html";
            }else{
                console.log("An Error Occured");
                console.log(xhr.statusText);
            }
        };

    }
}

function validateForm(form){
    let isValid = true;
    if(form.firstName.value == ""){
        isValid = false;
        document.getElementById("emptyFirstName").style.display = "block";
    }else{
        document.getElementById("emptyFirstName").style.display = "none";
    }
    if(form.lastName.value == ""){
        isValid = false;
        document.getElementById("emptyLastName").style.display = "block";
    }else{
        document.getElementById("emptyLastName").style.display = "none";
    }
    if(form.email.value == ""){
        isValid = false;
        document.getElementById("emptyEmail").style.display = "block";
    }else if(!form.email.value.includes("@") || !form.email.value.includes(".")){
        document.getElementById("emptyEmail").style.display = "none";
        isValid = false;
        document.getElementById("invalidEmail").style.display = "block";
    }else{
        document.getElementById("invalidEmail").style.display = "none";
        document.getElementById("emptyEmail").style.display = "none";
    }
    if(form.phoneNumber.value == ""){
        isValid = false;
        document.getElementById("emptyPhoneNumber").style.display = "block";
    }else if(form.phoneNumber.value.length < 14){
        document.getElementById("emptyPhoneNumber").style.display = "none";
        isValid = false;
        document.getElementById("invalidPhoneNumber").style.display = "block";
    }else{
        document.getElementById("invalidPhoneNumber").style.display = "none";
        document.getElementById("emptyPhoneNumber").style.display = "none";
    }
    if(form.boatType.value == ""){
        isValid = false;
        document.getElementById("emptyBoatType").style.display = "block";
    }else{
        document.getElementById("emptyBoatType").style.display = "none";
    }
    if(form.location.value == ""){
        isValid = false;
        document.getElementById("emptyLocation").style.display = "block";
    }else{
        document.getElementById("emptyLocation").style.display = "none";
    }
    
    return isValid;
}
var timeOfSubmit = new Date();
timeOfSubmit.setFullYear(2000);

function enoughTimeHasPassed(){
    let now = new Date();
    if(timeOfSubmit.getDate() < now.getDate()){
        document.getElementById("needToWait").style.display = "none";
        return true;
    }
    if(timeOfSubmit.getHours < now.getHours()){
        document.getElementById("needToWait").style.display = "none";
        return true;
    }
    if(timeOfSubmit.getMinutes() + 1 <= now.getMinutes()){
        document.getElementById("needToWait").style.display = "none";
        return true;
    }
    document.getElementById("needToWait").style.display = "block";
    return false;
}

var phoneInput = document.getElementById("phoneNumber");
var cursorPos = 0;

if(phoneInput){
    phoneInput.addEventListener('keyup', (event) =>{
        if(event.key == "Backspace"){
            phoneInput.setSelectionRange(cursorPos - 3, cursorPos - 3);
        }else{
            phoneInput.setSelectionRange(cursorPos, cursorPos);
        }
    });
}

export default function Contact(){
    return (
        <main className = "light-theme">
            <h3>Work Form</h3>
            <div className="mobile">
                <div className="formContainer">
                    <form id="work-form-mobile">
                        <div className="form-group">
                            <label htmlFor="firstName">First Name</label>
                            <input type="text" name="firstName" id="firstNameMobile"/>
                            <div className="errorMessage" id="emptyFirstName">This is a required field</div>
                        </div>
                        <div className="form-group">
                            <label htmlFor="lastName">Last Name</label>
                            <input type="text" name="lastName" id="lastNameMobile"/>
                            <div className="errorMessage" id="emptyLastName">This is a required field</div>
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input type="text" name="email" id="emailMobile"/>
                            <div className="errorMessage" id="emptyEmail">This is a required field</div>
                            <div className="errorMessage" id="invalidEmail">Please enter a valid email</div>
                        </div>
                        <div className="form-group">
                            <label htmlFor="phoneNumber">Phone Number</label>
                            <input id="phoneNumberMobile"/>
                            <div className="errorMessage" id="emptyPhoneNumber">This is a required field</div>
                            <div className="errorMessage" id="invalidPhoneNumber">Please enter a valid phone number</div>
                        </div>
                        <div className="form-group">
                            <label htmlFor="boatType">Make and Model</label>
                            <input type="text" name="boatType" id="boatTypeMobile"/>
                            <div className="errorMessage" id="emptyBoatType">This is a required field</div>
                        </div>
                        <div className="form-group">
                            <label htmlFor="location">Boat Location</label>
                            <input type="text" name="location" id="locationMobile"/>
                            <div className="errorMessage" id="emptyLocation">This is a required field</div>
                        </div>
                        <div className="form-group">
                            <label htmlFor="workRequest">Work Request</label>
                            <textarea name="workReq" id="workReqMobile" cols="30" rows="10"></textarea>
                        </div>
                        <div className="buttonHolder">
                            <button type="submit" id="submit">Submit</button>
                            <div className="errorMessage" id="needToWait">You need to wait 1 minute in between submissions</div>
                        </div>
                    </form>
                    <div className="success" id="success">
                        <h2>Form Submitted!</h2>
                    </div>
                </div>
            </div>
            <div className="computer">
                <div className="formContainer">
                    <form id="work-form">
                        <div className="name-group">
                            <div className="name">
                                <label htmlFor="firstName">First Name</label>
                                <input type="text" name="firstName" id="firstName"/>
                                <div className="errorMessage" id="emptyFirstName">This is a required field</div>
                            </div>
                            <div className="name">
                                <label htmlFor="lastName">Last Name</label>
                                <input type="text" name="lastName" id="lastName"/>
                                <div className="errorMessage" id="emptyLastName">This is a required field</div>
                            </div>
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input type="text" name="email" id="email"/>
                            <div className="errorMessage" id="emptyEmail">This is a required field</div>
                            <div className="errorMessage" id="invalidEmail">Please enter a valid email</div>
                        </div>
                        <div className="form-group">
                            <label htmlFor="phoneNumber">Phone Number</label>
                            <input id="phoneNumber"/>
                            <div className="errorMessage" id="emptyPhoneNumber">This is a required field</div>
                            <div className="errorMessage" id="invalidPhoneNumber">Please enter a valid phone number</div>
                        </div>
                        <div className="form-group">
                            <label htmlFor="boatType">Make and Model</label>
                            <input type="text" name="boatType" id="boatType"/>
                            <div className="errorMessage" id="emptyBoatType">This is a required field</div>
                        </div>
                        <div className="form-group">
                            <label htmlFor="location">Boat Location</label>
                            <input type="text" name="location" id="location"/>
                            <div className="errorMessage" id="emptyLocation">This is a required field</div>
                        </div>
                        <div className="form-group">
                            <label htmlFor="workRequest">Work Request</label>
                            <textarea name="workReq" id="workReq" cols="30" rows="10"></textarea>
                        </div>
                        <button type="submit" id="submit">Submit</button>
                        <div className="errorMessage" id="needToWait">You need to wait 1 minute in between submissions</div>
                    </form>
                    <div className="success" id="success">
                        <h2>Form Submitted!</h2>
                    </div>
                </div>
            </div>
        </main>
    )
}
