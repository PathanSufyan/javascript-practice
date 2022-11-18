const video3 = {
  title: "zxc",
  tags: [9, 8, 7],

  showTags3() {
    console.log(this.title);
    this.tags.forEach(
      function (tag) {
        console.log(this.title);
      }.bind(this)
    );
  },
};
video3.showTags3();
