
$(document).on("click", "#signUpAnch", () => {

    const signUpCard = 
    `<h3 id="smallh3" >SIGN UP</h3>
    <input id="emailSignUp" type="email" placeholder="Email">
    <input id="passSignUp" type="password" placeholder="Password">
    <button id="signUpBtn" >Sign Up</button>
    <p id="smallp">Already have an account? <span><a id="loginAnch" href="#">Login</a></span></p>`

    $(".login-card").empty()

    $(".login-card").append(signUpCard)
});

$(document).on("click", "#loginAnch", () => {

    const loginCard = 
    `<h3>LOGIN</h3>
    <input id="emailLogin type="email" placeholder="Email">
    <input id="passLogin" type="password" placeholder="Password">
    <button id="loginBtn" >Login</button>
    <p>Don't have an account? <span><a id="signUpAnch" href="#">Sign up</a></span></p>`

    $(".login-card").empty()

    $(".login-card").append(loginCard)
});

$(document).on("click", "#loginBtn", () => {
    location.assign("../home.html")
})

$(document).on("click", "#signUpbtn", () => {
    location.assign("../home.html")
})