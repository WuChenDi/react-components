# react-components

## 📖 简介

react-components 属于前端基础组件库项目，可使用于所有项目。

使用 React+TypeScript+StoryBook 开发 npm 组件，可发布至公司内部私有 npm 库中使用

## 🔧 开始使用

```jsx
import { Button } from 'xxx-ui'

const renderButton = () => (
  <>
    <Button btnType='primary'> primary button </Button>
    <Button btnType='danger'> danger button </Button>
    <Button btnType='link' href='https://github.com/WuChenDi'>
      link github
    </Button>
  </>
)
```

## 🤝 参与共建

如果您对这个项目感兴趣，欢迎提 pull request，也欢迎 "Star" 支持一下 ^\_^

## 🚗 本地运行

1、克隆项目

```bash
git clone https://github.com/WuChenDi/react-components.git
```

2、安装依赖

```bash
yarn
```

3、运行项目

```bash
yarn start # 访问 http://localhost:6006
```

## 👀 项目效果图

![](/screenshots/index.png)
