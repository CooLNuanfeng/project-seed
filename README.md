# project-seed
Vue+webpack+es6 种子项目


## 概览
- 开发目录
```
    src: 
        ├─assets
        |   └─style      (测试用，以后会分离到,common文件中)
        |       ├─base.css  
        |       └─base.less   
        |
        ├─pages
        |   ├─index
        |   |   ├─main.js
        |   |   ├─router
        |   |   ├─components
        |   |   └─index.vue
        |   |
        |   ├─page1   (暂时为空，尚未加入vuex)
        |   |   ├─main.js
        |   |   ├─router
        |   |   ├─components
        |   |   ├─index.vue
        |   |   └─store (vuex 可选)
        |   |       ├─action.js
        |   |       ├─index.js
        |   |       └─mutations.js
        |   |
        |   ├─page2          //单页只有html的页面
        |   |   ├─main.js
        |   |   └─index.vue
        |   ├─ ...
        |
        └─components        //存放页面中共用的组件，包括了公共的
            ├─footer.vue
            └─header.vue
 
 外层common:

        ├─assets
        |   ├─style
        |   |   ├─base.css  
        |   |   ├─...
        |   |  
        |   └─js      
        |       ├─base.js  
        |       ├─...
        |   
        └─template
            └─index.html
```

- 打包后目录
```
    dist:
        |
        ├─index.html
        |
        ├─index
        |   ├─css
        |   └─js 
        |
        ├─page1
        |   ├─css
        |   ├─js
        |   └─index.html
        |
        ├─page2
        |   ├─css
        |   ├─js
        |   └─index.html
        |
        └─vendor
            └─js

```

## 使用步骤

1. 安装依赖包

```javascript
    npm install 
```
2. 使用dev-server开发

``` javascript
    npm run dev
```

3. 打包发布

``` javascript
    npm run build
``` 


## 有待完善

1. 加入图片支持
1. ES6支持 babel配置
1. 将vendor文件夹，放入子项目目录下
1. 将base.js、base.css全部放入common文件夹中
1. 将添加一个工程需要配置的项目，单独出一个文件，直接添加修改
1. vuex支持



