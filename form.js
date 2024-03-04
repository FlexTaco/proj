function validate(event) {
  event.preventDefault();

  let emailCheckBox = document.getElementById("emailBox").checked;

  const nameRegex = new RegExp(".+");
  const passwordRegex = new RegExp(
    "^(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9]).{1,8}$"
  );
  const phoneRegex = new RegExp(
    "(([0-9]{3}-[0-9]{3}-[0-9]{4})|([0-9]{3} [0-9]{3} [0-9]{4}))"
  );
  const idRegex = new RegExp("^[0-9]{5}$");
  const emailRegex = /^.+@.+\..{3,6}$/;

  const firstText = document.getElementById("first-name").value;
  const lastText = document.getElementById("last-name").value;
  const passwordText = document.getElementById("password").value;
  const phoneText = document.getElementById("phone").value;
  const idText = document.getElementById("id").value;
  const emailText = document.getElementById("email").value;
  var dropdown = document.getElementById("dropdown");
  var dropdownText = dropdown.options[dropdown.selectedIndex].text;

  if (!nameRegex.test(firstText)) {
    alert("Enter first name");
    document.getElementById("first-name").focus();
  } else if (!nameRegex.test(lastText)) {
    alert("Enter last name");
    document.getElementById("last-name").focus();
  } else if (!passwordRegex.test(passwordText)) {
    alert(
      "Max of 8 characters, have at least 1 uppercase letter one special character and one numeric character"
    );
    document.getElementById("password").focus();
  } else if (!idRegex.test(idText)) {
    alert("Must contain a 5 digit number");
    document.getElementById("id").focus();
  } else if (!phoneRegex.test(phoneText)) {
    alert(
      "Must consist of 10 digits, can be delineated either by spaces or dashes"
    );
    document.getElementById("phone").focus();
  } else if (emailCheckBox === true) {
    if (!emailRegex.test(emailText)) {
      alert(
        "Must contain an @ followed by a period and an email domain that consists of 3 to 6 characters"
      );
      document.getElementById("email").focus();
    } else {
      verify(
        emailCheckBox,
        firstText,
        lastText,
        passwordText,
        phoneText,
        idText,
        emailText,
        dropdownText
      );
    }
  } else {
    verify(
      emailCheckBox,
      firstText,
      lastText,
      passwordText,
      phoneText,
      idText,
      emailText,
      dropdownText
    );
  }
}
function verify(
  emailCheckBox,
  firstText,
  lastText,
  passwordText,
  phoneText,
  idText,
  emailText,
  dropdownText
) {
  var found = false;
  for (let i = 0; i < verifyAccount.length; i++) {
    const current = verifyAccount[i];
    const currFirst = current.first.toLowerCase();
    const currLast = current.last.toLowerCase();
    const currPassword = current.password;
    const currId = current.id;
    const currPhoneDash = current.phone[0];
    const currPhoneSpace = current.phone[1];
    const currEmail = current.email;

    if (emailCheckBox === true) {
      if (
        currFirst === firstText.toLowerCase() &&
        currLast === lastText.toLowerCase() &&
        currPassword === passwordText &&
        (currPhoneDash === phoneText || currPhoneSpace === phoneText) &&
        currId === idText &&
        currEmail === emailText
      ) {
        found = true;
        break;
      }
    } else {
      if (
        currFirst === firstText.toLowerCase() &&
        currLast === lastText.toLowerCase() &&
        currPassword === passwordText &&
        (currPhoneDash === phoneText || currPhoneSpace === phoneText) &&
        currId === idText
      ) {
        found = true;
        break;
      }
    }
  }
  if (found === true) {
    alert(
      "Welcome " +
        firstText +
        " " +
        lastText +
        ". Your transaction is: " +
        dropdownText +
        "."
    );
  } else {
    alert(firstText + " " + lastText + " is not Found.");
  }
}

//working accounts
var verifyAccount = [
  {
    first: "jane",
    last: "doe",
    password: "1#Passwd",
    id: "16167",
    phone: ["555-555-5555", "555 555 5555"],
    email: "hhh@ots.com",
  },
  {
    first: "john",
    last: "smith",
    password: "P@ssd123",
    id: "24578",
    phone: ["555-123-4567", "555 123 4567"],
    email: "johnsmith@example.com",
  },
  {
    first: "alice",
    last: "jones",
    password: "Sec@123",
    id: "78901",
    phone: ["555-987-6543", "555 987 6543"],
    email: "alicejones@example.com",
  },
  {
    first: "bob",
    last: "miller",
    password: "Pass123!",
    id: "11223",
    phone: ["555-111-2222", "555 111 2222"],
    email: "bobmiller@example.com",
  },
  {
    first: "emily",
    last: "wilson",
    password: "Stro55!",
    id: "33445",
    phone: ["555-333-4444", "555 333 4444"],
    email: "emilywilson@example.com",
  },
  {
    first: "charlie",
    last: "brown",
    password: "Ch@789",
    id: "55667",
    phone: ["555-555-6666", "555 555 6666"],
    email: "charliebrown@example.com",
  },
  {
    first: "susan",
    last: "carter",
    password: "Sus@123",
    id: "77889",
    phone: ["555-777-8888", "555 777 8888"],
    email: "susancarter@example.com",
  },
  {
    first: "david",
    last: "lewis",
    password: "L3@vid",
    id: "99000",
    phone: ["555-999-0000", "555 999 0000"],
    email: "davidlewis@example.com",
  },
  {
    first: "olivia",
    last: "martinez",
    password: "O@1234",
    id: "11222",
    phone: ["555-112-2333", "555 112 2333"],
    email: "oliviamartinez@example.com",
  },
  {
    first: "michael",
    last: "rodriguez",
    password: "R0d!",
    id: "33445",
    phone: ["555-334-4555", "555 334 4555"],
    email: "michaelrodriguez@example.com",
  },
];

//show password
const show_password = document.getElementById("show-password");
show_password.addEventListener("click", () => {
  const form = document.getElementById("password");
  if (form.type === "password") {
    form.type = "text";
  } else {
    form.type = "password";
  }
});

//change email to required
document.getElementById("emailBox").addEventListener("click", () => {
  const emailCheckBox = document.getElementById("emailBox").checked;
  const emailLabel = document.getElementById("email-label");
  if (emailCheckBox === true) {
    emailLabel.innerText = "Therapist's Email(REQUIRED):";
  } else {
    emailLabel.innerText = "Therapist's Email:";
  }
});

//validate and verify when submit
const submit = document.getElementById("submit-button");
submit.addEventListener("click", validate);
