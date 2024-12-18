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

router.get("/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const user = await db.user.findUnique({
            where: {
                id: id,
            },
        });
        if (!user) {
            res.status(404).json({ message: "User not found" });
        } else {
            res.json({ user });
        }
    } catch (error) {
        console.log(error);
    }
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
