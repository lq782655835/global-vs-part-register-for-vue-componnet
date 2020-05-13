# babel-import-demo

按需加载Demo

问题：在按需加载前提条件下，全局注册Componnets和多个页面局部注册Componnets对打包大小是否有影响？

过程实验：
1. 多个页面对a-button都是局部注册（源码中就是改方式），看最终打包大小
1. 对a-button全局注册，看最终打包大小

结果：app.js基本都是12k，chunk-vendors都是927k，一致。

结论：
1. 对于多页面共享组件，全局引入和局部引入都是一致的，对打包大小没有影响。
1. 在没有歧义情况下（知道局部组件的来源），推荐使用全局注册

分析原因：详细可看笔者[Vue源码分析系列 - 组件系统](https://lq782655835.github.io/blogs/vue/vue-code-5.component.html#%E6%B3%A8%E5%86%8C%E7%BB%84%E4%BB%B6)
* 注册组件，重点是把 components 合并到 vm.$options.components 上，这样我们就可以在 resolveAsset 的时候拿到这个组件的构造函数，方便后续创建。

* 局部注册和全局注册不同的是，只有该类型的组件才可以访问局部注册的子组件，而全局注册是扩展到 Vue.options 下，所以在所有组件创建的过程中，都会从全局的 Vue.options.components 扩展到当前组件的 vm.$options.components 下，这就是全局注册的组件能被任意使用的原因。
