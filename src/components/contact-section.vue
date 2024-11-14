<template>
  <!-- Contact -->

  <div id="contact">
    <div class="container">
      <div class="row">
        <div class="contact-left">
          <h1 class="sub-title">Contact Me</h1>
          <p class="contact-txt"><i class="fa-solid fa-paper-plane"></i>liam@lmiddleton.co.uk</p>

          <div class="social-icons">
            <a aria-label="Link to Facebook" href="https://www.facebook.com/LiamM95"
              ><i class="fa-brands fa-facebook"></i
            ></a>
            <a aria-label="Link to Instagram" href="https://www.instagram.com/"
              ><i class="fa-brands fa-instagram"></i
            ></a>
            <a aria-label="Link to Linkedin" href="https://www.linkedin.com/in/liam-m-228457138/"
              ><i class="fa-brands fa-linkedin"></i
            ></a>
            <a aria-label="Link to Githib" href="https://github.com/TheWebmaster95"
              ><i class="fa-brands fa-github"></i
            ></a>
            <a aria-label="Link to Slack" href="https://lmiddletonworkspace.slack.com"
              ><i class="fa-brands fa-slack"></i
            ></a>
          </div>
          <a
            aria-label="Link to CV"
            href="https://1drv.ms/b/s!Arm_lFMZYQjojb4ZF9xLBNrL86PMCA?e=AxDxrP"
            download
            class="btn btn2"
            >Download CV</a
          >
        </div>
        <div class="contact-right">
          <form name="submit-to-google-sheet">
            <input type="text" name="Name" placeholder="Your Name" required />
            <input type="email" name="Email" placeholder="Your Email" required />
            <textarea name="Message" rows="6" placeholder="Your Message"></textarea>
            <button type="submit" class="btn btn2">Submit</button>
          </form>

          <span id="msg"></span>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  padding: 10px 10%;
}

.row {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}

.sub-title {
  font-size: 40px;
}
.contact-txt {
  color: #2f3e46;
}

/* Contact */

.contact-txt {
  color: #2f3e46;
}

.contact-left {
  flex-basis: 35%;
}

.contact-right {
  flex-basis: 60%;
}

.contact-left p {
  margin-top: 30px;
}

.contact-left p i {
  color: #cc3200;
  margin-right: 15px;
  font-size: 25px;
}

.social-icons {
  margin-top: 30px;
}

.social-icons a {
  text-decoration: none;
  font-size: 30px;
  margin-right: 15px;
  color: #2f3e46;
  display: inline-block;
  transition: tranform 0.5s;
}

.social-icons a:hover {
  color: #cc3200;
  transform: translateY(-5px);
}

.btn.btn2 {
  display: inline-block;
  background: #d64933;
}

.contact-right form {
  width: 100%;
}

form input,
form textarea {
  width: 100%;
  border: 0;
  outline: none;
  background: #2f3e46;
  padding: 15px;
  margin: 15px 0;
  color: #fff;
  font-size: 18px;
  border-radius: 6px;
}

form .btn2 {
  padding: 14px 60px;
  font-size: 18px;
  margin-top: 20px;
  cursor: pointer;
}

.copyright {
  width: 100%;
  text-align: center;
  padding: 25px 0;
  background: #2f3e46;
  font-weight: 300;
  margin-top: 20px;
  font-size: 24px;
}

.Logo {
  margin-top: 2%;
}

.placeholder {
  color: #f4edea;
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

@media only screen and (max-width: 600px) {
  .contact-left,
  .contact-right {
    flex-basis: 100%;
  }

  .copyright {
    font-size: 14px;
  }

  #msg {
    color: #2f3e46;
    margin-top: -40px;
    display: block;
  }

  ::placeholder {
    color: #cad2c5;
  }

  .sub-title {
    font-size: 40px;
  }
}
</style>





