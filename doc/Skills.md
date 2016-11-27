# 开发知识点
## ContentScript使用
* 在ContentScript中**不可以**使用下面的api来获取background中的数据
  <pre><code>chrome.extension.getBackgroundPage</code></pre>
* 在ContentScript中**可以**用下面的api来获取设置项中保存的数据
  <pre><code>chrome.storage.sync.get</code></pre>
## api使用场景
* 在**popup**页和**option**页可以使用下面的api来获取到background中的值或者方法
  <pre><code>chrome.extension.getBackgroundPage</code></pre>



