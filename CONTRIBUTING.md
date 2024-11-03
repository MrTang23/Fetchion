# Fetchion 贡献指南

感谢你对 **Fetchion** 项目的兴趣！我们欢迎各种形式的贡献。在提交代码或提出问题之前，请先花几分钟阅读以下内容，以确保大家能更好地协作。

## 目录
- [环境搭建](#环境搭建)
- [分支管理规范](#分支管理规范)
- [提交信息规范](#提交信息规范)
- [代码风格](#代码风格)
- [贡献流程](#贡献流程)
- [代码审查](#代码审查)
- [报告问题](#报告问题)
- [提交 Pull Request](#提交-pull-request)

---

## 环境搭建

1. **克隆项目到本地**
   ```bash
   git clone https://github.com/MrTang23/Fetchion.git
   cd Fetchion
   ```
2.	**安装依赖**  
   ```bash
   npm install
   ```
3.	**分支说明**
请在 develop 分支上进行开发。不要直接在 main 分支上提交代码。

## 分支管理规范

我们使用 Git Flow 工作流，分支命名规范如下：

- main: 稳定版本的主分支，通常不直接修改，发布正式版本时从 develop 合并到 main。
- develop: 开发分支，包含最新开发进度的代码。
- feature/xxx: 新功能分支，例如 feature/add-auth。
- bugfix/xxx: Bug 修复分支，例如 bugfix/fix-login。
- hotfix/xxx: 紧急修复分支（用于生产环境）例如 hotfix/fix-crash。

**注意**：请在 develop 分支基础上创建 feature 或 bugfix 分支，以便保持 main 和 develop 的代码稳定。

## 提交信息规范
规范的提交信息有助于维护清晰的项目历史。请使用以下格式：
```
<type>(<scope>): <subject>
```

## 提交类型

- feat: 新增功能
- fix: 修复 Bug
- docs: 修改文档
- style: 代码风格修改（不影响代码逻辑）
- refactor: 重构代码（不新增功能、不修复 Bug）
- test: 增加测试
- chore: 构建过程或辅助工具的变动

示例
```
feat(authentication): 增加用户登录功能
fix(api): 修复文件上传的路径错误
docs(readme): 更新使用说明
style(button): 调整按钮样式
```

## 代码风格

- 缩进：使用两个空格缩进。
- 引号：使用单引号 '。
- 分号：每行末尾添加分号。
- 空行：函数之间留空行，增加代码可读性。

当然可以！以下是整理后的 Markdown 格式：

## 贡献流程

1. **创建分支**：在 `develop` 分支的基础上创建你的功能或修复分支。
   ```bash
   git checkout develop
   git pull origin develop
   git checkout -b feature/your-feature-name
   ```

2. **编码开发**：在本地开发并完成相关的功能或修复。

3. **提交代码**：按照提交信息规范提交代码。
   ```bash
   git add .
   git commit -m "feat(your-scope): 描述你的改动"
   ```

4. **推送代码**：将分支推送到远程仓库。
   ```bash
   git push origin feature/your-feature-name
   ```

5. **创建 Pull Request**：在 GitHub 上创建 PR，描述你的更改及其原因。


## 代码审查

在你提交 PR 后，代码将接受审查。请确保：
- 遵守了项目的代码风格和规范。
- 已通过所有测试，确保没有引入新的问题。
- 对代码审查的反馈做出相应的修改并回复审查意见。

## 报告问题

如果你发现 Bug 或希望新增功能，请在 Issues 中创建新问题。
1. Bug 报告：请详细描述问题，并附上复现步骤和环境信息。
2. 新功能请求：简要描述你的需求场景和预期功能。

## 提交 Pull Request

- 单一功能：每个 PR 应该只包含一个独立的功能或修复，便于代码审查。
- 描述清晰：在 PR 描述中包括背景信息、功能点以及需要注意的细节。
- 关联 Issue：如有相关的 Issue，请在描述中引用，例如 Closes #10。

---

非常感谢你花时间阅读并遵循 Fetchion 的贡献指南！期待你的参与，一起让项目变得更好。

