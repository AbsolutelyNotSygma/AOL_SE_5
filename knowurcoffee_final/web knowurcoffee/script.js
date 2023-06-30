function showNotification() {
    var notification = document.getElementById("notification");
    notification.classList.add("show");
    setTimeout(closeNotification, 900);
  }
  
  function closeNotification() {
    var notification = document.getElementById("notification");
    notification.classList.add("hide");
    setTimeout(removeNotification, 500); // Wait for the animation to finish before removing the notification
  }
  
  function removeNotification() {
    var notification = document.getElementById("notification");
    notification.classList.remove("show", "hide");
  }

const form = document.getElementById('post');

form.addEventListener('submit', function(event){
    event.preventDefault;
    const Name = document.getElementById('name').value
    const Pass = document.getElementById('pass').value
    console.log(Name)
    console.log(Pass)
})
  
  
  
  
  
  