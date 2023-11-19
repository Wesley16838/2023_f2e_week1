# The F2E 立委競選官網  | [Demo](https://2023-f2e-week1.vercel.app/en-US)

## 作品畫面

![The F2E 全台公車動態時刻查詢應用服務畫面](https://i.imgur.com/hNh7FuE.png)
## 作品說明

設計採用 [Yu](https://2023.thef2e.com/users/12061579704045424141) 的設計稿

The F2E 立委競選官網，一位正準備競選的立委候選人，需要好的形象官網，為他塑造好的形象

## 系統說明

本專案使用 `npx create-next-app@latest` ，並部署到 Vercel，運行方式使用 `npm install` 下載依賴包， `npm run dev` 運行

- Next 版本 `v16.4.2`
- React 版本 `v17.0.2`

## 資料夾說明

```
|- /src
    |- /components：共用元件
    |- /constants：共用元件，如 Enum
    |- /pages：頁面
    |- /context：狀態管理
    |- /fonts：字體管理
    |- /hooks：Custom Hooks
    |- /styles：各元件和頁面的style
    |- /types：各元件和頁面的type
|- /public
    |- /_l18n：多語系
    |- /assets：Icon 與 Image
```

## 使用技術

- NextJS
- TypeScript
- SCSS