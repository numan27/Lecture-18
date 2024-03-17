

// SetTimeOut

setTimeout(function () {
    // console.warn("The setTimeout will returned this text after 4 seconds of the execution.")
}, 4000)

// SetInterval

count = 0;
setInterval(function(){
    count++
    // console.warn("The setInterval will returs this statement and add count after every 2 seconds: ", count)
}, 2000)

// Local Storage

localStorage.setItem("name", "Numan")

const user = {
    name: "Numan",
    city: "Lahore",
    phone: "0334-4952763"
}
// console.warn(user)

const storedData = JSON.stringify(user); 

console.warn("Stored Data contains user object in the form of Strings: ",storedData)

const userObject = JSON.parse(storedData)
console.warn("User Object Value: ", userObject)

localStorage.setItem(storedData);

