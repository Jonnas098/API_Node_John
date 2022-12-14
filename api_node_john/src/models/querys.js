export const querys = {
  //Create......Los atributos incluidos en el query son NOT NUll y se deben de agregar
  agregarPelicula:
    "INSERT INTO Pelicula VALUES (@nombre_pelicula, @duracion, @categoria);",

  //Read...... Pedir todos los datos de la tabla Pelicula
  getPelicula: "SELECT * FROM Pelicula",

  //Read..... Pedir datos con un parametro, en este caso el ID
  getPeliculaById: "SELECT * FROM Pelicula WHERE id_pelicula = @Id",

  //Read..... Solicitar todos los datos por categoria de la tabla Pelicula
  getPeliculaByCat: "SELECT * FROM Pelicula WHERE @categoria = categoria",

  //Update..... Query para cambiar la categoria de una pelicula utilizando su ID
  actualizarPelicula: "UPDATE Pelicula SET categoria = @categoria WHERE id_pelicula = @Id",

  //Delete..... Borrar pelicula mediante ID
  borrarPeliculaById: "DELETE Pelicula where id_pelicula = @Id",
};
