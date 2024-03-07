import { Hono } from 'hono'
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import { decode, sign, verify } from 'hono/jwt'



const app = new Hono<{
  Bindings: {
    DATABASE_URL: string,
    JWT_SECRET: string,
  }
}>()


app.post('/api/v1/user/signup', async (c) => {
  const body = await c.req.json();

  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate())

  try {
    const user = await prisma.user.create({
      data: {
        email: body.email,
        password: body.password,
        name: body.name,
      }
    })

    const jwt = await sign({
      id: user.id
    }, c.env.JWT_SECRET)
    return c.text(jwt)
  } catch (error) {
    console.log(error);
    
    c.status(411);
    return c.text("Invalid details")
  }
})



app.post('/api/v1/user/signin', async (c) => {
  const body = await c.req.json();

  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate())

  try {
    const user = await prisma.user.findFirst({
      where: {
        email: body.email,
        password: body.password,
      }
    })

    if(!user) {
      c.status(403);
      return c.json({
        message: "Incorrect creds",
      })  // unauthorized
    }
    
    const jwt = await sign({
      id: user.id
    }, c.env.JWT_SECRET)

    return c.text(jwt)
  } catch (error) {
    console.log(error);
    
    c.status(411);
    return c.text("Invalid details")
  }
})
app.post('/api/v1/blog', (c) => {
  return c.text('Hello Hono blog!')
})
app.put('/api/v1/blog', (c) => {
  return c.text('Hello Hono get blog!')
})
app.get('/api/v1/blog/:id', (c) => {
  const id = c.req.param("id");
  return c.json({
    "your id is" : id,
  })
})
app.get('/api/v1/blog/blog', (c) => {
  return c.text('Hello Hono! bulk posts')
})

export default app
