// What is this? This refers to any object that is executing the current code

//If a function is part of an obejct we call it method, in this case this key word refers to the object
//If a function is a regular function, this refers to the global object (window obj in browsers, global in node )

// For Ex. ------------------------ line: 3
const video = {
  title: "a",
  play() {
    console.log(this); //Here, you will see the original object as mention on line no. 3
  },
};

// so even if you add a method from outside and console the this keyword, it will refer to the object the method
// is being added to.

video.stop = function () {
  console.log("this2", this);
};
// video.stop();

// for ex ----------------------------------- line: 4

function playVideo() {
  console.log(this); //Here, this refers to the window/global object, you can check the methods available to confirm
}
// playVideo();

// what if it is a constructor function declared with new keyword?

function PlayVideo2(title) {
  this.title = title;
  console.log(this);
}
const test = new PlayVideo2("abc"); //Even though it is a regular function, here, this doesn't refer to the window/
// global object. This is a constructor function which creates a new object. Hence, here this refers to the newly
// created object.

// -------------------------- Important Note:

//

const video2 = {
  title: "xyz",
  tags: [1, 2, 3],
  showTags() {
    this.tags.forEach(function (tag) {
      // here this is referring to the original object

      console.log(this.title, tag); // here this is referring to window/global object. error for this: undefined
    });
  },
};
video2.showTags();

// why? here the this was used in a call back function nested within the method in original object and not
// directly inside the method. check line: 4 again

// So how do you solve this problem in this case?

const video3 = {
  title: "jkl",
  tags: [7, 8, 9],
  showTags2() {
    this.tags.forEach(
      function (tag) {
        console.log(this, tag);
      },
      { title: "lmn" } //This object is passed as a second argument to forEach function, in this case, This refers to the object passed as an argument here
    );
  },
};
video3.showTags2();

// Similarly if you pass this keyword as the second argument to forEach function you can get the problem resolved.
// the call back function will inherit the this key word to refer to the original object and not the windo/global object

const video4 = {
  title: "ghi",
  tags: [4, 5, 6],
  showTags3() {
    this.tags.forEach(function (tag) {
      console.log(this.title, tag);
    }, this); //Here, we are in the method not the callback function, and the this belonging to original object is being passed to the call back function as an argument.
  },
};

//---------------------------------------- Impressive Exception with Arrow Function

video4.showTags3();

const video5 = {
  title: "stfu",
  tags: [6, 5, 4],
  showTags4() {
    this.tags.forEach((tag) => {
      console.log(this.title, tag);
    });
  },
};
video5.showTags4();

// if you use arrow function syntax to declare the call back function which is a part of a method inside an object
//You do not need to pass this as an argument to such callback functions.

//Starting from ES6, arrow function inherits the this key word from the method in this case.
