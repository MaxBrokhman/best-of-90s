(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{4:function(e,t,i){"use strict";i.r(t);var n=i(0),s=i(2),r=function(){function e(e,t){this.DEF_WIDTH=5,this.DEF_HEIGHT=5,this.link=e.link,this.renderer=t,this.texture=(new s.TextureLoader).load(e.img)}return e.prototype.init=function(){this.texture.minFilter=s.LinearMipMapLinearFilter;var e=this.renderer.capabilities.getMaxAnisotropy();this.texture.anisotropy=e;var t=new s.PlaneGeometry(this.DEF_WIDTH,this.DEF_HEIGHT),i=new s.MeshBasicMaterial({map:this.texture,depthWrite:!1,alphaTest:.5}),n=new s.Mesh(t,i);return n.link=this.link,n},e}(),a=function(){function e(e){this.meshes=[],this.usedMeshes=[],this.renderer=e}return e.prototype.init=function(){return n.a(this,void 0,void 0,function(){var e,t=this;return n.b(this,function(n){switch(n.label){case 0:return[4,i.e(1).then(i.bind(null,3))];case 1:return e=n.sent(),this.data=e.data,this.data.forEach(function(e){var i=new r(e,t.renderer).init();i.scale.set(1e-6,1e-6,1e-6),t.meshes.push(i)}),[2]}})})},e.prototype.render=function(e,t){0===this.meshes.length&&(this.meshes=this.usedMeshes.slice(),this.usedMeshes=[]);var i=this.meshes.shift();this.usedMeshes.push(i),t&&i.position.copy(t),e.add(i),this.animateScale(i)},e.prototype.hide=function(e,t){var i=this;return new Promise(function(n){i.animateScale(e).then(function(){t.remove(e),n()})})},e.prototype.animateScale=function(e){return new Promise(function(t){var i=new s.Clock,n=e.scale.x-1,r=-e.scale.x,a=function(){var s=i.getElapsedTime(),h=s/.8;if(s>=.8){t(!0),i=null;var o=Math.abs(n);e.scale.set(o,o,1e-6)}else{var u=Math.abs(r+h);e.scale.set(u,u,1e-6),requestAnimationFrame(a)}};a()})},e}();t.default=a}}]);
//# sourceMappingURL=gallery.bundle.js.map