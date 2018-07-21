<template>
  <div id="header">
    <b-navbar toggleable="md" type="light" variant="light">
      <b-container>
        <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
        <b-navbar-brand tag="h1" class="mx-auto mb-0" href="#">
          PaggCerto
        </b-navbar-brand>
      </b-container>
    </b-navbar>
  </div>
</template>

<script>
export default {
    name: 'Header',
  data () {
    return {
    }
  }
}
</script>


<style lang="sass">
  .mb-0
    font-size: 30px

</style>
