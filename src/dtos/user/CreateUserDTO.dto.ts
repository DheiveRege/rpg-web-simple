import z from "zod";

export const CreateUserDTO = z.object({

    name: z.string('nome obrigatorio e tem que ser string')
        .min(3, 'Name must have least 3 character')
        .max(100, 'Limit character 100'),

    email: z.email('E-mail is invalid😒'),

    password: z.string('nome obrigatorio e tem que ser string')
        .min(8, 'Password must have least 8 character')
        .max(255, 'Limit character 255')
        .regex(/^(?=.*[A-Z])/, 'Password deve conter uma letra maiuscula')
        .regex(/^(?=.*[a-z])/, 'Deve conter pelo menos 1 letra minuscula sem sentido ne filho mas faz ai se nao te espanco')
        .regex(/^(?=.*[0-9])/, "Password deve conter um numero😁")
        .regex(/^(?=.*[!@#$%¨&*(\)|/`^'":;?.,-_=+{}])/, 'Password must have a character special')

});
export type CreateUserDTO = z.infer<typeof CreateUserDTO>