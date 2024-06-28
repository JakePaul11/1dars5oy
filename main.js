let data=+prompt("Hafta kunini son bilan kiriting")
let day = []

switch (data) {
    case 1:
      day = "Dushanba";
      break;
    case 2:
      day = "Seshanba";
      break;
    case 3:
       day = "Chorshanba";
      break;
    case 4:
      day = "Payshanba";
      break;
    case 5:
      day = "Juma";
      break;
    case 6:
      day = "Shamba";
      break;
    case 7:
      day = "Yakshanba";
        default:
    console.log ("Hafta kunini kiritishingizni sorab qolamiz")
    break;
  }

  console.log(day)

