<script setup>
import TabsWrapper from './TabsWrapper.vue'
import Tab from './Tab.vue'
</script>

<template>
  <!--About Section-->
  <div id="about">
    <div class="container">
      <div class="row">
        <div class="about-col-1">
          <img src="../assets/images/user.png" alt="Photo of Liam" />
        </div>
        <div class="about-col-2">
          <h1 class="sub-title">About Me</h1>
          <p class="about-txt">
            I am an enthusiastic, ambitious and a hard-working person with over five years of
            experience coding websites using <strong>HTML</strong>,<strong> CSS</strong> &
            <strong>Javascript</strong>.
          </p>

          <br />

          <p class="about-txt">
            I am very passionate about <strong>user experience</strong> and
            <strong>website accessibility</strong> and recently I have been using
            <strong>Shopify</strong>. I also have the ability to manage web projects and deliver
            website training.
          </p>
          <br />

          <p class="about-txt">
            Aside from work I enjoy music and going to gigs and enjoy going for walks and watching
            sport.
          </p>
        </div>

        <TabsWrapper>
          <Tab title="Skills">
            <p><strong>Website Development</strong></p>

            <p>
              Building websites using HTML, CSS, Javascript and use of frameworks such as Bootstrap,
              Wordpress & Shopify.
            </p>

            <p><strong>User Experience</strong></p>

            <p>
              Creating personas, mockups, building interfaces using Adobe XD & Figma and
              understanding of website accessibility and responsivness.
            </p>

            <p><strong>Reporting</strong></p>

            <p>Website Auditing, Google Analytics and use of heatmapping tools.</p>
          </Tab>
          <Tab title="Experience">
            <p><strong>2019-Current</strong></p>

            <p>UCLan Students' Union - Web & Digital Coordinator.</p>

            <p><strong>July 2019 - December 2019</strong></p>

            <p>Technical Support Officer - Lancashire County Council.</p>

            <p><strong>Febuary 2019 - June 2019</strong></p>

            <p>Assistant Technical Support Officer - Lancashire County Council.</p>
          </Tab>
          <Tab title="Education">
            <p><strong>2015 - 2018</strong></p>

            <p>University of Central Lancashire - First Class Honours in Web Development.</p>

            <p><strong>2011 - 2015</strong></p>

            <p>Blackburn College - D*D*D BTech in Game and Interactive Media Design.</p>
          </Tab>
        </TabsWrapper>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* About Section */

#about {
  padding: 80px 0;
  color: #2f3e46;
}

.row {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}

.about-col-1 {
  flex-basis: 35%;
}

.about-col-1 img {
  width: 100%;
  border-radius: 15px;
}

.about-col-2 {
  flex-basis: 60%;
}

.sub-title {
  font-size: 60px;
  font-weight: 600;
  color: #2f3e46;
}

.tab-titles {
  display: flex;
  margin: 20px 0 40px;
}

.tab-links {
  margin-right: 50px;
  font-size: 18px;
  font-weight: 500;
  cursor: pointer;
  position: relative;
}

.tab-links::after {
  content: '';
  width: 0;
  height: 3px;
  background: #cc3200;
  position: absolute;
  left: 0;
  bottom: -8px;
  transition: 0.5s;
}

.tab-links.active-link::after {
  width: 50%;
}

.tab-contents ul li {
  list-style: none;
  margin: 10px 0;
}

.tab-contents ul li span {
  color: #cc3200;
  font-size: 14px;
}

.tab-contents {
  display: none;
}

.tab-contents.active-tab {
  display: block;
}

.about-txt {
  color: #2f3e46;
}
</style>
