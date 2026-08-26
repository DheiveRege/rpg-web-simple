import z from "zod";
import { CreateCharacterDTO } from "./CreateCharacterDTO.dto";

export const UpdateCharacterDTO = CreateCharacterDTO.partial();

export type UpdateCharacterDTO = z.infer<typeof UpdateCharacterDTO>;