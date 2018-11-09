
// Initialize Firebase
var config = {
  apiKey: "AIzaSyBXjI3lbVdj8Tr5hzW1wptShhYtxRAX_tQ",
  authDomain: "mywebsite-e48ae.firebaseapp.com",
  databaseURL: "https://mywebsite-e48ae.firebaseio.com",
  projectId: "mywebsite-e48ae",
  storageBucket: "mywebsite-e48ae.appspot.com",
  messagingSenderId: "653826488405"
};
firebase.initializeApp(config);

//reference messages collection
var messagesRef = firebase.database().ref('messages');





window.sr = ScrollReveal();
        sr.reveal('.navbar', {
          duration: 2000,
          origin:'bottom'
        });
        sr.reveal('.showcase-left', {
          duration: 2000,
          origin:'top',
          distance:'300px'
        });
        sr.reveal('.showcase-right', {
          duration: 2000,
          origin:'right',
          distance:'300px'
        });
        sr.reveal('.showcase-btn', {
          duration: 2000,
          delay: 2000,
          origin:'bottom'
        });
        sr.reveal('#testimonial div', {
          duration: 2000,
          origin:'bottom'
        });
        sr.reveal('.info-left', {
          duration: 2000,
          origin:'left',
          distance:'300px',
          viewFactor: 0.2
        });
        sr.reveal('.info-right', {
          duration: 2000,
          origin:'right',
          distance:'300px',
          viewFactor: 0.2
        });
    

    
    $(function() {
      // Smooth Scrolling
      $('a[href*="#"]:not([href="#"])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
          if (target.length) {
            $('html, body').animate({
              scrollTop: target.offset().top
            }, 1000);
            return false;
          }
        }
      });
    });



//listen to submit form
document.getElementById('contact-form').addEventListener('submit', submitForm);


//submit form
function submitForm(e){
  e.preventDefault();

  //get values
  var name = getInputVal('name');
  var email = getInputVal('email');
  var message = getInputVal('message');
  

  //save message
  saveMessage(name, email, message);
}

//function to get form values
function getInputVal(id){
  return document.getElementById(id).value;
}

//save message to firebase
function saveMessage(name, email, message){
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    name: name,
    email: email,
    message: message
  });
}