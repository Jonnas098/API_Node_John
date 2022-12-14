import { Router } from "express";
import {
  crearPelicula,
  getPelicula,
  getPeliculaById,
  getPeliculaByCat,
  actualizarPelicula,
  borrarPeliculaById,
  defaultPelicula
} from "../controllers/peliculas.controller.js";

const router = Router();

//CRUD para la tabla alumnos

//C
router.post("/peliculas/agregarPelicula", crearPelicula);

//R - ejemplo simple
router.get("/peliculas/getPelicula", getPelicula);

//R - ejemplo con parametro
router.get("/peliculas/getPeliculaById/:id", getPeliculaById);

router.get("/peliculas/getPeliculaByCat/:categoria", getPeliculaByCat);

//U
router.put("/peliculas/actualizarPelicula/:id", actualizarPelicula);

//D
router.delete("/peliculas/borrarPeliculaById/:id", borrarPeliculaById);

//Ruta en caso de digitar una ruta erronea
router.get("/peliculas/*", defaultPelicula);

export default router;
