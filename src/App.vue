<template>
  <router-view></router-view>
</template>

<script>
  import SocketIO from "./services/socket.service.js"
  const io = new SocketIO()
  
  export default {
    data() {
      return {
        
      }
    },
    components: {
      
    },
    methods: {
      
    },
    created() {
      localStorage.setItem('theme', 'dark')
      io.connect()
    },
    beforeUnmount() {
      io.disconnect()
    },
  }
</script>

<style>
  @font-face {
    font-family: 'Gilroy';
    src: url('./gilroy.ttf');
  }

  .page {
    --text: #202225;
    --sub: #2f3136;
    --bg: #fff;
    --alt: #f0f2f5;
    --accent: #336DFF;
    width: 100vw;
    overflow-x: hidden;
  }

  .page.dark {
    --text: #fff;
    --sub: #eee;
    --bg: #202225;
    --alt: #2f3136;
  }
  
  body, #app {
    padding: 0;
    margin: 0;
    width: 100vw;
    height: 100vh;
    font-family: 'Gilroy';
    font-size: 1vw;
    font-weight: 600;
    color: var(--text);
    background: var(--bg);
    overflow-x: hidden;
  }

  .banner {
    position: relative;
    display: flex;
    height: 100vh;
    width: 100vw;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: var(--bg);
  }

  .banner img, .anim {
    position: absolute;
    width: 50vw;
  }

  #octo {
    top: 0;
    left: 0;
    transform: translate(-50%, -50%);
    animation: spin infinite 5s;
  }

  #pulse {
    top: 75vh;
    right: 5vw;
    width: 15vw;
    height: 15vw;
    background: transparent;
    transform: translate(-50%, -50%);
    border: 1vw solid var(--text);
    border-radius: 50%;
    animation: breathe alternate infinite 5s;
  }

  @keyframes spin {
    from {
      transform: translate(-50%, -50%) rotate(0deg);
    }
    to {
      transform: translate(-50%, -50%) rotate(360deg);
    }
  }

  @keyframes breathe {
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
    }
  }

  section {
    display: flex;
    flex-direction: column;
    width: 100vw;
    min-height: 50vh;
    color: var(--text);
    background: var(--bg);
  }

  .alt {
    background: var(--alt);
  }

  .content {
    display: flex;
    flex-direction: row;
    align-items: center;
    box-sizing: border-box;
    padding: 0 10vw;
    justify-content: space-between;
    width: 100vw;
    min-height: 50vh;
    color: var(--text);
  }

  .text {
    display: flex;
    flex-direction: column;
    padding: 5vw 0;
    width: 35vw;
  }

  .graphic {
    display: flex;
    flex-direction: column;
    padding: 5vw 0;
    width: 35vw;
  }

  h1, h2, h3 {
    margin: 0 0 0.5vw 0;
    font-weight: 600;
    transition-duration: 0.25s;
    color: var(--text);
  }

  h1 {
    font-size: 4vw;
  }

  h2 {
    font-size: 3vw;
  }

  h3 {
    font-size: 2vw;
  }

  p {
    font-size: 1vw;
    margin: 0 0 1vw 0;
    color: var(--sub);
  }

  button {
    font-weight: 600;
    display: flex;
    flex-direction: row;
    padding: 0.75vw 1.5vw;
    font-size: 1vw;
    background: var(--accent);
    border: none;
    outline: none;
    font-family: 'Gilroy';
    border-radius: 0.25vw;
    color: var(--text);
    transition: 0.25s;
  }

  button:hover {
    box-shadow: 0 0 1vw 0vw var(--accent);
  }
</style>