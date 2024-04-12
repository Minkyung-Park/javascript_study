const dog = {
  name: "댕댕이",
  species: "믹스",
  color: "흰색",
  age: 3,
  intro: function () {
    return `우리집 강아지 이름은 ${this.name} 입니다`;
  },
};

dog.getAge = function () {
  return `나이는 ${this.age}살 입니다`;
};

document.getElementById("show").innerHTML = dog.getAge();
