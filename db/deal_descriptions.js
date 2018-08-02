const path = require('path');

const connection = require(path.join(__dirname, 'index.js'));

const getDescriptionData = (dealId, callback) => {
  connection.query(
    `
      SELECT
        d.id deal_id,
        d.name deal_name, 
        m.name merch_name, 
        m.about_p1 about_p1, 
        m.about_p2 about_p2, 
        m.about_p3 about_p3, 
        ds.descrip_p1, 
        ds.descrip_p2, 
        ds.descrip_p3, 
        ds.descrip_p4, 
        d.addl_info,
        d.inclusions, 
        d.exclusions, 
        d.fine_print, 
        GROUP_CONCAT (c.name SEPARATOR ', ') ttd,
        l.addr_ln1, 
        l.addr_ln2, 
        l.city,
        l.state_abbr,
        l.zip,
        l.lon,
        l.lat,
        l.gp_id
      FROM deal d
      INNER JOIN merchant m ON ( d.merch_id = m.id )
      INNER JOIN description ds ON ( ds.deal_id = d.id )
      INNER JOIN location l ON ( d.loc_id = l.id )
      INNER JOIN deal_cat_join dcj ON ( d.id = dcj.deal_id )
      INNER JOIN category c ON ( dcj.cat_id = c.id )
      WHERE d.id = ${dealId}
      GROUP BY d.id
      ORDER BY d.id
  ;`,
    (error, result, fields) => {
      if (error) {
        console.log('database query error');
      } else {
        callback(null, result);
      }
    }
  );
};
// getDescriptionData(25, (e, s) => console.log(s));

const dealTableMaxRecord = (callback) => {
  connection.query('SELECT MAX(id) AS max_id FROM deal', (error, result, fields) => {
    if (error) {
      console.log('database query error');
    } else {
      callback(null, result);
    }
  });
};
// dealTableMaxRecord((e, s) => console.log('The deal table contains', s[0].max_id, 'records.'));

// connection.end();

module.exports = {
  getDescriptionData,
  dealTableMaxRecord,
};
