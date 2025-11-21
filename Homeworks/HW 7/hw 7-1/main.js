function User(id, name, surname , email, phone) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone
}
// let user1 = new User(1, 'kokos', 'ogonev', 'ogonev.com', +323123123);
// console.log(user1);

let users = [
    new User(1, 'andriy', 'ogonev', 'ogonev.com', +323123123),
    new User(2, 'anton', 'gordiy', 'gordiy.com', +432123123),
    new User(3, 'misha', 'lytvyn', 'lytvyn.com', +5434232133),
    new User(4, 'sergiy', 'kosovan', 'kosovan.com', +534523412),
    new User(5, 'illia', 'romaniuk', 'romaniuk.com', +65443242),
    new User(6, 'vadim', 'tverezuy', 'tverezuy.com', +7423423423),
    new User(7, 'rostislav', 'pystovuy', 'pystovuy.com', +12343423423),
    new User(8, 'sergiy', 'antsyferov', 'antsyferov.com', +2345412132),
    new User(9, 'roman', 'shipshev', 'shipshev.com', +34125231255),
    new User(10, 'vladislav', 'kaliga', 'kaliga.com', +6423133423),
]
console.log(users);