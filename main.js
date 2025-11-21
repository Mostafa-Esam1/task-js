let phones = ["iphone11", "iphone 12", "iphone 13"];
let prices = [400, 500, 600];

function ShowPhones() {
  console.clear();
  phones.forEach((phone, index) => {
    console.log(`phone is : ${phone} => price is : ${prices[index]}`);
  });
}

function AddPhones() {
  let NewPhone = prompt("Enter a new phone");
  let AddPrice = +prompt("Enter price");
  phones.push(NewPhone);
  prices.push(AddPrice);
  ShowPhones();
}

function DeletPhone() {
  let DeletePhones = +prompt("Enter index for delete");
  phones.splice(DeletePhones, 1);
  prices.splice(DeletePhones, 1);
  ShowPhones();
}

function UpDate() {
  let Index = +prompt("Enter the index");
  let NewName = prompt('Enter UpDate for name') ;
  let NewPrice =+prompt("inter UpDate for Price") ;
  phones.splice(Index, 1);
  prices.splice(Index, 1);
  phones.push(NewName);
  prices.push(NewPrice);
  ShowPhones();
}
