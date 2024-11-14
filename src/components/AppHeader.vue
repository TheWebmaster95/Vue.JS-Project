<template>
  <div id="header">
    <div class="container">
      <nav>
        <ul id="sidemenu">
          <li aria-label="About section"><a href="#about">About</a></li>

          <li aria-label="Portfolio section"><a href="#portfolio">Portfolio</a></li>
          <li aria-label="Contact section"><a href="#contact">Contact</a></li>
          <i aria-label="Close navigation menu" class="fa-solid fa-xmark" onclick="closemenu()"></i>
        </ul>
        <i aria-label="Open navigation menu" class="fa-solid fa-bars" onclick="openmenu()"></i>
      </nav>

      <div class="header-text">
        <h1>
          Hi I'm Liam <br />
          Middleton
        </h1>
        <p class="Heading-p-text">
          Front End Web Developer <br />
          focused on user experience and <br />
          website accessibility
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped>
#header {
  width: 101%;
  height: 100vh;
  background-image: url(../assets/images/HeroHeadshot.jpg);
  background-size: cover;
  background-position: center;
  margin-left: -0.4%;
  margin-top: -1%;
  background-color: #253239;
}

.container {
  padding: 10px 10%;
}

nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-left: 60%;
}

.logo {
  width: 140px;
}

nav ul li {
  display: inline-block;
  list-style: none;
  margin: 10px 20px;
}

nav ul li a {
  color: #cad2c5;
  text-decoration: none;
  font-size: 24px;
  position: relative;
}

nav ul li a::after {
  content: '';
  width: 0;
  height: 3px;
  background: #cc3200;
  position: absolute;
  left: 0;
  bottom: -6px;
  transition: 0.5s;
}

nav ul li a:hover::after {
  width: 100%;
}

.header-text {
  margin-top: 20%;
  font-size: 30px;
}

.header-text h1 {
  font-size: 60px;
  margin-top: 20px;
  color: #cad2c5;
}

.Heading-p-text {
  color: #cad2c5;
}

@media only screen and (max-width: 600px) {
  #header {
    background-image: url(../assets/images/Mobile.jpg);
  }

  .header-text {
    margin-top: 20%;
    font-size: 20px;
    margin-left: -9%;
    width: 65%;
  }

  .header-text h1 {
    font-size: 24px;
  }

  nav .fa-solid {
    display: block;
    font-size: 25px;
    margin-left: 120px;
  }

  nav ul {
    background: #d64933;
    position: fixed;
    top: 0;
    right: -200px;
    width: 200px;
    height: 100vh;
    padding-top: 50px;
    z-index: 2;
    transition: right 0.5s;
  }

  nav ul li {
    display: block;
    margin: 25px;
  }

  nav ul .fa-solid {
    position: absolute;
    top: 25px;
    left: -121px;
    cursor: pointer;
  }

  .sub-title {
    font-size: 40px;
  }
}
</style>
