<template>
  <div id="portfolio">
    <div class="container">
      <h1 class="sub-title">My Work</h1>
      <div class="work-list">
        <div class="work">
          <img
            src="../assets/images/work-1.png"
            alt="Image of UCLan SU website on a mobile device"
          />
          <div class="layer">
            <h3 class="L-txt">UCLan Students' Union</h3>
            <p class="L-txt">
              Managing the website & creating webpages using HTML, CSS & Javascript. Also using the
              CMS to assist staff with issues and manage student data issues so students can login
              and engage with the site.
            </p>

            <a aria-label="link to UCLan Students' Union website" href="https://www.uclansu.co.uk/"
              ><i class="fa-solid fa-arrow-up-right-from-square"></i
            ></a>
          </div>
        </div>

        <div class="work">
          <img src="../assets/images/work-2.png" alt="Image of UCLan SU shop on a mobile device" />
          <div class="layer">
            <h3 class="L-txt">UCLan Students' Union Online Shop</h3>
            <p class="L-txt">
              Developed an online shop via Shopify and built upon one of the templates provided.
            </p>

            <a
              aria-label="Link to UCLan Students' Union online shop"
              href="https://shop.uclansu.co.uk/"
              ><i class="fa-solid fa-arrow-up-right-from-square"></i
            ></a>
          </div>
        </div>

        <div class="work">
          <img src="../assets/images/work-3.png" alt="Image of campus map" />
          <div class="layer">
            <h3 class="L-txt">Campus Map</h3>
            <p class="L-txt">
              Created a university campus map using the Google Maps API so that students can
              navigate thier way round the university.
            </p>

            <p class="L-txt">
              <strong
                >Note: This only currently works on desktop mobile version will be developed in the
                future.</strong
              >
            </p>

            <a aria-label="Link to Campus Map webpage" href="https://thewebmaster95.github.io/"
              ><i class="fa-solid fa-arrow-up-right-from-square"></i
            ></a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Portfolio */

#portfolio {
  padding: 50px 0;
}

.sub-title {
  font-size: 60px;
  font-weight: 600;
  color: #2f3e46;
}
.tab-links {
  color: #2f3e46;
}

.work-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-gap: 40px;
  margin-top: 50px;
}

.work {
  border-radius: 10px;
  position: relative;
  overflow: hidden;
}

.work img {
  width: 100%;
  border-radius: 10px;
  display: block;
  transition: transform 0.5s;
}

.layer {
  width: 100%;
  height: 0%;
  background: linear-gradient(rgba(0, 0, 0, 0.6), #d64933);
  border-radius: 10px;
  position: absolute;
  left: 0;
  bottom: 0;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0 40px;
  text-align: center;
  font-size: 14px;
  transition: height 0.5s;
}

.layer h3 {
  font-weight: 500;
  margin-bottom: 20px;
}

.layer a {
  margin-top: 20px;
  color: #cc3200;
  text-decoration: none;
  font-size: 18px;
  line-height: 60px;
  background: #fff;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  text-align: center;
}

.L-txt {
  color: #fff;
}

.work:hover img {
  transform: scale(1.1);
}

.work:hover .layer {
  height: 100%;
}

.btn {
  display: block;
  margin: 50px auto;
  width: fit-content;
  border: 1px solid #cc3200;
  padding: 14px 50px;
  border-radius: 6px;
  text-decoration: none;
  color: #fff;
  transition: background 0.5s;
}

.btn:hover {
  background: #cc3200;
}
</style>
