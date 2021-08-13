(this.webpackJsonptemplate=this.webpackJsonptemplate||[]).push([[0],{15:function(t,e,n){},16:function(t,e,n){},22:function(t,e,n){"use strict";n.r(e);var a=n(2),c=n.n(a),s=n(9),r=n.n(s),i=(n(15),n(10)),o=n(1),b=n(3),l=n(4),u=n(6),h=n(5),d=(n(16),n(0)),j=function(t){Object(u.a)(n,t);var e=Object(h.a)(n);function n(){var t;Object(b.a)(this,n);for(var a=arguments.length,c=new Array(a),s=0;s<a;s++)c[s]=arguments[s];return(t=e.call.apply(e,[this].concat(c))).handleIncrement=function(){t.props.onIncrement(t.props.habit)},t.handleDecrement=function(){t.props.onDecrement(t.props.habit)},t.handleDelete=function(){t.props.onDelete(t.props.habit)},t}return Object(l.a)(n,[{key:"render",value:function(){var t=this.props.habit,e=t.name,n=t.count;return Object(d.jsxs)("li",{className:"habit",children:[Object(d.jsx)("span",{className:"habit-name",children:e}),Object(d.jsx)("span",{className:"habit-count",children:n}),Object(d.jsx)("button",{className:"habit-button habit-increase",onClick:this.handleIncrement,children:Object(d.jsx)("i",{className:"fas fa-plus-square"})}),Object(d.jsx)("button",{className:"habit-button habit-decrease",onClick:this.handleDecrement,children:Object(d.jsx)("i",{className:"fas fa-minus-square"})}),Object(d.jsx)("button",{className:"habit-button habit-delete",onClick:this.handleDelete,children:Object(d.jsx)("i",{className:"fas fa-trash"})})]})}}]),n}(a.PureComponent),m=function(t){var e=c.a.createRef(),n=c.a.createRef();return Object(d.jsxs)("form",{ref:n,className:"add-form",onSubmit:function(a){a.preventDefault(),e.current.value&&t.onAddHabit(e.current.value),n.current.reset()},children:[Object(d.jsx)("input",{type:"text",className:"add-input",placeholder:"Habit",ref:e}),Object(d.jsx)("button",{className:"add-button",children:"Add"})]})},p=Object(a.memo)(m),O=function(t){Object(u.a)(n,t);var e=Object(h.a)(n);function n(){var t;Object(b.a)(this,n);for(var a=arguments.length,c=new Array(a),s=0;s<a;s++)c[s]=arguments[s];return(t=e.call.apply(e,[this].concat(c))).handleIncrement=function(e){t.props.onIncrement(e)},t.handleDecrement=function(e){t.props.onDecrement(e)},t.handleDelete=function(e){t.props.onDelete(e)},t.handleAddHabit=function(e){t.props.onAddHabit(e)},t}return Object(l.a)(n,[{key:"render",value:function(){var t=this;return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(p,{onAddHabit:this.handleAddHabit}),Object(d.jsx)("ul",{children:this.props.habits.map((function(e){return Object(d.jsx)(j,{habit:e,onIncrement:t.handleIncrement,onDecrement:t.handleDecrement,onDelete:t.handleDelete},e.id)}))}),Object(d.jsx)("button",{className:"habits-reset",onClick:this.props.onReset,children:"Reset All"})]})}}]),n}(a.Component),f=function(t){Object(u.a)(n,t);var e=Object(h.a)(n);function n(){return Object(b.a)(this,n),e.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return Object(d.jsxs)("header",{className:"navbar",children:[Object(d.jsx)("i",{className:"fas fa-leaf navbar-logo"}),Object(d.jsx)("span",{children:"Habit Tracker"}),Object(d.jsx)("span",{className:"navbar-count",children:this.props.totalCount})]})}}]),n}(a.PureComponent),v=function(t){Object(u.a)(n,t);var e=Object(h.a)(n);function n(){var t;Object(b.a)(this,n);for(var a=arguments.length,c=new Array(a),s=0;s<a;s++)c[s]=arguments[s];return(t=e.call.apply(e,[this].concat(c))).state={habits:[{id:1,name:"Reading",count:0},{id:2,name:"Running",count:0},{id:3,name:"Coding",count:0}],totalCount:3},t.handleIncrement=function(e){var n=t.state.habits.map((function(t){return t.id===e.id?Object(o.a)(Object(o.a)({},e),{},{count:e.count+1}):t}));t.setState(Object(o.a)(Object(o.a)({},t.state),{},{habits:n}))},t.handleDecrement=function(e){var n=t.state.habits.map((function(t){return t.id===e.id?Object(o.a)(Object(o.a)({},e),{},{count:e.count-1<=0?0:e.count-1}):t}));t.setState(Object(o.a)(Object(o.a)({},t.state),{},{habits:n}))},t.handleDelete=function(e){var n=t.state.habits.filter((function(t){return t.id!==e.id}));t.setState(Object(o.a)(Object(o.a)({},t.state),{},{habits:n}))},t.handleAddHabit=function(e){var n={id:t.state.totalCount+1,name:e,count:0},a=Object(i.a)(t.state.habits).concat(n);console.log(a),t.setState(Object(o.a)(Object(o.a)({},t.state),{},{habits:a,totalCount:t.state.totalCount+1}))},t.handleReset=function(){var e=t.state.habits.map((function(t){return 0!==t.count?Object(o.a)(Object(o.a)({},t),{},{count:0}):t}));t.setState(Object(o.a)(Object(o.a)({},t.state),{},{habits:e}))},t}return Object(l.a)(n,[{key:"render",value:function(){return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(f,{totalCount:this.state.habits.filter((function(t){return t.count>0})).length}),Object(d.jsx)(O,{habits:this.state.habits,onIncrement:this.handleIncrement,onDecrement:this.handleDecrement,onDelete:this.handleDelete,onAddHabit:this.handleAddHabit,onReset:this.handleReset})]})}}]),n}(a.Component);n(18);r.a.render(Object(d.jsx)(c.a.StrictMode,{children:Object(d.jsx)(v,{})}),document.getElementById("root"))}},[[22,1,2]]]);
//# sourceMappingURL=main.d65e1999.chunk.js.map