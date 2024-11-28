import { Head, Link, createInertiaApp } from "@inertiajs/vue3";
import { useSSRContext, mergeProps, resolveComponent, withCtx, createVNode, createTextVNode, toDisplayString, openBlock, createBlock, Fragment, renderList, renderSlot, withDirectives, vModelSelect, createCommentVNode, createSSRApp, h } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrRenderStyle, ssrInterpolate, ssrRenderSlot, ssrIncludeBooleanAttr, ssrLooseContain, ssrRenderTeleport, ssrRenderList, ssrRenderClass, ssrLooseEqual } from "vue/server-renderer";
import { View, Promotion, BellFilled } from "@element-plus/icons-vue";
import { v4 } from "uuid";
import { createPopper } from "@popperjs/core";
import { Bar, Pie, Doughnut } from "vue-chartjs";
import { Chart, Title, Tooltip, Legend, ArcElement, BarElement, CategoryScale, LinearScale } from "chart.js";
import { utils, write } from "xlsx";
import pickBy from "lodash/pickBy.js";
import throttle from "lodash/throttle.js";
import mapValues from "lodash/mapValues.js";
import { renderToString } from "@vue/server-renderer";
import createServer from "@inertiajs/vue3/server";
const _imports_0$1 = "/build/assets/logo-BGF7x-pO.png";
const _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _sfc_main$r = {};
function _sfc_ssrRender$r(_ctx, _push, _parent, _attrs) {
  _push(`<img${ssrRenderAttrs(mergeProps({
    class: "h-30 w-auto",
    src: _imports_0$1,
    alt: ""
  }, _attrs))}>`);
}
const _sfc_setup$r = _sfc_main$r.setup;
_sfc_main$r.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Shared/Logo.vue");
  return _sfc_setup$r ? _sfc_setup$r(props, ctx) : void 0;
};
const Logo = /* @__PURE__ */ _export_sfc(_sfc_main$r, [["ssrRender", _sfc_ssrRender$r], ["__file", "/home/jolima/workingFiles/tabisv1/resources/js/Shared/Logo.vue"]]);
const _sfc_main$q = {
  props: {
    name: String
  }
};
function _sfc_ssrRender$q(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  if ($props.name === "cheveron-down") {
    _push(`<svg${ssrRenderAttrs(mergeProps({
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 20 20"
    }, _attrs))}><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"></path></svg>`);
  } else if ($props.name === "cheveron-right") {
    _push(`<svg${ssrRenderAttrs(mergeProps({
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 20 20"
    }, _attrs))}><polygon points="12.95 10.707 13.657 10 8 4.343 6.586 5.757 10.828 10 6.586 14.243 8 15.657 12.95 10.707"></polygon></svg>`);
  } else if ($props.name === "dashboard") {
    _push(`<svg${ssrRenderAttrs(mergeProps({
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 20 20"
    }, _attrs))}><path d="M10 20a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm-5.6-4.29a9.95 9.95 0 0 1 11.2 0 8 8 0 1 0-11.2 0zm6.12-7.64l3.02-3.02 1.41 1.41-3.02 3.02a2 2 0 1 1-1.41-1.41z"></path></svg>`);
  } else if ($props.name === "office") {
    _push(`<svg${ssrRenderAttrs(mergeProps({
      xmlns: "http://www.w3.org/2000/svg",
      width: "100",
      height: "100",
      viewBox: "0 0 100 100"
    }, _attrs))}><path fill-rule="evenodd" d="M7 0h86v100H57.108V88.418H42.892V100H7V0zm9 64h11v15H16V64zm57 0h11v15H73V64zm-19 0h11v15H54V64zm-19 0h11v15H35V64zM16 37h11v15H16V37zm57 0h11v15H73V37zm-19 0h11v15H54V37zm-19 0h11v15H35V37zM16 11h11v15H16V11zm57 0h11v15H73V11zm-19 0h11v15H54V11zm-19 0h11v15H35V11z"></path></svg>`);
  } else if ($props.name === "printer") {
    _push(`<svg${ssrRenderAttrs(mergeProps({
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 20 20"
    }, _attrs))}><path d="M4 16H0V6h20v10h-4v4H4v-4zm2-4v6h8v-6H6zM4 0h12v5H4V0zM2 8v2h2V8H2zm4 0v2h2V8H6z"></path></svg>`);
  } else if ($props.name === "trash") {
    _push(`<svg${ssrRenderAttrs(mergeProps({
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 20 20"
    }, _attrs))}><path d="M6 2l2-2h4l2 2h4v2H2V2h4zM3 6h14l-1 14H4L3 6zm5 2v10h1V8H8zm3 0v10h1V8h-1z"></path></svg>`);
  } else if ($props.name === "users") {
    _push(`<svg${ssrRenderAttrs(mergeProps({
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 20 20"
    }, _attrs))}><path d="M7 8a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm0 1c2.15 0 4.2.4 6.1 1.09L12 16h-1.25L10 20H4l-.75-4H2L.9 10.09A17.93 17.93 0 0 1 7 9zm8.31.17c1.32.18 2.59.48 3.8.92L18 16h-1.25L16 20h-3.96l.37-2h1.25l1.65-8.83zM13 0a4 4 0 1 1-1.33 7.76 5.96 5.96 0 0 0 0-7.52C12.1.1 12.53 0 13 0z"></path></svg>`);
  } else if ($props.name === "patients") {
    _push(`<svg${ssrRenderAttrs(mergeProps({
      viewBox: "0 0 48 48",
      xmlns: "http://www.w3.org/2000/svg",
      fill: "#000000"
    }, _attrs))}><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><g id="Layer_2" data-name="Layer 2"><g id="invisible_box" data-name="invisible box"><rect width="48" height="48" fill="none"></rect></g> <g id="Medical"><g><path d="M45.2,33.3a17.4,17.4,0,0,0-20.4,0,1.7,1.7,0,0,0-.8,1.4v5.8A1.6,1.6,0,0,0,25.6,42H44.4A1.6,1.6,0,0,0,46,40.5V34.7A1.7,1.7,0,0,0,45.2,33.3ZM42,38H28V36a13.5,13.5,0,0,1,14,0Z"></path> <path d="M35,28a6,6,0,1,0-6-6A6,6,0,0,0,35,28Zm0-8a2,2,0,1,1-2,2A2,2,0,0,1,35,20Z"></path> <path d="M26,28V9H22V4H6V9H2V40a2,2,0,0,0,4,0V13h4V8h8v5h4V28a2,2,0,0,0,4,0Z"></path> <path d="M15,17h2a1,1,0,0,0,0-2H15V13a1,1,0,0,0-2,0v2H11a1,1,0,0,0,0,2h2v2a1,1,0,0,0,2,0Z"></path> <rect x="9" y="22" width="4" height="4"></rect> <rect x="15" y="22" width="4" height="4"></rect> <rect x="9" y="28" width="4" height="4"></rect> <rect x="15" y="28" width="4" height="4"></rect> <rect x="9" y="34" width="4" height="4"></rect> <rect x="15" y="34" width="4" height="4"></rect></g></g></g></g></svg>`);
  } else if ($props.name === "supplies") {
    _push(`<svg${ssrRenderAttrs(mergeProps({
      fill: "#000000",
      viewBox: "0 0 24 24",
      xmlns: "http://www.w3.org/2000/svg"
    }, _attrs))}><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M20.929,1.629A1,1,0,0,0,20,1H4a1,1,0,0,0-.929.629C1.04,6.778,1.022,6.589,1.008,6.961,1.007,6.975,1,6.986,1,7V22a1,1,0,0,0,1,1H22a1,1,0,0,0,1-1V7C23,6.539,22.5,5.7,20.929,1.629ZM4.677,3H19.323l1.2,3H3.477ZM21,21H3V8H21ZM11,15.5H9v-2h2v-2h2v2h2v2H13v2H11Z"></path></g></svg>`);
  } else if ($props.name === "history") {
    _push(`<svg${ssrRenderAttrs(mergeProps({
      viewBox: "0 0 24 24",
      xmlns: "http://www.w3.org/2000/svg"
    }, _attrs))}><path d="M12,2A10,10,0,0,0,5.12,4.77V3a1,1,0,0,0-2,0V7.5a1,1,0,0,0,1,1H8.62a1,1,0,0,0,0-2H6.22A8,8,0,1,1,4,12a1,1,0,0,0-2,0A10,10,0,1,0,12,2Zm0,6a1,1,0,0,0-1,1v3a1,1,0,0,0,1,1h2a1,1,0,0,0,0-2H13V9A1,1,0,0,0,12,8Z" fill="#6563ff"></path></svg>`);
  } else if ($props.name === "buble") {
    _push(`<svg${ssrRenderAttrs(mergeProps({
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, _attrs))}><path fill="#6563ff" d="M273.536 736H800a64 64 0 0 0 64-64V256a64 64 0 0 0-64-64H224a64 64 0 0 0-64 64v570.88zM296 800 147.968 918.4A32 32 0 0 1 96 893.44V256a128 128 0 0 1 128-128h576a128 128 0 0 1 128 128v416a128 128 0 0 1-128 128z"></path><path fill="#6563ff" d="M512 499.2a51.2 51.2 0 1 1 0-102.4 51.2 51.2 0 0 1 0 102.4zm192 0a51.2 51.2 0 1 1 0-102.4 51.2 51.2 0 0 1 0 102.4zm-384 0a51.2 51.2 0 1 1 0-102.4 51.2 51.2 0 0 1 0 102.4z"></path></svg>`);
  } else {
    _push(`<!---->`);
  }
}
const _sfc_setup$q = _sfc_main$q.setup;
_sfc_main$q.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Shared/Icon.vue");
  return _sfc_setup$q ? _sfc_setup$q(props, ctx) : void 0;
};
const Icon = /* @__PURE__ */ _export_sfc(_sfc_main$q, [["ssrRender", _sfc_ssrRender$q], ["__file", "/home/jolima/workingFiles/tabisv1/resources/js/Shared/Icon.vue"]]);
const _imports_0 = "/build/assets/dog-Ces9k5an.png";
const _sfc_main$p = {
  components: {
    Head,
    Link,
    Logo,
    Icon,
    View,
    Promotion
  },
  props: {
    auth: Object
  }
};
function _sfc_ssrRender$p(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Head = resolveComponent("Head");
  const _component_Link = resolveComponent("Link");
  const _component_Logo = resolveComponent("Logo");
  const _component_el_icon = resolveComponent("el-icon");
  const _component_View = resolveComponent("View");
  const _component_Promotion = resolveComponent("Promotion");
  _push(`<!--[-->`);
  _push(ssrRenderComponent(_component_Head, { title: "Home" }, null, _parent));
  _push(`<div class="bg-gray-100 min-h-screen" data-v-529a9e67><nav class="bg-gray-50 shadow-lg py-4 px-10 flex justify-between items-center" data-v-529a9e67>`);
  _push(ssrRenderComponent(_component_Link, {
    class: "mt-1",
    href: "/"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_Logo, {
          class: "fill-white",
          style: { "width": "130px", "height": "55px" }
        }, null, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_Logo, {
            class: "fill-white",
            style: { "width": "130px", "height": "55px" }
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<div class="space-x-8" data-v-529a9e67><a href="/login" class="px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600" data-v-529a9e67>Login</a></div></nav><div class="relative h-screen bg-white flex items-center justify-between" data-v-529a9e67><div class="ml-12" data-v-529a9e67><h1 class="text-6xl font-bold text-blue-900" data-v-529a9e67>DON&#39;T GET FOOLED</h1><h2 class="text-6xl font-bold text-orange-500" data-v-529a9e67>BY RABIES</h2></div><div class="relative flex items-center justify-center w-1/2 h-full" data-v-529a9e67><div class="absolute inset-0 w-full h-full bg-blue-900 clip-polygon" data-v-529a9e67></div><img${ssrRenderAttr("src", _imports_0)} alt="Dog with bone" class="relative w-full object-cover z-10" data-v-529a9e67></div></div><div class="py-12 text-center bg-white" data-v-529a9e67><div class="grid grid-cols-1 gap-4 sm:grid-cols-2" data-v-529a9e67><div class="flex flex-col items-center justify-around p-4 m-4 w-80 h-80 rounded-2xl cursor-pointer" style="${ssrRenderStyle({ "transform": "translate(0px, 0px)", "opacity": "1" })}" data-v-529a9e67><div class="absolute z-0 w-full h-full text-white transform scale-x-105 scale-y-95 bg-blue-900 rounded-xl -rotate-2" style="${ssrRenderStyle({ "z-index": "-1" })}" data-v-529a9e67></div><div class="absolute z-0 w-full h-full text-white transform scale-x-105 scale-y-95 bg-orange-500 rounded-xl rotate-2" style="${ssrRenderStyle({ "z-index": "-1" })}" data-v-529a9e67></div><div class="absolute z-0 w-full h-full transform scale-x-105 scale-y-95 bg-white rounded-xl" style="${ssrRenderStyle({ "z-index": "-1" })}" data-v-529a9e67></div><h3 class="z-10 p-2 text-3xl font-semibold text-blue-900 hover:scale-110 transition-transform duration-300" data-v-529a9e67>VISION</h3><div class="z-10 p-2 text-blue-900" data-v-529a9e67>`);
  _push(ssrRenderComponent(_component_el_icon, { size: 100 }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_View, { class: "hover:scale-110 transition-transform duration-300" }, null, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_View, { class: "hover:scale-110 transition-transform duration-300" })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div><div class="z-10 p-2 text-sm text-center text-gray-500 hover:scale-110 transition-transform duration-300" data-v-529a9e67>Health community working together for a better quality of life.</div></div><div class="flex flex-col items-center justify-around p-4 m-4 w-80 h-80 rounded-2xl cursor-pointer" style="${ssrRenderStyle({ "transform": "translate(0px, 0px)", "opacity": "1" })}" data-v-529a9e67><div class="absolute z-0 w-full h-full text-white transform scale-x-105 scale-y-95 bg-blue-900 rounded-xl -rotate-2" style="${ssrRenderStyle({ "z-index": "-1" })}" data-v-529a9e67></div><div class="absolute z-0 w-full h-full text-white transform scale-x-105 scale-y-95 bg-orange-500 rounded-xl rotate-2" style="${ssrRenderStyle({ "z-index": "-1" })}" data-v-529a9e67></div><div class="absolute z-0 w-full h-full transform scale-x-105 scale-y-95 bg-white rounded-xl" style="${ssrRenderStyle({ "z-index": "-1" })}" data-v-529a9e67></div><h3 class="z-10 p-2 text-3xl font-semibold text-blue-900 hover:scale-110 transition-transform duration-300" data-v-529a9e67>MISSION</h3><div class="z-10 p-2 text-blue-900" data-v-529a9e67>`);
  _push(ssrRenderComponent(_component_el_icon, { size: 100 }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_Promotion, { class: "hover:scale-110 transition-transform duration-300" }, null, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_Promotion, { class: "hover:scale-110 transition-transform duration-300" })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div><div class="z-10 p-2 text-sm text-center text-gray-500 hover:scale-110 transition-transform duration-300" data-v-529a9e67>Promotes multi-sectoral partnership and community involvement for self commitment and quality health care delivery..</div></div></div></div><section class="py-12 text-center bg-blue-100" data-v-529a9e67><h2 class="text-3xl font-bold mb-8" data-v-529a9e67>Need Any Help?</h2><div class="grid grid-cols-1 md:grid-cols-2 gap-8 px-8" data-v-529a9e67><div class="flex flex-col items-center text-blue-900" data-v-529a9e67><p data-v-529a9e67><strong data-v-529a9e67>Contact:</strong></p><p data-v-529a9e67>(042) 713-2009 / 797-6976</p><p data-v-529a9e67>(042) 719-5599</p><p data-v-529a9e67>Email: <a href="mailto:cpvet_tayabas@yahoo.com" class="underline" data-v-529a9e67>cpvet_tayabas@yahoo.com</a></p></div><div class="bg-white p-6 rounded-lg shadow-lg" data-v-529a9e67><h3 class="text-xl font-bold mb-4" data-v-529a9e67>Fill the form to contact us directly</h3><form data-v-529a9e67><div class="mb-4" data-v-529a9e67><label for="name" class="block text-left text-blue-900" data-v-529a9e67>Name</label><input id="name" type="text" class="w-full border border-gray-300 p-2 rounded-lg" data-v-529a9e67></div><div class="mb-4" data-v-529a9e67><label for="email" class="block text-left text-blue-900" data-v-529a9e67>Email Address</label><input id="email" type="email" class="w-full border border-gray-300 p-2 rounded-lg" data-v-529a9e67></div><div class="mb-4" data-v-529a9e67><label for="phone" class="block text-left text-blue-900" data-v-529a9e67>Mobile Number</label><input id="phone" type="text" class="w-full border border-gray-300 p-2 rounded-lg" data-v-529a9e67></div><div class="mb-4" data-v-529a9e67><label for="message" class="block text-left text-blue-900" data-v-529a9e67>Message</label><textarea id="message" rows="4" class="w-full border border-gray-300 p-2 rounded-lg" data-v-529a9e67></textarea></div><button type="submit" class="bg-orange-500 text-white px-4 py-2 rounded-lg" data-v-529a9e67>Send Message</button></form></div></div></section><footer class="py-4 bg-blue-900 text-white text-center" data-v-529a9e67><p data-v-529a9e67>© TABIS SYSTEM 2024</p></footer></div><!--]-->`);
}
const _sfc_setup$p = _sfc_main$p.setup;
_sfc_main$p.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Auth/Index.vue");
  return _sfc_setup$p ? _sfc_setup$p(props, ctx) : void 0;
};
const Index$4 = /* @__PURE__ */ _export_sfc(_sfc_main$p, [["ssrRender", _sfc_ssrRender$p], ["__scopeId", "data-v-529a9e67"], ["__file", "/home/jolima/workingFiles/tabisv1/resources/js/Pages/Auth/Index.vue"]]);
const __vite_glob_0_0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Index$4
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$o = {
  inheritAttrs: false,
  props: {
    id: {
      type: String,
      default() {
        return `text-input-${v4()}`;
      }
    },
    type: {
      type: String,
      default: "text"
    },
    error: String,
    label: String,
    modelValue: String
  },
  emits: ["update:modelValue"],
  methods: {
    focus() {
      this.$refs.input.focus();
    },
    select() {
      this.$refs.input.select();
    },
    setSelectionRange(start, end) {
      this.$refs.input.setSelectionRange(start, end);
    }
  }
};
function _sfc_ssrRender$o(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({
    class: _ctx.$attrs.class
  }, _attrs))}>`);
  if ($props.label) {
    _push(`<label class="form-label"${ssrRenderAttr("for", $props.id)}>${ssrInterpolate($props.label)}:</label>`);
  } else {
    _push(`<!---->`);
  }
  _push(`<input${ssrRenderAttrs(mergeProps({
    id: $props.id,
    ref: "input"
  }, { ..._ctx.$attrs, class: null }, {
    class: ["form-input", { error: $props.error }],
    type: $props.type,
    value: $props.modelValue
  }))}>`);
  if ($props.error) {
    _push(`<div class="form-error">${ssrInterpolate($props.error)}</div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div>`);
}
const _sfc_setup$o = _sfc_main$o.setup;
_sfc_main$o.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Shared/TextInput.vue");
  return _sfc_setup$o ? _sfc_setup$o(props, ctx) : void 0;
};
const TextInput = /* @__PURE__ */ _export_sfc(_sfc_main$o, [["ssrRender", _sfc_ssrRender$o], ["__file", "/home/jolima/workingFiles/tabisv1/resources/js/Shared/TextInput.vue"]]);
const _sfc_main$n = {
  props: {
    loading: Boolean
  }
};
function _sfc_ssrRender$n(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<button${ssrRenderAttrs(mergeProps({
    disabled: $props.loading,
    class: "flex items-center"
  }, _attrs))}>`);
  if ($props.loading) {
    _push(`<div class="btn-spinner mr-2"></div>`);
  } else {
    _push(`<!---->`);
  }
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</button>`);
}
const _sfc_setup$n = _sfc_main$n.setup;
_sfc_main$n.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Shared/LoadingButton.vue");
  return _sfc_setup$n ? _sfc_setup$n(props, ctx) : void 0;
};
const LoadingButton = /* @__PURE__ */ _export_sfc(_sfc_main$n, [["ssrRender", _sfc_ssrRender$n], ["__file", "/home/jolima/workingFiles/tabisv1/resources/js/Shared/LoadingButton.vue"]]);
const _sfc_main$m = {
  components: {
    Head,
    LoadingButton,
    Logo,
    TextInput,
    Link
  },
  data() {
    return {
      form: this.$inertia.form({
        email: "",
        password: "",
        user_type: "",
        remember: false
      })
    };
  },
  methods: {
    login() {
      this.form.post("/login");
    }
  }
};
function _sfc_ssrRender$m(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Head = resolveComponent("Head");
  const _component_Link = resolveComponent("Link");
  const _component_logo = resolveComponent("logo");
  const _component_text_input = resolveComponent("text-input");
  const _component_loading_button = resolveComponent("loading-button");
  _push(`<!--[-->`);
  _push(ssrRenderComponent(_component_Head, { title: "Login" }, null, _parent));
  _push(`<div class="flex items-center justify-center p-6 min-h-screen bg-white-800 home" data-v-8c1c95a9><div class="w-full max-w-md" data-v-8c1c95a9><form class="mt-8 bg-white rounded-lg shadow-xl overflow-hidden" data-v-8c1c95a9><div class="px-10 py-12" data-v-8c1c95a9>`);
  _push(ssrRenderComponent(_component_Link, {
    class: "mt-1",
    href: "/"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_logo, {
          class: "block mx-auto w-full max-w-xs fill-white",
          height: "50"
        }, null, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_logo, {
            class: "block mx-auto w-full max-w-xs fill-white",
            height: "50"
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<div class="mt-6 mx-auto w-24 border-b-2" data-v-8c1c95a9></div>`);
  _push(ssrRenderComponent(_component_text_input, {
    modelValue: $data.form.email,
    "onUpdate:modelValue": ($event) => $data.form.email = $event,
    error: $data.form.errors.email,
    class: "mt-10",
    label: "Email",
    type: "email",
    autofocus: "",
    autocapitalize: "off"
  }, null, _parent));
  _push(ssrRenderComponent(_component_text_input, {
    modelValue: $data.form.password,
    "onUpdate:modelValue": ($event) => $data.form.password = $event,
    error: $data.form.errors.password,
    class: "mt-6",
    label: "Password",
    type: "password"
  }, null, _parent));
  _push(`<label class="flex items-center mt-6 select-none" for="remember" data-v-8c1c95a9><input id="remember"${ssrIncludeBooleanAttr(Array.isArray($data.form.remember) ? ssrLooseContain($data.form.remember, null) : $data.form.remember) ? " checked" : ""} class="mr-1" type="checkbox" data-v-8c1c95a9><span class="text-sm" data-v-8c1c95a9>Remember Me</span></label></div><div class="flex px-10 py-4 bg-gray-100 border-t border-gray-100" data-v-8c1c95a9>`);
  _push(ssrRenderComponent(_component_loading_button, {
    loading: $data.form.processing,
    class: "btn-indigo ml-auto",
    type: "submit"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Login`);
      } else {
        return [
          createTextVNode("Login")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></form></div></div><!--]-->`);
}
const _sfc_setup$m = _sfc_main$m.setup;
_sfc_main$m.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Credential/Login.vue");
  return _sfc_setup$m ? _sfc_setup$m(props, ctx) : void 0;
};
const Login = /* @__PURE__ */ _export_sfc(_sfc_main$m, [["ssrRender", _sfc_ssrRender$m], ["__scopeId", "data-v-8c1c95a9"], ["__file", "/home/jolima/workingFiles/tabisv1/resources/js/Pages/Credential/Login.vue"]]);
const __vite_glob_0_1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Login
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$l = {
  props: {
    placement: {
      type: String,
      default: "bottom-end"
    },
    autoClose: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      show: false
    };
  },
  watch: {
    show(show) {
      if (show) {
        this.$nextTick(() => {
          this.popper = createPopper(this.$el, this.$refs.dropdown, {
            placement: this.placement,
            modifiers: [
              {
                name: "preventOverflow",
                options: {
                  altBoundary: true
                }
              }
            ]
          });
        });
      } else if (this.popper) {
        setTimeout(() => this.popper.destroy(), 100);
      }
    }
  },
  mounted() {
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        this.show = false;
      }
    });
  }
};
function _sfc_ssrRender$l(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<button${ssrRenderAttrs(mergeProps({ type: "button" }, _attrs))}>`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  if ($data.show) {
    ssrRenderTeleport(_push, (_push2) => {
      _push2(`<div><div style="${ssrRenderStyle({ "position": "fixed", "top": "0", "right": "0", "left": "0", "bottom": "0", "z-index": "99998", "background": "black", "opacity": "0.2" })}"></div><div style="${ssrRenderStyle({ "position": "absolute", "z-index": "99999" })}">`);
      ssrRenderSlot(_ctx.$slots, "dropdown", {}, null, _push2, _parent);
      _push2(`</div></div>`);
    }, "#dropdown", false, _parent);
  } else {
    _push(`<!---->`);
  }
  _push(`</button>`);
}
const _sfc_setup$l = _sfc_main$l.setup;
_sfc_main$l.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Shared/Dropdown.vue");
  return _sfc_setup$l ? _sfc_setup$l(props, ctx) : void 0;
};
const Dropdown = /* @__PURE__ */ _export_sfc(_sfc_main$l, [["ssrRender", _sfc_ssrRender$l], ["__file", "/home/jolima/workingFiles/tabisv1/resources/js/Shared/Dropdown.vue"]]);
const _sfc_main$k = {
  components: {
    Icon,
    Link
  },
  methods: {
    isUrl() {
      let currentUrl = this.$page.url;
      this.currentPage = currentUrl;
      console.log("cc", this.currentPage);
    }
  },
  props: {
    role: String,
    url: String
  },
  data() {
    return {
      menuList: [
        {
          page: "Dashboard",
          path: "/",
          icon: "dashboard"
        },
        {
          page: "Users",
          path: "/users",
          icon: "users"
        },
        {
          page: "Patients",
          path: "/patients",
          icon: "patients"
        },
        {
          page: "Supplies",
          path: "/medical-supplies",
          icon: "supplies"
        }
      ],
      currentPage: "/"
    };
  }
};
function _sfc_ssrRender$k(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Link = resolveComponent("Link");
  const _component_icon = resolveComponent("icon");
  _push(`<div${ssrRenderAttrs(_attrs)}><!--[-->`);
  ssrRenderList($props.role ? $data.menuList : [$data.menuList[0], $data.menuList[2]], (menu, key) => {
    _push(`<div class="mb-4">`);
    _push(ssrRenderComponent(_component_Link, {
      class: "group flex items-center py-3",
      href: menu.path,
      onClick: ($event) => $options.isUrl()
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(ssrRenderComponent(_component_icon, {
            name: menu.icon,
            class: ["mr-2 w-4 h-4", menu.path === $data.currentPage ? "fill-indigo-800" : "fill-indigo-500 group-hover:fill-orange-800"]
          }, null, _parent2, _scopeId));
          _push2(`<div class="${ssrRenderClass(menu.path === $data.currentPage ? "text-indigo-800" : "text-indigo-500 group-hover:text-orange-800")}"${_scopeId}>${ssrInterpolate(menu.page)}</div>`);
        } else {
          return [
            createVNode(_component_icon, {
              name: menu.icon,
              class: ["mr-2 w-4 h-4", menu.path === $data.currentPage ? "fill-indigo-800" : "fill-indigo-500 group-hover:fill-orange-800"]
            }, null, 8, ["name", "class"]),
            createVNode("div", {
              class: menu.path === $data.currentPage ? "text-indigo-800" : "text-indigo-500 group-hover:text-orange-800"
            }, toDisplayString(menu.page), 3)
          ];
        }
      }),
      _: 2
    }, _parent));
    _push(`</div>`);
  });
  _push(`<!--]--></div>`);
}
const _sfc_setup$k = _sfc_main$k.setup;
_sfc_main$k.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Shared/MainMenu.vue");
  return _sfc_setup$k ? _sfc_setup$k(props, ctx) : void 0;
};
const MainMenu = /* @__PURE__ */ _export_sfc(_sfc_main$k, [["ssrRender", _sfc_ssrRender$k], ["__file", "/home/jolima/workingFiles/tabisv1/resources/js/Shared/MainMenu.vue"]]);
const _sfc_main$j = {
  data() {
    return {
      show: true
    };
  },
  watch: {
    "$page.props.flash": {
      handler() {
        this.show = true;
      },
      deep: true
    }
  }
};
function _sfc_ssrRender$j(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}>`);
  if (_ctx.$page.props.flash.success && $data.show) {
    _push(`<div class="flex items-center justify-between mb-8 max-w-3xl bg-green-500 rounded"><div class="flex items-center"><svg class="shrink-0 ml-4 mr-2 w-4 h-4 fill-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><polygon points="0 11 2 9 7 14 18 3 20 5 7 18"></polygon></svg><div class="py-4 text-white text-sm font-medium">${ssrInterpolate(_ctx.$page.props.flash.success)}</div></div><button type="button" class="group mr-2 p-2"><svg class="block w-2 h-2 fill-green-800 group-hover:fill-white" xmlns="http://www.w3.org/2000/svg" width="235.908" height="235.908" viewBox="278.046 126.846 235.908 235.908"><path d="M506.784 134.017c-9.56-9.56-25.06-9.56-34.62 0L396 210.18l-76.164-76.164c-9.56-9.56-25.06-9.56-34.62 0-9.56 9.56-9.56 25.06 0 34.62L361.38 244.8l-76.164 76.165c-9.56 9.56-9.56 25.06 0 34.62 9.56 9.56 25.06 9.56 34.62 0L396 279.42l76.164 76.165c9.56 9.56 25.06 9.56 34.62 0 9.56-9.56 9.56-25.06 0-34.62L430.62 244.8l76.164-76.163c9.56-9.56 9.56-25.06 0-34.62z"></path></svg></button></div>`);
  } else {
    _push(`<!---->`);
  }
  if ((_ctx.$page.props.flash.error || Object.keys(_ctx.$page.props.errors).length > 0) && $data.show) {
    _push(`<div class="flex items-center justify-between mb-8 max-w-3xl bg-red-500 rounded"><div class="flex items-center"><svg class="shrink-0 ml-4 mr-2 w-4 h-4 fill-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm1.41-1.41A8 8 0 1 0 15.66 4.34 8 8 0 0 0 4.34 15.66zm9.9-8.49L11.41 10l2.83 2.83-1.41 1.41L10 11.41l-2.83 2.83-1.41-1.41L8.59 10 5.76 7.17l1.41-1.41L10 8.59l2.83-2.83 1.41 1.41z"></path></svg>`);
    if (_ctx.$page.props.flash.error) {
      _push(`<div class="py-4 text-white text-sm font-medium">${ssrInterpolate(_ctx.$page.props.flash.error)}</div>`);
    } else {
      _push(`<div class="py-4 text-white text-sm font-medium"><span>There is an error on this form.</span></div>`);
    }
    _push(`</div><button type="button" class="group mr-2 p-2"><svg class="block w-2 h-2 fill-red-800 group-hover:fill-white" xmlns="http://www.w3.org/2000/svg" width="235.908" height="235.908" viewBox="278.046 126.846 235.908 235.908"><path d="M506.784 134.017c-9.56-9.56-25.06-9.56-34.62 0L396 210.18l-76.164-76.164c-9.56-9.56-25.06-9.56-34.62 0-9.56 9.56-9.56 25.06 0 34.62L361.38 244.8l-76.164 76.165c-9.56 9.56-9.56 25.06 0 34.62 9.56 9.56 25.06 9.56 34.62 0L396 279.42l76.164 76.165c9.56 9.56 25.06 9.56 34.62 0 9.56-9.56 9.56-25.06 0-34.62L430.62 244.8l76.164-76.163c9.56-9.56 9.56-25.06 0-34.62z"></path></svg></button></div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div>`);
}
const _sfc_setup$j = _sfc_main$j.setup;
_sfc_main$j.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Shared/FlashMessages.vue");
  return _sfc_setup$j ? _sfc_setup$j(props, ctx) : void 0;
};
const FlashMessages = /* @__PURE__ */ _export_sfc(_sfc_main$j, [["ssrRender", _sfc_ssrRender$j], ["__file", "/home/jolima/workingFiles/tabisv1/resources/js/Shared/FlashMessages.vue"]]);
const _sfc_main$i = {
  components: {
    Dropdown,
    FlashMessages,
    Icon,
    Link,
    Logo,
    MainMenu,
    BellFilled,
    Notification
  },
  props: {
    auth: Object
  },
  data() {
    return {
      form: this.$inertia.form({
        read: 1
      })
    };
  },
  methods: {
    markAsRead(notificationId) {
      this.$inertia.put(`/notifications/${notificationId}/mark-as-read`);
    },
    filterRead(arr) {
      return arr.filter((item) => (item == null ? void 0 : item.read) === 0);
    }
  }
};
function _sfc_ssrRender$i(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Link = resolveComponent("Link");
  const _component_logo = resolveComponent("logo");
  const _component_dropdown = resolveComponent("dropdown");
  const _component_main_menu = resolveComponent("main-menu");
  const _component_el_badge = resolveComponent("el-badge");
  const _component_el_button = resolveComponent("el-button");
  const _component_el_icon = resolveComponent("el-icon");
  const _component_BellFilled = resolveComponent("BellFilled");
  const _component_icon = resolveComponent("icon");
  const _component_flash_messages = resolveComponent("flash-messages");
  _push(`<div${ssrRenderAttrs(_attrs)}><div id="dropdown"></div><div class="md:flex md:flex-col"><div class="md:flex md:flex-col md:h-screen"><div class="md:flex md:shrink-0"><div class="flex items-center justify-between px-6 py-4 bg-white-400 md:shrink-0 md:justify-center md:w-56">`);
  _push(ssrRenderComponent(_component_Link, {
    class: "mt-1",
    href: "/"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_logo, {
          class: "fill-white",
          width: "120",
          height: "28"
        }, null, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_logo, {
            class: "fill-white",
            width: "120",
            height: "28"
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_dropdown, {
    class: "md:hidden",
    placement: "bottom-end"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<svg class="w-6 h-6 fill-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"${_scopeId}><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"${_scopeId}></path></svg>`);
      } else {
        return [
          (openBlock(), createBlock("svg", {
            class: "w-6 h-6 fill-white",
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 20 20"
          }, [
            createVNode("path", { d: "M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" })
          ]))
        ];
      }
    }),
    dropdown: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="mt-2 px-8 py-4 bg-white rounded shadow-lg"${_scopeId}>`);
        _push2(ssrRenderComponent(_component_main_menu, {
          role: $props.auth.user.admin
        }, null, _parent2, _scopeId));
        _push2(`</div>`);
      } else {
        return [
          createVNode("div", { class: "mt-2 px-8 py-4 bg-white rounded shadow-lg" }, [
            createVNode(_component_main_menu, {
              role: $props.auth.user.admin
            }, null, 8, ["role"])
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div><div class="md:text-md flex items-center justify-between p-4 w-full text-sm bg-white border-b md:px-12 md:py-0"><div class="mr-4 mt-1 text-indigo-800 text-transform uppercase font-bold">${ssrInterpolate($props.auth.user.account.name)}</div><div class="mt-1" placement="bottom-end">`);
  _push(ssrRenderComponent(_component_dropdown, {
    class: "ml-5",
    placement: "bottom-end"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      var _a, _b, _c, _d, _e, _f, _g, _h;
      if (_push2) {
        _push2(`<div class="group flex items-center cursor-pointer select-none"${_scopeId}><div${_scopeId}>`);
        _push2(ssrRenderComponent(_component_el_badge, {
          value: $options.filterRead((_b = (_a = $props.auth) == null ? void 0 : _a.user) == null ? void 0 : _b.notifications).length,
          class: "item",
          hidden: $options.filterRead((_d = (_c = $props.auth) == null ? void 0 : _c.user) == null ? void 0 : _d.notifications).length === 0
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(_component_el_button, {
                text: "",
                circle: ""
              }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(ssrRenderComponent(_component_el_icon, {
                      color: "#6b21a8",
                      size: 20
                    }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(ssrRenderComponent(_component_BellFilled, null, null, _parent5, _scopeId4));
                        } else {
                          return [
                            createVNode(_component_BellFilled)
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                  } else {
                    return [
                      createVNode(_component_el_icon, {
                        color: "#6b21a8",
                        size: 20
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_BellFilled)
                        ]),
                        _: 1
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
            } else {
              return [
                createVNode(_component_el_button, {
                  text: "",
                  circle: ""
                }, {
                  default: withCtx(() => [
                    createVNode(_component_el_icon, {
                      color: "#6b21a8",
                      size: 20
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_BellFilled)
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                })
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(`</div></div>`);
      } else {
        return [
          createVNode("div", { class: "group flex items-center cursor-pointer select-none" }, [
            createVNode("div", null, [
              createVNode(_component_el_badge, {
                value: $options.filterRead((_f = (_e = $props.auth) == null ? void 0 : _e.user) == null ? void 0 : _f.notifications).length,
                class: "item",
                hidden: $options.filterRead((_h = (_g = $props.auth) == null ? void 0 : _g.user) == null ? void 0 : _h.notifications).length === 0
              }, {
                default: withCtx(() => [
                  createVNode(_component_el_button, {
                    text: "",
                    circle: ""
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_el_icon, {
                        color: "#6b21a8",
                        size: 20
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_BellFilled)
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["value", "hidden"])
            ])
          ])
        ];
      }
    }),
    dropdown: withCtx((_, _push2, _parent2, _scopeId) => {
      var _a, _b;
      if (_push2) {
        _push2(`<div id="dropdownMenu" class="absolute block right-0 shadow-lg bg-white py-4 z-[1000] min-w-full rounded-lg w-[410px] max-h-[500px] overflow-auto mt-2"${_scopeId}><ul class="divide-y"${_scopeId}><!--[-->`);
        ssrRenderList((_a = $props.auth.user) == null ? void 0 : _a.notifications, (notification) => {
          _push2(`<li class="p-4 flex items-center hover:bg-gray-50 cursor-pointer"${_scopeId}><div class="ml-6"${_scopeId}><h3 class="${ssrRenderClass((notification == null ? void 0 : notification.read) ? "text-sm text-[#333] " : "text-sm text-[#333] font-bold")}"${_scopeId}>${ssrInterpolate(notification == null ? void 0 : notification.title)}</h3><p class="text-xs text-gray-500 mt-2"${_scopeId}>${ssrInterpolate(notification == null ? void 0 : notification.message)}</p><p class="text-xs text-blue-600 leading-3 mt-2"${_scopeId}>${ssrInterpolate(new Date(notification == null ? void 0 : notification.created_at).toDateString())}</p></div></li>`);
        });
        _push2(`<!--]--></ul></div>`);
      } else {
        return [
          createVNode("div", {
            id: "dropdownMenu",
            class: "absolute block right-0 shadow-lg bg-white py-4 z-[1000] min-w-full rounded-lg w-[410px] max-h-[500px] overflow-auto mt-2"
          }, [
            createVNode("ul", { class: "divide-y" }, [
              (openBlock(true), createBlock(Fragment, null, renderList((_b = $props.auth.user) == null ? void 0 : _b.notifications, (notification) => {
                return openBlock(), createBlock("li", {
                  class: "p-4 flex items-center hover:bg-gray-50 cursor-pointer",
                  key: notification.id,
                  onClick: ($event) => $options.markAsRead(notification.id)
                }, [
                  createVNode("div", { class: "ml-6" }, [
                    createVNode("h3", {
                      class: (notification == null ? void 0 : notification.read) ? "text-sm text-[#333] " : "text-sm text-[#333] font-bold"
                    }, toDisplayString(notification == null ? void 0 : notification.title), 3),
                    createVNode("p", { class: "text-xs text-gray-500 mt-2" }, toDisplayString(notification == null ? void 0 : notification.message), 1),
                    createVNode("p", { class: "text-xs text-blue-600 leading-3 mt-2" }, toDisplayString(new Date(notification == null ? void 0 : notification.created_at).toDateString()), 1)
                  ])
                ], 8, ["onClick"]);
              }), 128))
            ])
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_dropdown, {
    class: "ml-5",
    placement: "bottom-end"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="group flex items-center cursor-pointer select-none"${_scopeId}><div class="mr-1 text-gray-700 group-hover:text-indigo-600 focus:text-indigo-600 whitespace-nowrap"${_scopeId}><span color="#6b21a8"${_scopeId}>${ssrInterpolate($props.auth.user.admin ? "Admin" : $props.auth.user.first_name)}</span><span class="hidden md:inline"${_scopeId}> ${ssrInterpolate($props.auth.user.admin ? "" : $props.auth.user.last_name)}</span></div>`);
        _push2(ssrRenderComponent(_component_icon, {
          class: "w-5 h-5 fill-gray-700 group-hover:fill-indigo-600 focus:fill-indigo-600",
          name: "cheveron-down"
        }, null, _parent2, _scopeId));
        _push2(`</div>`);
      } else {
        return [
          createVNode("div", { class: "group flex items-center cursor-pointer select-none" }, [
            createVNode("div", { class: "mr-1 text-gray-700 group-hover:text-indigo-600 focus:text-indigo-600 whitespace-nowrap" }, [
              createVNode("span", { color: "#6b21a8" }, toDisplayString($props.auth.user.admin ? "Admin" : $props.auth.user.first_name), 1),
              createVNode("span", { class: "hidden md:inline" }, " " + toDisplayString($props.auth.user.admin ? "" : $props.auth.user.last_name), 1)
            ]),
            createVNode(_component_icon, {
              class: "w-5 h-5 fill-gray-700 group-hover:fill-indigo-600 focus:fill-indigo-600",
              name: "cheveron-down"
            })
          ])
        ];
      }
    }),
    dropdown: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="mt-2 py-2 text-sm bg-white rounded shadow-xl"${_scopeId}>`);
        _push2(ssrRenderComponent(_component_Link, {
          class: "block px-6 py-2 hover:text-white hover:bg-indigo-500",
          href: `/profile/${$props.auth.user.id}`
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`My Profile`);
            } else {
              return [
                createTextVNode("My Profile")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_Link, {
          class: "block px-6 py-2 w-full text-left hover:text-white hover:bg-indigo-500",
          href: "/logout",
          method: "delete",
          as: "button"
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`Logout`);
            } else {
              return [
                createTextVNode("Logout")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(`</div>`);
      } else {
        return [
          createVNode("div", { class: "mt-2 py-2 text-sm bg-white rounded shadow-xl" }, [
            createVNode(_component_Link, {
              class: "block px-6 py-2 hover:text-white hover:bg-indigo-500",
              href: `/profile/${$props.auth.user.id}`
            }, {
              default: withCtx(() => [
                createTextVNode("My Profile")
              ]),
              _: 1
            }, 8, ["href"]),
            createVNode(_component_Link, {
              class: "block px-6 py-2 w-full text-left hover:text-white hover:bg-indigo-500",
              href: "/logout",
              method: "delete",
              as: "button"
            }, {
              default: withCtx(() => [
                createTextVNode("Logout")
              ]),
              _: 1
            })
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div></div><div class="md:flex md:grow md:overflow-hidden">`);
  _push(ssrRenderComponent(_component_main_menu, {
    class: "hidden shrink-0 p-12 w-56 bg-white overflow-y-auto md:block",
    role: $props.auth.user.admin
  }, null, _parent));
  _push(`<div class="px-4 py-8 md:flex-1 md:p-12 md:overflow-y-auto" scroll-region>`);
  _push(ssrRenderComponent(_component_flash_messages, null, null, _parent));
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</div></div></div></div></div>`);
}
const _sfc_setup$i = _sfc_main$i.setup;
_sfc_main$i.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Shared/Layout.vue");
  return _sfc_setup$i ? _sfc_setup$i(props, ctx) : void 0;
};
const Layout = /* @__PURE__ */ _export_sfc(_sfc_main$i, [["ssrRender", _sfc_ssrRender$i], ["__file", "/home/jolima/workingFiles/tabisv1/resources/js/Shared/Layout.vue"]]);
Chart.register(Title, Tooltip, Legend, ArcElement, BarElement, CategoryScale, LinearScale);
const _sfc_main$h = {
  components: {
    Head,
    Bar,
    Pie,
    Doughnut
  },
  layout: Layout,
  props: {
    patientPerAnimalCategory: Array,
    patientPerMonth: Array,
    supplies: Array
  },
  data() {
    return {
      chartOptions: {
        responsive: true
      },
      patientPerMonth: {
        labels: [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July",
          "August",
          "September",
          "October",
          "November",
          "December"
        ],
        datasets: [{
          label: "Count",
          data: this.patientPerMonth.map((item) => item.count)
        }]
      },
      patientPercentageAnimalCategory: {
        labels: this.patientPerAnimalCategory.map((item) => item.name),
        datasets: [{
          data: this.patientPerAnimalCategory.map((item) => item.percentage),
          backgroundColor: this.colors(this.patientPerAnimalCategory.map((item) => item.percentage))
        }]
      },
      suppliesData: {
        labels: this.supplies.map((item) => item.name),
        datasets: [{
          data: this.supplies.map((item) => item.quantity),
          backgroundColor: this.colors(this.supplies.map((item) => item.quantity))
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false
      }
    };
  },
  methods: {
    getRandomColor() {
      const letters = "0123456789ABCDEF";
      let color = "#";
      for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
      }
      return color;
    },
    colors(data) {
      const randomColors = [];
      for (let i = 0; i < data.length; i++) {
        randomColors.push(this.getRandomColor());
      }
      return randomColors;
    },
    getName(arr, id) {
      return arr.map((item, key) => {
        return key + 1 === id ? item.name : "";
      });
    }
  }
};
function _sfc_ssrRender$h(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Head = resolveComponent("Head");
  const _component_Pie = resolveComponent("Pie");
  const _component_Doughnut = resolveComponent("Doughnut");
  const _component_Bar = resolveComponent("Bar");
  _push(`<div${ssrRenderAttrs(_attrs)}>`);
  _push(ssrRenderComponent(_component_Head, { title: "Dashboard" }, null, _parent));
  _push(`<div class="container mx-auto px-4"><div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4"><div class="bg-white p-4 rounded-lg">`);
  _push(ssrRenderComponent(_component_Pie, {
    options: {
      ...$data.options,
      plugins: {
        title: {
          display: true,
          text: "Percentage of Patients Per Animal Category"
        }
      }
    },
    data: $data.patientPercentageAnimalCategory
  }, null, _parent));
  _push(`</div><div class="bg-white p-4 rounded-lg">`);
  _push(ssrRenderComponent(_component_Doughnut, {
    options: {
      ...$data.options,
      plugins: {
        title: {
          display: true,
          text: "Quantity of Medical Supplies"
        }
      }
    },
    data: $data.suppliesData
  }, null, _parent));
  _push(`</div></div><div class="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 gap-4 mt-5"><div class="bg-white p-4 rounded-lg">`);
  _push(ssrRenderComponent(_component_Bar, {
    id: "my-chart-id",
    options: {
      ...$data.chartOptions,
      plugins: {
        title: {
          display: true,
          text: "Number of Patients Per Month"
        }
      }
    },
    data: $data.patientPerMonth
  }, null, _parent));
  _push(`</div></div></div></div>`);
}
const _sfc_setup$h = _sfc_main$h.setup;
_sfc_main$h.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Dashboard/Index.vue");
  return _sfc_setup$h ? _sfc_setup$h(props, ctx) : void 0;
};
const Index$3 = /* @__PURE__ */ _export_sfc(_sfc_main$h, [["ssrRender", _sfc_ssrRender$h], ["__file", "/home/jolima/workingFiles/tabisv1/resources/js/Pages/Dashboard/Index.vue"]]);
const __vite_glob_0_2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Index$3
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$g = {
  inheritAttrs: false,
  props: {
    id: {
      type: String,
      default() {
        return `textarea-input-${v4()}`;
      }
    },
    error: String,
    label: String,
    modelValue: String
  },
  emits: ["update:modelValue"],
  methods: {
    focus() {
      this.$refs.input.focus();
    },
    select() {
      this.$refs.input.select();
    }
  }
};
function _sfc_ssrRender$g(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  let _temp0;
  _push(`<div${ssrRenderAttrs(mergeProps({
    class: _ctx.$attrs.class
  }, _attrs))}>`);
  if ($props.label) {
    _push(`<label class="form-label"${ssrRenderAttr("for", $props.id)}>${ssrInterpolate($props.label)}:</label>`);
  } else {
    _push(`<!---->`);
  }
  _push(`<textarea${ssrRenderAttrs(_temp0 = mergeProps({
    id: $props.id,
    ref: "input"
  }, { ..._ctx.$attrs, class: null }, {
    class: ["form-textarea", { error: $props.error }],
    value: $props.modelValue
  }), "textarea")}>${ssrInterpolate("value" in _temp0 ? _temp0.value : "")}</textarea>`);
  if ($props.error) {
    _push(`<div class="form-error">${ssrInterpolate($props.error)}</div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div>`);
}
const _sfc_setup$g = _sfc_main$g.setup;
_sfc_main$g.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Shared/TextareaInput.vue");
  return _sfc_setup$g ? _sfc_setup$g(props, ctx) : void 0;
};
const TextareaInput = /* @__PURE__ */ _export_sfc(_sfc_main$g, [["ssrRender", _sfc_ssrRender$g], ["__file", "/home/jolima/workingFiles/tabisv1/resources/js/Shared/TextareaInput.vue"]]);
const _sfc_main$f = {
  inheritAttrs: false,
  props: {
    id: {
      type: String,
      default() {
        return `date-pick-${v4()}`;
      }
    },
    type: {
      type: String,
      default: "date"
    },
    error: String,
    label: String,
    modelValue: String
  },
  emits: ["update:modelValue"],
  methods: {
    focus() {
      this.$refs.input.focus();
    },
    select() {
      this.$refs.input.select();
    },
    setSelectionRange(start, end) {
      this.$refs.input.setSelectionRange(start, end);
    }
  }
};
function _sfc_ssrRender$f(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({
    class: _ctx.$attrs.class
  }, _attrs))}>`);
  if ($props.label) {
    _push(`<label class="form-label"${ssrRenderAttr("for", $props.id)}>${ssrInterpolate($props.label)}:</label>`);
  } else {
    _push(`<!---->`);
  }
  _push(`<input${ssrRenderAttrs(mergeProps({
    id: $props.id,
    ref: "date"
  }, { ..._ctx.$attrs, class: null }, {
    class: ["form-input", { error: $props.error }],
    type: $props.type,
    value: $props.modelValue
  }))}>`);
  if ($props.error) {
    _push(`<div class="form-error">${ssrInterpolate($props.error)}</div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div>`);
}
const _sfc_setup$f = _sfc_main$f.setup;
_sfc_main$f.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Shared/DatePick.vue");
  return _sfc_setup$f ? _sfc_setup$f(props, ctx) : void 0;
};
const DatePick = /* @__PURE__ */ _export_sfc(_sfc_main$f, [["ssrRender", _sfc_ssrRender$f], ["__file", "/home/jolima/workingFiles/tabisv1/resources/js/Shared/DatePick.vue"]]);
const _sfc_main$e = {
  inheritAttrs: false,
  props: {
    id: {
      type: String,
      default() {
        return `select-input-${v4()}`;
      }
    },
    error: String,
    label: String,
    modelValue: [String, Number, Boolean]
  },
  emits: ["update:modelValue"],
  data() {
    return {
      selected: this.modelValue
    };
  },
  watch: {
    selected(selected) {
      this.$emit("update:modelValue", selected);
    }
  },
  methods: {
    focus() {
      this.$refs.input.focus();
    },
    select() {
      this.$refs.input.select();
    }
  }
};
function _sfc_ssrRender$e(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({
    class: _ctx.$attrs.class
  }, _attrs))}>`);
  if ($props.label) {
    _push(`<label class="form-label"${ssrRenderAttr("for", $props.id)}>${ssrInterpolate($props.label)}:</label>`);
  } else {
    _push(`<!---->`);
  }
  _push(`<select${ssrRenderAttrs(mergeProps({
    id: $props.id,
    ref: "input"
  }, { ..._ctx.$attrs, class: null }, {
    class: ["form-select", { error: $props.error }]
  }))}>`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</select>`);
  if ($props.error) {
    _push(`<div class="form-error">${ssrInterpolate($props.error)}</div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div>`);
}
const _sfc_setup$e = _sfc_main$e.setup;
_sfc_main$e.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Shared/SelectInput.vue");
  return _sfc_setup$e ? _sfc_setup$e(props, ctx) : void 0;
};
const SelectInput = /* @__PURE__ */ _export_sfc(_sfc_main$e, [["ssrRender", _sfc_ssrRender$e], ["__file", "/home/jolima/workingFiles/tabisv1/resources/js/Shared/SelectInput.vue"]]);
const _sfc_main$d = {
  inheritAttrs: false,
  props: {
    id: {
      type: String,
      default() {
        return `number-input-${v4()}`;
      }
    },
    type: {
      type: String,
      default: "number"
    },
    error: String,
    label: String,
    modelValue: String
  },
  emits: ["update:modelValue"],
  methods: {
    focus() {
      this.$refs.input.focus();
    },
    select() {
      this.$refs.input.select();
    }
  }
};
function _sfc_ssrRender$d(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({
    class: _ctx.$attrs.class
  }, _attrs))}>`);
  if ($props.label) {
    _push(`<label class="form-label"${ssrRenderAttr("for", $props.id)}>${ssrInterpolate($props.label)}:</label>`);
  } else {
    _push(`<!---->`);
  }
  _push(`<input${ssrRenderAttrs(mergeProps({
    id: $props.id,
    ref: "input"
  }, { ..._ctx.$attrs, class: null }, {
    class: ["form-input", { error: $props.error }],
    type: $props.type,
    value: $props.modelValue
  }))}>`);
  if ($props.error) {
    _push(`<div class="form-error">${ssrInterpolate($props.error)}</div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div>`);
}
const _sfc_setup$d = _sfc_main$d.setup;
_sfc_main$d.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Shared/NumberText.vue");
  return _sfc_setup$d ? _sfc_setup$d(props, ctx) : void 0;
};
const NumberText = /* @__PURE__ */ _export_sfc(_sfc_main$d, [["ssrRender", _sfc_ssrRender$d], ["__file", "/home/jolima/workingFiles/tabisv1/resources/js/Shared/NumberText.vue"]]);
const _sfc_main$c = {
  components: {
    Head,
    Link,
    LoadingButton,
    SelectInput,
    TextInput,
    DatePick,
    TextareaInput,
    NumberText
  },
  layout: Layout,
  props: {
    genders: Array,
    animals: Array,
    biteTypes: Array,
    categories: Array,
    animalStatus: Array,
    categories: Array,
    outcome: Array,
    site: Array,
    supplies: Array,
    suppliesCategory: Array,
    barangays: Array,
    current_user: Object
  },
  remember: "form",
  data(props) {
    return {
      form: this.$inertia.form({
        first_name: "",
        last_name: "",
        middle_name: "",
        date_of_bite: "",
        date_of_consult: "",
        sex: "",
        age: "",
        address: "",
        phone: "",
        site_id: "",
        type_of_bite_id: null,
        animal_type_id: null,
        washed: null,
        place: null,
        category_id: null,
        barangay_id: null,
        rig_date: "",
        tcv_id: "",
        account_id: props.current_user.id,
        outcome_id: null,
        animal_status_id: null,
        remarks: "",
        vaccine_id: "",
        route: "",
        day0: "",
        day3: "",
        day7: "",
        day14: "",
        day28: "",
        tcv_id: "",
        tcv_id: ""
      }),
      active: 1
    };
  },
  methods: {
    updateDate() {
      this.form.day0 = new Date(this.form.rig_date);
      this.form.day3 = new Date(this.form.day0) + 3;
      this.form.day7 = new Date(this.form.day0) + 7;
      this.form.day14 = new Date(this.form.day0) + 14;
      this.form.day28 = new Date(this.form.day0) + 28;
    },
    store() {
      return this.active > 4 ? this.form.post("/patients") : this.next();
    },
    next() {
      this.form.post("/patients/validate");
      if (this.active++ > 4) this.active = 1;
    },
    preview() {
      this.active--;
    }
  }
};
function _sfc_ssrRender$c(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Head = resolveComponent("Head");
  const _component_Link = resolveComponent("Link");
  const _component_el_steps = resolveComponent("el-steps");
  const _component_el_step = resolveComponent("el-step");
  const _component_text_input = resolveComponent("text-input");
  const _component_select_input = resolveComponent("select-input");
  const _component_number_text = resolveComponent("number-text");
  const _component_textarea_input = resolveComponent("textarea-input");
  const _component_date_pick = resolveComponent("date-pick");
  const _component_loading_button = resolveComponent("loading-button");
  _push(`<div${ssrRenderAttrs(_attrs)}>`);
  _push(ssrRenderComponent(_component_Head, { title: "Patient Record" }, null, _parent));
  _push(`<h1 class="mb-8 text-3xl font-bold">`);
  _push(ssrRenderComponent(_component_Link, {
    class: "text-indigo-400 hover:text-indigo-600",
    href: "/patients"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Patients`);
      } else {
        return [
          createTextVNode("Patients")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<span class="text-indigo-400 font-medium">/</span> Create </h1><div class="max-w-3xl bg-white rounded-md shadow overflow-hidden"><div class="-mb-8 p-5 flex items-center justify-end text-align-center">`);
  _push(ssrRenderComponent(_component_el_steps, {
    color: "#6b21a8",
    active: $data.active,
    "aligned-center": ""
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_el_step, { title: "Personal Information" }, null, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_el_step, { title: "Incident Details" }, null, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_el_step, { title: "Treatment Information" }, null, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_el_step, { title: "Tissue Culture Vaccine" }, null, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_el_step, { title: "Personal Information" }),
          createVNode(_component_el_step, { title: "Incident Details" }),
          createVNode(_component_el_step, { title: "Treatment Information" }),
          createVNode(_component_el_step, { title: "Tissue Culture Vaccine" })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div><form><div class="flex flex-wrap -mb-8 p-8">`);
  if ($data.active === 1) {
    _push(`<div class="flex flex-wrap -mb-8 p-8">`);
    _push(ssrRenderComponent(_component_text_input, {
      modelValue: $data.form.first_name,
      "onUpdate:modelValue": ($event) => $data.form.first_name = $event,
      error: $data.form.errors.first_name,
      class: "pb-8 pr-6 w-full lg:w-1/2",
      label: "First name"
    }, null, _parent));
    _push(ssrRenderComponent(_component_text_input, {
      modelValue: $data.form.middle_name,
      "onUpdate:modelValue": ($event) => $data.form.middle_name = $event,
      error: $data.form.errors.middle_name,
      class: "pb-8 pr-6 w-full lg:w-1/2",
      label: "Middle name"
    }, null, _parent));
    _push(ssrRenderComponent(_component_text_input, {
      modelValue: $data.form.last_name,
      "onUpdate:modelValue": ($event) => $data.form.last_name = $event,
      error: $data.form.errors.last_name,
      class: "pb-8 pr-6 w-full lg:w-1/2",
      label: "Last name"
    }, null, _parent));
    _push(ssrRenderComponent(_component_select_input, {
      modelValue: $data.form.sex,
      "onUpdate:modelValue": ($event) => $data.form.sex = $event,
      error: $data.form.errors.sex,
      class: "pb-8 pr-6 w-full lg:w-1/2",
      label: "Sex"
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`<!--[-->`);
          ssrRenderList($props.genders, (gender) => {
            _push2(`<option${ssrRenderAttr("value", gender.id)}${_scopeId}>${ssrInterpolate(gender.name)}</option>`);
          });
          _push2(`<!--]-->`);
        } else {
          return [
            (openBlock(true), createBlock(Fragment, null, renderList($props.genders, (gender) => {
              return openBlock(), createBlock("option", {
                key: gender.id,
                value: gender.id
              }, toDisplayString(gender.name), 9, ["value"]);
            }), 128))
          ];
        }
      }),
      _: 1
    }, _parent));
    _push(ssrRenderComponent(_component_number_text, {
      modelValue: $data.form.age,
      "onUpdate:modelValue": ($event) => $data.form.age = $event,
      error: $data.form.errors.age,
      class: "pb-8 pr-6 w-full lg:w-1/2",
      label: "Age"
    }, null, _parent));
    _push(ssrRenderComponent(_component_number_text, {
      modelValue: $data.form.phone,
      "onUpdate:modelValue": ($event) => $data.form.phone = $event,
      error: $data.form.errors.phone,
      class: "pb-8 pr-6 w-full lg:w-1/2",
      label: "Contact No"
    }, null, _parent));
    _push(ssrRenderComponent(_component_select_input, {
      modelValue: $data.form.barangay_id,
      "onUpdate:modelValue": ($event) => $data.form.barangay_id = $event,
      error: $data.form.errors.barangay_id,
      class: "pb-8 pr-6 w-full lg:w-1/2",
      label: "Barangay"
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`<!--[-->`);
          ssrRenderList($props.barangays, (data) => {
            _push2(`<option${ssrRenderAttr("value", data.id)}${_scopeId}>${ssrInterpolate(data.name)}</option>`);
          });
          _push2(`<!--]-->`);
        } else {
          return [
            (openBlock(true), createBlock(Fragment, null, renderList($props.barangays, (data) => {
              return openBlock(), createBlock("option", {
                key: data.id,
                value: data.id
              }, toDisplayString(data.name), 9, ["value"]);
            }), 128))
          ];
        }
      }),
      _: 1
    }, _parent));
    _push(ssrRenderComponent(_component_textarea_input, {
      modelValue: $data.form.address,
      "onUpdate:modelValue": ($event) => $data.form.address = $event,
      error: $data.form.errors.address,
      class: "pb-8 pr-6 w-full lg:w-1/2",
      label: "Address"
    }, null, _parent));
    _push(`</div>`);
  } else if ($data.active === 2) {
    _push(`<div class="flex flex-wrap -mb-8 p-8">`);
    _push(ssrRenderComponent(_component_date_pick, {
      modelValue: $data.form.date_of_bite,
      "onUpdate:modelValue": ($event) => $data.form.date_of_bite = $event,
      error: $data.form.errors.date_of_bite,
      class: "pb-8 pr-6 w-full lg:w-1/2",
      label: "Date of Bite"
    }, null, _parent));
    _push(ssrRenderComponent(_component_text_input, {
      modelValue: $data.form.place,
      "onUpdate:modelValue": ($event) => $data.form.place = $event,
      error: $data.form.errors.place,
      class: "pb-8 pr-6 w-full lg:w-1/2",
      label: "Place (Where Biting Occured)"
    }, null, _parent));
    _push(ssrRenderComponent(_component_select_input, {
      modelValue: $data.form.animal_type_id,
      "onUpdate:modelValue": ($event) => $data.form.animal_type_id = $event,
      error: $data.form.errors.animal_type_id,
      class: "pb-8 pr-6 w-full lg:w-1/2",
      label: "Animal Type"
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`<!--[-->`);
          ssrRenderList($props.animals, (animal) => {
            _push2(`<option${ssrRenderAttr("value", animal.id)}${_scopeId}>${ssrInterpolate(animal.name)}</option>`);
          });
          _push2(`<!--]-->`);
        } else {
          return [
            (openBlock(true), createBlock(Fragment, null, renderList($props.animals, (animal) => {
              return openBlock(), createBlock("option", {
                key: animal.id,
                value: animal.id
              }, toDisplayString(animal.name), 9, ["value"]);
            }), 128))
          ];
        }
      }),
      _: 1
    }, _parent));
    _push(ssrRenderComponent(_component_select_input, {
      modelValue: $data.form.washed,
      "onUpdate:modelValue": ($event) => $data.form.washed = $event,
      error: $data.form.errors.washed,
      class: "pb-8 pr-6 w-full lg:w-1/2",
      label: "Washed"
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`<option${ssrRenderAttr("value", 1)}${_scopeId}>Yes</option><option${ssrRenderAttr("value", 0)}${_scopeId}>No</option>`);
        } else {
          return [
            createVNode("option", { value: 1 }, "Yes"),
            createVNode("option", { value: 0 }, "No")
          ];
        }
      }),
      _: 1
    }, _parent));
    _push(ssrRenderComponent(_component_select_input, {
      modelValue: $data.form.type_of_bite_id,
      "onUpdate:modelValue": ($event) => $data.form.type_of_bite_id = $event,
      error: $data.form.errors.type_of_bite_id,
      class: "pb-8 pr-6 w-full lg:w-1/2",
      label: "Type of Bite"
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`<!--[-->`);
          ssrRenderList($props.biteTypes, (data) => {
            _push2(`<option${ssrRenderAttr("value", data.id)}${_scopeId}>${ssrInterpolate(data.name)}</option>`);
          });
          _push2(`<!--]-->`);
        } else {
          return [
            (openBlock(true), createBlock(Fragment, null, renderList($props.biteTypes, (data) => {
              return openBlock(), createBlock("option", {
                key: data.id,
                value: data.id
              }, toDisplayString(data.name), 9, ["value"]);
            }), 128))
          ];
        }
      }),
      _: 1
    }, _parent));
    _push(ssrRenderComponent(_component_select_input, {
      modelValue: $data.form.site_id,
      "onUpdate:modelValue": ($event) => $data.form.site_id = $event,
      error: $data.form.errors.site_id,
      class: "pb-8 pr-6 w-full lg:w-1/2",
      label: "Site(body parts)"
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`<!--[-->`);
          ssrRenderList($props.site, (data) => {
            _push2(`<option${ssrRenderAttr("value", data.id)}${_scopeId}>${ssrInterpolate(data.name)}</option>`);
          });
          _push2(`<!--]-->`);
        } else {
          return [
            (openBlock(true), createBlock(Fragment, null, renderList($props.site, (data) => {
              return openBlock(), createBlock("option", {
                key: data.id,
                value: data.id
              }, toDisplayString(data.name), 9, ["value"]);
            }), 128))
          ];
        }
      }),
      _: 1
    }, _parent));
    _push(`</div>`);
  } else if ($data.active === 3) {
    _push(`<div class="flex flex-wrap -mb-8 p-8">`);
    _push(ssrRenderComponent(_component_date_pick, {
      modelValue: $data.form.date_of_consult,
      "onUpdate:modelValue": ($event) => $data.form.date_of_consult = $event,
      error: $data.form.errors.date_of_consult,
      class: "pb-8 pr-6 w-full lg:w-1/2",
      label: "Date Of Consult"
    }, null, _parent));
    _push(ssrRenderComponent(_component_text_input, {
      modelValue: $data.form.route,
      "onUpdate:modelValue": ($event) => $data.form.route = $event,
      error: $data.form.errors.route,
      class: "pb-8 pr-6 w-full lg:w-1/2",
      label: "Route"
    }, null, _parent));
    _push(ssrRenderComponent(_component_select_input, {
      modelValue: $data.form.category_id,
      "onUpdate:modelValue": ($event) => $data.form.category_id = $event,
      error: $data.form.errors.category_id,
      class: "pb-8 pr-6 w-full lg:w-1/2",
      label: "Category"
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`<!--[-->`);
          ssrRenderList($props.categories, (data) => {
            _push2(`<option${ssrRenderAttr("value", data.id)}${_scopeId}>${ssrInterpolate(data.name)}</option>`);
          });
          _push2(`<!--]-->`);
        } else {
          return [
            (openBlock(true), createBlock(Fragment, null, renderList($props.categories, (data) => {
              return openBlock(), createBlock("option", {
                key: data.id,
                value: data.id
              }, toDisplayString(data.name), 9, ["value"]);
            }), 128))
          ];
        }
      }),
      _: 1
    }, _parent));
    _push(ssrRenderComponent(_component_select_input, {
      modelValue: $data.form.animal_status_id,
      "onUpdate:modelValue": ($event) => $data.form.animal_status_id = $event,
      error: $data.form.errors.animal_status_id,
      class: "pb-8 pr-6 w-full lg:w-1/2",
      label: "Animal Status"
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`<!--[-->`);
          ssrRenderList($props.animalStatus, (data) => {
            _push2(`<option${ssrRenderAttr("value", data.id)}${_scopeId}>${ssrInterpolate(data.name)}</option>`);
          });
          _push2(`<!--]-->`);
        } else {
          return [
            (openBlock(true), createBlock(Fragment, null, renderList($props.animalStatus, (data) => {
              return openBlock(), createBlock("option", {
                key: data.id,
                value: data.id
              }, toDisplayString(data.name), 9, ["value"]);
            }), 128))
          ];
        }
      }),
      _: 1
    }, _parent));
    _push(ssrRenderComponent(_component_select_input, {
      modelValue: $data.form.outcome_id,
      "onUpdate:modelValue": ($event) => $data.form.outcome_id = $event,
      error: $data.form.errors.outcome_id,
      class: "pb-8 pr-6 w-full lg:w-1/2",
      label: "Outcome"
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`<!--[-->`);
          ssrRenderList($props.outcome, (data) => {
            _push2(`<option${ssrRenderAttr("value", data.id)}${_scopeId}>${ssrInterpolate(data.name)}</option>`);
          });
          _push2(`<!--]-->`);
        } else {
          return [
            (openBlock(true), createBlock(Fragment, null, renderList($props.outcome, (data) => {
              return openBlock(), createBlock("option", {
                key: data.id,
                value: data.id
              }, toDisplayString(data.name), 9, ["value"]);
            }), 128))
          ];
        }
      }),
      _: 1
    }, _parent));
    _push(ssrRenderComponent(_component_select_input, {
      modelValue: $data.form.vaccine_id,
      "onUpdate:modelValue": ($event) => $data.form.vaccine_id = $event,
      error: $data.form.errors.vaccine_id,
      class: "pb-8 pr-6 w-full lg:w-1/2",
      label: "Brand Name"
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`<!--[-->`);
          ssrRenderList($props.supplies, (data) => {
            _push2(`<option${ssrRenderAttr("value", data.id)}${_scopeId}>${ssrInterpolate(data.name)}</option>`);
          });
          _push2(`<!--]-->`);
        } else {
          return [
            (openBlock(true), createBlock(Fragment, null, renderList($props.supplies, (data) => {
              return openBlock(), createBlock("option", {
                key: data.id,
                value: data.id
              }, toDisplayString(data.name), 9, ["value"]);
            }), 128))
          ];
        }
      }),
      _: 1
    }, _parent));
    _push(`</div>`);
  } else {
    _push(`<div class="flex flex-wrap -mb-8 p-8">`);
    _push(ssrRenderComponent(_component_date_pick, {
      modelValue: $data.form.rig_date,
      "onUpdate:modelValue": ($event) => $data.form.rig_date = $event,
      error: $data.form.errors.rig_date,
      class: "pb-8 pr-6 w-full lg:w-1/2",
      label: "RIG Date Given",
      onInput: $options.updateDate
    }, null, _parent));
    _push(ssrRenderComponent(_component_date_pick, {
      modelValue: $data.form.day0,
      "onUpdate:modelValue": ($event) => $data.form.day0 = $event,
      "value:error": "form.errors.day0",
      class: "pb-8 pr-6 w-full lg:w-1/2",
      label: "Day 0"
    }, null, _parent));
    _push(ssrRenderComponent(_component_select_input, {
      modelValue: $data.form.outcome_id,
      "onUpdate:modelValue": ($event) => $data.form.outcome_id = $event,
      error: $data.form.errors.outcome_id,
      class: "pb-8 pr-6 w-full lg:w-1/2",
      label: "Outcome"
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`<!--[-->`);
          ssrRenderList($props.outcome, (data) => {
            _push2(`<option${ssrRenderAttr("value", data.id)}${_scopeId}>${ssrInterpolate(data.name)}</option>`);
          });
          _push2(`<!--]-->`);
        } else {
          return [
            (openBlock(true), createBlock(Fragment, null, renderList($props.outcome, (data) => {
              return openBlock(), createBlock("option", {
                key: data.id,
                value: data.id
              }, toDisplayString(data.name), 9, ["value"]);
            }), 128))
          ];
        }
      }),
      _: 1
    }, _parent));
    _push(ssrRenderComponent(_component_textarea_input, {
      modelValue: $data.form.remarks,
      "onUpdate:modelValue": ($event) => $data.form.remarks = $event,
      error: $data.form.errors.remarks,
      class: "pb-8 pr-6 w-full lg:w-1/2",
      label: "Remarks"
    }, null, _parent));
    _push(`</div>`);
  }
  _push(`</div><div class="flex items-center justify-end px-8 py-4 bg-gray-50 border-t border-gray-100">`);
  if ($data.active > 1) {
    _push(`<button class="btn-indigo mr-2" tabindex="-1" type="button">Back</button>`);
  } else {
    _push(`<!---->`);
  }
  _push(ssrRenderComponent(_component_loading_button, {
    loading: $data.form.processing,
    class: "btn-indigo",
    type: "submit"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`${ssrInterpolate($data.active > 3 ? "Create Patient Record" : "Next")}`);
      } else {
        return [
          createTextVNode(toDisplayString($data.active > 3 ? "Create Patient Record" : "Next"), 1)
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></form></div></div>`);
}
const _sfc_setup$c = _sfc_main$c.setup;
_sfc_main$c.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Patients/Create.vue");
  return _sfc_setup$c ? _sfc_setup$c(props, ctx) : void 0;
};
const Create$2 = /* @__PURE__ */ _export_sfc(_sfc_main$c, [["ssrRender", _sfc_ssrRender$c], ["__file", "/home/jolima/workingFiles/tabisv1/resources/js/Pages/Patients/Create.vue"]]);
const __vite_glob_0_3 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Create$2
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$b = {
  components: {
    Head,
    Link,
    LoadingButton,
    SelectInput,
    TextInput,
    DatePick,
    TextareaInput,
    NumberText
  },
  layout: Layout,
  props: {
    patient: Object,
    genders: Array,
    animals: Array,
    biteTypes: Array,
    categories: Array,
    animalStatus: Array,
    categories: Array,
    outcome: Array,
    site: Array,
    supplies: Array,
    suppliesCategory: Array,
    current_user: Object,
    tissueCultureVaccine: Array,
    barangays: Array
  },
  remember: "form",
  data(props) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _A, _B;
    return {
      urlData: this.$page.url,
      form: this.$inertia.form({
        first_name: this.patient.first_name,
        last_name: this.patient.last_name,
        middle_name: this.patient.middle_name,
        date_of_bite: new Date((_a = this.patient.biteHistory[0]) == null ? void 0 : _a.date_of_bite),
        date_of_consult: new Date((_b = this.patient.biteHistory[0]) == null ? void 0 : _b.date_of_consult),
        sex: this.patient.sex,
        age: this.patient.age,
        address: this.patient.address,
        phone: this.patient.phone,
        barangay_id: this.patient.barangay_id,
        site_id: ((_c = this.$page.url) == null ? void 0 : _c.includes("newEntry")) ? null : (_d = this.patient.biteHistory[0]) == null ? void 0 : _d.site_id,
        type_of_bite_id: ((_e = this.$page.url) == null ? void 0 : _e.includes("newEntry")) ? null : (_f = this.patient.biteHistory[0]) == null ? void 0 : _f.type_of_bite_id,
        animal_type_id: ((_g = this.$page.url) == null ? void 0 : _g.includes("newEntry")) ? null : (_h = this.patient.biteHistory[0]) == null ? void 0 : _h.animal_type_id,
        washed: ((_i = this.$page.url) == null ? void 0 : _i.includes("newEntry")) ? null : (_j = this.patient.biteHistory[0]) == null ? void 0 : _j.washed,
        place: ((_k = this.$page.url) == null ? void 0 : _k.includes("newEntry")) ? null : (_l = this.patient.biteHistory[0]) == null ? void 0 : _l.place,
        category_id: ((_m = this.$page.url) == null ? void 0 : _m.includes("newEntry")) ? null : (_n = this.patient.biteHistory[0]) == null ? void 0 : _n.category_id,
        rig_date: ((_o = this.$page.url) == null ? void 0 : _o.includes("newEntry")) ? null : (_p = this.patient.biteHistory[0]) == null ? void 0 : _p.rig_date,
        tcv_id: ((_q = this.$page.url) == null ? void 0 : _q.includes("newEntry")) ? null : (_r = this.patient.biteHistory[0]) == null ? void 0 : _r.tcv_id,
        account_id: props.current_user.id,
        outcome_id: ((_s = this.$page.url) == null ? void 0 : _s.includes("newEntry")) ? null : (_t = this.patient.biteHistory[0]) == null ? void 0 : _t.outcome_id,
        animal_status_id: ((_u = this.$page.url) == null ? void 0 : _u.includes("newEntry")) ? null : (_v = this.patient.biteHistory[0]) == null ? void 0 : _v.animal_status_id,
        remarks: ((_w = this.$page.url) == null ? void 0 : _w.includes("newEntry")) ? null : (_x = this.patient.biteHistory[0]) == null ? void 0 : _x.remarks,
        vaccine_id: ((_y = this.$page.url) == null ? void 0 : _y.includes("newEntry")) ? null : this.tissueCultureVaccine[0].vacine_id,
        route: ((_z = this.$page.url) == null ? void 0 : _z.includes("newEntry")) ? null : this.tissueCultureVaccine[0].route,
        day0: ((_A = this.$page.url) == null ? void 0 : _A.includes("newEntry")) ? null : new Date(this.tissueCultureVaccine[0].day0),
        tcv_id: ((_B = this.$page.url) == null ? void 0 : _B.includes("newEntry")) ? null : this.patient.tcv_id
      }),
      active: 1
    };
  },
  methods: {
    update() {
      if (this)
        this.active > 4 ? this.action() : this.next();
    },
    action() {
      var _a;
      if (this.urlData.includes("newEntry")) {
        this.form.post("/patients/validate");
      }
      ((_a = this.urlData) == null ? void 0 : _a.includes("newEntry")) ? this.form.post(`/patients/${this.patient.id}/newEntry`) : this.form.put(`/patients/${this.patient.id}`);
    },
    destroy() {
      if (confirm("Are you sure you want to delete this patient record?")) {
        this.$inertia.delete(`/patients/${this.patient.id}`);
      }
    },
    restore() {
      if (confirm("Are you sure you want to restore this patient record?")) {
        this.$inertia.put(`/patients/${this.patient.id}/restore`);
      }
    },
    next() {
      if (this.active++ > 4) this.active = 1;
    },
    preview() {
      this.active--;
    },
    getTitle() {
      var _a, _b;
      console.log("sds", (_a = this.urlData) == null ? void 0 : _a.includes("newEntry"));
      return ((_b = this.urlData) == null ? void 0 : _b.includes("newEntry")) ? "Add New Entry" : "Update Patient Record";
    }
  }
};
function _sfc_ssrRender$b(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k;
  const _component_Head = resolveComponent("Head");
  const _component_Link = resolveComponent("Link");
  const _component_el_steps = resolveComponent("el-steps");
  const _component_el_step = resolveComponent("el-step");
  const _component_text_input = resolveComponent("text-input");
  const _component_select_input = resolveComponent("select-input");
  const _component_number_text = resolveComponent("number-text");
  const _component_textarea_input = resolveComponent("textarea-input");
  const _component_date_pick = resolveComponent("date-pick");
  const _component_loading_button = resolveComponent("loading-button");
  _push(`<div${ssrRenderAttrs(_attrs)}>`);
  _push(ssrRenderComponent(_component_Head, {
    title: `${$data.form.first_name} ${$data.form.last_name}`
  }, null, _parent));
  _push(`<h1 class="mb-8 text-3xl font-bold">`);
  _push(ssrRenderComponent(_component_Link, {
    class: "text-indigo-400 hover:text-indigo-600",
    href: "/patients"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Patients`);
      } else {
        return [
          createTextVNode("Patients")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<span class="text-indigo-400 font-medium">/</span> ${ssrInterpolate($data.form.first_name)} ${ssrInterpolate($data.form.last_name)}</h1><div class="max-w-3xl bg-white rounded-md shadow overflow-hidden"><div class="-mb-8 p-5 flex items-center justify-end text-align-center">`);
  _push(ssrRenderComponent(_component_el_steps, {
    style: { "--el-tag-bg-color": "red" },
    active: $data.active,
    "aligned-center": ""
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_el_step, { title: "Personal Information" }, null, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_el_step, { title: "Incident Details" }, null, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_el_step, { title: "Treatment Information" }, null, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_el_step, { title: "Tissue Culture Vaccine" }, null, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_el_step, { title: "Personal Information" }),
          createVNode(_component_el_step, { title: "Incident Details" }),
          createVNode(_component_el_step, { title: "Treatment Information" }),
          createVNode(_component_el_step, { title: "Tissue Culture Vaccine" })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div><form><div class="flex flex-wrap -mb-8 p-8">`);
  if ($data.active === 1) {
    _push(`<div class="flex flex-wrap -mb-8 p-8">`);
    _push(ssrRenderComponent(_component_text_input, {
      modelValue: $data.form.first_name,
      "onUpdate:modelValue": ($event) => $data.form.first_name = $event,
      error: $data.form.errors.first_name,
      class: "pb-8 pr-6 w-full lg:w-1/2",
      label: "First name",
      disabled: ""
    }, null, _parent));
    _push(ssrRenderComponent(_component_text_input, {
      modelValue: $data.form.middle_name,
      "onUpdate:modelValue": ($event) => $data.form.middle_name = $event,
      error: $data.form.errors.middle_name,
      class: "pb-8 pr-6 w-full lg:w-1/2",
      label: "Middle name",
      disabled: ""
    }, null, _parent));
    _push(ssrRenderComponent(_component_text_input, {
      modelValue: $data.form.last_name,
      "onUpdate:modelValue": ($event) => $data.form.last_name = $event,
      error: $data.form.errors.last_name,
      class: "pb-8 pr-6 w-full lg:w-1/2",
      label: "Last name",
      disabled: ""
    }, null, _parent));
    _push(ssrRenderComponent(_component_select_input, {
      modelValue: $data.form.sex,
      "onUpdate:modelValue": ($event) => $data.form.sex = $event,
      error: $data.form.errors.sex,
      class: "pb-8 pr-6 w-full lg:w-1/2",
      label: "Sex",
      disabled: ""
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`<!--[-->`);
          ssrRenderList($props.genders, (gender) => {
            _push2(`<option${ssrRenderAttr("value", gender.id)}${_scopeId}>${ssrInterpolate(gender.name)}</option>`);
          });
          _push2(`<!--]-->`);
        } else {
          return [
            (openBlock(true), createBlock(Fragment, null, renderList($props.genders, (gender) => {
              return openBlock(), createBlock("option", {
                key: gender.id,
                value: gender.id
              }, toDisplayString(gender.name), 9, ["value"]);
            }), 128))
          ];
        }
      }),
      _: 1
    }, _parent));
    _push(ssrRenderComponent(_component_number_text, {
      modelValue: $data.form.age,
      "onUpdate:modelValue": ($event) => $data.form.age = $event,
      error: $data.form.errors.age,
      class: "pb-8 pr-6 w-full lg:w-1/2",
      label: "Age"
    }, null, _parent));
    _push(ssrRenderComponent(_component_number_text, {
      modelValue: $data.form.phone,
      "onUpdate:modelValue": ($event) => $data.form.phone = $event,
      error: $data.form.errors.phone,
      class: "pb-8 pr-6 w-full lg:w-1/2",
      label: "Contact No"
    }, null, _parent));
    _push(ssrRenderComponent(_component_select_input, {
      modelValue: $data.form.barangay_id,
      "onUpdate:modelValue": ($event) => $data.form.barangay_id = $event,
      error: $data.form.errors.barangay_id,
      class: "pb-8 pr-6 w-full lg:w-1/2",
      label: "Barangay"
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`<!--[-->`);
          ssrRenderList($props.barangays, (data) => {
            _push2(`<option${ssrRenderAttr("value", data.id)}${_scopeId}>${ssrInterpolate(data.name)}</option>`);
          });
          _push2(`<!--]-->`);
        } else {
          return [
            (openBlock(true), createBlock(Fragment, null, renderList($props.barangays, (data) => {
              return openBlock(), createBlock("option", {
                key: data.id,
                value: data.id
              }, toDisplayString(data.name), 9, ["value"]);
            }), 128))
          ];
        }
      }),
      _: 1
    }, _parent));
    _push(ssrRenderComponent(_component_textarea_input, {
      modelValue: $data.form.address,
      "onUpdate:modelValue": ($event) => $data.form.address = $event,
      error: $data.form.errors.address,
      class: "pb-8 pr-6 w-full lg:w-1/2",
      label: "Address"
    }, null, _parent));
    _push(`</div>`);
  } else if ($data.active === 2) {
    _push(`<div class="flex flex-wrap -mb-8 p-8">`);
    _push(ssrRenderComponent(_component_date_pick, {
      modelValue: $data.form.date_of_bite,
      "onUpdate:modelValue": ($event) => $data.form.date_of_bite = $event,
      error: $data.form.errors.date_of_bite,
      class: "pb-8 pr-6 w-full lg:w-1/2",
      label: "Date of Bite",
      disabled: !((_a = $data.urlData) == null ? void 0 : _a.includes("newEntry"))
    }, null, _parent));
    _push(ssrRenderComponent(_component_text_input, {
      modelValue: $data.form.place,
      "onUpdate:modelValue": ($event) => $data.form.place = $event,
      error: $data.form.errors.place,
      class: "pb-8 pr-6 w-full lg:w-1/2",
      label: "Place (Where Biting Occured)",
      disabled: !((_b = $data.urlData) == null ? void 0 : _b.includes("newEntry"))
    }, null, _parent));
    _push(ssrRenderComponent(_component_select_input, {
      modelValue: $data.form.animal_type_id,
      "onUpdate:modelValue": ($event) => $data.form.animal_type_id = $event,
      error: $data.form.errors.animal_type_id,
      class: "pb-8 pr-6 w-full lg:w-1/2",
      label: "Animal Type",
      disabled: !((_c = $data.urlData) == null ? void 0 : _c.includes("newEntry"))
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`<!--[-->`);
          ssrRenderList($props.animals, (animal) => {
            _push2(`<option${ssrRenderAttr("value", animal.id)}${_scopeId}>${ssrInterpolate(animal.name)}</option>`);
          });
          _push2(`<!--]-->`);
        } else {
          return [
            (openBlock(true), createBlock(Fragment, null, renderList($props.animals, (animal) => {
              return openBlock(), createBlock("option", {
                key: animal.id,
                value: animal.id
              }, toDisplayString(animal.name), 9, ["value"]);
            }), 128))
          ];
        }
      }),
      _: 1
    }, _parent));
    _push(ssrRenderComponent(_component_select_input, {
      modelValue: $data.form.washed,
      "onUpdate:modelValue": ($event) => $data.form.washed = $event,
      error: $data.form.errors.washed,
      class: "pb-8 pr-6 w-full lg:w-1/2",
      label: "Washed",
      disabled: !((_d = $data.urlData) == null ? void 0 : _d.includes("newEntry"))
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`<option${ssrRenderAttr("value", 1)}${_scopeId}>Yes</option><option${ssrRenderAttr("value", 0)}${_scopeId}>No</option>`);
        } else {
          return [
            createVNode("option", { value: 1 }, "Yes"),
            createVNode("option", { value: 0 }, "No")
          ];
        }
      }),
      _: 1
    }, _parent));
    _push(ssrRenderComponent(_component_select_input, {
      modelValue: $data.form.type_of_bite_id,
      "onUpdate:modelValue": ($event) => $data.form.type_of_bite_id = $event,
      error: $data.form.errors.type_of_bite_id,
      class: "pb-8 pr-6 w-full lg:w-1/2",
      label: "Type of Bite",
      disabled: !((_e = $data.urlData) == null ? void 0 : _e.includes("newEntry"))
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`<!--[-->`);
          ssrRenderList($props.biteTypes, (data) => {
            _push2(`<option${ssrRenderAttr("value", data.id)}${_scopeId}>${ssrInterpolate(data.name)}</option>`);
          });
          _push2(`<!--]-->`);
        } else {
          return [
            (openBlock(true), createBlock(Fragment, null, renderList($props.biteTypes, (data) => {
              return openBlock(), createBlock("option", {
                key: data.id,
                value: data.id
              }, toDisplayString(data.name), 9, ["value"]);
            }), 128))
          ];
        }
      }),
      _: 1
    }, _parent));
    _push(ssrRenderComponent(_component_select_input, {
      modelValue: $data.form.site_id,
      "onUpdate:modelValue": ($event) => $data.form.site_id = $event,
      error: $data.form.errors.site_id,
      class: "pb-8 pr-6 w-full lg:w-1/2",
      label: "Site(body parts)",
      disabled: !((_f = $data.urlData) == null ? void 0 : _f.includes("newEntry"))
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`<!--[-->`);
          ssrRenderList($props.site, (data) => {
            _push2(`<option${ssrRenderAttr("value", data.id)}${_scopeId}>${ssrInterpolate(data.name)}</option>`);
          });
          _push2(`<!--]-->`);
        } else {
          return [
            (openBlock(true), createBlock(Fragment, null, renderList($props.site, (data) => {
              return openBlock(), createBlock("option", {
                key: data.id,
                value: data.id
              }, toDisplayString(data.name), 9, ["value"]);
            }), 128))
          ];
        }
      }),
      _: 1
    }, _parent));
    _push(`</div>`);
  } else if ($data.active === 3) {
    _push(`<div class="flex flex-wrap -mb-8 p-8">`);
    _push(ssrRenderComponent(_component_date_pick, {
      modelValue: $data.form.date_of_consult,
      "onUpdate:modelValue": ($event) => $data.form.date_of_consult = $event,
      error: $data.form.errors.date_of_consult,
      class: "pb-8 pr-6 w-full lg:w-1/2",
      label: "Date Of Consult",
      disabled: !((_g = $data.urlData) == null ? void 0 : _g.includes("newEntry"))
    }, null, _parent));
    _push(ssrRenderComponent(_component_text_input, {
      modelValue: $data.form.route,
      "onUpdate:modelValue": ($event) => $data.form.route = $event,
      error: $data.form.errors.route,
      class: "pb-8 pr-6 w-full lg:w-1/2",
      label: "Route",
      disabled: !((_h = $data.urlData) == null ? void 0 : _h.includes("newEntry"))
    }, null, _parent));
    _push(ssrRenderComponent(_component_select_input, {
      modelValue: $data.form.category_id,
      "onUpdate:modelValue": ($event) => $data.form.category_id = $event,
      error: $data.form.errors.category_id,
      class: "pb-8 pr-6 w-full lg:w-1/2",
      label: "Category",
      disabled: !((_i = $data.urlData) == null ? void 0 : _i.includes("newEntry"))
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`<!--[-->`);
          ssrRenderList($props.categories, (data) => {
            _push2(`<option${ssrRenderAttr("value", data.id)}${_scopeId}>${ssrInterpolate(data.name)}</option>`);
          });
          _push2(`<!--]-->`);
        } else {
          return [
            (openBlock(true), createBlock(Fragment, null, renderList($props.categories, (data) => {
              return openBlock(), createBlock("option", {
                key: data.id,
                value: data.id
              }, toDisplayString(data.name), 9, ["value"]);
            }), 128))
          ];
        }
      }),
      _: 1
    }, _parent));
    _push(ssrRenderComponent(_component_select_input, {
      modelValue: $data.form.animal_status_id,
      "onUpdate:modelValue": ($event) => $data.form.animal_status_id = $event,
      error: $data.form.errors.animal_status_id,
      class: "pb-8 pr-6 w-full lg:w-1/2",
      label: "Animal Status"
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`<!--[-->`);
          ssrRenderList($props.animalStatus, (data) => {
            _push2(`<option${ssrRenderAttr("value", data.id)}${_scopeId}>${ssrInterpolate(data.name)}</option>`);
          });
          _push2(`<!--]-->`);
        } else {
          return [
            (openBlock(true), createBlock(Fragment, null, renderList($props.animalStatus, (data) => {
              return openBlock(), createBlock("option", {
                key: data.id,
                value: data.id
              }, toDisplayString(data.name), 9, ["value"]);
            }), 128))
          ];
        }
      }),
      _: 1
    }, _parent));
    _push(ssrRenderComponent(_component_select_input, {
      modelValue: $data.form.outcome_id,
      "onUpdate:modelValue": ($event) => $data.form.outcome_id = $event,
      error: $data.form.errors.outcome_id,
      class: "pb-8 pr-6 w-full lg:w-1/2",
      label: "Outcome"
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`<!--[-->`);
          ssrRenderList($props.outcome, (data) => {
            _push2(`<option${ssrRenderAttr("value", data.id)}${_scopeId}>${ssrInterpolate(data.name)}</option>`);
          });
          _push2(`<!--]-->`);
        } else {
          return [
            (openBlock(true), createBlock(Fragment, null, renderList($props.outcome, (data) => {
              return openBlock(), createBlock("option", {
                key: data.id,
                value: data.id
              }, toDisplayString(data.name), 9, ["value"]);
            }), 128))
          ];
        }
      }),
      _: 1
    }, _parent));
    _push(ssrRenderComponent(_component_select_input, {
      modelValue: $data.form.vaccine_id,
      "onUpdate:modelValue": ($event) => $data.form.vaccine_id = $event,
      error: $data.form.errors.vaccine_id,
      class: "pb-8 pr-6 w-full lg:w-1/2",
      label: "Brand Name"
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`<!--[-->`);
          ssrRenderList($props.supplies, (data) => {
            _push2(`<option${ssrRenderAttr("value", data.id)}${_scopeId}>${ssrInterpolate(data.name)}</option>`);
          });
          _push2(`<!--]-->`);
        } else {
          return [
            (openBlock(true), createBlock(Fragment, null, renderList($props.supplies, (data) => {
              return openBlock(), createBlock("option", {
                key: data.id,
                value: data.id
              }, toDisplayString(data.name), 9, ["value"]);
            }), 128))
          ];
        }
      }),
      _: 1
    }, _parent));
    _push(`</div>`);
  } else {
    _push(`<div class="flex flex-wrap -mb-8 p-8">`);
    _push(ssrRenderComponent(_component_date_pick, {
      modelValue: $data.form.rig_date,
      "onUpdate:modelValue": ($event) => $data.form.rig_date = $event,
      error: $data.form.errors.rig_date,
      class: "pb-8 pr-6 w-full lg:w-1/2",
      label: "RIG Date Given",
      disabled: !((_j = $data.urlData) == null ? void 0 : _j.includes("newEntry"))
    }, null, _parent));
    _push(ssrRenderComponent(_component_date_pick, {
      modelValue: $data.form.day0,
      "onUpdate:modelValue": ($event) => $data.form.day0 = $event,
      error: $data.form.errors.day0,
      class: "pb-8 pr-6 w-full lg:w-1/2",
      label: "Day 0",
      disabled: !((_k = $data.urlData) == null ? void 0 : _k.includes("newEntry"))
    }, null, _parent));
    _push(ssrRenderComponent(_component_select_input, {
      modelValue: $data.form.outcome_id,
      "onUpdate:modelValue": ($event) => $data.form.outcome_id = $event,
      error: $data.form.errors.outcome_id,
      class: "pb-8 pr-6 w-full lg:w-1/2",
      label: "Outcome"
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`<!--[-->`);
          ssrRenderList($props.outcome, (data) => {
            _push2(`<option${ssrRenderAttr("value", data.id)}${_scopeId}>${ssrInterpolate(data.name)}</option>`);
          });
          _push2(`<!--]-->`);
        } else {
          return [
            (openBlock(true), createBlock(Fragment, null, renderList($props.outcome, (data) => {
              return openBlock(), createBlock("option", {
                key: data.id,
                value: data.id
              }, toDisplayString(data.name), 9, ["value"]);
            }), 128))
          ];
        }
      }),
      _: 1
    }, _parent));
    _push(ssrRenderComponent(_component_textarea_input, {
      modelValue: $data.form.remarks,
      "onUpdate:modelValue": ($event) => $data.form.remarks = $event,
      error: $data.form.errors.remarks,
      class: "pb-8 pr-6 w-full lg:w-1/2",
      label: "Remarks"
    }, null, _parent));
    _push(`</div>`);
  }
  _push(`</div><div class="flex items-center justify-end px-8 py-4 bg-gray-50 border-t border-gray-100">`);
  if ($data.active > 1) {
    _push(`<button class="btn-indigo mr-2" tabindex="-1" type="button">Back</button>`);
  } else {
    _push(`<!---->`);
  }
  _push(ssrRenderComponent(_component_loading_button, {
    loading: $data.form.processing,
    class: "btn-indigo",
    type: "submit"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`${ssrInterpolate($data.active > 3 ? this.getTitle() : "Next")}`);
      } else {
        return [
          createTextVNode(toDisplayString($data.active > 3 ? this.getTitle() : "Next"), 1)
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></form></div></div>`);
}
const _sfc_setup$b = _sfc_main$b.setup;
_sfc_main$b.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Patients/Edit.vue");
  return _sfc_setup$b ? _sfc_setup$b(props, ctx) : void 0;
};
const Edit$2 = /* @__PURE__ */ _export_sfc(_sfc_main$b, [["ssrRender", _sfc_ssrRender$b], ["__file", "/home/jolima/workingFiles/tabisv1/resources/js/Pages/Patients/Edit.vue"]]);
const __vite_glob_0_4 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Edit$2
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$a = {
  components: {
    Link
  },
  props: {
    links: Array
  }
};
function _sfc_ssrRender$a(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Link = resolveComponent("Link");
  if ($props.links.length > 3) {
    _push(`<div${ssrRenderAttrs(_attrs)}><div class="flex flex-wrap -mb-1"><!--[-->`);
    ssrRenderList($props.links, (link, key) => {
      _push(`<!--[-->`);
      if (link.url === null) {
        _push(`<div class="mb-1 mr-1 px-4 py-3 text-gray-400 text-sm leading-4 border rounded">${link.label}</div>`);
      } else {
        _push(ssrRenderComponent(_component_Link, {
          key: `link-${key}`,
          class: ["mb-1 mr-1 px-4 py-3 focus:text-indigo-500 text-sm leading-4 hover:bg-white border focus:border-indigo-500 rounded", { "bg-white": link.active }],
          href: link.url
        }, null, _parent));
      }
      _push(`<!--]-->`);
    });
    _push(`<!--]--></div></div>`);
  } else {
    _push(`<!---->`);
  }
}
const _sfc_setup$a = _sfc_main$a.setup;
_sfc_main$a.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Shared/Pagination.vue");
  return _sfc_setup$a ? _sfc_setup$a(props, ctx) : void 0;
};
const Pagination = /* @__PURE__ */ _export_sfc(_sfc_main$a, [["ssrRender", _sfc_ssrRender$a], ["__file", "/home/jolima/workingFiles/tabisv1/resources/js/Shared/Pagination.vue"]]);
const _sfc_main$9 = {
  components: {
    Dropdown
  },
  props: {
    modelValue: String,
    maxWidth: {
      type: Number,
      default: 300
    }
  },
  emits: ["update:modelValue", "reset"]
};
function _sfc_ssrRender$9(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_dropdown = resolveComponent("dropdown");
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex items-center" }, _attrs))}><div class="flex w-full bg-white rounded shadow">`);
  _push(ssrRenderComponent(_component_dropdown, {
    "auto-close": false,
    class: "focus:z-10 px-4 hover:bg-gray-100 border-r focus:border-white rounded-l focus:ring md:px-6",
    placement: "bottom-start"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="flex items-baseline"${_scopeId}><span class="hidden text-gray-700 md:inline"${_scopeId}>Filter</span><svg class="w-2 h-2 fill-gray-700 md:ml-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 961.243 599.998"${_scopeId}><path d="M239.998 239.999L0 0h961.243L721.246 240c-131.999 132-240.28 240-240.624 239.999-.345-.001-108.625-108.001-240.624-240z"${_scopeId}></path></svg></div>`);
      } else {
        return [
          createVNode("div", { class: "flex items-baseline" }, [
            createVNode("span", { class: "hidden text-gray-700 md:inline" }, "Filter"),
            (openBlock(), createBlock("svg", {
              class: "w-2 h-2 fill-gray-700 md:ml-2",
              xmlns: "http://www.w3.org/2000/svg",
              viewBox: "0 0 961.243 599.998"
            }, [
              createVNode("path", { d: "M239.998 239.999L0 0h961.243L721.246 240c-131.999 132-240.28 240-240.624 239.999-.345-.001-108.625-108.001-240.624-240z" })
            ]))
          ])
        ];
      }
    }),
    dropdown: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="mt-2 px-4 py-6 w-screen bg-white rounded shadow-xl" style="${ssrRenderStyle({ maxWidth: `${$props.maxWidth}px` })}"${_scopeId}>`);
        ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
        _push2(`</div>`);
      } else {
        return [
          createVNode("div", {
            class: "mt-2 px-4 py-6 w-screen bg-white rounded shadow-xl",
            style: { maxWidth: `${$props.maxWidth}px` }
          }, [
            renderSlot(_ctx.$slots, "default")
          ], 4)
        ];
      }
    }),
    _: 3
  }, _parent));
  _push(`<input class="relative px-6 py-3 w-full rounded-r focus:shadow-outline" autocomplete="off" type="text" name="search" placeholder="Search…"${ssrRenderAttr("value", $props.modelValue)}></div><button class="ml-3 text-gray-500 hover:text-gray-700 focus:text-indigo-500 text-sm" type="button">Reset</button></div>`);
}
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Shared/SearchFilter.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
const SearchFilter = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["ssrRender", _sfc_ssrRender$9], ["__file", "/home/jolima/workingFiles/tabisv1/resources/js/Shared/SearchFilter.vue"]]);
const _sfc_main$8 = {
  components: {
    Head,
    Icon,
    Link,
    Pagination,
    SearchFilter
  },
  layout: Layout,
  props: {
    filters: Object,
    patients: Object,
    genders: Array,
    animals: Array,
    biteTypes: Array,
    categories: Array,
    animalStatus: Array,
    categories: Array,
    outcome: Array,
    site: Array,
    supplies: Array,
    suppliesCategory: Array,
    barangays: Array,
    tissueCultureVaccine: Array
  },
  data() {
    return {
      bite_history: false,
      form: {
        search: this.filters.search,
        sex: this.filters.sex,
        age: this.filters.age,
        animal_type_id: this.filters.animal_type_id,
        barangay_id: this.filters.barangay_id,
        date_of_bite: this.filters.date_of_bite,
        bite_history: null
      },
      ageData: [
        {
          id: 1,
          value: "0-12"
        },
        {
          id: 2,
          value: "13-19"
        },
        {
          id: 3,
          value: "20-30"
        },
        {
          id: 4,
          value: "30-40"
        },
        {
          id: 5,
          value: "41-59"
        },
        {
          id: 6,
          value: "60+"
        }
      ]
    };
  },
  watch: {
    form: {
      deep: true,
      handler: throttle(function() {
        this.$inertia.get("/patients", pickBy(this.form), { preserveState: true });
      }, 150)
    }
  },
  methods: {
    reset() {
      this.form = mapValues(this.form, () => null);
    },
    viewHistory(data) {
      this.form.bite_history = {
        biteHistory: data == null ? void 0 : data.biteHistory,
        tissueCultureVaccine: data == null ? void 0 : data.tissueCultureVaccine,
        newEntry: data
      };
      this.bite_history = true;
    },
    name(data, id) {
      const mapped = data.find((item) => item.id === id);
      return mapped == null ? void 0 : mapped.name;
    },
    mappedRecord(data, id) {
      return data.filter((item) => item.id === id);
    },
    mappedReport(data) {
      return data.map((item) => {
        const biteHistory = item.biteHistory.map((item2) => {
          const tissue = this.tissueCultureVaccine.find((items) => items.id === item2.tcv_id);
          return {
            date_of_bite: (item2 == null ? void 0 : item2.date_of_bite) ? new Date(item2 == null ? void 0 : item2.date_of_bite) : "",
            date_of_consult: (item2 == null ? void 0 : item2.date_of_consult) ? new Date(item2 == null ? void 0 : item2.date_of_consult) : "",
            animal_status_id: this.name(this.animalStatus, item2.animal_status_id),
            animal_type_id: this.name(this.animals, item2.animal_type_id),
            place: item2.place,
            category_id: this.name(this.categories, item2.category_id),
            site_id: this.name(this.site, item2.site_id),
            type_of_bite_id: this.name(this.biteTypes, item2.type_of_bite_id),
            washed: (item2 == null ? void 0 : item2.washed) === 1 ? "Yes" : "No",
            rig_date: (item2 == null ? void 0 : item2.rig_date) ? new Date(item2 == null ? void 0 : item2.rig_date) : "",
            route: tissue == null ? void 0 : tissue.route,
            day0: tissue == null ? void 0 : tissue.day0,
            day3: tissue == null ? void 0 : tissue.day3,
            day7: tissue == null ? void 0 : tissue.day7,
            day14: tissue == null ? void 0 : tissue.day14,
            day28: tissue == null ? void 0 : tissue.day28,
            supplies_id: this.name(this.supplies, item2.supplies_id),
            outcome_id: this.name(this.outcome, item2.outcome_id),
            remarks: item2.remarks
          };
        });
        return {
          id: item == null ? void 0 : item.id,
          name: (item == null ? void 0 : item.middle_name) ? `${item.first_name} ${item.middle_name} ${item.last_name}` : `${item.first_name} ${item.last_name}`,
          phone: item.phone,
          gender: this.name(this.genders, item.sex),
          age: item.age,
          barangay: this.name(this.barangays, item.barangay_id),
          address: item.address,
          ...biteHistory[0]
        };
      });
    },
    generateReport() {
      const customHeaders = [
        "Patient ID",
        "Name",
        "Phone Number",
        "Gender",
        "Age",
        "Barangay",
        "Address",
        "Date of Bite",
        "Date of Consult",
        "Animal Status",
        "Animal Type",
        "Place",
        "Category",
        "Site",
        "Type of Bite",
        "Washed",
        "RIG Date",
        "Route",
        "Day0",
        "Day3",
        "Day7",
        "Day14",
        "Day28",
        "Brand Name",
        "Outcome",
        "Remarks"
      ];
      const wb = utils.book_new();
      const ws = utils.json_to_sheet([]);
      utils.sheet_add_aoa(ws, [customHeaders]);
      utils.sheet_add_json(ws, this.mappedReport(this.patients.data), { origin: "A2", skipHeader: true });
      utils.book_append_sheet(wb, ws, "Sheet1");
      const workbook = write(wb, { bookType: "xlsx", type: "binary" });
      const excelFile = new Blob([this.s2ab(workbook)], { type: "application/octet-stream" });
      const url = URL.createObjectURL(excelFile);
      const link = document.createElement("a");
      link.href = url;
      link.download = `patient-report-${(/* @__PURE__ */ new Date()).toDateString()}.xlsx`;
      link.click();
      URL.revokeObjectURL(url);
    },
    s2ab(s) {
      const buf = new ArrayBuffer(s.length);
      const view = new Uint8Array(buf);
      for (let i = 0; i < s.length; i++) view[i] = s.charCodeAt(i) & 255;
      return buf;
    }
  }
};
function _sfc_ssrRender$8(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  var _a;
  const _component_Head = resolveComponent("Head");
  const _component_search_filter = resolveComponent("search-filter");
  const _component_icon = resolveComponent("icon");
  const _component_el_icon = resolveComponent("el-icon");
  const _component_Search = resolveComponent("Search");
  const _component_Link = resolveComponent("Link");
  const _component_el_button = resolveComponent("el-button");
  const _component_el_drawer = resolveComponent("el-drawer");
  const _component_el_table = resolveComponent("el-table");
  const _component_el_table_column = resolveComponent("el-table-column");
  const _component_el_tag = resolveComponent("el-tag");
  const _component_pagination = resolveComponent("pagination");
  _push(`<div${ssrRenderAttrs(_attrs)}>`);
  _push(ssrRenderComponent(_component_Head, { title: "Patient Record" }, null, _parent));
  _push(`<h1 class="mb-8 text-3xl font-bold">Patient Record</h1><div class="flex items-center justify-between mb-6">`);
  _push(ssrRenderComponent(_component_search_filter, {
    modelValue: $data.form.search,
    "onUpdate:modelValue": ($event) => $data.form.search = $event,
    class: "mr-4 w-full max-w-md",
    onReset: $options.reset
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<label class="block text-gray-700"${_scopeId}>Gender:</label><select class="form-select mt-1 w-full"${_scopeId}><!--[-->`);
        ssrRenderList($props.genders, (data) => {
          _push2(`<option${ssrRenderAttr("value", data == null ? void 0 : data.id)}${_scopeId}>${ssrInterpolate(data.name)}</option>`);
        });
        _push2(`<!--]--></select><label class="block text-gray-700"${_scopeId}>Type of Animals:</label><select class="form-select mt-1 w-full"${_scopeId}><!--[-->`);
        ssrRenderList($props.animals, (data) => {
          _push2(`<option${ssrRenderAttr("value", data == null ? void 0 : data.id)}${_scopeId}>${ssrInterpolate(data.name)}</option>`);
        });
        _push2(`<!--]--></select><label class="block text-gray-700"${_scopeId}>Age:</label><select class="form-select mt-1 w-full"${_scopeId}><!--[-->`);
        ssrRenderList($data.ageData, (data) => {
          _push2(`<option${ssrRenderAttr("value", data == null ? void 0 : data.id)}${_scopeId}>${ssrInterpolate(data.value)}</option>`);
        });
        _push2(`<!--]--></select><label class="block text-gray-700"${_scopeId}>Barangay:</label><select class="form-select mt-1 w-full"${_scopeId}><!--[-->`);
        ssrRenderList($props.barangays, (data) => {
          _push2(`<option${ssrRenderAttr("value", data == null ? void 0 : data.id)}${_scopeId}>${ssrInterpolate(data.name)}</option>`);
        });
        _push2(`<!--]--></select>`);
      } else {
        return [
          createVNode("label", { class: "block text-gray-700" }, "Gender:"),
          withDirectives(createVNode("select", {
            "onUpdate:modelValue": ($event) => $data.form.sex = $event,
            class: "form-select mt-1 w-full"
          }, [
            (openBlock(true), createBlock(Fragment, null, renderList($props.genders, (data) => {
              return openBlock(), createBlock("option", {
                key: data == null ? void 0 : data.id,
                value: data == null ? void 0 : data.id
              }, toDisplayString(data.name), 9, ["value"]);
            }), 128))
          ], 8, ["onUpdate:modelValue"]), [
            [vModelSelect, $data.form.sex]
          ]),
          createVNode("label", { class: "block text-gray-700" }, "Type of Animals:"),
          withDirectives(createVNode("select", {
            "onUpdate:modelValue": ($event) => $data.form.animal_type_id = $event,
            class: "form-select mt-1 w-full"
          }, [
            (openBlock(true), createBlock(Fragment, null, renderList($props.animals, (data) => {
              return openBlock(), createBlock("option", {
                key: data == null ? void 0 : data.id,
                value: data == null ? void 0 : data.id
              }, toDisplayString(data.name), 9, ["value"]);
            }), 128))
          ], 8, ["onUpdate:modelValue"]), [
            [vModelSelect, $data.form.animal_type_id]
          ]),
          createVNode("label", { class: "block text-gray-700" }, "Age:"),
          withDirectives(createVNode("select", {
            "onUpdate:modelValue": ($event) => $data.form.age = $event,
            class: "form-select mt-1 w-full"
          }, [
            (openBlock(true), createBlock(Fragment, null, renderList($data.ageData, (data) => {
              return openBlock(), createBlock("option", {
                key: data == null ? void 0 : data.id,
                value: data == null ? void 0 : data.id
              }, toDisplayString(data.value), 9, ["value"]);
            }), 128))
          ], 8, ["onUpdate:modelValue"]), [
            [vModelSelect, $data.form.age]
          ]),
          createVNode("label", { class: "block text-gray-700" }, "Barangay:"),
          withDirectives(createVNode("select", {
            "onUpdate:modelValue": ($event) => $data.form.barangay_id = $event,
            class: "form-select mt-1 w-full"
          }, [
            (openBlock(true), createBlock(Fragment, null, renderList($props.barangays, (data) => {
              return openBlock(), createBlock("option", {
                key: data == null ? void 0 : data.id,
                value: data == null ? void 0 : data.id
              }, toDisplayString(data.name), 9, ["value"]);
            }), 128))
          ], 8, ["onUpdate:modelValue"]), [
            [vModelSelect, $data.form.barangay_id]
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<div><button class="p2 mt-1"${ssrIncludeBooleanAttr($props.patients.data.length === 0) ? " disabled" : ""}>`);
  _push(ssrRenderComponent(_component_icon, {
    name: "printer",
    class: "block w-6 h-6 fill-gray-400"
  }, null, _parent));
  _push(`</button>`);
  _push(ssrRenderComponent(_component_el_icon, {
    size: _ctx.size,
    color: _ctx.color
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_Search, null, null, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_Search)
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_Link, {
    class: "btn-indigo",
    href: "/patients/create"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<span${_scopeId}>Create</span><span class="hidden md:inline"${_scopeId}> Patient</span>`);
      } else {
        return [
          createVNode("span", null, "Create"),
          createVNode("span", { class: "hidden md:inline" }, " Patient")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div><div class="bg-white rounded-md shadow overflow-x-auto"><table class="w-full whitespace-nowrap"><tr class="text-left font-bold"><th class="pb-4 pt-6 px-6">Name</th><th class="pb-4 pt-6 px-6">Date of Bite</th><th class="pb-4 pt-6 px-6">Age</th><th class="pb-4 pt-6 px-6">Sex</th><th class="pb-4 pt-6 px-6">Barangay</th><th class="pb-4 pt-6 px-6">Address</th><th class="pb-4 pt-6 px-6" colspan="2">Phone</th></tr><!--[-->`);
  ssrRenderList($props.patients.data, (patient) => {
    _push(`<tr class="hover:bg-gray-100 focus-within:bg-gray-100"><td class="border-t">`);
    _push(ssrRenderComponent(_component_Link, { class: "flex items-center px-6 py-4 focus:text-indigo-500" }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`${ssrInterpolate(`${patient.first_name} ${patient.middle_name} ${patient.last_name}`)}`);
        } else {
          return [
            createTextVNode(toDisplayString(`${patient.first_name} ${patient.middle_name} ${patient.last_name}`), 1)
          ];
        }
      }),
      _: 2
    }, _parent));
    _push(`</td><td class="border-t">`);
    _push(ssrRenderComponent(_component_Link, {
      class: "flex items-center px-6 py-4",
      tabindex: "-1"
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        var _a2, _b;
        if (_push2) {
          _push2(`${ssrInterpolate((_a2 = patient.biteHistory[0]) == null ? void 0 : _a2.date_of_bite)}`);
        } else {
          return [
            createTextVNode(toDisplayString((_b = patient.biteHistory[0]) == null ? void 0 : _b.date_of_bite), 1)
          ];
        }
      }),
      _: 2
    }, _parent));
    _push(`</td><td class="border-t">`);
    _push(ssrRenderComponent(_component_Link, {
      class: "flex items-center px-6 py-4",
      tabindex: "-1"
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`${ssrInterpolate(patient.age)}`);
        } else {
          return [
            createTextVNode(toDisplayString(patient.age), 1)
          ];
        }
      }),
      _: 2
    }, _parent));
    _push(`</td><td class="border-t">`);
    _push(ssrRenderComponent(_component_Link, {
      class: "flex items-center px-6 py-4",
      tabindex: "-1"
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`${ssrInterpolate($options.name($props.genders, patient.sex))}`);
        } else {
          return [
            createTextVNode(toDisplayString($options.name($props.genders, patient.sex)), 1)
          ];
        }
      }),
      _: 2
    }, _parent));
    _push(`</td><td class="border-t">`);
    _push(ssrRenderComponent(_component_Link, {
      class: "flex items-center px-6 py-4",
      tabindex: "-1"
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`${ssrInterpolate($options.name($props.barangays, patient.barangay_id))}`);
        } else {
          return [
            createTextVNode(toDisplayString($options.name($props.barangays, patient.barangay_id)), 1)
          ];
        }
      }),
      _: 2
    }, _parent));
    _push(`</td><td class="border-t">`);
    _push(ssrRenderComponent(_component_Link, {
      class: "flex items-center px-6 py-4",
      tabindex: "-1"
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`${ssrInterpolate(patient.address)}`);
        } else {
          return [
            createTextVNode(toDisplayString(patient.address), 1)
          ];
        }
      }),
      _: 2
    }, _parent));
    _push(`</td><td class="border-t">`);
    _push(ssrRenderComponent(_component_Link, {
      class: "flex items-center px-6 py-4",
      tabindex: "-1"
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`${ssrInterpolate(patient.phone)}`);
        } else {
          return [
            createTextVNode(toDisplayString(patient.phone), 1)
          ];
        }
      }),
      _: 2
    }, _parent));
    _push(`</td><td class="w-px border-t">`);
    _push(ssrRenderComponent(_component_el_button, {
      type: "info",
      onClick: ($event) => $options.viewHistory(patient)
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`Bite History`);
        } else {
          return [
            createTextVNode("Bite History")
          ];
        }
      }),
      _: 2
    }, _parent));
    _push(`</td><td class="w-px border-t">`);
    _push(ssrRenderComponent(_component_Link, {
      class: "flex items-center px-4",
      href: `/patients/${patient.id}/edit`,
      tabindex: "-1"
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(ssrRenderComponent(_component_icon, {
            name: "cheveron-right",
            class: "block w-6 h-6 fill-gray-400"
          }, null, _parent2, _scopeId));
        } else {
          return [
            createVNode(_component_icon, {
              name: "cheveron-right",
              class: "block w-6 h-6 fill-gray-400"
            })
          ];
        }
      }),
      _: 2
    }, _parent));
    _push(`</td></tr>`);
  });
  _push(`<!--]-->`);
  if ($props.patients.data.length === 0) {
    _push(`<tr><td class="px-6 py-4 border-t" colspan="4">No patient records found.</td></tr>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</table>`);
  _push(ssrRenderComponent(_component_el_drawer, {
    modelValue: $data.bite_history,
    "onUpdate:modelValue": ($event) => $data.bite_history = $event,
    title: "Animal Bite History",
    direction: "rtl",
    size: "50%"
  }, {
    header: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<h4 class="text-3xl font-bold center"${_scopeId}>Animal Bite History</h4>`);
      } else {
        return [
          createVNode("h4", { class: "text-3xl font-bold center" }, "Animal Bite History")
        ];
      }
    }),
    footer: withCtx((_, _push2, _parent2, _scopeId) => {
      var _a2, _b, _c, _d;
      if (_push2) {
        _push2(`<div style="${ssrRenderStyle({ "flex": "auto" })}"${_scopeId}>`);
        _push2(ssrRenderComponent(_component_Link, {
          class: "btn-indigo",
          href: `/patients/${(_b = (_a2 = $data.form.bite_history) == null ? void 0 : _a2.newEntry) == null ? void 0 : _b.id}/newEntry`
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<span${_scopeId2}>Create</span><span class="hidden md:inline"${_scopeId2}> New Entry</span>`);
            } else {
              return [
                createVNode("span", null, "Create"),
                createVNode("span", { class: "hidden md:inline" }, " New Entry")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(`</div>`);
      } else {
        return [
          createVNode("div", { style: { "flex": "auto" } }, [
            createVNode(_component_Link, {
              class: "btn-indigo",
              href: `/patients/${(_d = (_c = $data.form.bite_history) == null ? void 0 : _c.newEntry) == null ? void 0 : _d.id}/newEntry`
            }, {
              default: withCtx(() => [
                createVNode("span", null, "Create"),
                createVNode("span", { class: "hidden md:inline" }, " New Entry")
              ]),
              _: 1
            }, 8, ["href"])
          ])
        ];
      }
    }),
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_el_table, {
          data: $data.form.bite_history.biteHistory,
          style: { "width": "100%" },
          height: "500"
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(_component_el_table_column, {
                property: "date_of_bite",
                label: "Date",
                width: "100"
              }, null, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_el_table_column, {
                label: "Bite Type",
                width: "100"
              }, {
                default: withCtx((scope, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`${ssrInterpolate($options.name($props.biteTypes, scope == null ? void 0 : scope.row.type_of_bite_id))}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString($options.name($props.biteTypes, scope == null ? void 0 : scope.row.type_of_bite_id)), 1)
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_el_table_column, {
                label: "Animal",
                width: "100"
              }, {
                default: withCtx((scope, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`${ssrInterpolate($options.name($props.animals, scope == null ? void 0 : scope.row.animal_type_id))}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString($options.name($props.animals, scope == null ? void 0 : scope.row.animal_type_id)), 1)
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_el_table_column, {
                label: "Category",
                width: "100"
              }, {
                default: withCtx((scope, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`${ssrInterpolate($options.name($props.categories, scope == null ? void 0 : scope.row.category_id))}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString($options.name($props.categories, scope == null ? void 0 : scope.row.category_id)), 1)
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_el_table_column, {
                label: "Animal Status",
                width: "150"
              }, {
                default: withCtx((scope, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`${ssrInterpolate($options.name($props.animalStatus, scope == null ? void 0 : scope.row.animal_status_id))}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString($options.name($props.animalStatus, scope == null ? void 0 : scope.row.animal_status_id)), 1)
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_el_table_column, {
                label: "Site",
                width: "100"
              }, {
                default: withCtx((scope, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`${ssrInterpolate($options.name($props.site, scope == null ? void 0 : scope.row.site_id))}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString($options.name($props.site, scope == null ? void 0 : scope.row.site_id)), 1)
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_el_table_column, {
                label: "Washed",
                width: "100"
              }, {
                default: withCtx((scope, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(ssrRenderComponent(_component_el_tag, {
                      type: scope.row.washed ? "success" : "danger",
                      "disable-transitions": ""
                    }, {
                      default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(`${ssrInterpolate(scope.row.washed ? "Yes" : "No")}`);
                        } else {
                          return [
                            createTextVNode(toDisplayString(scope.row.washed ? "Yes" : "No"), 1)
                          ];
                        }
                      }),
                      _: 2
                    }, _parent4, _scopeId3));
                  } else {
                    return [
                      createVNode(_component_el_tag, {
                        type: scope.row.washed ? "success" : "danger",
                        "disable-transitions": ""
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(scope.row.washed ? "Yes" : "No"), 1)
                        ]),
                        _: 2
                      }, 1032, ["type"])
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_el_table_column, {
                label: "Tissue Culture Vaccine",
                width: "200"
              }, {
                default: withCtx((scope, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`<!--[-->`);
                    ssrRenderList($options.mappedRecord($props.tissueCultureVaccine, scope.row.tcv_id), (item) => {
                      _push4(`<div${_scopeId3}>${ssrInterpolate(`Route: ${item.route}`)}<br${_scopeId3}> ${ssrInterpolate(`Day 0: ${item.day0}`)}<br${_scopeId3}> ${ssrInterpolate(`Day 3: ${item.day3}`)}<br${_scopeId3}> ${ssrInterpolate(`Day 7: ${item.day7}`)}<br${_scopeId3}> ${ssrInterpolate(`Day 14: ${item.day14}`)}<br${_scopeId3}> ${ssrInterpolate(`Day 28: ${item.day28}`)}<br${_scopeId3}> ${ssrInterpolate(`Brand name: ${$options.name($props.supplies, item.vacine_id)}`)}</div>`);
                    });
                    _push4(`<!--]-->`);
                  } else {
                    return [
                      (openBlock(true), createBlock(Fragment, null, renderList($options.mappedRecord($props.tissueCultureVaccine, scope.row.tcv_id), (item) => {
                        return openBlock(), createBlock("div", {
                          key: item.id
                        }, [
                          createTextVNode(toDisplayString(`Route: ${item.route}`), 1),
                          createVNode("br"),
                          createTextVNode(" " + toDisplayString(`Day 0: ${item.day0}`), 1),
                          createVNode("br"),
                          createTextVNode(" " + toDisplayString(`Day 3: ${item.day3}`), 1),
                          createVNode("br"),
                          createTextVNode(" " + toDisplayString(`Day 7: ${item.day7}`), 1),
                          createVNode("br"),
                          createTextVNode(" " + toDisplayString(`Day 14: ${item.day14}`), 1),
                          createVNode("br"),
                          createTextVNode(" " + toDisplayString(`Day 28: ${item.day28}`), 1),
                          createVNode("br"),
                          createTextVNode(" " + toDisplayString(`Brand name: ${$options.name($props.supplies, item.vacine_id)}`), 1)
                        ]);
                      }), 128))
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_el_table_column, {
                label: "Outcome",
                width: "100"
              }, {
                default: withCtx((scope, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`${ssrInterpolate($options.name($props.outcome, scope == null ? void 0 : scope.row.outcome_id))}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString($options.name($props.outcome, scope == null ? void 0 : scope.row.outcome_id)), 1)
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_el_table_column, {
                label: "Remarks",
                property: "remarks",
                fixed: "right",
                width: "300"
              }, null, _parent3, _scopeId2));
            } else {
              return [
                createVNode(_component_el_table_column, {
                  property: "date_of_bite",
                  label: "Date",
                  width: "100"
                }),
                createVNode(_component_el_table_column, {
                  label: "Bite Type",
                  width: "100"
                }, {
                  default: withCtx((scope) => [
                    createTextVNode(toDisplayString($options.name($props.biteTypes, scope == null ? void 0 : scope.row.type_of_bite_id)), 1)
                  ]),
                  _: 1
                }),
                createVNode(_component_el_table_column, {
                  label: "Animal",
                  width: "100"
                }, {
                  default: withCtx((scope) => [
                    createTextVNode(toDisplayString($options.name($props.animals, scope == null ? void 0 : scope.row.animal_type_id)), 1)
                  ]),
                  _: 1
                }),
                createVNode(_component_el_table_column, {
                  label: "Category",
                  width: "100"
                }, {
                  default: withCtx((scope) => [
                    createTextVNode(toDisplayString($options.name($props.categories, scope == null ? void 0 : scope.row.category_id)), 1)
                  ]),
                  _: 1
                }),
                createVNode(_component_el_table_column, {
                  label: "Animal Status",
                  width: "150"
                }, {
                  default: withCtx((scope) => [
                    createTextVNode(toDisplayString($options.name($props.animalStatus, scope == null ? void 0 : scope.row.animal_status_id)), 1)
                  ]),
                  _: 1
                }),
                createVNode(_component_el_table_column, {
                  label: "Site",
                  width: "100"
                }, {
                  default: withCtx((scope) => [
                    createTextVNode(toDisplayString($options.name($props.site, scope == null ? void 0 : scope.row.site_id)), 1)
                  ]),
                  _: 1
                }),
                createVNode(_component_el_table_column, {
                  label: "Washed",
                  width: "100"
                }, {
                  default: withCtx((scope) => [
                    createVNode(_component_el_tag, {
                      type: scope.row.washed ? "success" : "danger",
                      "disable-transitions": ""
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(scope.row.washed ? "Yes" : "No"), 1)
                      ]),
                      _: 2
                    }, 1032, ["type"])
                  ]),
                  _: 1
                }),
                createVNode(_component_el_table_column, {
                  label: "Tissue Culture Vaccine",
                  width: "200"
                }, {
                  default: withCtx((scope) => [
                    (openBlock(true), createBlock(Fragment, null, renderList($options.mappedRecord($props.tissueCultureVaccine, scope.row.tcv_id), (item) => {
                      return openBlock(), createBlock("div", {
                        key: item.id
                      }, [
                        createTextVNode(toDisplayString(`Route: ${item.route}`), 1),
                        createVNode("br"),
                        createTextVNode(" " + toDisplayString(`Day 0: ${item.day0}`), 1),
                        createVNode("br"),
                        createTextVNode(" " + toDisplayString(`Day 3: ${item.day3}`), 1),
                        createVNode("br"),
                        createTextVNode(" " + toDisplayString(`Day 7: ${item.day7}`), 1),
                        createVNode("br"),
                        createTextVNode(" " + toDisplayString(`Day 14: ${item.day14}`), 1),
                        createVNode("br"),
                        createTextVNode(" " + toDisplayString(`Day 28: ${item.day28}`), 1),
                        createVNode("br"),
                        createTextVNode(" " + toDisplayString(`Brand name: ${$options.name($props.supplies, item.vacine_id)}`), 1)
                      ]);
                    }), 128))
                  ]),
                  _: 1
                }),
                createVNode(_component_el_table_column, {
                  label: "Outcome",
                  width: "100"
                }, {
                  default: withCtx((scope) => [
                    createTextVNode(toDisplayString($options.name($props.outcome, scope == null ? void 0 : scope.row.outcome_id)), 1)
                  ]),
                  _: 1
                }),
                createVNode(_component_el_table_column, {
                  label: "Remarks",
                  property: "remarks",
                  fixed: "right",
                  width: "300"
                })
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_el_table, {
            data: $data.form.bite_history.biteHistory,
            style: { "width": "100%" },
            height: "500"
          }, {
            default: withCtx(() => [
              createVNode(_component_el_table_column, {
                property: "date_of_bite",
                label: "Date",
                width: "100"
              }),
              createVNode(_component_el_table_column, {
                label: "Bite Type",
                width: "100"
              }, {
                default: withCtx((scope) => [
                  createTextVNode(toDisplayString($options.name($props.biteTypes, scope == null ? void 0 : scope.row.type_of_bite_id)), 1)
                ]),
                _: 1
              }),
              createVNode(_component_el_table_column, {
                label: "Animal",
                width: "100"
              }, {
                default: withCtx((scope) => [
                  createTextVNode(toDisplayString($options.name($props.animals, scope == null ? void 0 : scope.row.animal_type_id)), 1)
                ]),
                _: 1
              }),
              createVNode(_component_el_table_column, {
                label: "Category",
                width: "100"
              }, {
                default: withCtx((scope) => [
                  createTextVNode(toDisplayString($options.name($props.categories, scope == null ? void 0 : scope.row.category_id)), 1)
                ]),
                _: 1
              }),
              createVNode(_component_el_table_column, {
                label: "Animal Status",
                width: "150"
              }, {
                default: withCtx((scope) => [
                  createTextVNode(toDisplayString($options.name($props.animalStatus, scope == null ? void 0 : scope.row.animal_status_id)), 1)
                ]),
                _: 1
              }),
              createVNode(_component_el_table_column, {
                label: "Site",
                width: "100"
              }, {
                default: withCtx((scope) => [
                  createTextVNode(toDisplayString($options.name($props.site, scope == null ? void 0 : scope.row.site_id)), 1)
                ]),
                _: 1
              }),
              createVNode(_component_el_table_column, {
                label: "Washed",
                width: "100"
              }, {
                default: withCtx((scope) => [
                  createVNode(_component_el_tag, {
                    type: scope.row.washed ? "success" : "danger",
                    "disable-transitions": ""
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(scope.row.washed ? "Yes" : "No"), 1)
                    ]),
                    _: 2
                  }, 1032, ["type"])
                ]),
                _: 1
              }),
              createVNode(_component_el_table_column, {
                label: "Tissue Culture Vaccine",
                width: "200"
              }, {
                default: withCtx((scope) => [
                  (openBlock(true), createBlock(Fragment, null, renderList($options.mappedRecord($props.tissueCultureVaccine, scope.row.tcv_id), (item) => {
                    return openBlock(), createBlock("div", {
                      key: item.id
                    }, [
                      createTextVNode(toDisplayString(`Route: ${item.route}`), 1),
                      createVNode("br"),
                      createTextVNode(" " + toDisplayString(`Day 0: ${item.day0}`), 1),
                      createVNode("br"),
                      createTextVNode(" " + toDisplayString(`Day 3: ${item.day3}`), 1),
                      createVNode("br"),
                      createTextVNode(" " + toDisplayString(`Day 7: ${item.day7}`), 1),
                      createVNode("br"),
                      createTextVNode(" " + toDisplayString(`Day 14: ${item.day14}`), 1),
                      createVNode("br"),
                      createTextVNode(" " + toDisplayString(`Day 28: ${item.day28}`), 1),
                      createVNode("br"),
                      createTextVNode(" " + toDisplayString(`Brand name: ${$options.name($props.supplies, item.vacine_id)}`), 1)
                    ]);
                  }), 128))
                ]),
                _: 1
              }),
              createVNode(_component_el_table_column, {
                label: "Outcome",
                width: "100"
              }, {
                default: withCtx((scope) => [
                  createTextVNode(toDisplayString($options.name($props.outcome, scope == null ? void 0 : scope.row.outcome_id)), 1)
                ]),
                _: 1
              }),
              createVNode(_component_el_table_column, {
                label: "Remarks",
                property: "remarks",
                fixed: "right",
                width: "300"
              })
            ]),
            _: 1
          }, 8, ["data"])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div>`);
  _push(ssrRenderComponent(_component_pagination, {
    class: "mt-6",
    links: (_a = $props.patients) == null ? void 0 : _a.links
  }, null, _parent));
  _push(`</div>`);
}
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Patients/Index.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const Index$2 = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["ssrRender", _sfc_ssrRender$8], ["__file", "/home/jolima/workingFiles/tabisv1/resources/js/Pages/Patients/Index.vue"]]);
const __vite_glob_0_5 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Index$2
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$7 = {
  components: {
    Head,
    Link,
    LoadingButton,
    SelectInput,
    TextInput,
    NumberText,
    DatePick
  },
  layout: Layout,
  remember: "form",
  props: {
    categories: Array,
    current_user: Object
  },
  data(props) {
    return {
      form: this.$inertia.form({
        name: "",
        manufacturer: "",
        dosage: "",
        quantity: "",
        date_received: "",
        date_expire: "",
        supplies_id: "",
        account_id: props.current_user.id
      })
    };
  },
  methods: {
    store() {
      this.form.post("/medical-supplies");
    }
  }
};
function _sfc_ssrRender$7(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Head = resolveComponent("Head");
  const _component_Link = resolveComponent("Link");
  const _component_text_input = resolveComponent("text-input");
  const _component_number_text = resolveComponent("number-text");
  const _component_select_input = resolveComponent("select-input");
  const _component_date_pick = resolveComponent("date-pick");
  const _component_loading_button = resolveComponent("loading-button");
  _push(`<div${ssrRenderAttrs(_attrs)}>`);
  _push(ssrRenderComponent(_component_Head, { title: "Create User" }, null, _parent));
  _push(`<h1 class="mb-8 text-3xl font-bold">`);
  _push(ssrRenderComponent(_component_Link, {
    class: "text-indigo-400 hover:text-indigo-600",
    href: "/medical-supplies"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Supplies`);
      } else {
        return [
          createTextVNode("Supplies")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<span class="text-indigo-400 font-medium">/</span> Create </h1><div class="max-w-3xl bg-white rounded-md shadow overflow-hidden"><form><div class="flex flex-wrap -mb-8 -mr-6 p-8">`);
  _push(ssrRenderComponent(_component_text_input, {
    modelValue: $data.form.name,
    "onUpdate:modelValue": ($event) => $data.form.name = $event,
    error: $data.form.errors.name,
    class: "pb-8 pr-6 w-full lg:w-1/2",
    label: "Brand name"
  }, null, _parent));
  _push(ssrRenderComponent(_component_text_input, {
    modelValue: $data.form.manufacturer,
    "onUpdate:modelValue": ($event) => $data.form.manufacturer = $event,
    error: $data.form.errors.manufacturer,
    class: "pb-8 pr-6 w-full lg:w-1/2",
    label: "Manufacturer"
  }, null, _parent));
  _push(ssrRenderComponent(_component_text_input, {
    modelValue: $data.form.dosage,
    "onUpdate:modelValue": ($event) => $data.form.dosage = $event,
    error: $data.form.errors.dosage,
    class: "pb-8 pr-6 w-full lg:w-1/2",
    label: "Dosage"
  }, null, _parent));
  _push(ssrRenderComponent(_component_number_text, {
    modelValue: $data.form.quantity,
    "onUpdate:modelValue": ($event) => $data.form.quantity = $event,
    error: $data.form.errors.quantity,
    class: "pb-8 pr-6 w-full lg:w-1/2",
    label: "Quantity"
  }, null, _parent));
  _push(ssrRenderComponent(_component_select_input, {
    modelValue: $data.form.supplies_id,
    "onUpdate:modelValue": ($event) => $data.form.supplies_id = $event,
    error: $data.form.errors.supplies_id,
    class: "pb-8 pr-6 w-full lg:w-1/2",
    label: "Category"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<!--[-->`);
        ssrRenderList($props.categories, (data) => {
          _push2(`<option${ssrRenderAttr("value", data.id)}${_scopeId}>${ssrInterpolate(data.name)}</option>`);
        });
        _push2(`<!--]-->`);
      } else {
        return [
          (openBlock(true), createBlock(Fragment, null, renderList($props.categories, (data) => {
            return openBlock(), createBlock("option", {
              key: data.id,
              value: data.id
            }, toDisplayString(data.name), 9, ["value"]);
          }), 128))
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_date_pick, {
    modelValue: $data.form.date_expire,
    "onUpdate:modelValue": ($event) => $data.form.date_expire = $event,
    error: $data.form.errors.date_expire,
    class: "pb-8 pr-6 w-full lg:w-1/2",
    label: "Expiration Date"
  }, null, _parent));
  _push(ssrRenderComponent(_component_date_pick, {
    modelValue: $data.form.date_received,
    "onUpdate:modelValue": ($event) => $data.form.date_received = $event,
    error: $data.form.errors.date_received,
    class: "pb-8 pr-6 w-full lg:w-1/2",
    label: "Received Date"
  }, null, _parent));
  _push(`</div><div class="flex items-center justify-end px-8 py-4 bg-gray-50 border-t border-gray-100">`);
  _push(ssrRenderComponent(_component_loading_button, {
    loading: $data.form.processing,
    class: "btn-indigo",
    type: "submit"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Create Supply`);
      } else {
        return [
          createTextVNode("Create Supply")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></form></div></div>`);
}
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Supplies/Create.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const Create$1 = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["ssrRender", _sfc_ssrRender$7], ["__file", "/home/jolima/workingFiles/tabisv1/resources/js/Pages/Supplies/Create.vue"]]);
const __vite_glob_0_6 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Create$1
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$6 = {
  components: {
    Head,
    Link,
    LoadingButton,
    SelectInput,
    TextInput,
    NumberText,
    DatePick
  },
  layout: Layout,
  remember: "form",
  props: {
    categories: Array,
    current_user: Object,
    supply: Object
  },
  data(props) {
    return {
      form: this.$inertia.form({
        name: this.supply.name,
        manufacturer: this.supply.manufacturer,
        dosage: this.supply.dosage,
        quantity: this.supply.quantity,
        date_received: this.supply.date_received,
        date_expire: this.supply.date_expire,
        account_id: props.current_user.id
      })
    };
  },
  methods: {
    update() {
      this.form.put(`/medical-supplies/${this.supply.id}`);
    }
  }
};
function _sfc_ssrRender$6(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Head = resolveComponent("Head");
  const _component_Link = resolveComponent("Link");
  const _component_text_input = resolveComponent("text-input");
  const _component_number_text = resolveComponent("number-text");
  const _component_date_pick = resolveComponent("date-pick");
  const _component_loading_button = resolveComponent("loading-button");
  _push(`<div${ssrRenderAttrs(_attrs)}>`);
  _push(ssrRenderComponent(_component_Head, {
    title: `${$data.form.name}`
  }, null, _parent));
  _push(`<h1 class="mb-8 text-3xl font-bold">`);
  _push(ssrRenderComponent(_component_Link, {
    class: "text-indigo-400 hover:text-indigo-600",
    href: "/medical-supplies"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Supplies`);
      } else {
        return [
          createTextVNode("Supplies")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<span class="text-indigo-400 font-medium">/</span> ${ssrInterpolate($data.form.name)}</h1><div class="max-w-3xl bg-white rounded-md shadow overflow-hidden"><form><div class="flex flex-wrap -mb-8 -mr-6 p-8">`);
  _push(ssrRenderComponent(_component_text_input, {
    modelValue: $data.form.name,
    "onUpdate:modelValue": ($event) => $data.form.name = $event,
    error: $data.form.errors.name,
    class: "pb-8 pr-6 w-full lg:w-1/2",
    label: "Brand name",
    disabled: ""
  }, null, _parent));
  _push(ssrRenderComponent(_component_text_input, {
    modelValue: $data.form.manufacturer,
    "onUpdate:modelValue": ($event) => $data.form.manufacturer = $event,
    error: $data.form.errors.manufacturer,
    class: "pb-8 pr-6 w-full lg:w-1/2",
    label: "Manufacturer",
    disabled: ""
  }, null, _parent));
  _push(ssrRenderComponent(_component_text_input, {
    modelValue: $data.form.dosage,
    "onUpdate:modelValue": ($event) => $data.form.dosage = $event,
    error: $data.form.errors.dosage,
    class: "pb-8 pr-6 w-full lg:w-1/2",
    label: "Dosage"
  }, null, _parent));
  _push(ssrRenderComponent(_component_number_text, {
    modelValue: $data.form.quantity,
    "onUpdate:modelValue": ($event) => $data.form.quantity = $event,
    error: $data.form.errors.quantity,
    class: "pb-8 pr-6 w-full lg:w-1/2",
    label: "Quantity"
  }, null, _parent));
  _push(ssrRenderComponent(_component_date_pick, {
    modelValue: $data.form.date_expire,
    "onUpdate:modelValue": ($event) => $data.form.date_expire = $event,
    error: $data.form.errors.date_expire,
    class: "pb-8 pr-6 w-full lg:w-1/2",
    label: "Expiration Date"
  }, null, _parent));
  _push(ssrRenderComponent(_component_date_pick, {
    modelValue: $data.form.date_received,
    "onUpdate:modelValue": ($event) => $data.form.date_received = $event,
    error: $data.form.errors.date_received,
    class: "pb-8 pr-6 w-full lg:w-1/2",
    label: "Received Date"
  }, null, _parent));
  _push(`</div><div class="flex items-center justify-end px-8 py-4 bg-gray-50 border-t border-gray-100">`);
  _push(ssrRenderComponent(_component_loading_button, {
    loading: $data.form.processing,
    class: "btn-indigo",
    type: "submit"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Update Supply`);
      } else {
        return [
          createTextVNode("Update Supply")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></form></div></div>`);
}
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Supplies/Edit.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const Edit$1 = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["ssrRender", _sfc_ssrRender$6], ["__file", "/home/jolima/workingFiles/tabisv1/resources/js/Pages/Supplies/Edit.vue"]]);
const __vite_glob_0_7 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Edit$1
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$5 = {
  components: {
    Head,
    Icon,
    Link,
    SearchFilter
  },
  layout: Layout,
  props: {
    filters: Object,
    supplies: Array,
    categories: Array
  },
  data(props) {
    console.log("sdss", this, props);
    return {
      form: {
        search: this.filters.search,
        supplies_id: this.filters.supplies_id,
        otherFilter: this.filters.otherFilter
      },
      otherFilter: [
        {
          id: 1,
          name: "Low Stocks"
        },
        {
          id: 2,
          name: "Expiration in next month"
        }
      ]
    };
  },
  watch: {
    form: {
      deep: true,
      handler: throttle(function() {
        this.$inertia.get("/medical-supplies", pickBy(this.form), { preserveState: true });
      }, 150)
    }
  },
  methods: {
    reset() {
      this.form = mapValues(this.form, () => null);
    },
    mappedReport(data) {
      console.log("🚀 ~ mappedReport ~ data:", data);
      return data.map((item) => {
        return {
          id: item.id,
          name: item.name,
          manufacturer: item.manufacturer,
          dosage: item.dosage,
          quantity: item.quantity,
          category: item.category.name,
          date_received: item.date_received,
          date_expire: item.date_expire
        };
      });
    },
    generateReport() {
      const customHeaders = [
        "Product ID",
        "Product Name",
        "Manufacturer",
        "Dosage",
        "Quantity",
        "Category",
        "Received Date",
        "Expiration Date"
      ];
      const wb = utils.book_new();
      const ws = utils.json_to_sheet([]);
      utils.sheet_add_aoa(ws, [customHeaders]);
      utils.sheet_add_json(ws, this.mappedReport(this.supplies), { origin: "A2", skipHeader: true });
      utils.book_append_sheet(wb, ws, "Sheet1");
      const workbook = write(wb, { bookType: "xlsx", type: "binary" });
      const excelFile = new Blob([this.s2ab(workbook)], { type: "application/octet-stream" });
      const url = URL.createObjectURL(excelFile);
      const link = document.createElement("a");
      link.href = url;
      link.download = `supplies-report-${(/* @__PURE__ */ new Date()).toDateString()}.xlsx`;
      link.click();
      URL.revokeObjectURL(url);
    },
    s2ab(s) {
      const buf = new ArrayBuffer(s.length);
      const view = new Uint8Array(buf);
      for (let i = 0; i < s.length; i++) view[i] = s.charCodeAt(i) & 255;
      return buf;
    }
  }
};
function _sfc_ssrRender$5(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Head = resolveComponent("Head");
  const _component_search_filter = resolveComponent("search-filter");
  const _component_icon = resolveComponent("icon");
  const _component_el_icon = resolveComponent("el-icon");
  const _component_Link = resolveComponent("Link");
  const _component_el_tag = resolveComponent("el-tag");
  _push(`<div${ssrRenderAttrs(_attrs)}>`);
  _push(ssrRenderComponent(_component_Head, { title: "Supplies" }, null, _parent));
  _push(`<h1 class="mb-8 text-3xl font-bold">Supplies</h1><div class="flex items-center justify-between mb-6">`);
  _push(ssrRenderComponent(_component_search_filter, {
    modelValue: $data.form.search,
    "onUpdate:modelValue": ($event) => $data.form.search = $event,
    class: "mr-4 w-full max-w-md",
    onReset: $options.reset
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<label class="block text-gray-700"${_scopeId}>Category:</label><select class="form-select mt-1 w-full"${_scopeId}><!--[-->`);
        ssrRenderList($props.categories, (data) => {
          _push2(`<option${ssrRenderAttr("value", data == null ? void 0 : data.id)}${_scopeId}>${ssrInterpolate(data.name)}</option>`);
        });
        _push2(`<!--]--></select><label class="block text-gray-700"${_scopeId}>Other Filter:</label><select class="form-select mt-1 w-full"${_scopeId}><!--[-->`);
        ssrRenderList($data.otherFilter, (data) => {
          _push2(`<option${ssrRenderAttr("value", data == null ? void 0 : data.id)}${_scopeId}>${ssrInterpolate(data.name)}</option>`);
        });
        _push2(`<!--]--></select>`);
      } else {
        return [
          createVNode("label", { class: "block text-gray-700" }, "Category:"),
          withDirectives(createVNode("select", {
            "onUpdate:modelValue": ($event) => $data.form.supplies_id = $event,
            class: "form-select mt-1 w-full"
          }, [
            (openBlock(true), createBlock(Fragment, null, renderList($props.categories, (data) => {
              return openBlock(), createBlock("option", {
                key: data == null ? void 0 : data.id,
                value: data == null ? void 0 : data.id
              }, toDisplayString(data.name), 9, ["value"]);
            }), 128))
          ], 8, ["onUpdate:modelValue"]), [
            [vModelSelect, $data.form.supplies_id]
          ]),
          createVNode("label", { class: "block text-gray-700" }, "Other Filter:"),
          withDirectives(createVNode("select", {
            "onUpdate:modelValue": ($event) => $data.form.otherFilter = $event,
            class: "form-select mt-1 w-full"
          }, [
            (openBlock(true), createBlock(Fragment, null, renderList($data.otherFilter, (data) => {
              return openBlock(), createBlock("option", {
                key: data == null ? void 0 : data.id,
                value: data == null ? void 0 : data.id
              }, toDisplayString(data.name), 9, ["value"]);
            }), 128))
          ], 8, ["onUpdate:modelValue"]), [
            [vModelSelect, $data.form.otherFilter]
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<div><button class="p2 mt-1"${ssrIncludeBooleanAttr($props.supplies.length === 0) ? " disabled" : ""}>`);
  _push(ssrRenderComponent(_component_icon, {
    name: "printer",
    class: "block w-6 h-6 fill-gray-400"
  }, null, _parent));
  _push(`</button>`);
  _push(ssrRenderComponent(_component_el_icon, {
    size: _ctx.size,
    color: _ctx.color
  }, null, _parent));
  _push(ssrRenderComponent(_component_Link, {
    class: "btn-indigo",
    href: "/medical-supplies/create"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<span${_scopeId}>Create</span><span class="hidden md:inline"${_scopeId}> Supplies</span>`);
      } else {
        return [
          createVNode("span", null, "Create"),
          createVNode("span", { class: "hidden md:inline" }, " Supplies")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div><div class="bg-white rounded-md shadow overflow-x-auto"><table class="w-full whitespace-nowrap"><tr class="text-left font-bold"><th class="pb-4 pt-6 px-6">Product Name</th><th class="pb-4 pt-6 px-6">Category</th><th class="pb-4 pt-6 px-6">Manufacturer</th><th class="pb-4 pt-6 px-6">Dosage</th><th class="pb-4 pt-6 px-6">Quantity</th><th class="pb-4 pt-6 px-6">Expiration Date</th><th class="pb-4 pt-6 px-6">Date Added</th><th class="pb-4 pt-6 px-6" colspan="2"></th></tr><!--[-->`);
  ssrRenderList($props.supplies, (data) => {
    _push(`<tr class="hover:bg-gray-100 focus-within:bg-gray-100"><td class="border-t">`);
    _push(ssrRenderComponent(_component_Link, {
      class: "flex items-center px-6 py-4",
      href: `/medical-supplies/${data.id}/edit`,
      tabindex: "-1"
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`${ssrInterpolate(data.name)}`);
        } else {
          return [
            createTextVNode(toDisplayString(data.name), 1)
          ];
        }
      }),
      _: 2
    }, _parent));
    _push(`</td><td class="border-t">`);
    _push(ssrRenderComponent(_component_Link, {
      class: "flex items-center px-6 py-4",
      href: `/medical-supplies/${data.id}/edit`,
      tabindex: "-1"
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`${ssrInterpolate(data.category.name)}`);
        } else {
          return [
            createTextVNode(toDisplayString(data.category.name), 1)
          ];
        }
      }),
      _: 2
    }, _parent));
    _push(`</td><td class="border-t">`);
    _push(ssrRenderComponent(_component_Link, {
      class: "flex items-center px-6 py-4",
      href: `/medical-supplies/${data.id}/edit`,
      tabindex: "-1"
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`${ssrInterpolate(data.manufacturer)}`);
        } else {
          return [
            createTextVNode(toDisplayString(data.manufacturer), 1)
          ];
        }
      }),
      _: 2
    }, _parent));
    _push(`</td><td class="border-t">`);
    _push(ssrRenderComponent(_component_Link, {
      class: "flex items-center px-6 py-4",
      href: `/medical-supplies/${data.id}/edit`,
      tabindex: "-1"
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`${ssrInterpolate(data.dosage)}`);
        } else {
          return [
            createTextVNode(toDisplayString(data.dosage), 1)
          ];
        }
      }),
      _: 2
    }, _parent));
    _push(`</td><td class="border-t">`);
    _push(ssrRenderComponent(_component_Link, {
      class: "flex items-center px-6 py-4",
      href: `/medical-supplies/${data.id}/edit`,
      tabindex: "-1"
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(ssrRenderComponent(_component_el_tag, {
            type: data.quantity > 20 ? "success" : "danger",
            effect: "dark",
            round: ""
          }, {
            default: withCtx((_2, _push3, _parent3, _scopeId2) => {
              if (_push3) {
                _push3(`${ssrInterpolate(data.quantity)}`);
              } else {
                return [
                  createTextVNode(toDisplayString(data.quantity), 1)
                ];
              }
            }),
            _: 2
          }, _parent2, _scopeId));
        } else {
          return [
            createVNode(_component_el_tag, {
              type: data.quantity > 20 ? "success" : "danger",
              effect: "dark",
              round: ""
            }, {
              default: withCtx(() => [
                createTextVNode(toDisplayString(data.quantity), 1)
              ]),
              _: 2
            }, 1032, ["type"])
          ];
        }
      }),
      _: 2
    }, _parent));
    _push(`</td><td class="border-t">`);
    _push(ssrRenderComponent(_component_Link, {
      class: "flex items-center px-6 py-4",
      href: `/medical-supplies/${data.id}/edit`,
      tabindex: "-1"
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`${ssrInterpolate(data.date_expire)}`);
        } else {
          return [
            createTextVNode(toDisplayString(data.date_expire), 1)
          ];
        }
      }),
      _: 2
    }, _parent));
    _push(`</td><td class="border-t">`);
    _push(ssrRenderComponent(_component_Link, {
      class: "flex items-center px-6 py-4",
      href: `/medical-supplies/${data.id}/edit`,
      tabindex: "-1"
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`${ssrInterpolate(new Intl.DateTimeFormat("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric"
          }).format(new Date(data.date_received)))}`);
        } else {
          return [
            createTextVNode(toDisplayString(new Intl.DateTimeFormat("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric"
            }).format(new Date(data.date_received))), 1)
          ];
        }
      }),
      _: 2
    }, _parent));
    _push(`</td><td class="w-px border-t">`);
    _push(ssrRenderComponent(_component_Link, {
      class: "flex items-center px-4",
      href: `/medical-supplies/${data.id}/edit`,
      tabindex: "-1"
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(ssrRenderComponent(_component_icon, {
            name: "cheveron-right",
            class: "block w-6 h-6 fill-gray-400"
          }, null, _parent2, _scopeId));
        } else {
          return [
            createVNode(_component_icon, {
              name: "cheveron-right",
              class: "block w-6 h-6 fill-gray-400"
            })
          ];
        }
      }),
      _: 2
    }, _parent));
    _push(`</td></tr>`);
  });
  _push(`<!--]-->`);
  if ($props.supplies.length === 0) {
    _push(`<tr><td class="px-6 py-4 border-t" colspan="4">No supplies found.</td></tr>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</table></div></div>`);
}
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Supplies/Index.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const Index$1 = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["ssrRender", _sfc_ssrRender$5], ["__file", "/home/jolima/workingFiles/tabisv1/resources/js/Pages/Supplies/Index.vue"]]);
const __vite_glob_0_8 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Index$1
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$4 = {
  props: {
    modelValue: File,
    label: String,
    accept: String,
    errors: {
      type: Array,
      default: () => []
    }
  },
  emits: ["update:modelValue"],
  watch: {
    modelValue(value) {
      if (!value) {
        this.$refs.file.value = "";
      }
    }
  },
  methods: {
    filesize(size) {
      var i = Math.floor(Math.log(size) / Math.log(1024));
      return (size / Math.pow(1024, i)).toFixed(2) * 1 + " " + ["B", "kB", "MB", "GB", "TB"][i];
    },
    browse() {
      this.$refs.file.click();
    },
    change(e) {
      this.$emit("update:modelValue", e.target.files[0]);
    },
    remove() {
      this.$emit("update:modelValue", null);
    }
  }
};
function _sfc_ssrRender$4(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}>`);
  if ($props.label) {
    _push(`<label class="form-label">${ssrInterpolate($props.label)}:</label>`);
  } else {
    _push(`<!---->`);
  }
  _push(`<div class="${ssrRenderClass([{ error: $props.errors.length }, "form-input p-0"])}"><input type="file"${ssrRenderAttr("accept", $props.accept)} class="hidden">`);
  if (!$props.modelValue) {
    _push(`<div class="p-2"><button type="button" class="px-4 py-1 text-white text-xs font-medium bg-gray-500 hover:bg-gray-700 rounded-sm">Browse</button></div>`);
  } else {
    _push(`<div class="flex items-center justify-between p-2"><div class="flex-1 pr-1">${ssrInterpolate($props.modelValue.name)} <span class="text-gray-500 text-xs">(${ssrInterpolate($options.filesize($props.modelValue.size))})</span></div><button type="button" class="px-4 py-1 text-white text-xs font-medium bg-gray-500 hover:bg-gray-700 rounded-sm">Remove</button></div>`);
  }
  _push(`</div>`);
  if ($props.errors.length) {
    _push(`<div class="form-error">${ssrInterpolate($props.errors[0])}</div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div>`);
}
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Shared/FileInput.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const FileInput = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["ssrRender", _sfc_ssrRender$4], ["__file", "/home/jolima/workingFiles/tabisv1/resources/js/Shared/FileInput.vue"]]);
const _sfc_main$3 = {
  components: {
    FileInput,
    Head,
    Link,
    LoadingButton,
    SelectInput,
    TextInput
  },
  layout: Layout,
  remember: "form",
  data() {
    return {
      form: this.$inertia.form({
        first_name: "",
        last_name: "",
        email: "",
        password: "",
        admin: false,
        photo: null
      })
    };
  },
  methods: {
    store() {
      this.form.post("/users");
    }
  }
};
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Head = resolveComponent("Head");
  const _component_Link = resolveComponent("Link");
  const _component_text_input = resolveComponent("text-input");
  const _component_select_input = resolveComponent("select-input");
  const _component_loading_button = resolveComponent("loading-button");
  _push(`<div${ssrRenderAttrs(_attrs)}>`);
  _push(ssrRenderComponent(_component_Head, { title: "Create User" }, null, _parent));
  _push(`<h1 class="mb-8 text-3xl font-bold">`);
  _push(ssrRenderComponent(_component_Link, {
    class: "text-indigo-400 hover:text-indigo-600",
    href: "/users"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Users`);
      } else {
        return [
          createTextVNode("Users")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<span class="text-indigo-400 font-medium">/</span> Create </h1><div class="max-w-3xl bg-white rounded-md shadow overflow-hidden"><form><div class="flex flex-wrap -mb-8 -mr-6 p-8">`);
  _push(ssrRenderComponent(_component_text_input, {
    modelValue: $data.form.first_name,
    "onUpdate:modelValue": ($event) => $data.form.first_name = $event,
    error: $data.form.errors.first_name,
    class: "pb-8 pr-6 w-full lg:w-1/2",
    label: "First name"
  }, null, _parent));
  _push(ssrRenderComponent(_component_text_input, {
    modelValue: $data.form.last_name,
    "onUpdate:modelValue": ($event) => $data.form.last_name = $event,
    error: $data.form.errors.last_name,
    class: "pb-8 pr-6 w-full lg:w-1/2",
    label: "Last name"
  }, null, _parent));
  _push(ssrRenderComponent(_component_text_input, {
    modelValue: $data.form.email,
    "onUpdate:modelValue": ($event) => $data.form.email = $event,
    error: $data.form.errors.email,
    class: "pb-8 pr-6 w-full lg:w-1/2",
    label: "Email"
  }, null, _parent));
  _push(ssrRenderComponent(_component_text_input, {
    modelValue: $data.form.password,
    "onUpdate:modelValue": ($event) => $data.form.password = $event,
    error: $data.form.errors.password,
    class: "pb-8 pr-6 w-full lg:w-1/2",
    type: "password",
    autocomplete: "new-password",
    label: "Password"
  }, null, _parent));
  _push(ssrRenderComponent(_component_select_input, {
    modelValue: $data.form.admin,
    "onUpdate:modelValue": ($event) => $data.form.admin = $event,
    error: $data.form.errors.admin,
    class: "pb-8 pr-6 w-full lg:w-1/2",
    label: "Admin"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<option${ssrRenderAttr("value", true)}${_scopeId}>Yes</option><option${ssrRenderAttr("value", false)}${_scopeId}>No</option>`);
      } else {
        return [
          createVNode("option", { value: true }, "Yes"),
          createVNode("option", { value: false }, "No")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div><div class="flex items-center justify-end px-8 py-4 bg-gray-50 border-t border-gray-100">`);
  _push(ssrRenderComponent(_component_loading_button, {
    loading: $data.form.processing,
    class: "btn-indigo",
    type: "submit"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Create User`);
      } else {
        return [
          createTextVNode("Create User")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></form></div></div>`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Users/Create.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const Create = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender$3], ["__file", "/home/jolima/workingFiles/tabisv1/resources/js/Pages/Users/Create.vue"]]);
const __vite_glob_0_9 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Create
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$2 = {
  components: {
    Icon
  },
  emits: ["restore"]
};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_icon = resolveComponent("icon");
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex items-center justify-between p-4 max-w-3xl bg-yellow-400 rounded" }, _attrs))}><div class="flex items-center">`);
  _push(ssrRenderComponent(_component_icon, {
    name: "trash",
    class: "shrink-0 mr-2 w-4 h-4 fill-yellow-800"
  }, null, _parent));
  _push(`<div class="text-yellow-800 text-sm font-medium">`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</div></div><button class="text-yellow-800 hover:underline text-sm" tabindex="-1" type="button">Restore</button></div>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Shared/TrashedMessage.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const TrashedMessage = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$2], ["__file", "/home/jolima/workingFiles/tabisv1/resources/js/Shared/TrashedMessage.vue"]]);
