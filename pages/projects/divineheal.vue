<template>
  <div>
    <projecthero
      pDate="Freelance"
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
          <img src="/raghav/divineheal.png" alt="DivinHeal" />
        </picture>
      </div>
    </div>

    <pcase
      heading="The product"
      para="DivinHeal connects international patients with hospitals and specialists across India, Thailand, Turkey and the UAE —
      accredited care, with the whole journey handled rather than a directory of names left on the table.<br><br>
      The hard part is the first question a patient asks: given my condition, my budget and where I am flying from, where should
      I actually go? That is a matching problem, and the product is built around answering it."
      theme="theme_cricbuzz"
    />

    <pcase
      heading="What I built"
      para="I built the backend infrastructure behind that recommendation system — the services, data and APIs that turn a patient's
      condition and constraints into a ranked set of destinations, hospitals and doctors.<br><br>
      Recommendations are only as good as what sits under them, so most of the work was in the unglamorous half: modelling
      hospitals, treatments and costs so they can actually be compared, keeping that data current, and serving results fast enough
      that the interface feels like an answer rather than a search."
      theme="theme_cricbuzz"
    />

    <pcase
      heading="Why it mattered"
      para="Medical travel is a decision people make once, under stress, with incomplete information and a great deal of money at
      stake. A recommendation that is merely plausible is not good enough.<br><br>
      Getting the infrastructure right is what lets the product make a specific, defensible suggestion instead of handing someone a
      list and wishing them luck."
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
              thumbnail="/raghav/layerpath.png"
            />
          </nuxt-link>
        </div>

        <div class="p-f-n-container">
          <nuxt-link to="/projects/trulyabled">
            <pfootern
              projectName="TrulyAbled"
              projectCategories="Kudrat Foundation"
              thumbnail="/raghav/trulyabled.png"
            />
          </nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Projecthero from '~/components/projects/projecthero'
import Pcase from '~/components/projects/pcase'
import LiveLink from '~/components/projects/live-link'
import Pfootern from '~/components/projects/pfootern'
import Pfooterp from '~/components/projects/pfooterp'
import Allprojectsnav from '~/components/projects/allprojectsnav'

export default {
  layout: 'projects',
  components: {
    Projecthero,
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
