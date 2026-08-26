import z from "zod";
import { CreateUserDTO } from "./CreateUserDTO.dto";

export const UpdateUserDTO = CreateUserDTO.partial()

export type UpdateUserDTO = z.infer<typeof UpdateUserDTO>;