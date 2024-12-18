import { Router } from "express";

const router = Router();
router.get("/", (_req, res) => {
    res.send("Lista de votos");
});

router.get("/:id", (req, res) => {
    const { id } = req.params;
    res.send(`Detalles del voto con ID: ${id}`);
});

router.post("/", (req, res) => {
    const { username, id } = req.body;
    if (!username) {
        res.status(400).send("Missing Username");
    }
    if (!id) {
        res.status(400).send("Missing Id");
    }
    res.send("Voto creado");
});

export default router;
