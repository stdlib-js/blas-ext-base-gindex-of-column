"use strict";var j=function(u,a){return function(){try{return a||u((a={exports:{}}).exports,a),a.exports}catch(o){throw (a=0, o)}};};var O=j(function(A,w){
var z=require('@stdlib/ndarray-base-assert-is-column-major/dist'),B=require('@stdlib/array-base-ones/dist');function G(u,a,o,n,e,q,l,t,s){var f,p,y,c,C,x,b,r,v,m,g,i,h;if(p=o.data,y=l.data,c=o.accessors[0],C=l.accessors[0],z([n,e])){for(r=u,v=a,h=0;h<v;h++){for(m=q+h*e,g=s,i=0;i<r&&c(p,m)===C(y,g);i++)m+=n,g+=t;if(i===r)return h}return-1}for(r=a,v=u,x=e,b=n-r*e,f=B(a),m=q,g=s,h=0;h<v;h++){for(i=0;i<r;i++)c(p,m)!==C(y,g)&&(f[i]=0),m+=x;m+=b,g+=t}for(i=0;i<r&&f[i]!==1;i++);return i===r?-1:i}w.exports=G
});var k=j(function(rr,R){
var H=require('@stdlib/ndarray-base-assert-is-column-major/dist'),S=require('@stdlib/array-base-arraylike2object/dist'),I=require('@stdlib/array-base-ones/dist'),J=O();function K(u,a,o,n,e,q,l,t,s){var f,p,y,c,C,x,b,r,v,m,g;if(u<=0||a<=0)return-1;if(m=S(o),g=S(l),m.accessorProtocol||g.accessorProtocol)return J(u,a,m,n,e,q,g,t,s);if(H([n,e])){for(c=u,C=a,v=0;v<C;v++){for(x=q+v*e,b=s,r=0;r<c&&o[x]===l[b];r++)x+=n,b+=t;if(r===c)return v}return-1}for(c=a,C=u,p=e,y=n-c*e,f=I(a),x=q,b=s,v=0;v<C;v++){for(r=0;r<c;r++)o[x]!==l[b]&&(f[r]=0),x+=p;x+=y,b+=t}for(r=0;r<c&&f[r]!==1;r++);return r===c?-1:r}R.exports=K
});var P=j(function(ar,F){
var Q=require('@stdlib/blas-base-assert-is-layout/dist'),U=require('@stdlib/ndarray-base-assert-is-row-major-string/dist'),W=require('@stdlib/ndarray-base-assert-is-column-major-string/dist'),Y=require('@stdlib/strided-base-stride2offset/dist'),Z=require('@stdlib/math-base-special-fast-max/dist'),E=require('@stdlib/error-tools-fmtprodmsg/dist'),_=k();function $(u,a,o,n,e,q,l){var t,s,f;if(!Q(u))throw new TypeError(E('2fpFx',u));if(U(u)?f=o:f=a,e<Z(1,f))throw new RangeError(E('2fpIR',f,e));return W(u)?(t=1,s=e):(t=e,s=1),_(a,o,n,t,s,0,q,l,Y(a,l))}F.exports=$
});var d=j(function(er,V){
var L=k();function M(u,a,o,n,e,q,l,t,s){return L(u,a,o,n,e,q,l,t,s)}V.exports=M
});var D=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),T=P(),N=d();D(T,"ndarray",N);module.exports=T;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
