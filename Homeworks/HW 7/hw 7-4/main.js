function Client (id, name, surname , email, phone, order) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
    this.order = order;
}
 let clients = [
     new Client(1, 'illia', 'romaniuk', 'illiaromaniuk@gmail.com', +32103912903123, ['tv', 'phone']),
     new Client(2, 'anton', 'gordiy', 'gordiy.com', +432123123, ['tv', 'phone']),
     new Client(3, 'misha', 'lytvyn', 'lytvyn.com', +5434232133, ['tv', 'phone']),
     new Client(4, 'sergiy', 'kosovan', 'kosovan.com', +534523412, ['tv', 'phone']),
     new Client(5, 'vadim', 'tverezuy', 'tverezuy.com', +7423423423, ['tv', 'phone']),
     new Client(6, 'illia', 'romaniuk', 'illiaromaniuk@gmail.com', +32103912903123, ['tv', 'phone']),
     new Client(7, 'rostislav', 'pystovuy', 'pystovuy.com', +12343423423, ['tv', 'phone']),
     new Client(8, 'sergiy', 'antsyferov', 'antsyferov.com', +2345412132, ['tv', 'phone']),
     new Client(9, 'roman', 'shipshev', 'shipshev.com', +34125231255, ['tv', 'phone']),
     new Client(10, 'vladislav', 'kaliga', 'kaliga.com', +6423133423, ['tv', 'phone']),
];
console.log(clients);
