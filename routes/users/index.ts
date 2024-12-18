import { Router } from "express";
import { Request, Response } from "express";
import { db } from "../../libs/db";

const router = Router();
router.get("/", async (_req, res) => {
    try {
        const users = await db.user.findMany();
        res.json({ users });
    } catch (error) {
        console.log(error);
    }
});

router.get("/:id", (req, res) => {
    const { id } = req.params;
    res.send(`Detalles del usuario con ID: ${id}`);
});

router.post("/", (req: Request, res: Response) => {
    const { username, password } = req.body;
    if (!username) {
        res.status(400).send("Missing Username");
        return;
    }
    if (!password) {
        res.status(400).send("Missing Password");
        return;
    }
    res.send("Usuario creado");
});

export default router;
