const express = require('express');
const router = express.Router();

// Route to get all bookings
router.get('/bookings', async (req, res) => {
  const client = await global.pgPool.connect();
  try {
    const result = await client.query('SELECT * FROM bookings');
    res.json(result.rows);
  } catch (error) {
    console.error('Error fetching bookings', error);
    res.status(500).send('Internal Server Error');
  } finally {
    client.release();
  }
});

// Route to get a single booking by ID
router.get('/bookings/:id', async (req, res) => {
  const { id } = req.params;
  const client = await global.pgPool.connect();
  try {
    const result = await client.query('SELECT * FROM bookings WHERE id = $1', [id]);
    if (result.rows.length === 0) {
      return res.status(404).send('Booking not found');
    }
    res.json(result.rows[0]);
  } catch (error) {
    console.error('Error fetching booking', error);
    res.status(500).send('Internal Server Error');
  } finally {
    client.release();
  }
});

// Route to create a new booking
router.post('/bookings', async (req, res) => {
  const { userid, hotelid, checkindate, checkoutdate, billingamount } = req.body;
  const client = await global.pgPool.connect();
  try {
    const query = 'INSERT INTO bookings (userid, hotelid, checkindate, checkoutdate, billingamount) VALUES ($1, $2, $3, $4, $5) RETURNING *';
    const result = await client.query(query, [userid, hotelid, checkindate, checkoutdate, billingamount]);
    res.status(201).json(result.rows[0]);
  } catch (error) {
    console.error('Error creating booking', error);
    res.status(500).send('Internal Server Error');
  } finally {
    client.release();
  }
});

// Route to update a booking
router.patch('/bookings/:id', async (req, res) => {
    const { id } = req.params;
    const { userid, hotelid, checkindate, checkoutdate, billingamount } = req.body;
    const client = await global.pgPool.connect();
    try {
        const updateFields = {};
        if (userid) updateFields.userid = userid;
        if (hotelid) updateFields.hotelid = hotelid;
        if (checkindate) updateFields.checkindate = checkindate;
        if (checkoutdate) updateFields.checkoutdate = checkoutdate;
        if (billingamount) updateFields.billingamount = billingamount;

        const query = 'UPDATE bookings SET ' + 
            Object.keys(updateFields).map(key => `${key} = $${Object.keys(updateFields).indexOf(key) + 1}`).join(', ') + 
            ' WHERE id = $' + (Object.keys(updateFields).length + 1) + 
            ' RETURNING *';
        const values = [...Object.values(updateFields), id];

        const result = await client.query(query, values);
        if (result.rows.length === 0) {
            return res.status(404).json({ message: "Booking not found" });
        }
        res.json(result.rows[0]);
    } catch (error) {
        console.error('Error updating booking:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

// Route to delete a booking
router.delete('/bookings/:id', async (req, res) => {
  const { id } = req.params;
  const client = await global.pgPool.connect();
  try {
    const result = await client.query('DELETE FROM bookings WHERE id = $1 RETURNING *', [id]);
    if (result.rows.length === 0) {
      return res.status(404).send('Booking not found');
    }
    res.status(204).send();  // No content to send back
  } catch (error) {
    console.error('Error deleting booking', error);
    res.status(500).send('Internal Server Error');
  } finally {
    client.release();
  }
});

module.exports = router;
