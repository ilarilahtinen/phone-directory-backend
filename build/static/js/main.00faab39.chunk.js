(this["webpackJsonptelephone-directory"]=this["webpackJsonptelephone-directory"]||[]).push([[0],{11:function(e,t,n){e.exports=n(34)},34:function(e,t,n){"use strict";n.r(t);var s=n(0),a=n.n(s),i=n(10),o=n.n(i);class r extends a.a.Component{render(){return a.a.createElement("p",{key:this.props.item.id},this.props.item.name," ",this.props.item.number," ",a.a.createElement("button",{onClick:this.props.removeItem},"poista"))}}var h=r;class m extends a.a.Component{render(){return this.props.persons.map((e,t)=>a.a.createElement(h,{key:e.id,item:e,removeItem:this.props.removeItem(e.id,e.name)}))}}var l=m;class p extends a.a.Component{render(){return"text"===this.props.item.type?a.a.createElement("div",null,this.props.item.name,": ",a.a.createElement("input",{value:this.props.item.value,onChange:this.props.item.change})):"submit"===this.props.item.type?a.a.createElement("div",null,a.a.createElement("button",{type:"submit"},this.props.item.name)):void 0}}var c=p;class d extends a.a.Component{render(){return this.props.inputs.map(e=>a.a.createElement(c,{key:e.name,item:e}))}}var u=d;class v extends a.a.Component{render(){return a.a.createElement("form",{onSubmit:this.props.conf.submit},a.a.createElement(u,{inputs:this.props.conf.inputs}))}}var b=v,g=n(2),C=n.n(g);const w="/api/persons";class E extends a.a.Component{constructor(e){super(e),this.state={persons:[],newName:"",newPhone:""},this.handleNameChange=this.handleNameChange.bind(this),this.handlePhoneChange=this.handlePhoneChange.bind(this),this.handleSubmit=this.handleSubmit.bind(this),this.deleteContact=this.deleteContact.bind(this)}handleNameChange(e){this.setState({newName:e.target.value})}handlePhoneChange(e){this.setState({newPhone:e.target.value})}deleteContact(e,t){return()=>{window.confirm("Poistetaanko ".concat(t))&&C.a.delete("".concat(w,"/").concat(e)).then(t=>{this.setState({persons:this.state.persons.filter(t=>t.id!==e)})}).catch(e=>{console.log(e)})}}handleSubmit(e){if(e.preventDefault(),this.state.persons.map(e=>e.name).indexOf(this.state.newName)>-1||!this.state.newName||!this.state.newPhone)alert("Tyhji\xe4 kentti\xe4 tai nimi on jo listalla");else{let e={name:this.state.newName,number:this.state.newPhone,id:this.state.persons[this.state.persons.length-1].id+1};C.a.post(w,e).then(e=>{this.setState({persons:[...this.state.persons,e.data],newName:"",newPhone:""})}).catch(e=>{console.log(e)})}}componentDidMount(){C.a.get(w).then(e=>this.setState({persons:e.data})).catch(e=>{console.log(e)})}render(){let e={submit:this.handleSubmit,inputs:[{name:"nimi",value:this.state.newName,change:this.handleNameChange,type:"text"},{name:"puhelin",value:this.state.newPhone,change:this.handlePhoneChange,type:"text"},{name:"lis\xe4\xe4",type:"submit"}]};return a.a.createElement("div",null,a.a.createElement("h2",null,"Puhelinluettelo"),a.a.createElement(b,{conf:e}),a.a.createElement("h2",null,"Numerot"),a.a.createElement(l,{persons:this.state.persons,removeItem:this.deleteContact}))}}var y=E;o.a.render(a.a.createElement(y,null),document.getElementById("root"))}},[[11,1,2]]]);
//# sourceMappingURL=main.00faab39.chunk.js.map