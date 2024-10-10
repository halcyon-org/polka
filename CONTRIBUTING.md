# Contributing guidelines

## 環境構築

以下の手順は、全てLinux(WSL)での操作を前提としています

### [Volta](https://volta.sh/)のインストール

[Volta Getting Started](https://docs.volta.sh/guide/getting-started/)より

VoltaはNode.jsやpnpmなどのツールを管理するためのツールです

インストールコマンド

```bash
curl https://get.volta.sh | bash
```

インストール後、`exit`コマンドなどをしてシェルにログインし直してください

### Node.jsのインストール

```bash
volta install node@v20.18.0
```

### pnpmのインストール

```bash
volta install pnpm
pnpm self-update
```

### リポジトリのクローン

```bash
git clone https://github.com/halcyon-org/polka.git
```

### 依存関係のインストール

依存しているライブラリをとってきます。

```bash
pnpm install
```
