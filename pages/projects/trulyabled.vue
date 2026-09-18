<template>
  <div>
    <projecthero
      pDate="Kudrat"
      pWebsite="trulyabled.com"
      pCategory="Web Development"
      pHeading="TrulyAbled"
      pHeadingcolor="color:#B4532E;"
      pSubheading="Built the website for Kudrat Foundation's disability inclusion platform"
    />

    <div class="p-hero_image">
      <div class="reveal-holder" data-aos="fade-up">
        <div class="reveal-block right theme_ai" data-aos="reveal-right"></div>
        <picture>
          <img src="/raghav/trulyabled.png" alt="TrulyAbled" />
        </picture>
      </div>
    </div>

    <pcase
      heading="The initiative"
      para="TrulyAbled is a Kudrat Foundation initiative working on disability inclusion in India. It builds assistive technology
      that runs on Edge AI — on the device itself, without depending on a connection that may not be there — designed alongside
      the people who will use it rather than for them.<br><br>
      It serves three groups: persons with disabilities who want more autonomy, the families and caregivers around them, and the
      NGOs and schools working in the same space. Its position is stated plainly on the site: impairment is not disability,
      and the barrier is usually the infrastructure, not the person."
      theme="theme_dreamz"
    />

    <pcase
      heading="What I built"
      para="I built the website — the public face of the initiative, where it explains what it is doing and who it is for.<br><br>
      A site about disability inclusion carries an obligation the average marketing page does not: it has to be usable by the
      people it is written about. That shapes the work more than any visual decision does."
      theme="theme_dreamz"
    />

    <live-link link="https://www.trulyabled.com" text="Visit trulyabled.com" />

    <!-- Project Footer Navigation -->
    <div class="project-footer">
      <div class="projects-footer-container">
        <allprojectsnav />
        <div class="p-f-p-container">
          <nuxt-link to="/projects/divineheal">
            <pfooterp
              projectName="DivinHeal"
              projectCategories="Backend Infrastructure"
              thumbnail="/raghav/divineheal.png"
            />
          </nuxt-link>
        </div>

        <div class="p-f-n-container">
          <nuxt-link to="/projects/GoCorona">
            <pfootern
              projectName="Gocorona"
              projectCategories="App Development competition"
              thumbnail="/raghav/gocorona2.jpg"
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
      title: 'TrulyAbled',
      titleTemplate: '%s - Raghav Aggarwal',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            'Built the website for TrulyAbled, the Kudrat Foundation disability inclusion platform building Edge AI assistive technology in India.'
        }
      ]
    }
  }
}
</script>
