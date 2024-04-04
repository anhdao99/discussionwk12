document.querySelector("#subscribe").addEventListener("click", function(){
    if(this.checked){
        document.getElementById("emailDiv").style.display = "block";
    } else {
        document.getElementById("emailDiv").style.display = "none";
    }
});

document.addEventListener("click", function(){
    alert(new Date());
});

// let sameAddress = document.getElementById('sameAddress');
// let home = document.getElementById('home');
// let bill = document.getElementById('bill');
// sameAddress.addEventListener('change', function() {
//     if (sameAddress.checked) {
//         home.value = bill.value;
//         home.disabled = true;
//     } else {
//         home.value = '';
//     }
// });

function challenge3() {
    let standing = document.querySelector('input[name="standing"]:checked');
    let gradDate = document.querySelector('input[name="gradDate"]:checked');
    if (standing && gradDate) {
      return true;
    } else {
      alert("Please select both options");
      return false;
    }
  }