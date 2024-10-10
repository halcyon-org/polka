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

## コマンドの操作

### ローカルサーバーの起動

```bash
pnpm dev
```

### Storybookの起動

Storybook(Component単位で表示ができるカタログ)を起動します

```bash
pnpm storybook
```

### テストの実行

ロジックを含むコードのテストを実行します

```bash
pnpm test
```

## Gitの操作

### ブランチの作成

新しい機能やバグ修正のためにブランチを作成します。

```bash
git checkout -b feature/your-feature-name
```

### コードの変更

必要なコードの変更を行います。変更が完了したら、変更をステージングしてコミットします。
コミットメッセージは、[Conventional Commits](https://www.conventionalcommits.org/ja/v1.0.0/)のフォーマットに従ってください。

```bash
git add .
git commit -m "Add your commit message here"
```

### プッシュ

変更をリモートリポジトリにプッシュします。

```bash
git push origin feature/your-feature-name
```

### プルリクエストの作成

GitHub上でプルリクエストを作成し、変更をレビューしてもらいます。プルリクエストには、変更内容の詳細な説明を含めてください。

### コードレビュー

他の開発者からのフィードバックを受け取り、必要に応じて変更を行います。すべてのレビューコメントに対応したら、プルリクエストをマージします。
