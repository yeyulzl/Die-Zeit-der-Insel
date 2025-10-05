import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'

dotenv.config()

const app = express()
const PORT = process.env.PORT || 5000

// 中间件
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// 基础路由
app.get('/api/health', (req, res) => {
  res.json({ 
    status: 'OK', 
    message: '服务器运行正常',
    timestamp: new Date().toISOString()
  })
})

// 启动服务器
app.listen(PORT, () => {
  console.log(`服务器运行在端口 ${PORT}`)
})

export default app