const _sfc_main$1 = {
  components: {
    FileInput,
    Head,
    Link,
    LoadingButton,
    SelectInput,
    TextInput,
    TrashedMessage
  },
  layout: Layout,
  props: {
    user: Object
  },
  remember: "form",
  data() {
    console.log("data", this.props);
    return {
      pageName: this.$page.url.substring(1),
      form: this.$inertia.form({
        _method: "put",
        first_name: this.user.first_name,
        last_name: this.user.last_name,
        email: this.user.email,
        password: "",
        role: this.user.role,
        photo: null
      })
    };
  },
  methods: {
    update() {
      this.form.post(`/users/${this.user.id}`, {
        onSuccess: () => this.form.reset("password", "photo")
      });
    },
    destroy() {
      if (confirm("Are you sure you want to delete this user?")) {
        this.$inertia.delete(`/users/${this.user.id}`);
      }
    },
    restore() {
      if (confirm("Are you sure you want to restore this user?")) {
        this.$inertia.put(`/users/${this.user.id}/restore`);
      }
    }
  }
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Head = resolveComponent("Head");
  const _component_Link = resolveComponent("Link");
  const _component_trashed_message = resolveComponent("trashed-message");
  const _component_text_input = resolveComponent("text-input");
  const _component_loading_button = resolveComponent("loading-button");
  _push(`<div${ssrRenderAttrs(_attrs)}>`);
  _push(ssrRenderComponent(_component_Head, {
    title: `${$data.form.first_name} ${$data.form.last_name}`
  }, null, _parent));
  _push(`<div class="flex justify-start mb-8 max-w-3xl"><h1 class="text-3xl font-bold">`);
  _push(ssrRenderComponent(_component_Link, {
    class: "text-indigo-400 hover:text-indigo-600",
    href: "/users"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Users`);
      } else {
        return [
          createTextVNode("Users")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<span class="text-indigo-400 font-medium">/</span> ${ssrInterpolate($props.user.admin ? "Admin" : `${$data.form.first_name} ${$data.form.last_name}`)}</h1>`);
  if ($props.user.photo) {
    _push(`<img class="block ml-4 w-8 h-8 rounded-full"${ssrRenderAttr("src", $props.user.photo)}>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div>`);
  if ($props.user.deleted_at) {
    _push(ssrRenderComponent(_component_trashed_message, {
      class: "mb-6",
      onRestore: $options.restore
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(` This user has been deleted. `);
        } else {
          return [
            createTextVNode(" This user has been deleted. ")
          ];
        }
      }),
      _: 1
    }, _parent));
  } else {
    _push(`<!---->`);
  }
  _push(`<div class="max-w-3xl bg-white rounded-md shadow overflow-hidden"><form><div class="flex flex-wrap -mb-8 -mr-6 p-8">`);
  _push(ssrRenderComponent(_component_text_input, {
    modelValue: $data.form.first_name,
    "onUpdate:modelValue": ($event) => $data.form.first_name = $event,
    error: $data.form.errors.first_name,
    class: "pb-8 pr-6 w-full lg:w-1/2",
    label: "First name"
  }, null, _parent));
  _push(ssrRenderComponent(_component_text_input, {
    modelValue: $data.form.last_name,
    "onUpdate:modelValue": ($event) => $data.form.last_name = $event,
    error: $data.form.errors.last_name,
    class: "pb-8 pr-6 w-full lg:w-1/2",
    label: "Last name"
  }, null, _parent));
  _push(ssrRenderComponent(_component_text_input, {
    modelValue: $data.form.email,
    "onUpdate:modelValue": ($event) => $data.form.email = $event,
    error: $data.form.errors.email,
    class: "pb-8 pr-6 w-full lg:w-1/2",
    label: "Email",
    disable: $data.pageName.includes("profile")
  }, null, _parent));
  _push(ssrRenderComponent(_component_text_input, {
    modelValue: $data.form.password,
    "onUpdate:modelValue": ($event) => $data.form.password = $event,
    error: $data.form.errors.password,
    class: "pb-8 pr-6 w-full lg:w-1/2",
    type: "password",
    autocomplete: "new-password",
    label: "Password"
  }, null, _parent));
  _push(`</div><div class="flex items-center px-8 py-4 bg-gray-50 border-t border-gray-100">`);
  if (!$props.user.deleted_at) {
    _push(`<button class="text-red-600 hover:underline" tabindex="-1" type="button"${ssrIncludeBooleanAttr($data.pageName.includes("profile")) ? " hidden" : ""}>Delete User</button>`);
  } else {
    _push(`<!---->`);
  }
  _push(ssrRenderComponent(_component_loading_button, {
    loading: $data.form.processing,
    class: "btn-indigo ml-auto",
    type: "submit"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Update User`);
      } else {
        return [
          createTextVNode("Update User")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></form></div></div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Users/Edit.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const Edit = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1], ["__file", "/home/jolima/workingFiles/tabisv1/resources/js/Pages/Users/Edit.vue"]]);
const __vite_glob_0_10 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Edit
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main = {
  components: {
    Head,
    Icon,
    Link,
    SearchFilter
  },
  layout: Layout,
  props: {
    filters: Object,
    users: Array
  },
  data(props) {
    console.log("sdss", this, props);
    return {
      form: {
        search: this.filters.search,
        role: this.filters.role
      }
    };
  },
  watch: {
    form: {
      deep: true,
      handler: throttle(function() {
        this.$inertia.get("/users", pickBy(this.form), { preserveState: true });
      }, 150)
    }
  },
  methods: {
    reset() {
      this.form = mapValues(this.form, () => null);
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Head = resolveComponent("Head");
  const _component_search_filter = resolveComponent("search-filter");
  const _component_Link = resolveComponent("Link");
  const _component_icon = resolveComponent("icon");
  _push(`<div${ssrRenderAttrs(_attrs)}>`);
  _push(ssrRenderComponent(_component_Head, { title: "Users" }, null, _parent));
  _push(`<h1 class="mb-8 text-3xl font-bold">Users</h1><div class="flex items-center justify-between mb-6">`);
  _push(ssrRenderComponent(_component_search_filter, {
    modelValue: $data.form.search,
    "onUpdate:modelValue": ($event) => $data.form.search = $event,
    class: "mr-4 w-full max-w-md",
    onReset: $options.reset
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<label class="block text-gray-700"${_scopeId}>Role:</label><select class="form-select mt-1 w-full"${_scopeId}><option${ssrRenderAttr("value", null)}${ssrIncludeBooleanAttr(Array.isArray($data.form.role) ? ssrLooseContain($data.form.role, null) : ssrLooseEqual($data.form.role, null)) ? " selected" : ""}${_scopeId}></option><option value="user"${ssrIncludeBooleanAttr(Array.isArray($data.form.role) ? ssrLooseContain($data.form.role, "user") : ssrLooseEqual($data.form.role, "user")) ? " selected" : ""}${_scopeId}>User</option><option value="admin"${ssrIncludeBooleanAttr(Array.isArray($data.form.role) ? ssrLooseContain($data.form.role, "admin") : ssrLooseEqual($data.form.role, "admin")) ? " selected" : ""}${_scopeId}>Admin</option></select>`);
      } else {
        return [
          createVNode("label", { class: "block text-gray-700" }, "Role:"),
          withDirectives(createVNode("select", {
            "onUpdate:modelValue": ($event) => $data.form.role = $event,
            class: "form-select mt-1 w-full"
          }, [
            createVNode("option", { value: null }),
            createVNode("option", { value: "user" }, "User"),
            createVNode("option", { value: "admin" }, "Admin")
          ], 8, ["onUpdate:modelValue"]), [
            [vModelSelect, $data.form.role]
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_Link, {
    class: "btn-indigo",
    href: "/users/create"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<span${_scopeId}>Create</span><span class="hidden md:inline"${_scopeId}> User</span>`);
      } else {
        return [
          createVNode("span", null, "Create"),
          createVNode("span", { class: "hidden md:inline" }, " User")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div><div class="bg-white rounded-md shadow overflow-x-auto"><table class="w-full whitespace-nowrap"><tr class="text-left font-bold"><th class="pb-4 pt-6 px-6">Name</th><th class="pb-4 pt-6 px-6">Email</th><th class="pb-4 pt-6 px-6" colspan="2">Role</th></tr><!--[-->`);
  ssrRenderList($props.users, (user) => {
    _push(`<tr class="hover:bg-gray-100 focus-within:bg-gray-100"><td class="border-t">`);
    _push(ssrRenderComponent(_component_Link, {
      class: "flex items-center px-6 py-4 focus:text-indigo-500",
      href: `/users/${user.id}/edit`
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          if (user.photo) {
            _push2(`<img class="block -my-2 mr-2 w-5 h-5 rounded-full"${ssrRenderAttr("src", user.photo)}${_scopeId}>`);
          } else {
            _push2(`<!---->`);
          }
          _push2(` ${ssrInterpolate(user.name)} `);
          if (user.deleted_at) {
            _push2(ssrRenderComponent(_component_icon, {
              name: "trash",
              class: "shrink-0 ml-2 w-3 h-3 fill-gray-400"
            }, null, _parent2, _scopeId));
          } else {
            _push2(`<!---->`);
          }
        } else {
          return [
            user.photo ? (openBlock(), createBlock("img", {
              key: 0,
              class: "block -my-2 mr-2 w-5 h-5 rounded-full",
              src: user.photo
            }, null, 8, ["src"])) : createCommentVNode("", true),
            createTextVNode(" " + toDisplayString(user.name) + " ", 1),
            user.deleted_at ? (openBlock(), createBlock(_component_icon, {
              key: 1,
              name: "trash",
              class: "shrink-0 ml-2 w-3 h-3 fill-gray-400"
            })) : createCommentVNode("", true)
          ];
        }
      }),
      _: 2
    }, _parent));
    _push(`</td><td class="border-t">`);
    _push(ssrRenderComponent(_component_Link, {
      class: "flex items-center px-6 py-4",
      href: `/users/${user.id}/edit`,
      tabindex: "-1"
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`${ssrInterpolate(user.email)}`);
        } else {
          return [
            createTextVNode(toDisplayString(user.email), 1)
          ];
        }
      }),
      _: 2
    }, _parent));
    _push(`</td><td class="border-t">`);
    _push(ssrRenderComponent(_component_Link, {
      class: "flex items-center px-6 py-4",
      href: `/users/${user.id}/edit`,
      tabindex: "-1"
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`${ssrInterpolate(user.admin ? "Admin" : "User")}`);
        } else {
          return [
            createTextVNode(toDisplayString(user.admin ? "Admin" : "User"), 1)
          ];
        }
      }),
      _: 2
    }, _parent));
    _push(`</td><td class="w-px border-t">`);
    _push(ssrRenderComponent(_component_Link, {
      class: "flex items-center px-4",
      href: `/users/${user.id}/edit`,
      tabindex: "-1"
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(ssrRenderComponent(_component_icon, {
            name: "cheveron-right",
            class: "block w-6 h-6 fill-gray-400"
          }, null, _parent2, _scopeId));
        } else {
          return [
            createVNode(_component_icon, {
              name: "cheveron-right",
              class: "block w-6 h-6 fill-gray-400"
            })
          ];
        }
      }),
      _: 2
    }, _parent));
    _push(`</td></tr>`);
  });
  _push(`<!--]-->`);
  if ($props.users.length === 0) {
    _push(`<tr><td class="px-6 py-4 border-t" colspan="4">No users found.</td></tr>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</table></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Users/Index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__file", "/home/jolima/workingFiles/tabisv1/resources/js/Pages/Users/Index.vue"]]);
const __vite_glob_0_11 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Index
}, Symbol.toStringTag, { value: "Module" }));
createServer((page) => createInertiaApp({
  page,
  render: renderToString,
  resolve: (name) => {
    const pages = /* @__PURE__ */ Object.assign({ "./Pages/Auth/Index.vue": __vite_glob_0_0, "./Pages/Credential/Login.vue": __vite_glob_0_1, "./Pages/Dashboard/Index.vue": __vite_glob_0_2, "./Pages/Patients/Create.vue": __vite_glob_0_3, "./Pages/Patients/Edit.vue": __vite_glob_0_4, "./Pages/Patients/Index.vue": __vite_glob_0_5, "./Pages/Supplies/Create.vue": __vite_glob_0_6, "./Pages/Supplies/Edit.vue": __vite_glob_0_7, "./Pages/Supplies/Index.vue": __vite_glob_0_8, "./Pages/Users/Create.vue": __vite_glob_0_9, "./Pages/Users/Edit.vue": __vite_glob_0_10, "./Pages/Users/Index.vue": __vite_glob_0_11 });
    return pages[`./Pages/${name}.vue`];
  },
  title: (title) => title ? `${title} - Tabis` : "Tabis",
  setup({ app, props, plugin }) {
    return createSSRApp({
      render: () => h(app, props)
    }).use(plugin);
  }
}));
