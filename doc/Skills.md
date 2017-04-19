
# 如何添加新平台
1. 在platform文件夹下添加新的平台
2. 将新的平台文件添加到mainfest.json文件中
3. 修改appMain.js中`appmain.setPlatform(enumPlatformList.dreams);`，修改成新的平台
4.


# 开发知识点
## ContentScript使用
* 在ContentScript中**不可以**使用下面的api来获取background中的数据
  <pre><code>chrome.extension.getBackgroundPage</code></pre>
* 在ContentScript中**可以**用下面的api来获取设置项中保存的数据
  <pre><code>chrome.storage.sync.get</code></pre>
## api使用场景
* 在**popup**页和**option**页可以使用下面的api来获取到background中的值或者方法
  <pre><code>chrome.extension.getBackgroundPage</code></pre>

## 网页中如果包含iframe时
* 模拟点击的时候一定要注意处理是父窗口的元素还是iframe中的元素



