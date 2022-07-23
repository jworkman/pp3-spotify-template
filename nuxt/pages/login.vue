<template>
  <div id="login">
    <font-awesome-icon :icon="['fab', 'spotify']" />
    <h3>Please Sign In</h3>
    <p>In order to search for artists, tracks, or songs <br /> you must login to your Spotify account</p>
    <a href="http://localhost:3001/spotify/v1/login" class="btn-green">Sign In</a>
  </div>
</template>

<style lang="scss">
div#login {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  > svg {
    height: 80px;
    width: 80px;
    color: #1DB954;
  }
  > * {
    margin: 10px 0;
    color: white;
  }
  h3 {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 28px;
    color: #FFFFFF;
  }
  p {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 300;
    font-size: 20px;
    line-height: 23px;
    text-align: center;
  }
  a.btn-green {
    width: 240px;
    height: 40px;
    background: #1DB954;
    border-radius: 25px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 38px;
    /* identical to box height */
    text-align: center;
    text-decoration: none;
  }
}
</style>