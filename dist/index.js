"use strict";var u=function(r,e){return function(){try{return e||r((e={exports:{}}).exports,e),e.exports}catch(i){throw (e=0, i)}};};var v=u(function(w,q){
var E=require('@stdlib/math-base-assert-is-nanf/dist'),o=require('@stdlib/math-base-assert-is-infinitef/dist'),_=require('@stdlib/number-float32-base-normalize/dist').assign,d=require('@stdlib/number-float32-base-exponent/dist'),g=require('@stdlib/number-float32-base-to-word/dist'),l=require('@stdlib/number-float32-base-from-word/dist'),m=require('@stdlib/number-float64-base-to-float32/dist'),A=2155872255,S=1056964608,f=[0,0];function X(r,e,i,a){var n,s;return r=m(r),r===0||E(r)||o(r)?(e[a]=r,e[a+i]=0,e):(_(r,f,1,0),s=d(f[0])+f[1]+1,n=g(f[0]),n&=A,n|=S,r=l(n),e[a]=r,e[a+i]=s,e)}q.exports=X
});var p=u(function(x,t){
var K=v();function M(r){return K(r,[0,0],1,0)}t.exports=M
});var P=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),c=p(),R=v();P(c,"assign",R);module.exports=c;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
