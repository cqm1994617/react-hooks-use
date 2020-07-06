### 1. React判断一个组件是function还是class
class定义的组件继承自React.Component，它拥有一个特定属性，只要检测这个属性是否存在便可判断。

### 2. Element和Component的区别
一句话概括：Element是Component的返回值。Element就是一个纯对象，里面定义了一些如type、children、props、type、key这些重要的属性。
你可以通过React.isValidElement方法来判断该元素是否为React Element。

### 3. JSX是什么？
JSX是一个JavaScript的语法扩展，可以对UI进行一个很好的描述。
JSX会在编译时被Babel编译为React.createElement方法。所以因此，你在编写JSX的时候也必须要引入React。
不过JSX也并不只能被编译为React.createElement方法，也可以通过@babel/plugin-transform-react-jsx
插件显示告知Babel，在编译时需要将JSX编译为什么函数的调用。

### 4. React中你定义的组件为什么要大写
jsx到js的转换需要用到React的createElement方法。
如果是小写开头，会被createElement以处理HTML标签的方式去处理，因而报错。

### 思考题

```
const Test = <p>Wow</p>;

render() {
	return (
	  <div><Test /><div>
	)
}

```

以上代码会报错。原因如下：
``<Test />`` 其实是一个语法糖，最终会转变为React.createElement(type, props, children)

其中type就代表了Test

而在createElement这个方法中，如果type是一个字符串，那么就会按HTML标签来处理，如果type是function/class，那么会判断这是一个组件。而React.createElement返回的是一个对象，也就是此时type为object，自然就报错了。


### 5. React15和16在架构上的区别
React15在架构上分为Reconciler、Renderer
React16则分为Scheduler、Reconciler、Renderer
其中Reconciler代表协调器，负责找出变化的组件。Renderer代表渲染器，将变化的组件渲染到页面上。
React16新增了Scheduler，负责调度任务的优先级，高优先级任务有限进入Reconciler。

### 6. React15和16的更新过程
React15: 递归更新，无法中断。Reconciler和Renderer交替工作，当Reconciler找到变化后，通知Renderer去更新DOM。
之后Reconciler再去查找下一个变化，并通知Renderer。所以如果中途中断更新，你会看到你的页面只更新了一部分的DOM。
React16: 循环更新，可中断。
Scheduler接收到更新，先会查找有无更高优先级任务，若无则交给Reconciler处理。
Reconciler接收到更新后，不再与Renderer交替工作，而是先会在需要更新的VDOM上打上一个标记，用来代表它需要增/删/改。
以上两步可能被更高优先级的任务打断，也可能出现该任务更新时间过长，当前这一帧时间完不成更新而先中断。
由于都是操作VDOM，不涉及真实DOM的更新，即使中断了用户也不会看见更新不完全的的DOM。
最后在Reconciler判断没有所有变化已经处理完成后，会将打了标记的VDOM交给Renderer来处理更新DOM的操作。

### 7. setState和useState