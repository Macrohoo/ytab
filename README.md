#### 一、SvgIcon组件 svg雪碧图全局使用
`<SvgIcon name="osx" style="font-size: 40px"></SvgIcon>`

#### 二、AntdSvg组件 anticon图标库封装全局使用   支持[antdesign](https://www.antdv.com/components/icon-cn)的icon组件原生参数rotate、spin、style、twoToneColor
###### ❗️注意 name需要驼峰且首字母大写
`<AntdIcon :name="'HomeOutlined'" :style="'font-size: 40px'" :spin="true"></AntdIcon>`

-----------------------

Vue3相关知识点补充：
#### 一、`<router-view>'s v-slot`
`<router-view>` 暴露了一个 v-slot API，主要使用 `<transition>` 和 `<keep-alive>` 组件来包裹你的路由组件。
```html
<router-view v-slot="{ Component, route }">
  <transition :name="route.meta.transition || 'fade'" mode="out-in">
    <keep-alive>
      <suspense>
        <template #default>
          <component
            :is="Component"
            :key="route.meta.usePathKey ? route.path : undefined"
          />
        </template>
        <template #fallback> Loading... </template>
      </suspense>
    </keep-alive>
  </transition>
</router-view>
```
v-slot 中解构的Component: VNodes to be passed to a <component>'s is prop.

###### ❗️注意：Note you should be passing View components' props directly to the `<component>` rather than the `<router-view>`:
```html
<router-view v-slot="{ Component, route }">
  <component :is="Component" view-prop="value" />
</router-view>
```

#### 二、useRoute 和 useRouter
useRoute：返回当前路由地址。相当于在模板中使用 $route。必须在 setup() 中调用
useRouter：返回 router 实例。相当于在模板中使用 $router。必须在 setup() 中调用。

#### 三、`<router-link>`标签
`<router-link>` 组件支持用户在具有路由功能的应用中（点击）导航。 通过 to 属性指定目标地址，默认渲染成带有正确链接的 `<a>` 标签，可以通过配置 tag 属性生成别的标签.。另外，当目标路由成功激活时，链接元素自动设置一个表示激活的 CSS 类名。

`<router-link>` 比起写死的 `<a href="...">` 会好一些，理由如下：

无论是 HTML5 history 模式还是 hash 模式，它的表现行为一致，所以，当你要切换路由模式，
在 HTML5 history 模式下，router-link 会拦截点击事件，让浏览器不在重新加载页面。
当你在 HTML5 history 模式下使用 base 选项之后，所有的 to 属性都不需要写（基路径）了。

Ts知识点补充：
#### 一、const断言
`const x = { text: "hello" } as const;`
TypeScript 3.4 引入了一个名为 const 断言的字面值的新构造。它的语法是一个类型断言，用 const 代替类型名称（例如 123 as const）断言构造新的文字表达式时，我们可以向语言发出以下信号：
该表达式中的字面类型不应被扩展（例如：不能从“hello”转换为字符串）

例子：CountActions 是这两个接口的联合。
```typescript
const setCount = (n: number) => {
  return <const>{
    type: 'SET_COUNT',
    payload: n
  }
}

const resetCount = () => {
  return <const>{
    type: 'RESET_COUNT'
  }
}

type CountActions = ReturnType<typeof setCount> | ReturnType<typeof resetCount>;

```
我们从 action creator 函数 setCount 和 resetCount 的返回类型中推断出一个很好的 action 联合。


