
    document.querySelector("#mailBtn").addEventListener("click", () => {
    window.location = `/mail/:${$("#sendername").val()}/:${$("#senderemail").val()}/:${$("#senderphone").val()}/:${$("#sendermessage").val()}`;
})


