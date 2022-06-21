(()=>{var t={810:()=>{},395:(t,e,n)=>{"use strict";const r=flarum.core.compat["forum/app"];var a=n.n(r);const o=flarum.core.compat["common/Model"];var s=n.n(o);const i=flarum.core.compat["common/models/Discussion"];var c=n.n(i);const u=flarum.core.compat["forum/components/IndexPage"];var l=n.n(u);function d(t,e){return d=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},d(t,e)}function f(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,d(t,e)}const p=flarum.core.compat["common/utils/computed"];var h=n.n(p),g=function(t){function e(){return t.apply(this,arguments)||this}f(e,t);var n=e.prototype;return n.name=function(){return s().attribute("name").call(this)},n.slug=function(){return s().attribute("slug").call(this)},n.description=function(){return s().attribute("description").call(this)},n.color=function(){return s().attribute("color").call(this)},n.backgroundUrl=function(){return s().attribute("backgroundUrl").call(this)},n.backgroundMode=function(){return s().attribute("backgroundMode").call(this)},n.icon=function(){return s().attribute("icon").call(this)},n.position=function(){return s().attribute("position").call(this)},n.parent=function(){return s().hasOne("parent").call(this)},n.children=function(){return s().hasMany("children").call(this)},n.defaultSort=function(){return s().attribute("defaultSort").call(this)},n.isChild=function(){return s().attribute("isChild").call(this)},n.isHidden=function(){return s().attribute("isHidden").call(this)},n.discussionCount=function(){return s().attribute("discussionCount").call(this)},n.lastPostedAt=function(){return s().attribute("lastPostedAt",s().transformDate).call(this)},n.lastPostedDiscussion=function(){return s().hasOne("lastPostedDiscussion").call(this)},n.isRestricted=function(){return s().attribute("isRestricted").call(this)},n.canStartDiscussion=function(){return s().attribute("canStartDiscussion").call(this)},n.canAddToDiscussion=function(){return s().attribute("canAddToDiscussion").call(this)},n.isPrimary=function(){return h()("position","parent",(function(t,e){return null!==t&&!1===e})).call(this)},e}(s());const v=flarum.core.compat["common/components/Page"];var y=n.n(v);const T=flarum.core.compat["common/components/Link"];var b=n.n(T);const x=flarum.core.compat["common/components/LoadingIndicator"];var w=n.n(x);const N=flarum.core.compat["common/helpers/listItems"];var _=n.n(N);const L=flarum.core.compat["common/helpers/humanTime"];var P=n.n(L);const I=flarum.core.compat["common/utils/classList"];var C=n.n(I);function k(t,e,n){void 0===e&&(e={}),void 0===n&&(n={});var r=t&&t.icon(),a=n.useColor,o=void 0===a||a;return e.className=C()([e.className,"icon",r?t.icon():"TagIcon"]),t&&o?(e.style=e.style||{},e.style["--color"]=t.color(),r&&(e.style.color=t.color())):t||(e.className+=" untagged"),r?m("i",e):m("span",e)}const D=flarum.core.compat["common/utils/extract"];var S=n.n(D);function E(t,e){void 0===e&&(e={}),e.style=e.style||{},e.className="TagLabel "+(e.className||"");var n=S()(e,"link"),r=t?t.name():app.translator.trans("flarum-tags.lib.deleted_tag_text");if(t){var a=t.color();a&&(e.style["--tag-bg"]=a,e.className+=" colored"),n&&(e.title=t.description()||"",e.href=app.route("tag",{tags:t.slug()})),t.isChild()&&(e.className+=" TagLabel--child")}else e.className+=" untagged";return m(n?b():"span",e,m("span",{className:"TagLabel-text"},t&&t.icon()&&k(t,{},{useColor:!1})," ",r))}function O(t){return t.slice(0).sort((function(t,e){var n=t.position(),r=e.position();if(null===n&&null===r)return e.discussionCount()-t.discussionCount();if(null===r)return-1;if(null===n)return 1;var a=t.parent(),o=e.parent();return a===o?n-r:a&&o?a.position()-o.position():a?a===e?1:a.position()-r:o?o===t?-1:n-o.position():0}))}var A=function(t){function e(){return t.apply(this,arguments)||this}f(e,t);var n=e.prototype;return n.oninit=function(e){var n=this;t.prototype.oninit.call(this,e),app.history.push("tags",app.translator.trans("flarum-tags.forum.header.back_to_tags_tooltip")),this.tags=[];var r=app.preloadedApiDocument();r?this.tags=O(r.filter((function(t){return!t.isChild()}))):(this.loading=!0,app.tagList.load(["children","lastPostedDiscussion","parent"]).then((function(){n.tags=O(app.store.all("tags").filter((function(t){return!t.isChild()}))),n.loading=!1,m.redraw()})))},n.view=function(){if(this.loading)return m(w(),null);var t=this.tags.filter((function(t){return null!==t.position()})),e=this.tags.filter((function(t){return null===t.position()}));return m("div",{className:"TagsPage"},l().prototype.hero(),m("div",{className:"container"},m("nav",{className:"TagsPage-nav IndexPage-nav sideNav"},m("ul",null,_()(l().prototype.sidebarItems().toArray()))),m("div",{className:"TagsPage-content sideNavOffset"},m("ul",{className:"TagTiles"},t.map((function(t){var e=t.lastPostedDiscussion(),n=O(t.children()||[]);return m("li",{className:"TagTile "+(t.color()?"colored":""),style:{"--tag-bg":t.color()}},m(b(),{className:"TagTile-info",href:app.route.tag(t)},t.icon()&&k(t,{},{useColor:!1}),m("h3",{className:"TagTile-name"},t.name()),m("p",{className:"TagTile-description"},t.description()),n?m("div",{className:"TagTile-children"},n.map((function(t){return[m(b(),{href:app.route.tag(t)},t.name())," "]}))):""),e?m(b(),{className:"TagTile-lastPostedDiscussion",href:app.route.discussion(e,e.lastPostNumber())},m("span",{className:"TagTile-lastPostedDiscussion-title"},e.title()),P()(e.lastPostedAt())):m("span",{className:"TagTile-lastPostedDiscussion"}))}))),e.length?m("div",{className:"TagCloud"},e.map((function(t){return[E(t,{link:!0})," "]}))):"")))},n.oncreate=function(e){t.prototype.oncreate.call(this,e),app.setTitle(app.translator.trans("flarum-tags.forum.all_tags.meta_title_text")),app.setTitleCount(0)},e}(y());const j=flarum.core.compat["forum/components/EventPost"];function R(t,e){void 0===e&&(e={});var n=[],r=S()(e,"link");return e.className="TagsLabel "+(e.className||""),t?O(t).forEach((function(e){(e||1===t.length)&&n.push(E(e,{link:r}))})):n.push(E()),m("span",e,n)}var M=function(t){function e(){return t.apply(this,arguments)||this}f(e,t),e.initAttrs=function(e){t.initAttrs.call(this,e);var n=e.post.content()[0],r=e.post.content()[1];function a(t,e){return t.filter((function(t){return-1===e.indexOf(t)})).map((function(t){return app.store.getById("tags",t)}))}e.tagsAdded=a(r,n),e.tagsRemoved=a(n,r)};var n=e.prototype;return n.icon=function(){return"fas fa-tag"},n.descriptionKey=function(){return this.attrs.tagsAdded.length?this.attrs.tagsRemoved.length?"flarum-tags.forum.post_stream.added_and_removed_tags_text":"flarum-tags.forum.post_stream.added_tags_text":"flarum-tags.forum.post_stream.removed_tags_text"},n.descriptionData=function(){var t={};return this.attrs.tagsAdded.length&&(t.tagsAdded=app.translator.trans("flarum-tags.forum.post_stream.tags_text",{tags:R(this.attrs.tagsAdded,{link:!0}),count:this.attrs.tagsAdded.length})),this.attrs.tagsRemoved.length&&(t.tagsRemoved=app.translator.trans("flarum-tags.forum.post_stream.tags_text",{tags:R(this.attrs.tagsRemoved,{link:!0}),count:this.attrs.tagsRemoved.length})),t},e}(n.n(j)());function q(t,e,n,r,a,o,s){try{var i=t[o](s),c=i.value}catch(t){return void n(t)}i.done?e(c):Promise.resolve(c).then(r,a)}var B=n(126),H=n.n(B),F=function(){function t(){this.loadedIncludes=new Set}return t.prototype.load=function(){var t,e=(t=H().mark((function t(e){var n,r=this;return H().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(void 0===e&&(e=[]),0!==(n=e.filter((function(t){return!r.loadedIncludes.has(t)}))).length){t.next=4;break}return t.abrupt("return",Promise.resolve(a().store.all("tags")));case 4:return t.abrupt("return",a().store.find("tags",{include:n.join(",")}).then((function(t){return n.forEach((function(t){return r.loadedIncludes.add(t)})),t})));case 5:case"end":return t.stop()}}),t)})),function(){var e=this,n=arguments;return new Promise((function(r,a){var o=t.apply(e,n);function s(t){q(o,r,a,s,i,"next",t)}function i(t){q(o,r,a,s,i,"throw",t)}s(void 0)}))});return function(t){return e.apply(this,arguments)}}(),t}();const G=flarum.core.compat["common/extend"],K=flarum.core.compat["common/components/Separator"];var $=n.n(K);const U=flarum.core.compat["common/components/LinkButton"];var Y=n.n(U),z=function(t){function e(){return t.apply(this,arguments)||this}return f(e,t),e.prototype.view=function(t){var e=this.attrs.model,n=(this.constructor.isActive(this.attrs),e&&e.description()),r=C()(["TagLinkButton","hasIcon",this.attrs.className,e.isChild()&&"child"]);return m(b(),{className:r,href:this.attrs.route,style:e?{"--color":e.color()}:"",title:n||""},k(e,{className:"Button-icon"}),m("span",{className:"Button-label"},e?e.name():app.translator.trans("flarum-tags.forum.index.untagged_link")))},e.initAttrs=function(e){t.initAttrs.call(this,e);var n=e.model;e.params.tags=n?n.slug():"untagged",e.route=app.route("tag",e.params)},e}(Y());function J(){(0,G.extend)(l().prototype,"navItems",(function(t){if(t.add("tags",m(Y(),{icon:"fas fa-th-large",href:app.route("tags")},app.translator.trans("flarum-tags.forum.index.tags_link")),-10),!app.current.matches(A)){t.add("separator",$().component(),-12);var e=app.search.stickyParams(),n=app.store.all("tags"),r=this.currentTag(),a=function(n){var a=r===n;!a&&r&&(a=r.parent()===n),t.add("tag"+n.id(),z.component({model:n,params:e,active:a},null==n?void 0:n.name()),-14)};O(n).filter((function(t){return null!==t.position()&&(!t.isChild()||r&&(t.parent()===r||t.parent()===r.parent()))})).forEach(a);var o=n.filter((function(t){return null===t.position()})).sort((function(t,e){return e.discussionCount()-t.discussionCount()}));o.splice(0,3).forEach(a),o.length&&t.add("moreTags",m(Y(),{href:app.route("tags")},app.translator.trans("flarum-tags.forum.index.more_link")),-16)}}))}const Q=flarum.core.compat["forum/states/DiscussionListState"];var V=n.n(Q);const W=flarum.core.compat["forum/states/GlobalSearchState"];var X=n.n(W);const Z=flarum.core.compat["common/Component"];var tt=n.n(Z),et=function(t){function e(){return t.apply(this,arguments)||this}return f(e,t),e.prototype.view=function(){var t=this.attrs.model,e=t.color();return m("header",{className:"Hero TagHero"+(e?" TagHero--colored":""),style:e?{"--hero-bg":e}:""},m("div",{className:"container"},m("div",{className:"containerNarrow"},m("h2",{className:"Hero-title"},t.icon()&&k(t,{},{useColor:!1})," ",t.name()),m("div",{className:"Hero-subtitle"},t.description()))))},e}(tt()),nt=function(t){return a().store.all("tags").find((function(e){return 0===e.slug().localeCompare(t,void 0,{sensitivity:"base"})}))};function rt(){l().prototype.currentTag=function(){var t=this;if(this.currentActiveTag)return this.currentActiveTag;var e=a().search.params().tags,n=null;if(e&&(n=nt(e)),e&&!n||n&&!n.isChild()&&!n.children()){if(this.currentTagLoading)return;this.currentTagLoading=!0,a().store.find("tags",e,{include:"children,children.parent,parent,state"}).then((function(){t.currentActiveTag=nt(e),m.redraw()})).finally((function(){t.currentTagLoading=!1}))}return n?(this.currentActiveTag=n,this.currentActiveTag):void 0},(0,G.override)(l().prototype,"hero",(function(t){var e=this.currentTag();return e?m(et,{model:e}):t()})),(0,G.extend)(l().prototype,"view",(function(t){var e=this.currentTag();e&&(t.attrs.className+=" IndexPage--tag"+e.id())})),(0,G.extend)(l().prototype,"setTitle",(function(){var t=this.currentTag();t&&a().setTitle(t.name())})),(0,G.extend)(l().prototype,"sidebarItems",(function(t){var e=this.currentTag();if(e){var n=e.color(),r=e.canStartDiscussion()||!a().session.user,o=t.get("newDiscussion");n&&(o.attrs.className=C()([o.attrs.className,"Button--tagColored"]),o.attrs.style={"--color":n}),o.attrs.disabled=!r,o.children=a().translator.trans(r?"core.forum.index.start_discussion_button":"core.forum.index.cannot_start_discussion_button")}})),(0,G.extend)(X().prototype,"params",(function(t){t.tags=m.route.param("tags")})),(0,G.extend)(V().prototype,"requestParams",(function(t){var e;if("string"==typeof t.include?t.include=[t.include]:null==(e=t.include)||e.push("tags","tags.parent"),this.params.tags){var n,r=null!=(n=t.filter)?n:{};r.tag=this.params.tags;var a=r.q;a&&(r.q=a+" tag:"+this.params.tags),t.filter=r}}))}const at=flarum.core.compat["forum/components/DiscussionListItem"];var ot=n.n(at);const st=flarum.core.compat["forum/components/DiscussionHero"];var it=n.n(st);function ct(){(0,G.extend)(ot().prototype,"infoItems",(function(t){var e=this.attrs.discussion.tags();e&&e.length&&t.add("tags",R(e),10)})),(0,G.extend)(it().prototype,"view",(function(t){var e=O(this.attrs.discussion.tags());if(e&&e.length){var n=e[0].color();n&&(t.attrs.style={"--hero-bg":n},t.attrs.className+=" DiscussionHero--colored")}})),(0,G.extend)(it().prototype,"items",(function(t){var e=this.attrs.discussion.tags();e&&e.length&&t.add("tags",R(e,{link:!0}),5)}))}const ut=flarum.core.compat["forum/utils/DiscussionControls"];var lt=n.n(ut);const mt=flarum.core.compat["common/components/Button"];var dt=n.n(mt);const ft=flarum.core.compat["common/components/Modal"];var pt=n.n(ft);const ht=flarum.core.compat["forum/components/DiscussionPage"];var gt=n.n(ht);const vt=flarum.core.compat["common/helpers/highlight"];var yt=n.n(vt);const Tt=flarum.core.compat["common/utils/extractText"];var bt=n.n(Tt);const xt=flarum.core.compat["forum/utils/KeyboardNavigatable"];var wt=n.n(xt);const Nt=flarum.core.compat["common/utils/Stream"];var _t=n.n(Nt);function Lt(t){var e=app.store.all("tags");return t?e.filter((function(e){return e.canAddToDiscussion()||-1!==t.tags().indexOf(e)})):e.filter((function(t){return t.canStartDiscussion()}))}var Pt=["className","isToggled"],It=function(t){function e(){return t.apply(this,arguments)||this}return f(e,t),e.prototype.view=function(t){var e=this.attrs,n=e.className,r=e.isToggled,a=function(t,e){if(null==t)return{};var n,r,a={},o=Object.keys(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(e,Pt),o=r?"far fa-check-circle":"far fa-circle";return m(dt(),Object.assign({},a,{icon:o,className:C()([n,r&&"Button--toggled"])}),t.children)},e}(tt()),Ct=function(t){function e(){for(var e,n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))||this).tagsLoading=!0,e.selected=[],e.filter=_t()(""),e.focused=!1,e.minPrimary=a().forum.attribute("minPrimaryTags"),e.maxPrimary=a().forum.attribute("maxPrimaryTags"),e.minSecondary=a().forum.attribute("minSecondaryTags"),e.maxSecondary=a().forum.attribute("maxSecondaryTags"),e.bypassReqs=!1,e.navigator=new(wt()),e.tags=void 0,e.selectedTag=void 0,e}f(e,t);var n=e.prototype;return n.oninit=function(e){var n=this;t.prototype.oninit.call(this,e),this.navigator.onUp((function(){return n.setIndex(n.getCurrentNumericIndex()-1,!0)})).onDown((function(){return n.setIndex(n.getCurrentNumericIndex()+1,!0)})).onSelect(this.select.bind(this)).onRemove((function(){return n.selected.splice(n.selected.length-1,1)})),a().tagList.load(["parent"]).then((function(){var t;n.tagsLoading=!1;var e=O(Lt(n.attrs.discussion));n.tags=e;var r=null==(t=n.attrs.discussion)?void 0:t.tags();n.attrs.selectedTags?n.attrs.selectedTags.map(n.addTag.bind(n)):r&&r.forEach((function(t){return t&&n.addTag(t)})),n.selectedTag=e[0],m.redraw()}))},n.primaryCount=function(){return this.selected.filter((function(t){return t.isPrimary()})).length},n.secondaryCount=function(){return this.selected.filter((function(t){return!t.isPrimary()})).length},n.addTag=function(t){if(t.canStartDiscussion()){var e=t.parent();e&&!this.selected.includes(e)&&this.selected.push(e),this.selected.includes(t)||this.selected.push(t)}},n.removeTag=function(t){var e=this.selected.indexOf(t);-1!==e&&(this.selected.splice(e,1),this.selected.filter((function(e){return e.parent()===t})).forEach(this.removeTag.bind(this)))},n.className=function(){return"TagDiscussionModal"},n.title=function(){return this.attrs.discussion?a().translator.trans("flarum-tags.forum.choose_tags.edit_title",{title:m("em",null,this.attrs.discussion.title())}):a().translator.trans("flarum-tags.forum.choose_tags.title")},n.getInstruction=function(t,e){if(this.bypassReqs)return"";if(t<this.minPrimary){var n=this.minPrimary-t;return a().translator.trans("flarum-tags.forum.choose_tags.choose_primary_placeholder",{count:n})}if(e<this.minSecondary){var r=this.minSecondary-e;return a().translator.trans("flarum-tags.forum.choose_tags.choose_secondary_placeholder",{count:r})}return""},n.content=function(){var t=this;if(this.tagsLoading||!this.tags)return m(w(),null);var e=this.tags,n=this.filter().toLowerCase(),r=this.primaryCount(),o=this.secondaryCount();e=e.filter((function(e){var n=e.parent();return null!==n&&(!1===n||t.selected.includes(n))})),r>=this.maxPrimary&&!this.bypassReqs&&(e=e.filter((function(e){return!e.isPrimary()||t.selected.includes(e)}))),o>=this.maxSecondary&&!this.bypassReqs&&(e=e.filter((function(e){return e.isPrimary()||t.selected.includes(e)}))),n&&(e=e.filter((function(t){return t.name().substr(0,n.length).toLowerCase()===n}))),this.selectedTag&&e.includes(this.selectedTag)||(this.selectedTag=e[0]);var s=Math.max(bt()(this.getInstruction(r,o)).length,this.filter().length);return[m("div",{className:"Modal-body"},m("div",{className:"TagDiscussionModal-form"},m("div",{className:"TagDiscussionModal-form-input"},m("div",{className:"TagsInput FormControl "+(this.focused?"focus":""),onclick:function(){return t.$(".TagsInput input").focus()}},m("span",{className:"TagsInput-selected"},this.selected.map((function(e){return m("span",{className:"TagsInput-tag",onclick:function(){t.removeTag(e),t.onready()}},E(e))}))),m("input",{className:"FormControl",placeholder:bt()(this.getInstruction(r,o)),bidi:this.filter,style:{width:s+"ch"},onkeydown:this.navigator.navigate.bind(this.navigator),onfocus:function(){return t.focused=!0},onblur:function(){return t.focused=!1}}))),m("div",{className:"TagDiscussionModal-form-submit App-primaryControl"},m(dt(),{type:"submit",className:"Button Button--primary",disabled:!this.meetsRequirements(r,o),icon:"fas fa-check"},a().translator.trans("flarum-tags.forum.choose_tags.submit_button"))))),m("div",{className:"Modal-footer"},m("ul",{className:"TagDiscussionModal-list SelectTagList"},e.filter((function(e){return n||!e.parent()||t.selected.includes(e.parent())})).map((function(e){return m("li",{"data-index":e.id(),className:C()({pinned:null!==e.position(),child:!!e.parent(),colored:!!e.color(),selected:t.selected.includes(e),active:t.selectedTag===e}),style:{color:e.color()},onmouseover:function(){return t.selectedTag=e},onclick:t.toggleTag.bind(t,e)},k(e),m("span",{className:"SelectTagListItem-name"},yt()(e.name(),n)),e.description()?m("span",{className:"SelectTagListItem-description"},e.description()):"")}))),!!a().forum.attribute("canBypassTagCounts")&&m("div",{className:"TagDiscussionModal-controls"},m(It,{className:"Button",onclick:function(){return t.bypassReqs=!t.bypassReqs},isToggled:this.bypassReqs},a().translator.trans("flarum-tags.forum.choose_tags.bypass_requirements"))))]},n.meetsRequirements=function(t,e){return!!this.bypassReqs||t>=this.minPrimary&&e>=this.minSecondary},n.toggleTag=function(t){this.tags&&(this.selected.includes(t)?this.removeTag(t):this.addTag(t),this.filter()&&(this.filter(""),this.selectedTag=this.tags[0]),this.onready())},n.select=function(t){t.metaKey||t.ctrlKey||this.selectedTag&&this.selected.includes(this.selectedTag)?this.selected.length&&this.$('button[type="submit"]').click():this.selectedTag&&this.getItem(this.selectedTag)[0].dispatchEvent(new Event("click"))},n.selectableItems=function(){return this.$(".TagDiscussionModal-list > li")},n.getCurrentNumericIndex=function(){return this.selectedTag?this.selectableItems().index(this.getItem(this.selectedTag)):-1},n.getItem=function(t){return this.selectableItems().filter('[data-index="'+t.id()+'"]')},n.setIndex=function(t,e){var n=this.selectableItems(),r=n.parent();t<0?t=n.length-1:t>=n.length&&(t=0);var o=n.eq(t);if(this.selectedTag=a().store.getById("tags",o.attr("data-index")),m.redraw(),e&&this.selectedTag){var s,i=r.scrollTop(),c=r.offset().top,u=c+r.outerHeight(),l=o.offset().top,d=l+o.outerHeight();l<c?s=i-c+l-parseInt(r.css("padding-top"),10):d>u&&(s=i-u+d+parseInt(r.css("padding-bottom"),10)),void 0!==s&&r.stop(!0).animate({scrollTop:s},100)}},n.onsubmit=function(t){t.preventDefault();var e=this.attrs.discussion,n=this.selected;e&&e.save({relationships:{tags:n}}).then((function(){a().current.matches(gt())&&a().current.get("stream").update(),m.redraw()})),this.attrs.onsubmit&&this.attrs.onsubmit(n),this.hide()},e}(pt());function kt(){(0,G.extend)(lt(),"moderationControls",(function(t,e){e.canTag()&&t.add("tags",m(dt(),{icon:"fas fa-tag",onclick:function(){return app.modal.show(Ct,{discussion:e})}},app.translator.trans("flarum-tags.forum.discussion_controls.edit_tags_button")))}))}const Dt=flarum.core.compat["forum/components/DiscussionComposer"];var St=n.n(Dt);function Et(){(0,G.extend)(l().prototype,"newDiscussionAction",(function(t){var e=this.currentTag();if(e){var n=e.parent(),r=n?[n,e]:[e];t.then((function(t){return t.fields.tags=r}))}else app.composer.fields.tags=[]})),(0,G.extend)(St().prototype,"oninit",(function(){app.tagList.load(["parent"]).then((function(){return m.redraw()}))})),St().prototype.chooseTags=function(){var t=this;Lt().length&&app.modal.show(Ct,{selectedTags:(this.composer.fields.tags||[]).slice(0),onsubmit:function(e){t.composer.fields.tags=e,t.$("textarea").focus()}})},(0,G.extend)(St().prototype,"headerItems",(function(t){var e=this.composer.fields.tags||[],n=Lt();t.add("tags",m("a",{className:C()(["DiscussionComposer-changeTags",!n.length&&"disabled"]),onclick:this.chooseTags.bind(this)},e.length?R(e):m("span",{className:"TagLabel untagged"},app.translator.trans("flarum-tags.forum.composer_discussion.choose_tags_link"))),10)})),(0,G.override)(St().prototype,"onsubmit",(function(t){var e=this,n=this.composer.fields.tags||[],r=n.filter((function(t){return null!==t.position()&&!t.isChild()})),a=n.filter((function(t){return null===t.position()})),o=Lt(),s=parseInt(app.forum.attribute("minPrimaryTags")),i=parseInt(app.forum.attribute("minSecondaryTags")),c=parseInt(app.forum.attribute("maxPrimaryTags")),u=parseInt(app.forum.attribute("maxSecondaryTags"));(!n.length&&0!==c&&0!==u||r.length<s||a.length<i)&&o.length?app.modal.show(Ct,{selectedTags:n,onsubmit:function(n){e.composer.fields.tags=n,t()}}):t()})),(0,G.extend)(St().prototype,"data",(function(t){t.relationships=t.relationships||{},t.relationships.tags=this.composer.fields.tags}))}const Ot={"tags/utils/sortTags":O,"tags/models/Tag":g,"tags/helpers/tagsLabel":R,"tags/helpers/tagIcon":k,"tags/helpers/tagLabel":E},At=Object.assign(Ot,{"tags/addTagFilter":rt,"tags/addTagControl":kt,"tags/components/TagHero":et,"tags/components/TagDiscussionModal":Ct,"tags/components/TagsPage":A,"tags/components/DiscussionTaggedPost":M,"tags/components/TagLinkButton":z,"tags/addTagList":J,"tags/addTagLabels":ct,"tags/addTagComposer":Et,"tags/utils/getSelectableTags":Lt}),jt=flarum.core;a().initializers.add("flarum-tags",(function(){a().routes.tags={path:"/tags",component:A},a().routes.tag={path:"/t/:tags",component:l()},a().route.tag=function(t){return a().route("tag",{tags:t.slug()})},a().postComponents.discussionTagged=M,a().store.models.tags=g,a().tagList=new F,c().prototype.tags=s().hasMany("tags"),c().prototype.canTag=s().attribute("canTag"),J(),rt(),ct(),kt(),Et()})),Object.assign(jt.compat,At)},126:(t,e,n)=>{t.exports=n(750)},750:t=>{var e=function(t){"use strict";var e,n=Object.prototype,r=n.hasOwnProperty,a="function"==typeof Symbol?Symbol:{},o=a.iterator||"@@iterator",s=a.asyncIterator||"@@asyncIterator",i=a.toStringTag||"@@toStringTag";function c(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{c({},"")}catch(t){c=function(t,e,n){return t[e]=n}}function u(t,e,n,r){var a=e&&e.prototype instanceof g?e:g,o=Object.create(a.prototype),s=new C(r||[]);return o._invoke=function(t,e,n){var r=m;return function(a,o){if(r===f)throw new Error("Generator is already running");if(r===p){if("throw"===a)throw o;return D()}for(n.method=a,n.arg=o;;){var s=n.delegate;if(s){var i=L(s,n);if(i){if(i===h)continue;return i}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===m)throw r=p,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=f;var c=l(t,e,n);if("normal"===c.type){if(r=n.done?p:d,c.arg===h)continue;return{value:c.arg,done:n.done}}"throw"===c.type&&(r=p,n.method="throw",n.arg=c.arg)}}}(t,n,s),o}function l(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}t.wrap=u;var m="suspendedStart",d="suspendedYield",f="executing",p="completed",h={};function g(){}function v(){}function y(){}var T={};c(T,o,(function(){return this}));var b=Object.getPrototypeOf,x=b&&b(b(k([])));x&&x!==n&&r.call(x,o)&&(T=x);var w=y.prototype=g.prototype=Object.create(T);function N(t){["next","throw","return"].forEach((function(e){c(t,e,(function(t){return this._invoke(e,t)}))}))}function _(t,e){function n(a,o,s,i){var c=l(t[a],t,o);if("throw"!==c.type){var u=c.arg,m=u.value;return m&&"object"==typeof m&&r.call(m,"__await")?e.resolve(m.__await).then((function(t){n("next",t,s,i)}),(function(t){n("throw",t,s,i)})):e.resolve(m).then((function(t){u.value=t,s(u)}),(function(t){return n("throw",t,s,i)}))}i(c.arg)}var a;this._invoke=function(t,r){function o(){return new e((function(e,a){n(t,r,e,a)}))}return a=a?a.then(o,o):o()}}function L(t,n){var r=t.iterator[n.method];if(r===e){if(n.delegate=null,"throw"===n.method){if(t.iterator.return&&(n.method="return",n.arg=e,L(t,n),"throw"===n.method))return h;n.method="throw",n.arg=new TypeError("The iterator does not provide a 'throw' method")}return h}var a=l(r,t.iterator,n.arg);if("throw"===a.type)return n.method="throw",n.arg=a.arg,n.delegate=null,h;var o=a.arg;return o?o.done?(n[t.resultName]=o.value,n.next=t.nextLoc,"return"!==n.method&&(n.method="next",n.arg=e),n.delegate=null,h):o:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,h)}function P(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function I(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function C(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(P,this),this.reset(!0)}function k(t){if(t){var n=t[o];if(n)return n.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var a=-1,s=function n(){for(;++a<t.length;)if(r.call(t,a))return n.value=t[a],n.done=!1,n;return n.value=e,n.done=!0,n};return s.next=s}}return{next:D}}function D(){return{value:e,done:!0}}return v.prototype=y,c(w,"constructor",y),c(y,"constructor",v),v.displayName=c(y,i,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===v||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,y):(t.__proto__=y,c(t,i,"GeneratorFunction")),t.prototype=Object.create(w),t},t.awrap=function(t){return{__await:t}},N(_.prototype),c(_.prototype,s,(function(){return this})),t.AsyncIterator=_,t.async=function(e,n,r,a,o){void 0===o&&(o=Promise);var s=new _(u(e,n,r,a),o);return t.isGeneratorFunction(n)?s:s.next().then((function(t){return t.done?t.value:s.next()}))},N(w),c(w,i,"Generator"),c(w,o,(function(){return this})),c(w,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){for(;e.length;){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},t.values=k,C.prototype={constructor:C,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(I),!t)for(var n in this)"t"===n.charAt(0)&&r.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var n=this;function a(r,a){return i.type="throw",i.arg=t,n.next=r,a&&(n.method="next",n.arg=e),!!a}for(var o=this.tryEntries.length-1;o>=0;--o){var s=this.tryEntries[o],i=s.completion;if("root"===s.tryLoc)return a("end");if(s.tryLoc<=this.prev){var c=r.call(s,"catchLoc"),u=r.call(s,"finallyLoc");if(c&&u){if(this.prev<s.catchLoc)return a(s.catchLoc,!0);if(this.prev<s.finallyLoc)return a(s.finallyLoc)}else if(c){if(this.prev<s.catchLoc)return a(s.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<s.finallyLoc)return a(s.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var a=this.tryEntries[n];if(a.tryLoc<=this.prev&&r.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var o=a;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var s=o?o.completion:{};return s.type=t,s.arg=e,o?(this.method="next",this.next=o.finallyLoc,h):this.complete(s)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),h},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),I(n),h}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var a=r.arg;I(n)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(t,n,r){return this.delegate={iterator:k(t),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=e),h}},t}(t.exports);try{regeneratorRuntime=e}catch(t){"object"==typeof globalThis?globalThis.regeneratorRuntime=e:Function("r","regeneratorRuntime = r")(e)}}},e={};function n(r){var a=e[r];if(void 0!==a)return a.exports;var o=e[r]={exports:{}};return t[r](o,o.exports,n),o.exports}n.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return n.d(e,{a:e}),e},n.d=(t,e)=>{for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})},n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),n.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})};var r={};(()=>{"use strict";n.r(r);var t=n(810),e={};for(const n in t)"default"!==n&&(e[n]=()=>t[n]);n.d(r,e),n(395)})(),module.exports=r})();
//# sourceMappingURL=forum.js.map