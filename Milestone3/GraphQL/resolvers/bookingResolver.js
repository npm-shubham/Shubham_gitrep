const { Pool } = require("pg");

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "HotelBookings",
  password: "root",
  port: 5432,
});

const root = {
  getBooking: async ({ id }) => {
    try {
      const result = await pool.query('SELECT * FROM bookings WHERE id = $1', [id]);
      return result.rows[0];
    } catch (error) {
      console.error("Error fetching booking:", error);
      throw error;
    }
  },
  getAllBookings: async () => {
    try {
      const result = await pool.query('SELECT * FROM bookings');
      return result.rows.map(booking => ({
        ...booking,
        userid: booking.userid // Ensure userid is included in the response
      }));
    } catch (error) {
      console.error("Error fetching all bookings:", error);
      throw error;
    }
  },
  createBooking: async ({ input }) => {
    try {
      const { userid, hotelid, checkindate, checkoutdate, billingamount } = input;
      const result = await pool.query('INSERT INTO bookings (userid, hotelid, checkindate, checkoutdate, billingamount) VALUES ($1, $2, $3, $4, $5) RETURNING *', [userid, hotelid, checkindate, checkoutdate, billingamount]);
      return result.rows[0];
    } catch (error) {
      console.error("Error creating booking:", error);
      throw error;
    }
  },
  updateBooking: async ({ id, input }) => {
    try {
      const { userid, hotelid, checkindate, checkoutdate, billingamount } = input;
      const result = await pool.query('UPDATE bookings SET userid = $1, hotelid = $2, checkindate = $3, checkoutdate = $4, billingamount = $5 WHERE id = $6 RETURNING *', [userid, hotelid, checkindate, checkoutdate, billingamount, id]);
      return result.rows[0];
    } catch (error) {
      console.error("Error updating booking:", error);
      throw error;
    }
  },
  deleteBooking: async ({ id }) => {
    try {
      const result = await pool.query('DELETE FROM bookings WHERE id = $1 RETURNING id', [id]);
      if (result.rowCount === 0) {
        throw new Error(`Booking with ID ${id} not found`);
      }
      return id;
    } catch (error) {
      console.error("Error deleting booking:", error);
      throw error;
    }
  }  
};

module.exports = root;
