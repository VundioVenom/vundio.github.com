body {
    margin: 0;
    overflow: hidden;
    position: relative;
    width: 100vw;
    height: 100vh;
    background-image: url("https://user-images.githubusercontent.com/26748614/96337412-581f2e80-1087-11eb-90f3-f033a8a1b41e.jpg");
    background-size: cover;
}

canvas {
    display: block;
}

#canvas_container {
    width: 100%;
    height: 100vh;
}

button {
    position: absolute;
    bottom: 5%;
    left: 50%;
    transform: translateX(-50%);
    border: 1px solid white;
    border-radius: 5px;
    font-size: 0.9rem;
    padding: 0.5rem 0.9em;
    background: #000000;
    color: white;
    -webkit-font-smoothing: antialiased;
    font-weight: bold;
    cursor: pointer;
    transition: all .5s;
}

button:hover {
    background: #ffffff;
    color: #000000;
}
.container {
  max-width: 960px;
  margin: 0 auto;
  padding: 1px;
  background-color: transparent
}

header {
  background-color: #222;
  color: #fff;
  padding: 4px 0;
  background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 128, 0, 0.8));
 }
.logo a {
  color: #fff;
  text-decoration: none;
  font-size: 30px;
}

.menu {
  list-style: none;
  margin-top: 10px;
}

.menu li {
  display: inline-block;
  margin-left: 10px;
}

.menu li a {
  color: #fff;
  text-decoration: none;
  font-size: 16px;
}

body {
  font-family: Arial, sans-serif;
}

h2 {
  font-family: Arial, serif;
}
.logo {
  position: absolute;
  top: 90px;
  left: 80px;
  z-index: 1;
}

.logo img {
  width: 300px; /* Adjust the width and height as per your logo dimensions */
  height: auto;
}

footer {
  position: fixed;
  left: 0;
  bottom: 40%;
  width: 100%;
  background-color: transparent;
}

.logo2 {
  display: flex;
  justify-content: center;
  padding: 30px;
}

.logo2 img {
  max-height: 50px;
}
