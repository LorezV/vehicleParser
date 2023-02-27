const mariadb = require('mariadb');

const pool = mariadb.createPool({
  host: "127.0.0.1",
  user: "root",
  password: "2212",
  database: "test",
  connectionLimit: 5
})

on("onResourceStart", async (resourceName) => {
  if (GetCurrentResourceName() === resourceName) {
    const connection = await pool.getConnection()
    connection.ping().then(() => { console.log("Database connected."); connection.end() }).catch(() => { console.error("Error while connection to database."); if (connection) connection.end; })
  }
})

on("onResourceStop", async (resourceName) => {
  if (GetCurrentResourceName() === resourceName) {
    pool.end()
  }
})

onNet("saveVehicle", async (hash, data) => {
  const {name, acceleration, breaking, traction, speed} = JSON.parse(data)
  console.log(hash, data)

  let connection;
  try {
    connection = await pool.getConnection()
    const rows = await connection.query(`SELECT * FROM vehicles WHERE hash='${hash}'`)

    if (rows.length == 0) {
      const res = await connection.query("INSERT INTO vehicles (hash, name, speed, breaking, acceleration, traction) VALUES (?, ?, ?, ?, ?, ?)", [hash, name, speed, breaking, acceleration, traction])
      emitNet("onVehicleParsed", -1)
      console.log(`Vehicle ${name} parsed.`)
    }
  } catch(e) {
    console.error(e)
  } finally {
    if (connection) connection.end()
  }
})