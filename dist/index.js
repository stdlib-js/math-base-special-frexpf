"use strict";var u=function(r,e){return function(){return e||r((e={exports:{}}).exports,e),e.exports}};var f=u(function(w,q){
var E=require('@stdlib/math-base-assert-is-nanf/dist'),o=require('@stdlib/math-base-assert-is-infinitef/dist'),_=require('@stdlib/number-float32-base-normalize/dist').assign,d=require('@stdlib/number-float32-base-exponent/dist'),g=require('@stdlib/number-float32-base-to-word/dist'),l=require('@stdlib/number-float32-base-from-word/dist'),m=require('@stdlib/number-float64-base-to-float32/dist'),A=2155872255,S=1056964608,n=[0,0];function X(r,e,v,i){var a,s;return r=m(r),r===0||E(r)||o(r)?(e[i]=r,e[i+v]=0,e):(_(r,n,1,0),s=d(n[0])+n[1]+1,a=g(n[0]),a&=A,a|=S,r=l(a),e[i]=r,e[i+v]=s,e)}q.exports=X
});var p=u(function(x,t){
var K=f();function M(r){return K(r,[0,0],1,0)}t.exports=M
});var P=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),c=p(),R=f();P(c,"assign",R);module.exports=c;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
