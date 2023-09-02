var userPassword = prompt("Shifrenizi yaradin");
var userSalary = Number(prompt("Maashinizi qeyd edin"));
var userMoney = 1200;
var credit = 100;
var amount;
var choice;
var pasword;
var wish;
var trs = [];
var trsp = [];
var count = 3;

while (count > 0) {
  pasword = prompt("Shifrenizi daxil edin");
  if (pasword === userPassword) {
    console.log("Xosh gelmisiniz!");
    while (true) {
      choice = prompt("K-kredit odenishi        P-pul cixartmaq");
      if (choice === "K" || choice === "k") {
        console.log(`Balans : ${userMoney}`);
        console.log(`Kreditiniz : ${credit}`);
        while (userMoney > 0) {
          amount = Number(
            prompt("Odenish etmek istediyiniz meblegi qeyd edin")
          );
          if (amount <= userMoney) {
            if (amount <= credit) {
              userMoney -= amount;
              console.log(`Balans : ${userMoney}`);
            } else if (amount > credit) {
              userMoney -= credit;
              credit = 0;
              console.log(`Balans : ${userMoney}`);
            }
            wish = confirm("Devam etmek isteyirsiniz?");
            trs.push([amount, new Date()]);
            if (!wish) {
              console.log(trs);
              var trsShow = confirm(
                "Tranzaksiya melumatlarini elde etmek isteyirsiniz mi?"
              );
              if (trsShow) {
                for (const tr of trs) {
                  document.write(`Mebleg: ${tr[0]}     Tarix: ${tr[1]} </br>`);
                }
              } else {
                console.log(
                  "Xidemtimizden istifade etdiyiniz ucun teshekkur edirik!"
                );
              }

              break;
            }
          } else {
            console.log("Balansda kifayet qeder vesait yoxdur");
            var creditGet = confirm(
              "Kredit xidmetlerimiz ile maraqlanirsiniz?"
            );
            if (creditGet) {
              userMoney += (userSalary * 9) / 20;
              credit += (userSalary * 47) / 100;
              console.log(`Balans : ${userMoney}`);
            }
          }
          if (userMoney == 0 && credit == 0) {
            console.log("Balansda kifayet qeder vesait yoxdur");
            var creditGet = confirm(
              "Kredit xidmetlerimiz ile maraqlanirsiniz?"
            );
            if (creditGet) {
              userMoney += (userSalary * 9) / 20;
              credit += (userSalary * 47) / 100;
              console.log(`Balans : ${userMoney}`);
            }
          }
        }
      } else if (choice === "p" || choice === "P") {
        console.log(`Balans : ${userMoney}`);
        while (userMoney > 0) {
          amount = Number(prompt("Elde etmek istediyiniz meblegi qeyd edin"));
          if (amount <= userMoney) {
            userMoney -= amount;
            console.log(`Balans : ${userMoney}`);

            wish = confirm("Devam etmek isteyirsiniz?");
            trs.push([amount, new Date()]);
            if (!wish) {
              console.log(trsp);
              var trspShow = confirm(
                "Tranzaksiya melumatlarini elde etmek isteyirsiniz mi?"
              );
              if (trspShow) {
                for (const trp of trsp) {
                  document.write(
                    `Mebleg: ${trp[0]}     Tarix: ${trp[1]} </br>`
                  );
                }
              } else {
                console.log(
                  "Xidemtimizden istifade etdiyiniz ucun teshekkur edirik!"
                );
              }

              break;
            }
          } else {
            console.log("Balansda kifayet qeder vesait yoxdur");
            var creditGet = confirm(
              "Kredit xidmetlerimiz ile maraqlanirsiniz?"
            );
            if (creditGet) {
              userMoney += (userSalary * 9) / 20;
              credit += (userSalary * 47) / 100;
              console.log(`Balans : ${userMoney}`);
            }
          }
          if (userMoney == 0 && credit == 0) {
            console.log("Balansda kifayet qeder vesait yoxdur");
            var creditGet = confirm(
              "Kredit xidmetlerimiz ile maraqlanirsiniz?"
            );
            if (creditGet) {
              userMoney += (userSalary * 9) / 20;
              credit += (userSalary * 47) / 100;
              console.log(`Balans : ${userMoney}`);
            }
          }
        }
      }
      var isContinue = confirm("Devam edib,en basha qayidmaq isteyirsiniz?");
      if (!isContinue) {
        break;
      }
    }
  } else {
    count--;
    console.log(`Qalan cehd sayi ${count}`);
    console.log("Shifre yanlishdir,bir daha cehd edin");
  }

  if (count == 0) {
    console.log("Kartiniz blklandi,Banka muraciet edin");
    break;
  }
  wish = confirm("Devam etmek isteyirsiniz?");
  if (!wish) {
    console.log("Xidemtimizden istifade etdiyiniz ucun teshekkur edirik!");
    break;
  }
}
