(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{e5Md:function(l,n,e){"use strict";var t=e("8ubM"),i=e("CcnG"),a=e("AHdH"),o=e("Ywhj"),u=e("R+s0"),s=e("k79+"),c=e("I3BX"),r=e("IU+9"),d=e("Ip0R"),p=e("B4+B"),v=i["\u0275crt"]({encapsulation:2,styles:[],data:{}});function g(l){return i["\u0275vid"](0,[(l()(),i["\u0275eld"](0,0,null,null,2,":svg:defs",[],null,null,null,null,null)),(l()(),i["\u0275eld"](1,0,null,null,1,":svg:g",[["ngx-charts-svg-linear-gradient",""],["orientation","vertical"]],null,null,null,c.b,c.a)),i["\u0275did"](2,573440,null,0,r.a,[],{orientation:[0,"orientation"],name:[1,"name"],stops:[2,"stops"]},null)],function(l,n){var e=n.component;l(n,2,0,"vertical",e.gradientId,e.gradientStops)},null)}function m(l){return i["\u0275vid"](2,[(l()(),i["\u0275and"](16777216,null,null,1,null,g)),i["\u0275did"](1,16384,null,0,d.NgIf,[i.ViewContainerRef,i.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),i["\u0275eld"](2,0,null,null,0,":svg:path",[["class","area"]],[[1,"d",0],[1,"fill",0],[4,"opacity",null]],null,null,null,null))],function(l,n){l(n,1,0,n.component.gradient)},function(l,n){var e=n.component;l(n,2,0,e.areaPath,e.gradient?e.gradientFill:e.fill,e.opacity)})}var f=e("Qb23"),h=i["\u0275crt"]({encapsulation:2,styles:[],data:{animation:[{type:7,name:"animationState",definitions:[{type:1,expr:":enter",animation:[{type:6,styles:{strokeDasharray:2e3,strokeDashoffset:2e3},offset:null},{type:4,styles:{type:6,styles:{strokeDashoffset:0},offset:null},timings:1e3}],options:null}],options:{}}]}});function y(l){return i["\u0275vid"](2,[(l()(),i["\u0275eld"](0,0,null,null,0,":svg:path",[["class","line"],["stroke-width","1.5px"]],[[24,"@animationState",0],[1,"d",0],[1,"fill",0],[1,"stroke",0]],null,null,null,null))],null,function(l,n){var e=n.component;l(n,0,0,"active",e.initialPath,e.fill,e.stroke)})}var x=e("oAiE"),b=i["\u0275crt"]({encapsulation:2,styles:[],data:{}});function T(l){return i["\u0275vid"](0,[(l()(),i["\u0275eld"](0,0,null,null,1,":svg:g",[["ngx-charts-svg-linear-gradient",""],["orientation","vertical"]],null,null,null,c.b,c.a)),i["\u0275did"](1,573440,null,0,r.a,[],{orientation:[0,"orientation"],name:[1,"name"],stops:[2,"stops"]},null)],function(l,n){var e=n.component;l(n,1,0,"vertical",e.gradientId,e.gradientStops)},null)}function w(l){return i["\u0275vid"](0,[(l()(),i["\u0275eld"](0,0,null,null,1,":svg:g",[["class","line-series-range"],["ngx-charts-area",""]],[[2,"active",null],[2,"inactive",null]],null,null,m,v)),i["\u0275did"](1,573440,null,0,p.a,[i.ElementRef],{data:[0,"data"],path:[1,"path"],fill:[2,"fill"],opacity:[3,"opacity"],animations:[4,"animations"]},null)],function(l,n){var e=n.component;l(n,1,0,e.data,e.outerPath,e.hasGradient?e.gradientUrl:e.colors.getColor(e.data.name),e.rangeFillOpacity,e.animations)},function(l,n){var e=n.component;l(n,0,0,e.isActive(e.data),e.isInactive(e.data))})}function k(l){return i["\u0275vid"](2,[(l()(),i["\u0275eld"](0,0,null,null,9,":svg:g",[],null,null,null,null,null)),(l()(),i["\u0275eld"](1,0,null,null,2,":svg:defs",[],null,null,null,null,null)),(l()(),i["\u0275and"](16777216,null,null,1,null,T)),i["\u0275did"](3,16384,null,0,d.NgIf,[i.ViewContainerRef,i.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),i["\u0275eld"](4,0,null,null,1,":svg:g",[["class","line-highlight"],["ngx-charts-area",""]],[[2,"active",null],[2,"inactive",null]],null,null,m,v)),i["\u0275did"](5,573440,null,0,p.a,[i.ElementRef],{data:[0,"data"],path:[1,"path"],fill:[2,"fill"],opacity:[3,"opacity"],startOpacity:[4,"startOpacity"],gradient:[5,"gradient"],stops:[6,"stops"],animations:[7,"animations"]},null),(l()(),i["\u0275eld"](6,0,null,null,1,":svg:g",[["class","line-series"],["ngx-charts-line",""]],[[2,"active",null],[2,"inactive",null]],null,null,y,h)),i["\u0275did"](7,573440,null,0,f.a,[i.ElementRef],{path:[0,"path"],stroke:[1,"stroke"],data:[2,"data"],animations:[3,"animations"]},null),(l()(),i["\u0275and"](16777216,null,null,1,null,w)),i["\u0275did"](9,16384,null,0,d.NgIf,[i.ViewContainerRef,i.TemplateRef],{ngIf:[0,"ngIf"]},null)],function(l,n){var e=n.component;l(n,3,0,e.hasGradient),l(n,5,0,e.data,e.areaPath,e.hasGradient?e.gradientUrl:e.colors.getColor(e.data.name),.25,0,!0,e.areaGradientStops,e.animations),l(n,7,0,e.path,e.stroke,e.data,e.animations),l(n,9,0,e.hasRange)},function(l,n){var e=n.component;l(n,4,0,e.isActive(e.data),e.isInactive(e.data)),l(n,6,0,e.isActive(e.data),e.isInactive(e.data))})}var C=e("NL3J"),R=i["\u0275crt"]({encapsulation:2,styles:[],data:{}});function S(l){return i["\u0275vid"](2,[(l()(),i["\u0275eld"](0,0,null,null,0,":svg:circle",[],[[1,"cx",0],[1,"cy",0],[1,"r",0],[1,"fill",0],[1,"stroke",0],[1,"opacity",0],[1,"class",0],[1,"pointer-events",0]],null,null,null,null))],null,function(l,n){var e=n.component;l(n,0,0,e.cx,e.cy,e.r,e.fill,e.stroke,e.circleOpacity,e.classNames,e.pointerEvents)})}var I=e("+vzl"),L=e("k/Rj"),D=e("t6FG"),F=i["\u0275crt"]({encapsulation:2,styles:[],data:{animation:[{type:7,name:"animationState",definitions:[{type:1,expr:":enter",animation:[{type:6,styles:{opacity:0},offset:null},{type:4,styles:{type:6,styles:{opacity:1},offset:null},timings:250}],options:null}],options:{}}]}});function A(l){return i["\u0275vid"](0,[(l()(),i["\u0275eld"](0,0,null,null,0,":svg:rect",[["class","tooltip-bar"]],[[24,"@animationState",0],[1,"x",0],[1,"y",0],[1,"width",0],[1,"height",0],[1,"fill",0]],null,null,null,null))],null,function(l,n){var e=n.component;l(n,0,0,"active",e.circle.cx-e.circle.radius,e.circle.cy,2*e.circle.radius,e.circle.height,e.gradientFill)})}function O(l){return i["\u0275vid"](0,[(l()(),i["\u0275eld"](0,0,null,null,9,":svg:g",[],null,null,null,null,null)),(l()(),i["\u0275eld"](1,0,null,null,2,":svg:defs",[],null,null,null,null,null)),(l()(),i["\u0275eld"](2,0,null,null,1,":svg:g",[["ngx-charts-svg-linear-gradient",""],["orientation","vertical"]],null,null,null,c.b,c.a)),i["\u0275did"](3,573440,null,0,r.a,[],{orientation:[0,"orientation"],name:[1,"name"],stops:[2,"stops"]},null),(l()(),i["\u0275and"](16777216,null,null,1,null,A)),i["\u0275did"](5,16384,null,0,d.NgIf,[i.ViewContainerRef,i.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),i["\u0275eld"](6,16777216,null,null,3,":svg:g",[["class","circle"],["ngx-charts-circle",""],["ngx-tooltip",""]],[[2,"active",null]],[[null,"select"],[null,"activate"],[null,"deactivate"],[null,"focusin"],[null,"blur"],[null,"mouseenter"],[null,"mouseleave"],[null,"click"]],function(l,n,e){var t=!0,a=l.component;return"focusin"===n&&(t=!1!==i["\u0275nov"](l,7).onFocus()&&t),"blur"===n&&(t=!1!==i["\u0275nov"](l,7).onBlur()&&t),"mouseenter"===n&&(t=!1!==i["\u0275nov"](l,7).onMouseEnter()&&t),"mouseleave"===n&&(t=!1!==i["\u0275nov"](l,7).onMouseLeave(e.target)&&t),"click"===n&&(t=!1!==i["\u0275nov"](l,7).onMouseClick()&&t),"click"===n&&(t=!1!==i["\u0275nov"](l,8).onClick()&&t),"mouseenter"===n&&(t=!1!==i["\u0275nov"](l,8).onMouseEnter()&&t),"mouseleave"===n&&(t=!1!==i["\u0275nov"](l,8).onMouseLeave()&&t),"select"===n&&(t=!1!==a.onClick(e,a.circle.label)&&t),"activate"===n&&(t=!1!==a.activateCircle()&&t),"deactivate"===n&&(t=!1!==a.deactivateCircle()&&t),t},S,R)),i["\u0275did"](7,147456,null,0,I.a,[L.a,i.ViewContainerRef,i.Renderer],{tooltipTitle:[0,"tooltipTitle"],tooltipDisabled:[1,"tooltipDisabled"],tooltipPlacement:[2,"tooltipPlacement"],tooltipType:[3,"tooltipType"],tooltipTemplate:[4,"tooltipTemplate"],tooltipContext:[5,"tooltipContext"]},null),i["\u0275did"](8,573440,null,0,C.a,[],{cx:[0,"cx"],cy:[1,"cy"],r:[2,"r"],fill:[3,"fill"],data:[4,"data"],classNames:[5,"classNames"],pointerEvents:[6,"pointerEvents"]},{select:"select",activate:"activate",deactivate:"deactivate"}),i["\u0275pod"](9,{name:0})],function(l,n){var e=n.component;l(n,3,0,"vertical",e.gradientId,e.circle.gradientStops),l(n,5,0,e.barVisible&&"standard"===e.type),l(n,7,0,e.tooltipTemplate?void 0:e.getTooltipText(e.circle),e.tooltipDisabled,"top","tooltip",e.tooltipTemplate,e.circle.data),l(n,8,0,e.circle.cx,e.circle.cy,e.circle.radius,e.circle.color,e.circle.value,e.circle.classNames,0===e.circle.value?"none":"all")},function(l,n){var e=n.component;l(n,6,0,e.isActive(l(n,9,0,e.circle.seriesName)))})}function V(l){return i["\u0275vid"](2,[(l()(),i["\u0275and"](16777216,null,null,1,null,O)),i["\u0275did"](1,16384,null,0,d.NgIf,[i.ViewContainerRef,i.TemplateRef],{ngIf:[0,"ngIf"]},null)],function(l,n){l(n,1,0,n.component.circle)},null)}var E=e("H8yg"),N=i["\u0275crt"]({encapsulation:2,styles:[],data:{animation:[{type:7,name:"animationState",definitions:[{type:1,expr:"inactive => active",animation:[{type:6,styles:{opacity:0},offset:null},{type:4,styles:{type:6,styles:{opacity:.7},offset:null},timings:250}],options:null},{type:1,expr:"active => inactive",animation:[{type:6,styles:{opacity:.7},offset:null},{type:4,styles:{type:6,styles:{opacity:0},offset:null},timings:250}],options:null}],options:{}}]}});function G(l){return i["\u0275vid"](0,[(l()(),i["\u0275eld"](0,0,null,null,2,":xhtml:div",[["class","tooltip-item"]],null,null,null,null,null)),(l()(),i["\u0275eld"](1,0,null,null,0,":xhtml:span",[["class","tooltip-item-color"]],[[4,"background-color",null]],null,null,null,null)),(l()(),i["\u0275ted"](2,null,[" "," "]))],null,function(l,n){var e=n.component;l(n,1,0,n.context.$implicit.color),l(n,2,0,e.getToolTipText(n.context.$implicit))})}function M(l){return i["\u0275vid"](0,[(l()(),i["\u0275eld"](0,0,null,null,2,":xhtml:div",[["class","area-tooltip-container"]],null,null,null,null,null)),(l()(),i["\u0275and"](16777216,null,null,1,null,G)),i["\u0275did"](2,802816,null,0,d.NgForOf,[i.ViewContainerRef,i.TemplateRef,i.IterableDiffers],{ngForOf:[0,"ngForOf"]},null)],function(l,n){l(n,2,0,n.context.model)},null)}function P(l){return i["\u0275vid"](2,[i["\u0275qud"](402653184,1,{tooltipAnchor:0}),(l()(),i["\u0275eld"](1,0,null,null,4,":svg:g",[],null,null,null,null,null)),(l()(),i["\u0275eld"](2,0,null,null,0,":svg:rect",[["class","tooltip-area"],["style","opacity: 0; cursor: 'auto';"],["y","0"]],[[1,"x",0],[1,"width",0],[1,"height",0]],[[null,"mousemove"],[null,"mouseleave"]],function(l,n,e){var t=!0,i=l.component;return"mousemove"===n&&(t=!1!==i.mouseMove(e)&&t),"mouseleave"===n&&(t=!1!==i.hideTooltip()&&t),t},null,null)),(l()(),i["\u0275and"](0,[["defaultTooltipTemplate",2]],null,0,null,M)),(l()(),i["\u0275eld"](4,16777216,[[1,0],["tooltipAnchor",1]],null,1,":svg:rect",[["class","tooltip-anchor"],["ngx-tooltip",""],["y","0"]],[[24,"@animationState",0],[1,"x",0],[1,"width",0],[1,"height",0],[4,"opacity",null],[4,"pointer-events",null]],[[null,"focusin"],[null,"blur"],[null,"mouseenter"],[null,"mouseleave"],[null,"click"]],function(l,n,e){var t=!0;return"focusin"===n&&(t=!1!==i["\u0275nov"](l,5).onFocus()&&t),"blur"===n&&(t=!1!==i["\u0275nov"](l,5).onBlur()&&t),"mouseenter"===n&&(t=!1!==i["\u0275nov"](l,5).onMouseEnter()&&t),"mouseleave"===n&&(t=!1!==i["\u0275nov"](l,5).onMouseLeave(e.target)&&t),"click"===n&&(t=!1!==i["\u0275nov"](l,5).onMouseClick()&&t),t},null,null)),i["\u0275did"](5,147456,null,0,I.a,[L.a,i.ViewContainerRef,i.Renderer],{tooltipSpacing:[0,"tooltipSpacing"],tooltipDisabled:[1,"tooltipDisabled"],tooltipPlacement:[2,"tooltipPlacement"],tooltipType:[3,"tooltipType"],tooltipTemplate:[4,"tooltipTemplate"],tooltipContext:[5,"tooltipContext"],tooltipImmediateExit:[6,"tooltipImmediateExit"]},null)],function(l,n){var e=n.component;l(n,5,0,15,e.tooltipDisabled,"right","tooltip",e.tooltipTemplate?e.tooltipTemplate:i["\u0275nov"](n,3),e.anchorValues,!0)},function(l,n){var e=n.component;l(n,2,0,0,e.dims.width,e.dims.height),l(n,4,0,0!==e.anchorOpacity?"active":"inactive",e.anchorPos,1,e.dims.height,e.anchorOpacity,"none")})}var B=e("U3KO"),H=i["\u0275crt"]({encapsulation:2,styles:[[".timeline .brush-background{fill:rgba(0,0,0,.05)}.timeline .brush .selection{fill:rgba(0,0,0,.1);stroke-width:1px;stroke:#888}.timeline .brush .handle{fill-opacity:0}.timeline .embedded-chart{opacity:.6}"]],data:{}});function $(l){return i["\u0275vid"](2,[(l()(),i["\u0275eld"](0,0,null,null,6,":svg:g",[["class","timeline"]],[[1,"transform",0]],null,null,null,null)),(l()(),i["\u0275eld"](1,0,null,null,1,":svg:filter",[],[[1,"id",0]],null,null,null,null)),(l()(),i["\u0275eld"](2,0,null,null,0,":svg:feColorMatrix",[["in","SourceGraphic"],["type","matrix"],["values","0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0 0 0 1 0"]],null,null,null,null,null)),(l()(),i["\u0275eld"](3,0,null,null,1,":svg:g",[["class","embedded-chart"]],null,null,null,null,null)),i["\u0275ncd"](null,0),(l()(),i["\u0275eld"](5,0,null,null,0,":svg:rect",[["class","brush-background"],["x","0"],["y","0"]],[[1,"width",0],[1,"height",0]],null,null,null,null)),(l()(),i["\u0275eld"](6,0,null,null,0,":svg:g",[["class","brush"]],null,null,null,null,null))],null,function(l,n){var e=n.component;l(n,0,0,e.transform),l(n,1,0,e.filterId),l(n,5,0,e.view[0],e.height)})}var X=e("Vug8"),J=e("Se1k"),U=e("nJx2");e("l/X3"),e.d(n,"a",function(){return Y}),e.d(n,"b",function(){return _});var Y=i["\u0275crt"]({encapsulation:2,styles:[t.a],data:{animation:[{type:7,name:"animationState",definitions:[{type:1,expr:":leave",animation:[{type:6,styles:{opacity:1},offset:null},{type:4,styles:{type:6,styles:{opacity:0},offset:null},timings:500}],options:null}],options:{}}]}});function j(l){return i["\u0275vid"](0,[(l()(),i["\u0275eld"](0,0,null,null,1,":svg:g",[["ngx-charts-x-axis",""]],null,[[null,"dimensionsChanged"]],function(l,n,e){var t=!0;return"dimensionsChanged"===n&&(t=!1!==l.component.updateXAxisHeight(e)&&t),t},a.b,a.a)),i["\u0275did"](1,573440,null,0,o.a,[],{xScale:[0,"xScale"],dims:[1,"dims"],tickFormatting:[2,"tickFormatting"],showGridLines:[3,"showGridLines"],showLabel:[4,"showLabel"],labelText:[5,"labelText"],ticks:[6,"ticks"]},{dimensionsChanged:"dimensionsChanged"})],function(l,n){var e=n.component;l(n,1,0,e.xScale,e.dims,e.xAxisTickFormatting,e.showGridLines,e.showXAxisLabel,e.xAxisLabel,e.xAxisTicks)},null)}function W(l){return i["\u0275vid"](0,[(l()(),i["\u0275eld"](0,0,null,null,1,":svg:g",[["ngx-charts-y-axis",""]],null,[[null,"dimensionsChanged"]],function(l,n,e){var t=!0;return"dimensionsChanged"===n&&(t=!1!==l.component.updateYAxisWidth(e)&&t),t},u.b,u.a)),i["\u0275did"](1,573440,null,0,s.a,[],{yScale:[0,"yScale"],dims:[1,"dims"],tickFormatting:[2,"tickFormatting"],ticks:[3,"ticks"],showGridLines:[4,"showGridLines"],showLabel:[5,"showLabel"],labelText:[6,"labelText"],referenceLines:[7,"referenceLines"],showRefLines:[8,"showRefLines"],showRefLabels:[9,"showRefLabels"]},{dimensionsChanged:"dimensionsChanged"})],function(l,n){var e=n.component;l(n,1,0,e.yScale,e.dims,e.yAxisTickFormatting,e.yAxisTicks,e.showGridLines,e.showYAxisLabel,e.yAxisLabel,e.referenceLines,e.showRefLines,e.showRefLabels)},null)}function q(l){return i["\u0275vid"](0,[(l()(),i["\u0275eld"](0,0,null,null,2,":svg:g",[],[[24,"@animationState",0]],null,null,null,null)),(l()(),i["\u0275eld"](1,0,null,null,1,":svg:g",[["ngx-charts-line-series",""]],null,null,null,k,b)),i["\u0275did"](2,573440,null,0,x.a,[],{data:[0,"data"],xScale:[1,"xScale"],yScale:[2,"yScale"],colors:[3,"colors"],scaleType:[4,"scaleType"],curve:[5,"curve"],activeEntries:[6,"activeEntries"],rangeFillOpacity:[7,"rangeFillOpacity"],hasRange:[8,"hasRange"],animations:[9,"animations"]},null)],function(l,n){var e=n.component;l(n,2,0,n.context.$implicit,e.xScale,e.yScale,e.colors,e.scaleType,e.curve,e.activeEntries,e.rangeFillOpacity,e.hasRange,e.animations)},function(l,n){l(n,0,0,"active")})}function z(l){return i["\u0275vid"](0,[(l()(),i["\u0275eld"](0,0,null,null,2,":svg:g",[],null,null,null,null,null)),(l()(),i["\u0275eld"](1,0,null,null,1,":svg:g",[["ngx-charts-circle-series",""]],null,[[null,"select"],[null,"activate"],[null,"deactivate"]],function(l,n,e){var t=!0,i=l.component;return"select"===n&&(t=!1!==i.onClick(e,l.context.$implicit)&&t),"activate"===n&&(t=!1!==i.onActivate(e)&&t),"deactivate"===n&&(t=!1!==i.onDeactivate(e)&&t),t},V,F)),i["\u0275did"](2,638976,null,0,D.a,[],{data:[0,"data"],xScale:[1,"xScale"],yScale:[2,"yScale"],colors:[3,"colors"],scaleType:[4,"scaleType"],visibleValue:[5,"visibleValue"],activeEntries:[6,"activeEntries"],tooltipDisabled:[7,"tooltipDisabled"],tooltipTemplate:[8,"tooltipTemplate"]},{select:"select",activate:"activate",deactivate:"deactivate"})],function(l,n){var e=n.component;l(n,2,0,n.context.$implicit,e.xScale,e.yScale,e.colors,e.scaleType,e.hoveredVertical,e.activeEntries,e.tooltipDisabled,e.tooltipTemplate)},null)}function K(l){return i["\u0275vid"](0,[(l()(),i["\u0275eld"](0,0,null,null,4,":svg:g",[],null,[[null,"mouseleave"]],function(l,n,e){var t=!0;return"mouseleave"===n&&(t=!1!==l.component.hideCircles()&&t),t},null,null)),(l()(),i["\u0275eld"](1,0,null,null,1,":svg:g",[["ngx-charts-tooltip-area",""]],null,[[null,"hover"]],function(l,n,e){var t=!0;return"hover"===n&&(t=!1!==l.component.updateHoveredVertical(e)&&t),t},P,N)),i["\u0275did"](2,49152,null,0,E.a,[i.Renderer],{dims:[0,"dims"],xSet:[1,"xSet"],xScale:[2,"xScale"],yScale:[3,"yScale"],results:[4,"results"],colors:[5,"colors"],tooltipDisabled:[6,"tooltipDisabled"],tooltipTemplate:[7,"tooltipTemplate"]},{hover:"hover"}),(l()(),i["\u0275and"](16777216,null,null,1,null,z)),i["\u0275did"](4,802816,null,0,d.NgForOf,[i.ViewContainerRef,i.TemplateRef,i.IterableDiffers],{ngForOf:[0,"ngForOf"]},null)],function(l,n){var e=n.component;l(n,2,0,e.dims,e.xSet,e.xScale,e.yScale,e.results,e.colors,e.tooltipDisabled,e.seriesTooltipTemplate),l(n,4,0,e.results)},null)}function Q(l){return i["\u0275vid"](0,[(l()(),i["\u0275eld"](0,0,null,null,2,":svg:g",[],null,null,null,null,null)),(l()(),i["\u0275eld"](1,0,null,null,1,":svg:g",[["ngx-charts-line-series",""]],null,null,null,k,b)),i["\u0275did"](2,573440,null,0,x.a,[],{data:[0,"data"],xScale:[1,"xScale"],yScale:[2,"yScale"],colors:[3,"colors"],scaleType:[4,"scaleType"],curve:[5,"curve"],hasRange:[6,"hasRange"],animations:[7,"animations"]},null)],function(l,n){var e=n.component;l(n,2,0,n.context.$implicit,e.timelineXScale,e.timelineYScale,e.colors,e.scaleType,e.curve,e.hasRange,e.animations)},null)}function Z(l){return i["\u0275vid"](0,[(l()(),i["\u0275eld"](0,0,null,null,4,":svg:g",[["ngx-charts-timeline",""]],[[1,"transform",0]],[[null,"onDomainChange"]],function(l,n,e){var t=!0;return"onDomainChange"===n&&(t=!1!==l.component.updateDomain(e)&&t),t},$,H)),i["\u0275did"](1,573440,null,0,B.a,[i.ElementRef,i.ChangeDetectorRef],{view:[0,"view"],results:[1,"results"],scheme:[2,"scheme"],customColors:[3,"customColors"],legend:[4,"legend"],scaleType:[5,"scaleType"],height:[6,"height"]},{onDomainChange:"onDomainChange"}),i["\u0275pad"](2,2),(l()(),i["\u0275and"](16777216,null,0,1,null,Q)),i["\u0275did"](4,802816,null,0,d.NgForOf,[i.ViewContainerRef,i.TemplateRef,i.IterableDiffers],{ngForOf:[0,"ngForOf"],ngForTrackBy:[1,"ngForTrackBy"]},null)],function(l,n){var e=n.component;l(n,1,0,l(n,2,0,e.timelineWidth,e.height),e.results,e.scheme,e.customColors,e.legend,e.scaleType,e.timelineHeight),l(n,4,0,e.results,e.trackBy)},function(l,n){l(n,0,0,n.component.timelineTransform)})}function _(l){return i["\u0275vid"](2,[(l()(),i["\u0275eld"](0,16777216,null,null,18,"ngx-charts-chart",[],null,[[null,"legendLabelClick"],[null,"legendLabelActivate"],[null,"legendLabelDeactivate"]],function(l,n,e){var t=!0,i=l.component;return"legendLabelClick"===n&&(t=!1!==i.onClick(e)&&t),"legendLabelActivate"===n&&(t=!1!==i.onActivate(e)&&t),"legendLabelDeactivate"===n&&(t=!1!==i.onDeactivate(e)&&t),t},X.b,X.a)),i["\u0275prd"](512,null,L.a,L.a,[J.a]),i["\u0275did"](2,573440,null,0,U.a,[i.ViewContainerRef,L.a],{view:[0,"view"],showLegend:[1,"showLegend"],legendOptions:[2,"legendOptions"],activeEntries:[3,"activeEntries"],animations:[4,"animations"]},{legendLabelClick:"legendLabelClick",legendLabelActivate:"legendLabelActivate",legendLabelDeactivate:"legendLabelDeactivate"}),i["\u0275pad"](3,2),(l()(),i["\u0275eld"](4,0,null,0,2,":svg:defs",[],null,null,null,null,null)),(l()(),i["\u0275eld"](5,0,null,null,1,":svg:clipPath",[],[[1,"id",0]],null,null,null,null)),(l()(),i["\u0275eld"](6,0,null,null,0,":svg:rect",[],[[1,"width",0],[1,"height",0],[1,"transform",0]],null,null,null,null)),(l()(),i["\u0275eld"](7,0,null,0,9,":svg:g",[["class","line-chart chart"]],[[1,"transform",0]],null,null,null,null)),(l()(),i["\u0275and"](16777216,null,null,1,null,j)),i["\u0275did"](9,16384,null,0,d.NgIf,[i.ViewContainerRef,i.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),i["\u0275and"](16777216,null,null,1,null,W)),i["\u0275did"](11,16384,null,0,d.NgIf,[i.ViewContainerRef,i.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),i["\u0275eld"](12,0,null,null,4,":svg:g",[],[[1,"clip-path",0]],null,null,null,null)),(l()(),i["\u0275and"](16777216,null,null,1,null,q)),i["\u0275did"](14,802816,null,0,d.NgForOf,[i.ViewContainerRef,i.TemplateRef,i.IterableDiffers],{ngForOf:[0,"ngForOf"],ngForTrackBy:[1,"ngForTrackBy"]},null),(l()(),i["\u0275and"](16777216,null,null,1,null,K)),i["\u0275did"](16,16384,null,0,d.NgIf,[i.ViewContainerRef,i.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),i["\u0275and"](16777216,null,0,1,null,Z)),i["\u0275did"](18,16384,null,0,d.NgIf,[i.ViewContainerRef,i.TemplateRef],{ngIf:[0,"ngIf"]},null)],function(l,n){var e=n.component;l(n,2,0,l(n,3,0,e.width,e.height),e.legend,e.legendOptions,e.activeEntries,e.animations),l(n,9,0,e.xAxis),l(n,11,0,e.yAxis),l(n,14,0,e.results,e.trackBy),l(n,16,0,!e.tooltipDisabled),l(n,18,0,e.timeline&&"ordinal"!=e.scaleType)},function(l,n){var e=n.component;l(n,5,0,e.clipPathId),l(n,6,0,e.dims.width+10,e.dims.height+10,"translate(-5, -5)"),l(n,7,0,e.transform),l(n,12,0,e.clipPath)})}}}]);