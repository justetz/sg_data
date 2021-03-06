'use strict'

module.exports = connection => connection.sync().then(() => connection.model('session').bulkCreate([
    { name: '51th Student Senate', bodyUniqueId: 'senate', uniqueId: '51', active: true },
    { name: '50th Student Senate', bodyUniqueId: 'senate', uniqueId: '50', active: false },
    { name: '49th Student Senate', bodyUniqueId: 'senate', uniqueId: '49', active: false },
    { name: '48th Student Senate', bodyUniqueId: 'senate', uniqueId: '48', active: false },
    { name: '47th Student Senate', bodyUniqueId: 'senate', uniqueId: '47', active: false },
    { name: '46th Student Senate', bodyUniqueId: 'senate', uniqueId: '46', active: false },
    { name: '45th Student Senate', bodyUniqueId: 'senate', uniqueId: '45', active: false },
    { name: '44th Student Senate', bodyUniqueId: 'senate', uniqueId: '44', active: false },
    { name: '43rd Student Senate', bodyUniqueId: 'senate', uniqueId: '43', active: false },
    { name: '42nd Student Senate', bodyUniqueId: 'senate', uniqueId: '42', active: false },
    { name: '41st Student Senate', bodyUniqueId: 'senate', uniqueId: '41', active: false },
    { name: '40th Student Senate', bodyUniqueId: 'senate', uniqueId: '40', active: false },
    { name: '39th Student Senate', bodyUniqueId: 'senate', uniqueId: '39', active: false },
    { name: '38th Student Senate', bodyUniqueId: 'senate', uniqueId: '38', active: false },
    { name: '37th Student Senate', bodyUniqueId: 'senate', uniqueId: '37', active: false },
    { name: '36th Student Senate', bodyUniqueId: 'senate', uniqueId: '36', active: false },
    { name: '35th Student Senate', bodyUniqueId: 'senate', uniqueId: '35', active: false },
    { name: '34th Student Senate', bodyUniqueId: 'senate', uniqueId: '34', active: false },
    { name: '33rd Student Senate', bodyUniqueId: 'senate', uniqueId: '33', active: false },
    { name: '32nd Student Senate', bodyUniqueId: 'senate', uniqueId: '32', active: false },
    { name: '31st Student Senate', bodyUniqueId: 'senate', uniqueId: '31', active: false },
    { name: '30th Student Senate', bodyUniqueId: 'senate', uniqueId: '30', active: false },
    { name: '29th Student Senate', bodyUniqueId: 'senate', uniqueId: '29', active: false },
    { name: '28th Student Senate', bodyUniqueId: 'senate', uniqueId: '28', active: false },
    { name: '27th Student Senate', bodyUniqueId: 'senate', uniqueId: '27', active: false },
    { name: '26th Student Senate', bodyUniqueId: 'senate', uniqueId: '26', active: false },
    { name: '25th Student Senate', bodyUniqueId: 'senate', uniqueId: '25', active: false },
    { name: '24th Student Senate', bodyUniqueId: 'senate', uniqueId: '24', active: false },
    { name: '23rd Student Senate', bodyUniqueId: 'senate', uniqueId: '23', active: false },
    { name: '22nd Student Senate', bodyUniqueId: 'senate', uniqueId: '22', active: false },
    { name: '21st Student Senate', bodyUniqueId: 'senate', uniqueId: '21', active: false },
    { name: '20th Student Senate', bodyUniqueId: 'senate', uniqueId: '20', active: false },
    { name: '19th Student Senate', bodyUniqueId: 'senate', uniqueId: '19', active: false },
    { name: '18th Student Senate', bodyUniqueId: 'senate', uniqueId: '18', active: false },
    { name: '17th Student Senate', bodyUniqueId: 'senate', uniqueId: '17', active: false },
    { name: '16th Student Senate', bodyUniqueId: 'senate', uniqueId: '16', active: false },
    { name: '15th Student Senate', bodyUniqueId: 'senate', uniqueId: '15', active: false },
    { name: '14th Student Senate', bodyUniqueId: 'senate', uniqueId: '14', active: false },
    { name: '13th Student Senate', bodyUniqueId: 'senate', uniqueId: '13', active: false },
    { name: '12th Student Senate', bodyUniqueId: 'senate', uniqueId: '12', active: false },
    { name: '11th Student Senate', bodyUniqueId: 'senate', uniqueId: '11', active: false },
    { name: '10th Student Senate', bodyUniqueId: 'senate', uniqueId: '10', active: false },
    { name:  '9th Student Senate', bodyUniqueId: 'senate', uniqueId:  '9', active: false },
    { name:  '8th Student Senate', bodyUniqueId: 'senate', uniqueId:  '8', active: false },
    { name:  '7th Student Senate', bodyUniqueId: 'senate', uniqueId:  '7', active: false },
    { name:  '6th Student Senate', bodyUniqueId: 'senate', uniqueId:  '6', active: false },
    { name:  '5th Student Senate', bodyUniqueId: 'senate', uniqueId:  '5', active: false },
    { name:  '4th Student Senate', bodyUniqueId: 'senate', uniqueId:  '4', active: false },
    { name:  '3rd Student Senate', bodyUniqueId: 'senate', uniqueId:  '3', active: false },
    { name:  '2nd Student Senate', bodyUniqueId: 'senate', uniqueId:  '2', active: false },
    { name:  '1st Student Senate', bodyUniqueId: 'senate', uniqueId:  '1', active: false },

    { name: '2020-21 Executive Board', bodyUniqueId: 'eboard', uniqueId: '20-21', active: true },
    { name: '2019-20 Executive Board', bodyUniqueId: 'eboard', uniqueId: '19-20', active: false },
    { name: '2018-19 Executive Board', bodyUniqueId: 'eboard', uniqueId: '18-19', active: false },
    { name: '2017-18 Executive Board', bodyUniqueId: 'eboard', uniqueId: '17-18', active: false },
    { name: '2016-17 Executive Board', bodyUniqueId: 'eboard', uniqueId: '16-17', active: false },
    { name: '2015-16 Executive Board', bodyUniqueId: 'eboard', uniqueId: '15-16', active: false },
    { name: '2014-15 Executive Board', bodyUniqueId: 'eboard', uniqueId: '14-15', active: false },
    { name: '2013-14 Executive Board', bodyUniqueId: 'eboard', uniqueId: '13-14', active: false },
    { name: '2012-13 Executive Board', bodyUniqueId: 'eboard', uniqueId: '12-13', active: false },
    { name: '2011-12 Executive Board', bodyUniqueId: 'eboard', uniqueId: '11-12', active: false },
    { name: '2010-11 Executive Board', bodyUniqueId: 'eboard', uniqueId: '10-11', active: false },

    { name: '2020-21 Judicial Board', bodyUniqueId: 'jboard', uniqueId: '20-21', active: true },
    { name: '2019-20 Judicial Board', bodyUniqueId: 'jboard', uniqueId: '19-20', active: false },
    { name: '2018-19 Judicial Board', bodyUniqueId: 'jboard', uniqueId: '18-19', active: false },
    { name: '2017-18 Judicial Board', bodyUniqueId: 'jboard', uniqueId: '17-18', active: false },
    { name: '2016-17 Judicial Board', bodyUniqueId: 'jboard', uniqueId: '16-17', active: false },
    { name: '2015-16 Judicial Board', bodyUniqueId: 'jboard', uniqueId: '15-16', active: false },
    { name: '2014-15 Judicial Board', bodyUniqueId: 'jboard', uniqueId: '14-15', active: false },
    { name: '2013-14 Judicial Board', bodyUniqueId: 'jboard', uniqueId: '13-14', active: false },
    { name: '2012-13 Judicial Board', bodyUniqueId: 'jboard', uniqueId: '12-13', active: false },
    { name: '2011-12 Judicial Board', bodyUniqueId: 'jboard', uniqueId: '11-12', active: false },
    { name: '2010-11 Judicial Board', bodyUniqueId: 'jboard', uniqueId: '10-11', active: false },

    { name: '2020-21 Undergraduate Council', bodyUniqueId: 'uc', uniqueId: '20-21', active: true },
    { name: '2019-20 Undergraduate Council', bodyUniqueId: 'uc', uniqueId: '19-20', active: false },
    { name: '2018-19 Undergraduate Council', bodyUniqueId: 'uc', uniqueId: '18-19', active: false },
    { name: '2017-18 Undergraduate Council', bodyUniqueId: 'uc', uniqueId: '17-18', active: false },
    { name: '2016-17 Undergraduate Council', bodyUniqueId: 'uc', uniqueId: '16-17', active: false },
    { name: '2015-16 Undergraduate Council', bodyUniqueId: 'uc', uniqueId: '15-16', active: false },
    { name: '2014-15 Undergraduate Council', bodyUniqueId: 'uc', uniqueId: '14-15', active: false },
    { name: '2013-14 Undergraduate Council', bodyUniqueId: 'uc', uniqueId: '13-14', active: false },
    { name: '2012-13 Undergraduate Council', bodyUniqueId: 'uc', uniqueId: '12-13', active: false },
    { name: '2011-12 Undergraduate Council', bodyUniqueId: 'uc', uniqueId: '11-12', active: false },
    { name: '2010-11 Undergraduate Council', bodyUniqueId: 'uc', uniqueId: '10-11', active: false },

    { name: '2020-21 Graduate Council', bodyUniqueId: 'gc', uniqueId: '20-21', active: true },
    { name: '2019-20 Graduate Council', bodyUniqueId: 'gc', uniqueId: '19-20', active: false },
    { name: '2018-19 Graduate Council', bodyUniqueId: 'gc', uniqueId: '18-19', active: false },
    { name: '2017-18 Graduate Council', bodyUniqueId: 'gc', uniqueId: '17-18', active: false },
    { name: '2016-17 Graduate Council', bodyUniqueId: 'gc', uniqueId: '16-17', active: false },
    { name: '2015-16 Graduate Council', bodyUniqueId: 'gc', uniqueId: '15-16', active: false },
    { name: '2014-15 Graduate Council', bodyUniqueId: 'gc', uniqueId: '14-15', active: false },
    { name: '2013-14 Graduate Council', bodyUniqueId: 'gc', uniqueId: '13-14', active: false },
    { name: '2012-13 Graduate Council', bodyUniqueId: 'gc', uniqueId: '12-13', active: false },
    { name: '2011-12 Graduate Council', bodyUniqueId: 'gc', uniqueId: '11-12', active: false },
    { name: '2010-11 Graduate Council', bodyUniqueId: 'gc', uniqueId: '10-11', active: false }
]));