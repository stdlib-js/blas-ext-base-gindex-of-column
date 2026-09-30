"use strict";var k=function(u,a){return function(){try{return a||u((a={exports:{}}).exports,a),a.exports}catch(o){throw (a=0, o)}};};var j=k(function(X,O){
var z=require('@stdlib/ndarray-base-assert-is-column-major/dist'),B=require('@stdlib/array-base-ones/dist');function G(u,a,o,n,e,q,l,t,f){var s,x,C,c,p,g,h,r,v,m,b,i,y;if(x=o.data,C=l.data,c=o.accessors[0],p=l.accessors[0],z([n,e])){for(r=u,v=a,y=0;y<v;y++){for(m=q+y*e,b=f,i=0;i<r&&c(x,m)===p(C,b);i++)m+=n,b+=t;if(i===r)return y}return-1}for(r=a,v=u,g=e,h=n-r*e,s=B(a),m=q,b=f,y=0;y<v;y++){for(i=0;i<r;i++)c(x,m)!==p(C,b)&&(s[i]=0),m+=g;m+=h,b+=t}for(i=0;i<r&&s[i]!==1;i++);return i===r?-1:i}O.exports=G
});var w=k(function(A,d){
var H=require('@stdlib/ndarray-base-assert-is-column-major/dist'),S=require('@stdlib/array-base-arraylike2object/dist'),I=require('@stdlib/array-base-ones/dist'),J=j();function K(u,a,o,n,e,q,l,t,f){var s,x,C,c,p,g,h,r,v,m,b;if(u<=0||a<=0)return-1;if(m=S(o),b=S(l),m.accessorProtocol||b.accessorProtocol)return J(u,a,m,n,e,q,b,t,f);if(H([n,e])){for(c=u,p=a,v=0;v<p;v++){for(g=q+v*e,h=f,r=0;r<c&&o[g]===l[h];r++)g+=n,h+=t;if(r===c)return v}return-1}for(c=a,p=u,x=e,C=n-c*e,s=I(a),g=q,h=f,v=0;v<p;v++){for(r=0;r<c;r++)o[g]!==l[h]&&(s[r]=0),g+=x;g+=C,h+=t}for(r=0;r<c&&s[r]!==1;r++);return r===c?-1:r}d.exports=K
});var F=k(function(rr,E){
var Q=require('@stdlib/blas-base-layout-resolve-str/dist'),U=require('@stdlib/ndarray-base-assert-is-row-major-string/dist'),W=require('@stdlib/strided-base-stride2offset/dist'),Y=require('@stdlib/math-base-special-fast-max/dist'),R=require('@stdlib/error-tools-fmtprodmsg/dist'),Z=w();function _(u,a,o,n,e,q,l){var t,f,s,x;if(x=Q(u),x===null)throw new TypeError(R('2fpFx',u));if(U(x)?(s=o,t=e,f=1):(s=a,t=1,f=e),e<Y(1,s))throw new RangeError(R('2fpIR',s,e));return Z(a,o,n,t,f,0,q,l,W(a,l))}E.exports=_
});var V=k(function(ar,P){
var $=w();function L(u,a,o,n,e,q,l,t,f){return $(u,a,o,n,e,q,l,t,f)}P.exports=L
});var D=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),T=F(),M=V();D(T,"ndarray",M);module.exports=T;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
