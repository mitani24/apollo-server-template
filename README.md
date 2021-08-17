# apollo-server-template

[Apollo Server](https://www.apollographql.com/docs/apollo-server/) の素振り環境

## インストール

```sh
yarn install
```

## リソルバーの型生成

`graphql/schema.graphql` から `src/gen/graphql-resolver-types.ts` を生成します。

```sh
yarn codegen
```

## API の起動

```sh
yarn api
```

## Apollo Server の起動

```sh
yarn start
```

ホットリロードする場合

```sh
yarn dev
```
