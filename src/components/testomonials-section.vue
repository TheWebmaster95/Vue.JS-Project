<template>
  <div id="review">
    <div class="container">
      <div class="review">
        <div class="box">
          <i class="fas fa-quote-left quote"></i>
          <p>
            Liam is a highly skilled and committed individual. I previously worked with Liam at
            UCLan Students’ Union and his passion and commitment to front end development and the
            organisation is something that it’s clear Liam prides himself on. Liam not only
            possesses robust technical expertise but also excels in articulating complex scenarios
            to stakeholders. His ability to navigate multiple tasks, collaborate effectively, and
            drive positive outcomes is truly inspiring.
          </p>
          <div class="content">
            <div class="info">
              <div class="name">Lewis Darlow</div>
              <div class="job">Product Designer</div>
            </div>
          </div>
        </div>

        <div class="box">
          <i class="fas fa-quote-left quote"> </i>
          <p>
            Liam is a proactive problem-solver who’s hard-work and determination has seen him
            deliver consistent high-value web projects. I’ve worked with Liam for over 4 years and
            have witnessed his drive for professional and personal development, always wanting to
            learn and stay up to date with the latest web and tech advancements. Liam is passionate
            about his work and always goes above and beyond what’s needed, ensuring projects are to
            the best standards.
          </p>
          <div class="content">
            <div class="info">
              <div class="name">Hannah Mason</div>
              <div class="job">Director Membership Voice</div>
            </div>
          </div>
        </div>

        <div class="box">
          <i class="fas fa-quote-left quote"></i>
          <p>
            Liam is a brilliantly intuitive in all areas of his work and a genuine, honest person. I
            was on the panel when Liam interviewed for his position at UCLan SU and we were all
            immediately impressed by his out of the box thinking and impressive experience.
          </p>

          <p>
            While mentoring Liam, it has become even more apparent his passion and drive to
            continually refine his skills, and his work speaks for itself!
          </p>
          <div class="content">
            <div class="info">
              <div class="name">Harry Vann</div>
              <div class="job">Freelance Digital Consultant</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Testomonials */

.review {
  padding: 0 20px;
  display: flex;

  align-items: center;
  justify-content: space-between;
  color: #2f3e46;
  margin-bottom: 10%;

  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-gap: 40px;
  margin-top: 50px;
}

.review .box {
  border-radius: 3px;
  padding: 25px;
  width: calc(33% -10px);
}

.review .box i.quote {
  font-size: 20px;
  color: #cc3200;
}

.review .box .content {
  padding-top: 10px;
}

.review .box .info .name {
  font-size: 17px;
  font-weight: 600;
}

.review .box .info .job {
  font-size: 15px;
  font-weight: 500;
  color: #cc3200;
}

@media only screen and (max-width: 600px) {
  .review {
    width: 50%;
  }
}
</style>
