import { Hono } from 'hono'
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'



const app = new Hono<{
  Bindings: {
    DATABASE_URL: string,
  }
}>()

app.post('/api/v1/user/signup', (c) => {
  
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
}).$extends(withAccelerate())
  return c.text('Hello Hono signup!')
})
app.post('/api/v1/user/signin', (c) => {
  return c.text('Hello Hono signin!')
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
