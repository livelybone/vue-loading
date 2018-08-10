<template>
  <svg :width="s" :height="s" viewBox="0 0 512 512" class="loading" style="enable-background:new 0 0 512 512;" xml:space="preserve">
		<circle class="circle st0" :fill="color" cx="256" cy="472" r="40"/>
		<circle class="circle st1" :fill="color" cx="256" cy="40" r="40"/>
		<circle transform="matrix(0.809 -0.5878 0.5878 0.809 -180.048 307.3647)" class="circle st2" :fill="color" cx="383" cy="430.7" r="40"/>
		<circle transform="matrix(0.809 -0.5878 0.5878 0.809 -23.1148 91.3647)" class="circle st3" :fill="color" cx="129" cy="81.3" r="40"/>
		<circle transform="matrix(0.309 -0.9511 0.9511 0.309 11.8878 661.8575)" class="circle st4" :fill="color" cx="461.4" cy="322.7" r="40"/>
		<circle transform="matrix(0.309 -0.9511 0.9511 0.309 -145.0454 178.8668)" class="circle st5" :fill="color" cx="50.6" cy="189.3" r="40"/>
		<circle transform="matrix(0.9511 -0.309 0.309 0.9511 -35.8983 151.8518)" class="circle st6" :fill="color" cx="461.4" cy="189.3" r="40"/>
		<circle transform="matrix(0.9511 -0.309 0.309 0.9511 -97.2594 31.4239)" class="circle st7" :fill="color" cx="50.6" cy="322.7" r="40"/>
		<circle transform="matrix(0.5878 -0.809 0.809 0.5878 92.1279 343.3159)" class="circle st8" :fill="color" cx="383" cy="81.3" r="40"/>
		<circle transform="matrix(0.5878 -0.809 0.809 0.5878 -295.2906 281.9548)" class="circle st9" :fill="color" cx="129" cy="430.7" r="40"/>
	</svg>
</template>

<script>
export default {
  name: 'Index',
  props: {
    size: {
      default: '100',
      type: [String, Number],
    },
    color: String,
  },
  computed: {
    s() {
      return typeof +this.size === 'number' ? `${this.size}px` : this.size;
    },
  },
};
</script>

<style lang="scss" scoped>
.loading {
  position: relative;

  .circle {
    animation: sk-circleFadeDelay 1s infinite ease-in-out both;
  }

  @for $i from 0 through 9 {
    .st#{$i} {
      animation-delay: #{-1+($i + 1)* .1}s;
    }
  }
}

@keyframes sk-circleFadeDelay {
  @for $i from 0 through 9 {
    #{($i+1)*10}% {
      opacity: #{.1 * ($i+1)};
    }
  }
}
</style>
