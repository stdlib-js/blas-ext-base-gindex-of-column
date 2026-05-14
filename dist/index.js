"use strict";var j=function(u,a){return function(){return a||u((a={exports:{}}).exports,a),a.exports}};var O=j(function(A,w){
var z=require('@stdlib/ndarray-base-assert-is-column-major/dist'),B=require('@stdlib/array-base-ones/dist');function G(u,a,c,v,e,q,l,n,t){var s,p,y,f,C,x,b,r,o,m,g,i,h;if(p=c.data,y=l.data,f=c.accessors[0],C=l.accessors[0],z([v,e])){for(r=u,o=a,h=0;h<o;h++){for(m=q+h*e,g=t,i=0;i<r&&f(p,m)===C(y,g);i++)m+=v,g+=n;if(i===r)return h}return-1}for(r=a,o=u,x=e,b=v-r*e,s=B(a),m=q,g=t,h=0;h<o;h++){for(i=0;i<r;i++)f(p,m)!==C(y,g)&&(s[i]=0),m+=x;m+=b,g+=n}for(i=0;i<r&&s[i]!==1;i++);return i===r?-1:i}w.exports=G
});var k=j(function(rr,R){
var H=require('@stdlib/ndarray-base-assert-is-column-major/dist'),S=require('@stdlib/array-base-arraylike2object/dist'),I=require('@stdlib/array-base-ones/dist'),J=O();function K(u,a,c,v,e,q,l,n,t){var s,p,y,f,C,x,b,r,o,m,g;if(u<=0||a<=0)return-1;if(m=S(c),g=S(l),m.accessorProtocol||g.accessorProtocol)return J(u,a,m,v,e,q,g,n,t);if(H([v,e])){for(f=u,C=a,o=0;o<C;o++){for(x=q+o*e,b=t,r=0;r<f&&c[x]===l[b];r++)x+=v,b+=n;if(r===f)return o}return-1}for(f=a,C=u,p=e,y=v-f*e,s=I(a),x=q,b=t,o=0;o<C;o++){for(r=0;r<f;r++)c[x]!==l[b]&&(s[r]=0),x+=p;x+=y,b+=n}for(r=0;r<f&&s[r]!==1;r++);return r===f?-1:r}R.exports=K
});var P=j(function(ar,F){
var Q=require('@stdlib/blas-base-assert-is-layout/dist'),U=require('@stdlib/ndarray-base-assert-is-row-major-string/dist'),W=require('@stdlib/ndarray-base-assert-is-column-major-string/dist'),Y=require('@stdlib/strided-base-stride2offset/dist'),Z=require('@stdlib/math-base-special-fast-max/dist'),E=require('@stdlib/error-tools-fmtprodmsg/dist'),_=k();function $(u,a,c,v,e,q,l){var n,t,s;if(!Q(u))throw new TypeError(E('nullFx',u));if(U(u)?s=c:s=a,e<Z(1,s))throw new RangeError(E('nullIR',s,e));return W(u)?(n=1,t=e):(n=e,t=1),_(a,c,v,n,t,0,q,l,Y(a,l))}F.exports=$
});var d=j(function(er,V){
var L=k();function M(u,a,c,v,e,q,l,n,t){return L(u,a,c,v,e,q,l,n,t)}V.exports=M
});var D=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),T=P(),N=d();D(T,"ndarray",N);module.exports=T;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
