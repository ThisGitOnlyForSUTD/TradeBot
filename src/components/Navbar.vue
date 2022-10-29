<template>
  <nav class="py-4 flex items-center justify-between">
    <div>
      <img class="h-8 w-auto" alt="Logo" src="../assets/images/logo.svg" />
    </div>

    <List class="flex items-center space-x-8">
      <ListItem
        ><BaseLink to="https://teleg.run/joinchat/FrWmvk78bFRiMTRk"
          >Преимущества</BaseLink
        ></ListItem
      >
      <ListItem
        ><BaseLink class="w-8" to="https://teleg.run/joinchat/FrWmvk78bFRiMTRk"
          ><img src="../assets/images/telegram.svg" alt=""/></BaseLink
      ></ListItem>
    </List>
  </nav>
</template>

<script>
import List from './List'
import ListItem from './ListItem'
import BaseLink from './BaseLink'

export default {
  name: 'Navbar',

  components: {
    List,
    ListItem,
    BaseLink
  },

  data() {
    return {}
  }
}
</script>

<style scoped></style>
