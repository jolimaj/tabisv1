<template >
    <div id="step" class="cursor-pointer">
      <a
        class="relative flex items-start group hover:bg-gray-100 h-20"
        @click="goToNextStep()"
      >
        <div
          v-if="active === activeStep && activeStep !== 'diseases'"
          class="-ml-px absolute mt-0.5 top-6 left-10 w-0.5 h-full bg-red-900"
          aria-hidden="true"
        ></div>
  
        <div
          v-else-if="active !== activeStep && activeStep !== 'diseases'"
          class="-ml-px absolute mt-4 top-6 left-10 h-20 w-0.5 h-full bg-gray-200"
          aria-hidden="true"
        ></div>
  
        <span class="h-9 flex items-center">
          <span
            v-if="active === activeStep"
            class="ml-6 mt-10 text-white relative z-10 w-8 h-8 flex items-center justify-center bg-red-900 rounded-full"
            >{{ stepId }}
          </span>
          <span
            v-else
            class="ml-6 mt-10 text-white relative z-10 w-8 h-8 flex items-center justify-center bg-gray-400 rounded-full"
            >{{ stepId }}
          </span>
        </span>
        <span class="ml-4 min-w-0 flex flex-col mt-4">
          <span class="text-xs font-semibold tracking-wide uppercase">{{
            stepLable
          }}</span>
          <span class="text-sm text-gray-500"> {{ stepDescription }}</span>
        </span>
      </a>
  
      <div class="ml-20">
        <slot name="content"></slot>
        <div class="mt-5 mb-4">
          <slot name="actions"></slot>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "step",
    methods: {
      goToNextStep(activeStepName) {
        this.$emit("clicked", this.activeStep);
      },
    },
    data() {
      return {};
    },
    props: {
      stepId: {
        type: Number,
      },
      stepLable: {
        type: String,
        default: "test",
      },
      stepDescription: {
        type: String,
        default: "test",
      },
  
      activeStep: {
        type: String,
        default: "test",
      },
      stepDone: {
        type: Boolean,
        default: false,
      },
  
      active: {
        type: String,
        default: "",
      },
    },
  };
  </script>
  