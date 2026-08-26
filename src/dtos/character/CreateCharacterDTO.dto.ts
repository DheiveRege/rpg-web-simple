import z from "zod";

export const CreateCharacterDTO = z.object({

    name: z.string('nome obrigatorio e tem que ser string')
        .min(3, 'Name must have least 3 character')
        .max(100, 'Limit character 100')
});
export type CreateCharacterDTO = z.infer<typeof CreateCharacterDTO>;