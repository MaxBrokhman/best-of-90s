!function(e){function t(t){for(var r,n,o=t[0],a=t[1],s=0,h=[];s<o.length;s++)n=o[s],Object.prototype.hasOwnProperty.call(i,n)&&i[n]&&h.push(i[n][0]),i[n]=0;for(r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r]);for(c&&c(t);h.length;)h.shift()()}var r={},i={3:0};function n(t){if(r[t])return r[t].exports;var i=r[t]={i:t,l:!1,exports:{}};return e[t].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.e=function(e){var t=[],r=i[e];if(0!==r)if(r)t.push(r[2]);else{var o=new Promise(function(t,n){r=i[e]=[t,n]});t.push(r[2]=o);var a,s=document.createElement("script");s.charset="utf-8",s.timeout=120,n.nc&&s.setAttribute("nonce",n.nc),s.src=function(e){return n.p+""+({0:"vendors~gallery~three",1:"data",2:"gallery"}[e]||e)+".bundle.js"}(e);var c=new Error;a=function(t){s.onerror=s.onload=null,clearTimeout(h);var r=i[e];if(0!==r){if(r){var n=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;c.message="Loading chunk "+e+" failed.\n("+n+": "+o+")",c.name="ChunkLoadError",c.type=n,c.request=o,r[1](c)}i[e]=void 0}};var h=setTimeout(function(){a({type:"timeout",target:s})},12e4);s.onerror=s.onload=a,document.head.appendChild(s)}return Promise.all(t)},n.m=e,n.c=r,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(r,i,function(t){return e[t]}.bind(null,i));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n.oe=function(e){throw console.error(e),e};var o=window.webpackJsonp=window.webpackJsonp||[],a=o.push.bind(o);o.push=t,o=o.slice();for(var s=0;s<o.length;s++)t(o[s]);var c=a;n(n.s=1)}([function(e,t,r){"use strict";r.d(t,"a",function(){return i}),r.d(t,"b",function(){return n});function i(e,t,r,i){return new(r||(r=Promise))(function(n,o){function a(e){try{c(i.next(e))}catch(e){o(e)}}function s(e){try{c(i.throw(e))}catch(e){o(e)}}function c(e){e.done?n(e.value):new r(function(t){t(e.value)}).then(a,s)}c((i=i.apply(e,t||[])).next())})}function n(e,t){var r,i,n,o,a={label:0,sent:function(){if(1&n[0])throw n[1];return n[1]},trys:[],ops:[]};return o={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function s(o){return function(s){return function(o){if(r)throw new TypeError("Generator is already executing.");for(;a;)try{if(r=1,i&&(n=2&o[0]?i.return:o[0]?i.throw||((n=i.return)&&n.call(i),0):i.next)&&!(n=n.call(i,o[1])).done)return n;switch(i=0,n&&(o=[2&o[0],n.value]),o[0]){case 0:case 1:n=o;break;case 4:return a.label++,{value:o[1],done:!1};case 5:a.label++,i=o[1],o=[0];continue;case 7:o=a.ops.pop(),a.trys.pop();continue;default:if(!(n=(n=a.trys).length>0&&n[n.length-1])&&(6===o[0]||2===o[0])){a=0;continue}if(3===o[0]&&(!n||o[1]>n[0]&&o[1]<n[3])){a.label=o[1];break}if(6===o[0]&&a.label<n[1]){a.label=n[1],n=o;break}if(n&&a.label<n[2]){a.label=n[2],a.ops.push(o);break}n[2]&&a.ops.pop(),a.trys.pop();continue}o=t.call(e,a)}catch(e){o=[6,e],i=0}finally{r=n=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,s])}}}},function(e,t,r){"use strict";r.r(t);var i=r(0),n=function(){function e(){this.width=640,this.height=480,this.cameraUrl="./camera_para.dat",this.patternUrl="./pattern-marker.patt",this.video=document.createElement("video"),this.cameraParams=new ARCameraParam,this.videoParams={audio:!1,video:{width:{ideal:this.width},height:{ideal:this.height},facingMode:"environment"}},this.process=this.process.bind(this),this.playVideo=this.playVideo.bind(this)}return e.prototype.initCamera=function(){var e=this;return new Promise(function(t){e.cameraParams.onload=function(){e.controller=new ARController(e.width,e.height,e.cameraParams),e.initVideoSource().then(function(e){t(e)}).catch(function(e){console.error("error occured",e.message)})},e.cameraParams.load(e.cameraUrl)})},e.prototype.process=function(){return this.controller.process(this.video)},e.prototype.onWindowResize=function(e,t){e.aspect=window.innerWidth/window.innerHeight,e.updateProjectionMatrix(),t.setSize(window.innerWidth,window.innerHeight)},e.prototype.onVideoResize=function(){var e=window.innerWidth,t=window.innerHeight,r=this.video.videoWidth/this.video.videoHeight;if(e/t<r){var i=r*t;this.video.style.width=i+"px",this.video.style.marginLeft=-(i-e)/2+"px",this.video.style.height=t+"px",this.video.style.marginTop="0px"}else{var n=1/(r/e);this.video.style.height=n+"px",this.video.style.marginTop=-(n-t)/2+"px",this.video.style.width=e+"px",this.video.style.marginLeft="0px"}},e.prototype.setMarker=function(e){var t=this;return new Promise(function(r){t.controller.loadMarker(t.patternUrl,function(i){var n=t.createMarkerRoot(i,e);r(n)})})},e.prototype.getStream=function(){return navigator.mediaDevices.getUserMedia(this.videoParams)},e.prototype.initVideoSource=function(){var e=this;return new Promise(function(t){e.getStream().then(function(r){e.video.srcObject=r,e.setVideoStyles(),t(e.video)}).catch(function(e){console.warn("Camera access needed",e.message)})})},e.prototype.playVideo=function(){this.video.play(),document.body.removeEventListener("click",this.playVideo)},e.prototype.setVideoStyles=function(){var e=this;this.video.style.position="absolute",this.video.style.top="0px",this.video.style.left="0px",this.video.style.zIndex="-2",document.body.addEventListener("click",this.playVideo),this.video.setAttribute("autoplay",""),this.video.setAttribute("muted",""),this.video.setAttribute("playsinline",""),this.video.addEventListener("loadedmetadata",function(){document.body.appendChild(e.video),e.onVideoResize()}),this.video.style.width="640px",this.video.style.height="480px"},e.prototype.createMarkerRoot=function(e,t){return this.controller.threePatternMarkers={},t.markerTracker=this.controller.trackPatternMarkerId(e),t.markerMatrix=new Float64Array(12),t.matrixAutoUpdate=!1,this.controller.threePatternMarkers[e]=t,t},e}(),o=new(function(){function e(){this.ar=new n,this.matrixBuffer=[],this.actions=[],this.isGalleryInitialized=!1,this.clickEventHandler=this.clickEventHandler.bind(this),this.swipeEventHandler=this.swipeEventHandler.bind(this),this.update=this.update.bind(this)}return e.prototype.init=function(){return i.a(this,void 0,void 0,function(){var e,t,r=this;return i.b(this,function(i){switch(i.label){case 0:return e=this,[4,this.ar.initCamera()];case 1:return e.video=i.sent(),t=this,[4,this.initThree()];case 2:return t.canvas=i.sent(),n=this.canvas,/^(iPhone|iPad|iPod)/.test(navigator.platform)&&(n.style.cursor="pointer"),this.camera.projectionMatrix.fromArray(this.ar.controller.getCameraMatrix()),document.body.appendChild(this.canvas),this.onResize(),window.addEventListener("resize",function(){r.onResize()}),[4,this.setupMarkerDetection()];case 3:return i.sent(),[2]}var n})})},e.prototype.update=function(){this.act(),this.renderer.render(this.scene,this.camera),requestAnimationFrame(this.update)},e.prototype.onResize=function(){this.ar.onVideoResize(),window.innerHeight>window.innerWidth?(this.wrapper.rotation.x=-.25*Math.PI,this.wrapper.scale.set(1,1,1)):(this.wrapper.rotation.x=0,this.wrapper.scale.set(1.3,1.3,1.3)),this.ar.onWindowResize(this.camera,this.renderer)},e.prototype.initThree=function(){var e=this;return new Promise(function(t){return i.a(e,void 0,void 0,function(){var e,n,o,a,s,c,h;return i.b(this,function(i){switch(i.label){case 0:return e=this,[4,r.e(0).then(r.bind(null,2))];case 1:return e.threeModule=i.sent(),n=this.threeModule,o=n.WebGLRenderer,a=n.PerspectiveCamera,s=n.Raycaster,c=n.Group,h=n.Scene,this.renderer=new o({antialias:!0,alpha:!0}),this.renderer.setSize(window.innerWidth,window.innerHeight),this.renderer.setClearAlpha(0),this.renderer.setPixelRatio(window.devicePixelRatio?window.devicePixelRatio:1),this.scene=new h,this.camera=new a(70,window.innerWidth/window.innerHeight,.1,2e4),this.camera.position.z=5,this.scene.add(this.camera),this.camera.lookAt(this.scene.position),this.raycaster=new s,this.wrapper=new c,t(this.renderer.domElement),[2]}})})})},e.prototype.act=function(){this.actions.forEach(function(e){e()})},e.prototype.clickEventHandler=function(e){e.preventDefault();var t=this.getIntersectedMesh(e.clientX,e.clientY);if(t){if(t.scale.x<.999999||t.scale.y<.999999)return;this.gallery.hide(t,this.wrapper)}else{var r=-this.camera.position.z/this.raycaster.ray.direction.z,i=this.camera.position.clone().add(this.raycaster.ray.direction.multiplyScalar(r));this.gallery.render(this.wrapper,i)}},e.prototype.swipeEventHandler=function(e){var t=this,r=e.touches[0].clientX,i=function(n){var o=n.changedTouches[0].clientX,a=r-o;if(Math.abs(a)>20){var s=t.getIntersectedMesh(e.touches[0].clientX,e.touches[0].clientY);s&&window.open(s.link,"_blank")}window.removeEventListener("touchend",i)};window.addEventListener("touchend",i)},e.prototype.getIntersectedMesh=function(e,t){var r=new this.threeModule.Vector2(e/window.innerWidth*2-1,-t/window.innerHeight*2+1);this.raycaster.setFromCamera(r,this.camera);var i=this.raycaster.intersectObjects(this.wrapper.children);if(i.length>0)return i[0].object},e.prototype.setupMarkerDetection=function(){return i.a(this,void 0,void 0,function(){var e,t,n=this;return i.b(this,function(o){switch(o.label){case 0:return e=new this.threeModule.Group,[4,this.ar.setMarker(e)];case 1:return(t=o.sent()).add(this.wrapper),t.visible=!1,this.scene.add(t),this.ar.controller.addEventListener("getMarker",function(e){return i.a(n,void 0,void 0,function(){var n,o,a,s;return i.b(this,function(i){switch(i.label){case 0:return n=e.data.marker,(o=this.ar.controller.threePatternMarkers[n.idPatt])?this.isGalleryInitialized?[3,3]:(this.isGalleryInitialized=!0,[4,Promise.all([r.e(0),r.e(2)]).then(r.bind(null,4))]):[3,4];case 1:return a=i.sent(),this.gallery=new a.default(this.renderer),[4,this.gallery.init()];case 2:i.sent(),window.addEventListener("click",this.clickEventHandler),window.addEventListener("touchstart",this.swipeEventHandler),this.gallery.render(this.wrapper),i.label=3;case 3:return s=this.interpolateMatrix(e.data.matrixGL_RH),o.matrix.copy(s),o.visible=!0,[3,5];case 4:t.visible=!1,i.label=5;case 5:return[2]}})})}),this.actions.push(this.ar.process),[2]}})})},e.prototype.interpolateMatrix=function(e){var t,r=[];if(this.matrixBuffer.push(e),this.matrixBuffer.length<2)t=(new this.threeModule.Matrix4).fromArray(e);else{this.matrixBuffer.length>=5&&this.matrixBuffer.shift();for(var i=this.matrixBuffer.length,n=0,o=this.matrixBuffer[n].length;n<o;n++){r[n]=0;for(var a=0;a<i;a++)r[n]+=this.matrixBuffer[a][n];r[n]=r[n]/i}t=(new this.threeModule.Matrix4).fromArray(r)}return t},e}());o.init().then(function(){o.update()})}]);
//# sourceMappingURL=index.bundle.js.map