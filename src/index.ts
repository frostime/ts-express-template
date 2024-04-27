import express, { Express, Request, Response, NextFunction } from 'express';
import router from './routes';

const app: Express = express();
const port = process.env.PORT || 8000; // 使用环境变量中的端口号

// 中间件示例: 记录每个请求
app.use((req: Request, res: Response, next: NextFunction) => {
  console.log(`${req.method} ${req.path}`);
  next();
});

// 解析 JSON 请求体
app.use(express.json());

app.use('/', router);

// 错误处理中间件
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error(err.stack);
  res.status(500).send('Something went wrong!');
});

app.listen(port, () => {
  console.log(`Example app listening on http://localhost:${port}`);
});
