import z from "zod";

//signup
export const signUpInput = z.object({
    email: z.string().email(),
    password: z.string().min(6),
    name: z.string().optional()
})

// signin
export const signInInput = z.object({
    email: z.string().email(),
    password: z.string().min(6),
    name: z.string().optional()
})

//createBlog
export const createBlogInput = z.object({
    title: z.string(),
    content: z.string(),
})

// updateBlog
export const updateBlogInput = z.object({
    title: z.string(),
    content: z.string(),
    id: z.string()
})

//type inference 
export type SignUpInput = z.infer<typeof signUpInput>
export type SignInInput = z.infer<typeof signInInput>
export type CreateBlogInput = z.infer<typeof createBlogInput>
export type UpdateBlogInput = z.infer<typeof updateBlogInput>


