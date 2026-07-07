const obj = {
  name: "John",
  show() {
    console.log(this.name);
  }
};

obj.show();