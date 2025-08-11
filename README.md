# Summer Pockets 巡礼网站 - 部署版本

> **部署版本** - 2025年8月11日  
> 这是用于生产环境部署的版本，开发版本已做备份

## 🚀 快速启动

### 环境要求
- Python 3.9+
- Node.js 18+
- Conda (推荐)

### 启动步骤

#### 1. 激活虚拟环境
```bash
conda activate sprb-web
```

#### 2. 启动后端服务
```bash
cd backend
python -m uvicorn app:app --host 0.0.0.0 --port 8000 --reload
```

#### 3. 启动前端服务
```bash
cd frontend
npm run dev
```

## 📁 环境配置

### 后端配置
- **开发环境**: `backend/env.development`
- **生产环境**: `backend/env.production`
- **全局配置**: `config.json`

### 前端配置
- **开发环境**: `frontend/env.development`
- **生产环境**: `frontend/env.production`

## 🔧 配置说明

### 环境变量文件
环境变量文件包含了不同环境的配置参数，包括：
- 服务器配置（主机、端口、工作进程数）
- 数据库连接配置
- 安全设置（JWT密钥、CORS等）
- 文件上传限制
- 日志配置
- 性能监控设置

### 全局配置文件
`config.json` 文件包含了项目的全局配置，支持三种环境：
- **development**: 开发环境，启用热重载和调试
- **staging**: 测试环境，中等安全级别
- **production**: 生产环境，最高安全级别

## 🌐 访问地址

- **前端**: http://localhost:3000
- **后端API**: http://localhost:8000
- **健康检查**: http://localhost:8000/health
- **系统信息**: http://localhost:8000/system/info

## 📊 功能特性

- ✅ 用户认证和授权
- ✅ 七影蝶系统管理
- ✅ 文件上传和处理
- ✅ 音乐播放器
- ✅ 地图集成
- ✅ 性能监控
- ✅ 数据备份

## 🔒 安全配置

- CORS跨域配置
- JWT身份验证
- 文件类型限制
- 上传大小限制
- 速率限制

## 📝 注意事项

1. **生产环境部署前**，请修改所有配置文件中的默认密钥
2. **数据库路径**确保有写入权限
3. **日志目录**需要提前创建
4. **端口配置**确保不被其他服务占用

## 🆘 故障排除

### 常见问题
1. **端口占用**: 使用 `netstat -ano | findstr :8000` 检查
2. **权限不足**: 以管理员身份运行
3. **依赖缺失**: 运行 `pip install -r requirements.txt`

### 日志查看
- 后端日志: `backend/logs/`
- 前端日志: 浏览器开发者工具

## 📞 技术支持

如有问题，请联系项目维护者：Agent_小苍

---

**部署版本已准备就绪，祝您使用愉快！** 🎉
