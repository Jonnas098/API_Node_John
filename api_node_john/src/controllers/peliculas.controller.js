import { getConnection, querys, sql } from "../models";
// Create
// Función para agregar una nueva pelicula, indispensables los tres inputs ya que son NOT NUll en la DB
export const crearPelicula = async (req, res) => {
  let { nombre_pelicula, duracion, categoria } = req.body;
  //Validacion
  if (nombre_pelicula, duracion, categoria == null) {
    return res.status(400).json({ msg: "Este campo no puede quedar vacio" });
  }

  try {
    const pool = await getConnection();

    await pool
      .request()
      .input("nombre_pelicula", sql.NVarChar(50), nombre_pelicula)
      .input("duracion", sql.NVarChar(50), duracion)
      .input("categoria", sql.NVarChar(20), categoria)
      .query(querys.agregarPelicula);

    res.json({ nombre_pelicula, duracion, categoria });
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

// Read
// Función para obtener los datos completos de las peliculas
export const getPelicula = async (req, res) => {
  try {
    const pool = await getConnection();
    const result = await pool.request().query(querys.getPelicula);
    res.json(result.recordset);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

// Función para ver los datos de una pelicula por ID únicamente
export const getPeliculaById = async (req, res) => {
  try {
    const pool = await getConnection();

    const result = await pool
      .request()
      .input("id", req.params.id)
      .query(querys.getPeliculaById);
    return res.json(result.recordset[0]);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

export const getPeliculaByCat = async (req, res) => {
  try {
    const pool = await getConnection();

    const result = await pool
      .request()
      .input("categoria", req.params.categoria)
      .query(querys.getPeliculaByCat);
    return res.json(result.recordset[0]);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

// Update
//Funcion para cambiar la categoria de una pelicula mediante su ID
export const actualizarPelicula = async (req, res) => {
  const { categoria } = req.body;

  // Validacion
  if (categoria == null) {
    return res.status(400).json({ msg: "Debe de agregarm una categoria para continuar" });
  }

  try {
    const pool = await getConnection();
    await pool
      .request()
      .input("categoria", sql.NVarChar(20), categoria)
      .input("id", req.params.id)
      .query(querys.actualizarPelicula);
    res.json({ categoria });
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

// Delete
//Funcion que elimina una pelicula mediante su ID 
export const borrarPeliculaById = async (req, res) => {
  try {
    const pool = await getConnection();

    const result = await pool
      .request()
      .input("id", req.params.id)
      .query(querys.borrarPeliculaById);

    if (result.rowsAffected[0] === 0) return res.sendStatus(404);

    return res.sendStatus(204);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

export const defaultPelicula = (req, res) => res.send('Error 404 | Ruta no encontrada, lo siento.');
