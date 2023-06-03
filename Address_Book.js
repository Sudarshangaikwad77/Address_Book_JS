console.log("Welcome to JavaScript Address Book Problem solution");
class Contact {
    constructor(firstName, lastName, address, city, state, zip, phoneNumber, email) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.address = address;
      this.city = city;
      this.state = state;
      this.zip = zip;
      this.phoneNumber = phoneNumber;
      this.email = email;
    }
  }
  
  const contact1 = new Contact(
    "Sudarshan",
    "Gaikwad",
    "123 street",
    "Pandharpur",
    "Maharshtra",
    "413304",
    "8308622248",
    "sudarshangaikwad@gmail.com"
  );
  
  console.log("First Name:", contact1.firstName);
  console.log("Last Name:", contact1.lastName);
  console.log("Address:", contact1.address);
  console.log("City:", contact1.city);
  console.log("State:", contact1.state);
  console.log("Zip:", contact1.zip);
  console.log("Phone Number:", contact1.phoneNumber);
  console.log("Email:", contact1.email);
  