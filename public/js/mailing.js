$("#mailBtn").on("click", (e) => {

      const message = $("#sendermessage").val()
      const username = $("#sendername").val()
      const email = $("#senderemail").val()
      const phone = $("#senderphone").val()

      window.location = `/mail/${username}/${message}/${email}/${phone}`

})


