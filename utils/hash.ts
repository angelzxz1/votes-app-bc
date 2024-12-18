import bcrypt from "bcrypt";

export async function hashPassword(password: string) {
    const saltRounds = 10; // Nivel de seguridad
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    return hashedPassword;
}
export async function verifyPassword(
    inputPassword: string,
    hashedPassword: string
) {
    const match = await bcrypt.compare(inputPassword, hashedPassword);
    return match;
}
