'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.sequelize.query(`
    INSERT INTO estates(name, cover, office_id, created_at, updated_at) VALUES
    ('Andalax','http://dummyimage.com/1920x1080.bmp/dddddd/000000',1, '2019-01-08', '2019-01-08'),
    ('Aerified','http://dummyimage.com/1920x1080.bmp/dddddd/000000',2, '2019-01-08', '2019-01-08'),
    ('Flowdesk','http://dummyimage.com/1920x1080.jpg/dddddd/000000',3, '2019-01-08', '2019-01-08'),
    ('Tampflex','http://dummyimage.com/1920x1080.bmp/ff4444/ffffff',4, '2019-01-08', '2019-01-08'),
    ('Zamit','http://dummyimage.com/1920x1080.jpg/dddddd/000000',1, '2019-01-08', '2019-01-08'),
    ('Toughjoyfax','http://dummyimage.com/1920x1080.bmp/dddddd/000000',2, '2019-01-08', '2019-01-08'),
    ('Gembucket','http://dummyimage.com/1920x1080.png/cc0000/ffffff',3, '2019-01-08', '2019-01-08'),
    ('Bigtax','http://dummyimage.com/1920x1080.bmp/cc0000/ffffff',2, '2019-01-08', '2019-01-08'),
    ('Lotstring','http://dummyimage.com/1920x1080.png/cc0000/ffffff',2, '2019-01-08', '2019-01-08'),
    ('Zathin','http://dummyimage.com/1920x1080.bmp/dddddd/000000',2, '2019-01-08', '2019-01-08'),
    ('Redhold','http://dummyimage.com/1920x1080.jpg/ff4444/ffffff',2, '2019-01-08', '2019-01-08'),
    ('Tresom','http://dummyimage.com/1920x1080.jpg/dddddd/000000',2, '2019-01-08', '2019-01-08'),
    ('Veribet','http://dummyimage.com/1920x1080.png/ff4444/ffffff',2, '2019-01-08', '2019-01-08'),
    ('Stronghold','http://dummyimage.com/1920x1080.jpg/dddddd/000000',2, '2019-01-08', '2019-01-08'),
    ('Hatity','http://dummyimage.com/1920x1080.bmp/cc0000/ffffff',2, '2019-01-08', '2019-01-08'),
    ('Overhold','http://dummyimage.com/1920x1080.bmp/ff4444/ffffff',2, '2019-01-08', '2019-01-08'),
    ('Regrant','http://dummyimage.com/1920x1080.png/5fa2dd/ffffff',2, '2019-01-08', '2019-01-08'),
    ('Tresom','http://dummyimage.com/1920x1080.bmp/dddddd/000000',1, '2019-01-08', '2019-01-08'),
    ('Bytecard','http://dummyimage.com/1920x1080.jpg/ff4444/ffffff',1, '2019-01-08', '2019-01-08'),
    ('Temp','http://dummyimage.com/1920x1080.bmp/5fa2dd/ffffff',1, '2019-01-08', '2019-01-08'),
    ('Alpha','http://dummyimage.com/1920x1080.jpg/dddddd/000000',1, '2019-01-08', '2019-01-08'),
    ('Vagram','http://dummyimage.com/1920x1080.png/dddddd/000000',1, '2019-01-08', '2019-01-08'),
    ('Ventosanzap','http://dummyimage.com/1920x1080.png/dddddd/000000',1, '2019-01-08', '2019-01-08'),
    ('Konklux','http://dummyimage.com/1920x1080.png/cc0000/ffffff',1, '2019-01-08', '2019-01-08'),
    ('Viva','http://dummyimage.com/1920x1080.bmp/ff4444/ffffff',1, '2019-01-08', '2019-01-08'),
    ('Konklux','http://dummyimage.com/1920x1080.bmp/cc0000/ffffff',1, '2019-01-08', '2019-01-08'),
    ('Zoolab','http://dummyimage.com/1920x1080.bmp/5fa2dd/ffffff',1, '2019-01-08', '2019-01-08'),
    ('Zamit','http://dummyimage.com/1920x1080.jpg/cc0000/ffffff',1, '2019-01-08', '2019-01-08'),
    ('Ventosanzap','http://dummyimage.com/1920x1080.jpg/ff4444/ffffff',1, '2019-01-08', '2019-01-08'),
    ('Duobam','http://dummyimage.com/1920x1080.bmp/ff4444/ffffff',3, '2019-01-08', '2019-01-08'),
    ('Voltsillam','http://dummyimage.com/1920x1080.png/dddddd/000000',3, '2019-01-08', '2019-01-08'),
    ('Fix San','http://dummyimage.com/1920x1080.bmp/ff4444/ffffff',3, '2019-01-08', '2019-01-08'),
    ('Matsoft','http://dummyimage.com/1920x1080.bmp/cc0000/ffffff',3, '2019-01-08', '2019-01-08'),
    ('Konklab','http://dummyimage.com/1920x1080.jpg/dddddd/000000',3, '2019-01-08', '2019-01-08'),
    ('Aerified','http://dummyimage.com/1920x1080.png/5fa2dd/ffffff',3, '2019-01-08', '2019-01-08'),
    ('Overhold','http://dummyimage.com/1920x1080.bmp/dddddd/000000',3, '2019-01-08', '2019-01-08'),
    ('Overhold','http://dummyimage.com/1920x1080.bmp/dddddd/000000',3, '2019-01-08', '2019-01-08'),
    ('Bigtax','http://dummyimage.com/1920x1080.bmp/cc0000/ffffff',3, '2019-01-08', '2019-01-08'),
    ('Sonsing','http://dummyimage.com/1920x1080.jpg/dddddd/000000',3, '2019-01-08', '2019-01-08'),
    ('Viva','http://dummyimage.com/1920x1080.bmp/dddddd/000000',3, '2019-01-08', '2019-01-08'),
    ('Cookley','http://dummyimage.com/1920x1080.jpg/ff4444/ffffff',3, '2019-01-08', '2019-01-08'),
    ('Fixflex','http://dummyimage.com/1920x1080.bmp/ff4444/ffffff',4, '2019-01-08', '2019-01-08'),
    ('Fix San','http://dummyimage.com/1920x1080.png/cc0000/ffffff',4, '2019-01-08', '2019-01-08'),
    ('Flowdesk','http://dummyimage.com/1920x1080.png/dddddd/000000',4, '2019-01-08', '2019-01-08'),
    ('Stim','http://dummyimage.com/1920x1080.jpg/5fa2dd/ffffff',4, '2019-01-08', '2019-01-08'),
    ('Bamity','http://dummyimage.com/1920x1080.bmp/5fa2dd/ffffff',4, '2019-01-08', '2019-01-08'),
    ('Quo Lux','http://dummyimage.com/1920x1080.jpg/dddddd/000000',4, '2019-01-08', '2019-01-08'),
    ('Mat Lam Tam','http://dummyimage.com/1920x1080.png/cc0000/ffffff',4, '2019-01-08', '2019-01-08'),
    ('Aerified','http://dummyimage.com/1920x1080.jpg/cc0000/ffffff',4, '2019-01-08', '2019-01-08'),
    ('Ventosanzap','http://dummyimage.com/1920x1080.bmp/5fa2dd/ffffff',4, '2019-01-08', '2019-01-08');`);
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
