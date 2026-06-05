 //Primitive // stack example // change in the copy;

  let myyoutube = "Hello stack example";

  let youtube = myyoutube;

  youtube  = "web stack";

  console.log(myyoutube);
  console.log(youtube);


 // Non-primitive // Heap example // change in the original 

let userOne = {
    id: 123,
    yourname: "babyboy",
    school: "lpu",
    email:"user@gmail.com"
  };

  let userTwo = userOne;

  userTwo.email = "ranjay@gmail.com";

  console.log(userOne.email);
  console.log(userTwo.email);
