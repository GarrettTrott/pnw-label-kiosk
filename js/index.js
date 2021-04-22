
// add text input values to confirmation slide
const addName = () => {
  const firstName = document.getElementById("firstName").value
  const lastName = document.getElementById("lastName").value
  const email = document.getElementById("email").value

  const fullname =  firstName + " " + lastName;
  
  document.getElementById("confirmName").innerHTML = fullname
  document.getElementById("printName").innerHTML = fullname
  document.getElementById("confirmEmail").innerHTML = email
  
  if (email.length > 24) {
    const arr = email.split("@")
    const splitEmail = arr[0] + " @" + arr[1]  
    document.getElementById("printEmail").innerHTML = splitEmail
  } else {
    document.getElementById("printEmail").innerHTML = email
  }
  insertDate()
}

const addPackage = () => {
  const radio1 = document.getElementById("r1")
  const radio2 = document.getElementById("r2")
  const radio3 = document.getElementById("r3")

  const jobTitle = document.getElementById("jobTitle")
  const printJobTitle = document.getElementById("printJobTitle")
  const packageType = document.getElementById("packageType")
  const printPackageType = document.getElementById("printPackageType")
  

  if (radio1.checked) {
    jobTitle.innerHTML = "Tandem Instructor"
    printJobTitle.innerHTML = "Tandem Instructor"
    packageType.innerHTML = "Photos Only"
    printPackageType.innerHTML = "Photos Only"
  } else if (radio3.checked) {
    printJobTitle.innerHTML = "Videographer or Tandem Instructor"
    jobTitle.innerHTML = "Videographer or Tandem Instructor"
    packageType.innerHTML = "Deluxe Video + Photos"
    printPackageType.innerHTML = "Deluxe Video + Photos"
  } else if (radio2.checked) {
    printJobTitle.innerHTML = "Videographer"
    jobTitle.innerHTML = "Videographer"
    packageType.innerHTML = " Video + Photos"
    printPackageType.innerHTML = " Video + Photos"
  }
}

const insertDate = () => {
  const dt = new Date();
  document.getElementById("datetime").innerHTML = dt.toLocaleString("en-US");
}

const printSlip = () => {
  window.print();
  setTimeout('window.location.reload()', 15000);
}