
let openbutton = document.getElementById("open");
let closebutton = document.getElementById("close");
let sideBar = document.getElementById("side-bar")
let body = document.body;


openbutton.addEventListener('click', function() {
    body.classList.add('sidebar-open');
})

closebutton.addEventListener('click', function() {
    body.classList.remove('sidebar-open');
})

//Upper-Navbar Functions
function aboutPage(){
    window.location.href="About/about.html";
}

function cartPage(){
    window.location.href = "Cart/cart.html";
}

function servicePage(){
    window.location.href="Services/service.html";
}

function contactPage(){
    window.location.href="Contact/contact.html";
}

function loginPage(){
    window.location.href="Login/login.html";
}

//Lower-Navbar Functions
function findDoctor(){
    window.location.href="Find-Doctor/findDoctor.html";
}

function navLabtest(){
    window.location.href="LabTest-Nav/navLabtest.html";
}

function HealthEssentials(){
    window.location.href="Health-Essentials/healthEssentials.html";
}

function healthrecord(){
    window.location.href="Health-Record/healthrecord.html";
}

function PersonalCare(){
    window.location.href="Personal-Care/personalCare.html";
}


function circleMembership(){
    window.location.href="Circle-Membership/membership.html";
}

//Website body buttons Functions
function presPage(){
    window.location.href = "Prescription/prescription.html";
}

function emergencyPage(){
    window.location.href="Emergency/emergency.html";
}

//Searchbar downspace container Functions
function pharmacyPage(){
    window.location.href="Pharmacy/pharmacy.html";
}

function health_insuPage(){
    window.location.href="Health-Insurance/health_insu.html";
}

function doctor_appoPage(){
    window.location.href="Doctor-Appo/doctor_appo.html";
}

function LabTestPage(){
    window.location.href="LabTest/LabTest.html";
}


//Browse by Health Conditions Functions
function DiabetesCarePage(){
    window.location.href="Diabetes-Care/diabetesCare.html";
}

function CardiacCarePage(){
    window.location.href="Cardiac-Care/cardiacCare.html";
}

function StomachCarePage(){
    window.location.href="Stomach-Care/stomachCare.html";
}

function LiverCarePage(){
    window.location.href="Liver-Care/LiverCare.html";
}

function oralCarePage(){
    window.location.href="Oral-Care/oralCare.html";
}

function respiratoryPage(){
    window.location.href="Respiratory/respiratory.html";
}

function painPage(){
    window.location.href="Pain-Relief/pain.html";
}

function sexualhealthPage(){
    window.location.href="Sexual-Health-Care/sexual-health.html";
}


//Footer Section
    
function Careers(){
    window.location.href="Careers/careers.html";
}
    
function Information(){
    window.location.href="Information/info.html";
}
    
function Rating(){
    window.location.href="Product-Rating/rating.html";
}
    
function Payment(){
    window.location.href="Payment/payment.html";
}
    
function Shipping(){
    window.location.href="Shipping/shipping.html";
}
    
function Cancellation(){
    window.location.href="Cancellation-Policy/cancellation.html";
}
       
function Return(){
    window.location.href="Return-Policy/return.html";
}

function FAQ(){
    window.location.href="FAQ/faq.html";
}
    
function RefundMoney(){
    window.location.href="Refund-Money/refund.html";
}
    
function TermsOfUse(){
    window.location.href="Terms-Of-Use/terms.html";
}
    
function Security(){
    window.location.href="Security/security.html";
}
        
    function Privacy(){
        window.location.href="Privacy/privacy.html";
    }
           
    function Feedback(){
        window.location.href="Feedback/feedback.html";
    }
           
    function Complaint(){
        window.location.href="Complaint/complaint.html";
    }
    
