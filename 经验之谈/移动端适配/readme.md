#### umi 移动端适配
  - 基本方案: 
    - 使用 ```flexible.js``` 动态改变 ```font-size```
    - 使用 ```postcss-plugin-px2rem``` 自动完成 ```px - rem```

  - 使用方法:
    - flexible.js
  ```js 
      (function flexible(window, document) {
  const docEl = document.documentElement;
  const dpr = window.devicePixelRatio || 1;

  // adjust body font size
  function setBodyFontSize() {
    if (document.body) {
      document.body.style.fontSize = 12 * dpr + 'px';
    } else {
      document.addEventListener('DOMContentLoaded', setBodyFontSize);
    }
  }
  setBodyFontSize();

  // set 1rem = viewWidth / 10
  function setRemUnit() {
    const rem = docEl.clientWidth / 10;
    docEl.style.fontSize = rem + 'px';
  }

  setRemUnit();

  // reset rem unit on page resize
  window.addEventListener('resize', setRemUnit);
  window.addEventListener('pageshow', function(e) {
    if (e.persisted) {
      setRemUnit();
    }
  });

  // detect 0.5px supports
  if (dpr >= 2) {
    const fakeBody = document.createElement('body');
    const testElement = document.createElement('div');
    testElement.style.border = '.5px solid transparent';
    fakeBody.appendChild(testElement);
    docEl.appendChild(fakeBody);
    if (testElement.offsetHeight === 1) {
      docEl.classList.add('hairlines');
    }
    docEl.removeChild(fakeBody);
  }
})(window, document);

   ```
   - umi global.js 引入 flexible.js
   - umi config.js(配置文件) 引入 postcss插件
     - 插件文档 https://github.com/pigcan/postcss-plugin-px2rem
   ```
   yarn add postcss-plugin-px2rem --dev
   ```
   ```js
   import px2rem from 'postcss-plugin-px2rem';

  export default {
    extraPostCSSPlugins: [
      px2rem({
        rootValue: 75,
        unitPrecision: 10,
        exclude: /(node_module)/,
      }),
  ]}
   ```
  - 配置完成后、根据审计稿标注的 px 数值、直接写到对应元素上、不需要进行额外的计算。
