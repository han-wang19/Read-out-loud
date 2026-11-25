# Netlify 部署与账号配置

本项目使用用户名和密码登录，不需要邮箱或手机号。身份验证、私人数据同步、投稿审核都由 Netlify Functions 在服务端执行。

## 1. 部署方式

建议把整个仓库连接到 Netlify，而不是只拖拽 `reading-practice` 文件夹。根目录中的 `netlify.toml` 会自动设置：

- Publish directory：`reading-practice`
- Functions directory：`netlify/functions`

Netlify 构建时会根据 `package.json` 安装 `@netlify/blobs` 和 `@netlify/functions`。

如果使用本项目提供的 ZIP，请先解压，再把解压后的内容提交到 Git 仓库；不要只把 ZIP 文件本身上传到仓库。仓库首页必须能直接看到下面的结构：

```text
reading-practice/
  index.html
  app.js
  styles.css
netlify/
  functions/
  lib/
netlify.toml
package.json
package-lock.json
```

部署前请在 GitHub/GitLab 网页上实际点开 `reading-practice/index.html`，确认它已存在于默认分支。Netlify 的 Base directory 保持为空；不要设置成 `reading-practice`，发布目录和 Functions 目录已经由 `netlify.toml` 配置。

## 2. 设置会话密钥

在本机生成随机密钥：

```powershell
node -e "console.log(require('crypto').randomBytes(48).toString('hex'))"
```

进入 Netlify：Project configuration → Environment variables，添加：

```text
AUTH_SECRET=上一步生成的随机字符串
```

不要把真实密钥写进 Git 仓库。修改变量后重新部署。

## 3. 设置管理员

1. 部署后，在网页右上角点击“登录 / 同步”。
2. 注册一个普通账号。
3. 登录后的账号窗口会显示用户 ID，复制这个 UUID。
4. 在 Netlify 环境变量中添加：

```text
ADMIN_USER_IDS=复制的用户ID
```

多个管理员用英文逗号分隔。更新变量后重新部署；再次打开账号窗口就会看到“进入投稿审核”。管理员身份绑定不可猜测的用户 ID，而不是容易被抢注的用户名。

## 4. 数据与权限

Netlify Blobs 中使用四个相互隔离的存储区：

- `reading-users`：用户名及密码哈希。
- `reading-user-data`：每位用户自己的文章和练习记录。
- `reading-submissions`：用户主动提交审核的文章。
- `reading-published`：所有访客可见的社区精选文章。

密码使用 Node.js `scrypt` 加盐哈希，服务端不会保存明文密码。登录 Cookie 设置为 HttpOnly、SameSite=Lax，在 HTTPS 环境中同时设置 Secure。

## 5. 当前限制

- 因为账号不绑定邮箱或手机号，忘记密码后无法自动找回。
- 退出登录不会删除浏览器原有的本机练习缓存；在公共电脑上建议使用浏览器隐私窗口。
- 当前存储方案适合小型教学网站。用户量和并发明显增长后，应迁移到带事务和行级权限的关系数据库。

## 用词生成短文

在“添加自己的文章”中输入词表或上传 UTF-8 TXT/CSV，选择中考或高考，生成后检查并保存。每次 3–30 个不同词条，以逗号、分号或换行分隔；CSV 仅支持纯词表，不含中文释义或表头。保存后使用原有朗读、生词标记、问答及账号同步功能。生成服务要求登录，每个用户/IP 每小时最多 10 次。

Netlify 服务端环境变量必须配置 `OPENAI_API_KEY` 和 `OPENAI_MODEL`（支持 JSON object 输出的 Chat Completions 模型），重新部署后生效。密钥不得写入前端。生成会把用户输入词条发送至 OpenAI；仅在用户点击保存后进入现有文章存储流程。纯静态服务器不能运行此接口，请使用 Netlify 部署或 Netlify CLI。本次未配置密钥时会明确提示服务未配置。

难度为教学近似，未逐词按官方课标限定。服务端检查中考 120–160 词/高考 180–240 词及全部目标词的原形覆盖；未通过检查会提示重试，不会保存不完整的生成结果。
