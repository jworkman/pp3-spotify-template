<template>
  <div>
    <SearchBar />
    <main>
      <Nuxt />
    </main>
  </div>
</template>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  font-family: Roboto;
}
body {
  background: #191414;
}
main {
  height: calc(100vh - 80px);
  width: 100vw;
  position: relative;
  top: 80px;
}
</style>