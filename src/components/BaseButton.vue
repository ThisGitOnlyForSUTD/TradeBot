<template>
  <button
    class="text-sm leading-normal tracking-wide font-semibold transition duration-500 ease-in-out"
    :class="classes"
  >
    <a href="https://teleg.run/joinchat/FrWmvk78bFRiMTRk"
      ><slot>Submit</slot></a
    >
  </button>
</template>

<script>
export default {
  name: 'BaseButton',

  props: {
    type: {
      type: String,
      default: 'default'
    }
  },

  computed: {
    classes() {
      let type = {
        link: 'text-gray-800 hover:text-blue-600',
        ghost:
          'px-6 py-2 text-blue-600 border border-blue-600 hover:bg-blue-600 hover:text-white rounded-full',
        default:
          'px-6 py-2 text-white bg-blue-600 hover:bg-blue-500 rounded-lg shadow-primary hover:shadow-none'
      }
      return type[this.type]
    }
  }
}
</script>

<style lang="scss" scoped></style>
