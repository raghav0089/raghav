<template>
  <div>
    <projecthero
      pDate="2026"
      pWebsite="divinheal.com"
      pCategory="Backend Infrastructure"
      pHeading="DivinHeal"
      pHeadingcolor="color:#1B4F7C;"
      pSubheading="Backend infrastructure for the recommendation system"
    />

    <div class="p-hero_image">
      <div class="reveal-holder" data-aos="fade-up">
        <div class="reveal-block right theme_ai" data-aos="reveal-right"></div>
        <picture>
          <img src="~assets/projects/divineheal/main.jpg" alt="DivinHeal" />
        </picture>
      </div>
    </div>

    <preface
      timeframe="2026
            <br>Ongoing"
      tools="Python
            <br>PostgreSQL / MySQL
            <br>AWS"
      purpose="Freelance client"
      role="Backend Developer
            <br>Recommendation infrastructure"
      team="Solo"
    />

    <projecttimeline timeline="The product" />

    <pcase
      heading="Medical travel, end to end"
      para="DivinHeal connects international patients with hospitals and specialists across India, Thailand, Turkey and the UAE —
      accredited care, with the whole journey handled rather than a list of names left on the table.<br><br>
      Everything in the product hangs off one question a patient asks first: given my condition, my budget and where I am flying
      from, where should I actually go?"
      theme="theme_cricbuzz"
    />

    <projecttimeline timeline="The problem worth solving" />

    <pcase
      heading="A decision made once, under stress"
      para="Medical travel is not a purchase people get to practise. It happens once, with incomplete information, often in
      another language, with a great deal of money and a health outcome attached.<br><br>
      A recommendation that is merely plausible is not good enough here. It has to be specific, and it has to be defensible —
      this hospital, this specialist, this city, and the reason why."
      theme="theme_cricbuzz"
    />

    <projecttimeline timeline="What I built" />

    <pcase
      heading="1. Modelling the domain"
      para="Before anything can be recommended, the things being compared have to be comparable. Hospitals, treatments,
      accreditations, specialists and costs all had to be modelled so that two options can actually be held against each other.<br><br>
      This is the least glamorous part of a recommendation system and the part that decides whether the rest of it can work at
      all. Built in Python on a relational database."
      theme="theme_cricbuzz"
    />

    <div class="p-image-100-duo">
      <div class="reveal-holder" data-aos="fade-up" data-aos-once="true">
        <div class="reveal-block right" data-aos="reveal-right" data-aos-once="true"></div>
        <picture>
          <img src="~assets/projects/divineheal/img1.jpg" alt="DivinHeal treatments" />
        </picture>
      </div>
    </div>

    <pcase
      heading="2. The matching service"
      para="On top of that model sits the service that turns a patient's condition, budget and origin into a ranked set of
      destinations, hospitals and doctors.<br><br>
      Ranking has to balance things that do not share a unit — clinical fit, accreditation, cost, travel distance, visa
      pathway — and stay explainable afterwards, because a patient will reasonably ask why this hospital and not that one."
      theme="theme_cricbuzz"
    />

    <pcase
      heading="3. Keeping the data honest"
      para="Costs move, accreditations lapse, specialists change hospitals. A recommendation engine sitting on stale data is worse
      than no engine, because it is confidently wrong.<br><br>
      So a meaningful share of the infrastructure is about ingesting and refreshing that data, and about catching the cases where
      what arrived does not look like what should have arrived."
      theme="theme_cricbuzz"
    />

    <div class="p-image-100-duo">
      <div class="reveal-holder" data-aos="fade-up" data-aos-once="true">
        <div class="reveal-block right" data-aos="reveal-right" data-aos-once="true"></div>
        <picture>
          <img src="~assets/projects/divineheal/img2.jpg" alt="The journey planner collecting condition, budget and destination" />
        </picture>
      </div>
    </div>

    <pcase
      heading="4. Serving it fast enough to feel like an answer"
      para="The APIs behind the journey planner and the cost calculator have to return quickly enough that the interface reads as
      an answer rather than a search — that is the whole difference in how the product feels.<br><br>
      That meant the usual backend work on AWS: sensible query paths, caching what does not need recomputing, and keeping the
      slow parts off the request."
      theme="theme_cricbuzz"
    />

    <live-link link="https://www.divinheal.com" text="Visit divinheal.com" />

    <!-- Project Footer Navigation -->
    <div class="project-footer">
      <div class="projects-footer-container">
        <allprojectsnav />
        <div class="p-f-p-container">
          <nuxt-link to="/projects/layerpath">
            <pfooterp
              projectName="Layerpath"
              projectCategories="Agentic AI"
              thumbnail="/raghav/layerpath.jpg"
            />
          </nuxt-link>
        </div>

        <div class="p-f-n-container">
          <nuxt-link to="/projects/trulyabled">
            <pfootern
              projectName="TrulyAbled"
              projectCategories="Kudrat Foundation"
              thumbnail="/raghav/trulyabled.jpg"
            />
          </nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Projecthero from '~/components/projects/projecthero'
import Preface from '~/components/projects/preface'
import Projecttimeline from '~/components/projects/projecttimeline'
import Pcase from '~/components/projects/pcase'
import LiveLink from '~/components/projects/live-link'
import Pfootern from '~/components/projects/pfootern'
import Pfooterp from '~/components/projects/pfooterp'
import Allprojectsnav from '~/components/projects/allprojectsnav'

export default {
  layout: 'projects',
  components: {
    Projecthero,
    Preface,
    Projecttimeline,
    Pcase,
    LiveLink,
    Pfootern,
    Pfooterp,
    Allprojectsnav
  },

  head() {
    return {
      title: 'DivinHeal',
      titleTemplate: '%s - Raghav Aggarwal',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            'Built the backend infrastructure for DivinHeal\'s recommendation system, matching international patients to hospitals and specialists.'
        }
      ]
    }
  }
}
</script>
